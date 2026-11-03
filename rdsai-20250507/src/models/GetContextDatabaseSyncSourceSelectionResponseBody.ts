// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextDatabaseSyncSourceSelectionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The confirmation time.
   * 
   * @example
   * 2026-09-23T10:00:00+08:00
   */
  confirmedAt?: string;
  /**
   * @remarks
   * The list of selected node identifiers.
   * 
   * @example
   * ["doc:1234567890"]
   */
  selectedNodeKeys?: string[];
  /**
   * @remarks
   * The selection policy.
   * 
   * @example
   * subtree
   */
  selectionPolicy?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2026-09-23T10:00:00+08:00
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      confirmedAt: 'ConfirmedAt',
      selectedNodeKeys: 'SelectedNodeKeys',
      selectionPolicy: 'SelectionPolicy',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confirmedAt: 'string',
      selectedNodeKeys: { 'type': 'array', 'itemType': 'string' },
      selectionPolicy: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.selectedNodeKeys)) {
      $dara.Model.validateArray(this.selectedNodeKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextDatabaseSyncSourceSelectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Sample value
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetContextDatabaseSyncSourceSelectionResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 1
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * Sample value
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * id-001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetContextDatabaseSyncSourceSelectionResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

