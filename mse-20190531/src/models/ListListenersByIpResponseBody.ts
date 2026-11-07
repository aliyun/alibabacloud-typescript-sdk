// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenersByIpResponseBodyListeners extends $dara.Model {
  /**
   * @remarks
   * Data ID.
   * 
   * @example
   * test.yaml
   */
  dataId?: string;
  /**
   * @remarks
   * Group.
   * 
   * @example
   * default
   */
  group?: string;
  /**
   * @remarks
   * Verification string.
   * 
   * @example
   * 23sdfdf
   */
  md5?: string;
  /**
   * @remarks
   * Namespace ID
   * 
   * @example
   * test
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
      md5: 'Md5',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
      md5: 'string',
      namespaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersByIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * MSE-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 202
   */
  httpCode?: string;
  /**
   * @remarks
   * Listener information.
   */
  listeners?: ListListenersByIpResponseBodyListeners[];
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * The request is processed successfully.
   */
  message?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Size of the current page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 54973C90-F379-4372-9AA5-053A3F7****
   */
  requestId?: string;
  /**
   * @remarks
   * Request result, with the following values:
   * 
   * - `true`: The request is successful.
   * 
   * - `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of instances.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      listeners: 'Listeners',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpCode: 'string',
      listeners: { 'type': 'array', 'itemType': ListListenersByIpResponseBodyListeners },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.listeners)) {
      $dara.Model.validateArray(this.listeners);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

