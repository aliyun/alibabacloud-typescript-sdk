// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextDatabaseSyncSourcesResponseBodyDataSources extends $dara.Model {
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
   * The datasource config. The structure varies based on the plugin.
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

export class ListContextDatabaseSyncSourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of data selection scopes.
   * 
   * @example
   * [{"Id":"src-as1llqmkol****", "ConnectionId":"conn-as1llqmkol****", "Name":"R&D team document scope", "SourceConfig":"{\\"folderIds\\":[\\"https://alidocs.dingtalk.com/i/p/p2N9kLmQxYz****\\"],\\"pageSize\\":50,\\"maxDepth\\":5}"}]
   */
  sources?: ListContextDatabaseSyncSourcesResponseBodyDataSources[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      sources: 'Sources',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      sources: { 'type': 'array', 'itemType': ListContextDatabaseSyncSourcesResponseBodyDataSources },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContextDatabaseSyncSourcesResponseBody extends $dara.Model {
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
  data?: ListContextDatabaseSyncSourcesResponseBodyData;
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
      data: ListContextDatabaseSyncSourcesResponseBodyData,
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

