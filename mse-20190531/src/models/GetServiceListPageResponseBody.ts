// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceListPageResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * dez4xxxxx@f3f75ed8ffxxxxx
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * example-app
   */
  appName?: string;
  /**
   * @remarks
   * The time when the service was last updated.
   * 
   * @example
   * 123456
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * The group to which the service belongs.
   * 
   * @example
   * DEFAULT_GROUP
   */
  group?: string;
  /**
   * @remarks
   * The number of service nodes.
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
   * sc-A
   */
  serviceName?: string;
  serviceType?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      gmtModifyTime: 'GmtModifyTime',
      group: 'Group',
      instanceNum: 'InstanceNum',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      gmtModifyTime: 'string',
      group: 'string',
      instanceNum: 'number',
      serviceName: 'string',
      serviceType: 'string',
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

export class GetServiceListPageResponseBodyData extends $dara.Model {
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The data on the current page.
   */
  result?: GetServiceListPageResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalSize?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      result: { 'type': 'array', 'itemType': GetServiceListPageResponseBodyDataResult },
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

export class GetServiceListPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response to the request.
   */
  data?: GetServiceListPageResponseBodyData;
  /**
   * @remarks
   * The request information.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A2F946FB-F2E3-5BF4-8CBE-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetServiceListPageResponseBodyData,
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

