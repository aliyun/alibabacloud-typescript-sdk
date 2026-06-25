// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppServicesPageResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * hc4fs1****@98314c8790b****
   */
  edasAppId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * cn-zhangjiakou-micro-service-******
   */
  edasAppName?: string;
  /**
   * @remarks
   * The service group. This value is user-defined.
   * 
   * @example
   * springCloud
   */
  group?: string;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 1
   */
  instanceNum?: number;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * edas.service.provider
   */
  serviceName?: string;
  /**
   * @remarks
   * The service version. This value is user-defined.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      edasAppId: 'EdasAppId',
      edasAppName: 'EdasAppName',
      group: 'Group',
      instanceNum: 'InstanceNum',
      serviceName: 'ServiceName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edasAppId: 'string',
      edasAppName: 'string',
      group: 'string',
      instanceNum: 'number',
      serviceName: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppServicesPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. The value must be in the range of 0 to 9999.
   * 
   * @example
   * 9999
   */
  pageSize?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListAppServicesPageResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalSize?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      result: { 'type': 'array', 'itemType': ListAppServicesPageResponseBodyDataResult },
      totalSize: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppServicesPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: Success.
   * 
   * - **3xx**: Redirect.
   * 
   * - **4xx**: client error.
   * 
   * - **5xx**: server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The service list.
   */
  data?: ListAppServicesPageResponseBodyData[];
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
   * A message that describes the outcome of the request.
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
   * 2583E089-99C2-562E-8B7E-73512136****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to query the details of a request.
   * 
   * @example
   * 0be3e0c816394483660457498e****
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
      data: { 'type': 'array', 'itemType': ListAppServicesPageResponseBodyData },
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

