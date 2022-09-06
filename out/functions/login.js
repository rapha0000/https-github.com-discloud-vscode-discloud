"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const vscode = __importStar(require("vscode"));
async function login(tree) {
    const input = await vscode.window.showInputBox({
        prompt: "API TOKEN",
        title: "Coloque seu Token da API da Discloud aqui.",
    });
    if (!input) {
        vscode.window.showErrorMessage("Token inválido.");
        return;
    }
    vscode.workspace.getConfiguration("discloud").update("token", input, true);
    vscode.window.showInformationMessage("Token configurado com sucesso!");
    tree ? tree.refresh() : false;
}
exports.login = login;
//# sourceMappingURL=login.js.map