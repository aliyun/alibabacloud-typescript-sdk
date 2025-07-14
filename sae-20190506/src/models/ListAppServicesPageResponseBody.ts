// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppServicesPageResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * hc4fs1****@98314c8790b****
   */
  edasAppId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * cn-zhangjiakou-micro-service-******
   */
  edasAppName?: string;
  /**
   * @remarks
   * The group to which the service belongs. You can create a custom group.
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
   * The version of a service. You can create a custom version.
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
   * The page number of the current page.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries returned on each page. Valid values: 0 to 9999.
   * 
   * @example
   * 9999
   */
  pageSize?: string;
  /**
   * @remarks
   * The result returned.
   */
  result?: ListAppServicesPageResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of returned pages.
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
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: The request was successful.
   * *   **3xx**: The request was redirected.
   * *   **4xx**: The request failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of services.
   */
  data?: ListAppServicesPageResponseBodyData[];
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * *   If the request was successful, **ErrorCode** is not returned.
   * *   If the request failed, **ErrorCode** is returned. For more information, see **Error codes** section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2583E089-99C2-562E-8B7E-73512136****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the microservice list was obtained. Valid values:
   * 
   * *   **true**: The list was obtained.
   * *   **false**: The list failed to be obtained.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace. The ID is used to query the details of a request.
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

