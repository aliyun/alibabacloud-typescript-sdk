// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishedServicesResponseBodyData extends $dara.Model {
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
   * A reserved field. This field is currently meaningless.
   * 
   * @example
   * {}
   */
  group2Ip?: string;
  /**
   * @remarks
   * The group to which the consumed service belongs.
   */
  groups?: string[];
  /**
   * @remarks
   * The service subscription addresses.
   */
  ips?: string[];
  /**
   * @remarks
   * The published service name.
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

export class ListPublishedServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: The request is successful.
   * - **3xx**: The request is redirected.
   * - **4xx**: A request error occurred.
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the microservice list.
   */
  data?: ListPublishedServicesResponseBodyData[];
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - If the request is successful, the **ErrorCode** field is not returned.
   * - If the request fails, the **ErrorCode** field is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * InvalidParameter.Obviously
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. Valid values:
   * 
   * - If the request is successful, **success** is returned.
   * - If the request is abnormal, a specific error code is returned.
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
   * Indicates whether the list of published microservices is successfully retrieved. Valid values:
   * 
   * - **true**: The list is successfully retrieved.
   * - **false**: The list fails to be retrieved.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to accurately query call information.
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

