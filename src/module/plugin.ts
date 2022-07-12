/**
 * @description plugin
 * @author Apisit Lee
 */

import { IDomEditor } from '@wangeditor/editor';

export function withImageModal<T extends IDomEditor>(editor: T): T {
  const newEditor = editor;
  
  // 这里面重写一些功能

  return newEditor;
}
