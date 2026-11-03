// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextDatabaseSyncSourceTreeNodesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The discovery time.
   * 
   * @example
   * 2026-09-23T10:00:00+08:00
   */
  discoveredAt?: string;
  /**
   * @remarks
   * The file name extension.
   * 
   * @example
   * .docx
   */
  extension?: string;
  /**
   * @remarks
   * Indicates whether the node has child nodes.
   * 
   * @example
   * true
   */
  hasChildren?: boolean;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * folder
   */
  kind?: string;
  /**
   * @remarks
   * The node identifier.
   * 
   * @example
   * doc:1234567890
   */
  nodeKey?: string;
  /**
   * @remarks
   * The parent node identifier.
   * 
   * @example
   * folder:9876543210
   */
  parentKey?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2026-09-23T10:00:00+08:00
   */
  staleAt?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * Project plan
   */
  title?: string;
  /**
   * @remarks
   * The reason why the operation is not supported.
   * 
   * @example
   * The current plugin does not support this operation
   */
  unsupportedReason?: string;
  static names(): { [key: string]: string } {
    return {
      discoveredAt: 'DiscoveredAt',
      extension: 'Extension',
      hasChildren: 'HasChildren',
      kind: 'Kind',
      nodeKey: 'NodeKey',
      parentKey: 'ParentKey',
      staleAt: 'StaleAt',
      title: 'Title',
      unsupportedReason: 'UnsupportedReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredAt: 'string',
      extension: 'string',
      hasChildren: 'boolean',
      kind: 'string',
      nodeKey: 'string',
      parentKey: 'string',
      staleAt: 'string',
      title: 'string',
      unsupportedReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContextDatabaseSyncSourceTreeNodesResponseBody extends $dara.Model {
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
  data?: ListContextDatabaseSyncSourceTreeNodesResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListContextDatabaseSyncSourceTreeNodesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

