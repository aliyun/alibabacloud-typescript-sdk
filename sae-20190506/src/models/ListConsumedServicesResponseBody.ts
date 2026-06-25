// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumedServicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * b2a8a925-477a-4ed7-b825-d5e22500****
   */
  appId?: string;
  /**
   * @remarks
   * A reserved field.
   * 
   * @example
   * {}
   */
  group2Ip?: string;
  /**
   * @remarks
   * The groups to which the consumed services belong.
   */
  groups?: string[];
  /**
   * @remarks
   * The service subscription addresses.
   */
  ips?: string[];
  /**
   * @remarks
   * The name of the published service.
   * 
   * @example
   * com.alibaba.nodejs.ItemService
   */
  name?: string;
  /**
   * @remarks
   * The type of the published service.
   * 
   * @example
   * RPC
   */
  type?: string;
  /**
   * @remarks
   * The version of the published service.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      group2Ip: 'Group2Ip',
      groups: 'Groups',
      ips: 'Ips',
      name: 'Name',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      group2Ip: 'string',
      groups: { 'type': 'array', 'itemType': 'string' },
      ips: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumedServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: A request error occurred.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the microservices.
   */
  data?: ListConsumedServicesResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is not returned if the request is successful.
   * 
   * - This parameter is returned if the request fails. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * - If the request is successful, **success** is returned.
   * 
   * - If the request fails, an error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the list of subscribed microservices was retrieved.
   * 
   * - **true**: The list was retrieved.
   * 
   * - **false**: The list failed to be retrieved.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the request trace. Use this ID to query the details of a request.
   * 
   * @example
   * 0a98a02315955564772843261e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListConsumedServicesResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
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

