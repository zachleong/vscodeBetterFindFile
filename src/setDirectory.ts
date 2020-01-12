import * as vscode from "vscode";

export const setDirectory = async (path: string, quickpick: vscode.QuickPick<vscode.QuickPickItem>) => {
  quickpick.value = path;
  const uri = vscode.Uri.file(path);
  const dir = await vscode.workspace.fs.readDirectory(uri);

  dir.forEach(file => {
    quickpick.items = quickpick.items.concat({
      label: file[0],
      alwaysShow: true
    });
  });
};
