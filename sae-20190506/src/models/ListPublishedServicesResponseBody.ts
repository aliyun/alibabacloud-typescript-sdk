// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishedServicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * b2a8a925-477a-4ed7-b825-d5e22500****
   */
  appId?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter does not take effect.
   * 
   * @example
   * {}
   */
  group2Ip?: string;
  /**
   * @remarks
   * The service group that corresponds to the consumed service.
   */
  groups?: string[];
  /**
   * @remarks
   * The addresses where services can be subscribed to.
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
   * The version of the published services.
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

export class ListPublishedServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the microservices.
   */
  data?: ListPublishedServicesResponseBodyData[];
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * *   If the call is successful, the **ErrorCode** parameter is not returned.
   * *   If the call fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   success: If the call is successful, **success** is returned.
   * *   An error code: If the call fails, an error code is returned.
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
   * Indicates whether the list of microservices was queried. Valid values:
   * 
   * *   **true**: The list was queried.
   * *   **false**: The list failed to be queried.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that is used to query the details of the request.
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
      data: { 'type': 'array', 'itemType': ListPublishedServicesResponseBodyData },
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

