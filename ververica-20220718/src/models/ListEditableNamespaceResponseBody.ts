// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EditableNamespace } from "./EditableNamespace";


export class ListEditableNamespaceResponseBodyData extends $dara.Model {
  editableNamespaces?: EditableNamespace[];
  pageIndex?: string;
  pageSize?: string;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      editableNamespaces: 'editableNamespaces',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editableNamespaces: { 'type': 'array', 'itemType': EditableNamespace },
      pageIndex: 'string',
      pageSize: 'string',
      total: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.editableNamespaces)) {
      $dara.Model.validateArray(this.editableNamespaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEditableNamespaceResponseBody extends $dara.Model {
  data?: ListEditableNamespaceResponseBodyData;
  httpCode?: number;
  message?: string;
  reason?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      httpCode: 'httpCode',
      message: 'message',
      reason: 'reason',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListEditableNamespaceResponseBodyData,
      httpCode: 'number',
      message: 'string',
      reason: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

