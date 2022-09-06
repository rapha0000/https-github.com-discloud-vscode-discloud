import { writeFileSync } from "fs";
import { join } from "path";
import * as vscode from "vscode";

type LogTypes = "withLink" | "normal" | "without";

export async function createLogs(
  message: string,
  logs: { text: string; link?: string },
  logName: string,
  options?: {
    type?: LogTypes
  }
) {
  

    const msg = {
      withLink: () => { return vscode.window.showInformationMessage(message, "Abrir Logs", "Abrir Link"); },
      normal: () => { return vscode.window.showInformationMessage(message, "Abrir Logs"); },
      without: () => {  return vscode.window.showInformationMessage(message); }
    };

    const ask = await msg[(options && options?.type ? options?.type : 'without')]();


  if (ask === "Abrir Logs") {
    let targetPath = "";

    const workspaceFolders = vscode.workspace.workspaceFolders || [];

    if (workspaceFolders && workspaceFolders.length) {
      targetPath = workspaceFolders[0].uri.fsPath;
    } else {
      vscode.window.showErrorMessage("Nenhum arquivo encontrado.");
      return;
    }

    writeFileSync(join(targetPath, `console.log`), logs.text);
    const fileToOpenUri: vscode.Uri = await vscode.Uri.file(join(targetPath, `console.log`));
    return vscode.window.showTextDocument(fileToOpenUri, {
      viewColumn: vscode.ViewColumn.Beside,
    });
  }

  if (logs.link) {
    if (ask === "Abrir Link") {
      return vscode.env.openExternal(vscode.Uri.parse(`${logs.link}`));
    }
  }
}
