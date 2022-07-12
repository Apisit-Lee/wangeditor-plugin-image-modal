import { insertImageNode } from '@wangeditor/basic-modules';
import { IDomEditor } from '@wangeditor/editor';

let $editor: IDomEditor;
let $modalElem: HTMLElement;
let $modalMaskElem: HTMLElement;
let $okBtn: HTMLElement;
let $cancelBtn: HTMLElement;
let $textareaElem: HTMLTextAreaElement;

export function init(editor: IDomEditor) {
  $editor = editor;
  $modalElem = document.getElementById('image-modal') as HTMLElement;
  $modalMaskElem = document.getElementById('image-modal-mask') as HTMLElement;
  $okBtn = document.getElementById('image-modal-ok') as HTMLElement;
  $cancelBtn = document.getElementById('image-modal-cancel') as HTMLElement;
  $textareaElem = document.getElementById('image-src-textarea') as HTMLTextAreaElement;
  bindEvents();
}

function bindEvents() {
  if ($okBtn) {
    $okBtn.addEventListener('click', onClickOk, false);
  }
  if ($cancelBtn) {
    $cancelBtn.addEventListener('click', onClickCancel, false);
  }
}

function unbindEvents() {
  if ($okBtn) {
    $okBtn.removeEventListener('click', onClickOk, false);
  }
  if ($cancelBtn) {
    $cancelBtn.removeEventListener('click', onClickCancel, false);
  }
}

function onClickOk() {
  if (!$textareaElem) return;
  const value = $textareaElem.value.trim();
  if (!value) return;
  const srcList = value.split(',');
  srcList.map((src) => {
    $editor.restoreSelection()
    // 插入图片节点
    insertImageNode($editor, src)
    // 光标移动一位
    $editor.move(1);
  });
  // 隐藏 modal elem
  hideModal();
}

function onClickCancel() {
  hideModal();
}

export function showModal(editor: IDomEditor) {
  init(editor);
  if (!$modalElem) return;
  $modalElem.style.display = 'flex';
  if (!$modalMaskElem) return;
  $modalMaskElem.style.display = 'block';
}

export function hideModal() {
  if (!$modalElem) return;
  $modalElem.style.display = 'none';
  if (!$modalMaskElem) return;
  $modalMaskElem.style.display = 'none';
  destroy();
}

function destroy() {
  if ($textareaElem) {
    $textareaElem.value = '';
  }
  unbindEvents();
}
