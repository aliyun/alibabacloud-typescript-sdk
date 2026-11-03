// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextDatabaseSyncSourceResponseBodyData extends $dara.Model {
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
   * The connection ID, which is a system-generated UUID.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  connectionId?: string;
  /**
   * @remarks
   * The data source ID, which is a system-generated UUID.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  id?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * R&D team document scope
   */
  name?: string;
  /**
   * @remarks
   * The list of selected node keys.
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
   * The datasource config, which varies by plug-in.
   * 
   * @example
   * {"folderIds":["https://alidocs.dingtalk.com/i/p/p2N9kLmQxYz****"],"pageSize":50,"maxDepth":5}
   */
  sourceConfig?: string;
  static names(): { [key: string]: string } {
    return {
      confirmedAt: 'ConfirmedAt',
      connectionId: 'ConnectionId',
      id: 'Id',
      name: 'Name',
      selectedNodeKeys: 'SelectedNodeKeys',
      selectionPolicy: 'SelectionPolicy',
      sourceConfig: 'SourceConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confirmedAt: 'string',
      connectionId: 'string',
      id: 'string',
      name: 'string',
      selectedNodeKeys: { 'type': 'array', 'itemType': 'string' },
      selectionPolicy: 'string',
      sourceConfig: 'string',
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

export class GetContextDatabaseSyncSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Example value
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetContextDatabaseSyncSourceResponseBodyData;
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
   * Example value
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
   * Indicates whether the request was successful.
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
      data: GetContextDatabaseSyncSourceResponseBodyData,
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

