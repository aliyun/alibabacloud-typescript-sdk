// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnsServicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of clusters.
   * 
   * @example
   * 1
   */
  clusterCount?: number;
  /**
   * @remarks
   * The name of the contact group.
   * 
   * @example
   * name
   */
  groupName?: string;
  /**
   * @remarks
   * The total number of service instances with healthy heartbeats.
   * 
   * @example
   * 1
   */
  healthyInstanceCount?: number;
  /**
   * @remarks
   * The total number of instances of the current service.
   * 
   * @example
   * 1
   */
  ipCount?: number;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * - console: registered on the console.
   * 
   * - sdk: registered using an SDK.
   * 
   * - governance: registered using service administration.
   * 
   * @example
   * console
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      clusterCount: 'ClusterCount',
      groupName: 'GroupName',
      healthyInstanceCount: 'HealthyInstanceCount',
      ipCount: 'IpCount',
      name: 'Name',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterCount: 'number',
      groupName: 'string',
      healthyInstanceCount: 'number',
      ipCount: 'number',
      name: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data overview.
   */
  data?: ListAnsServicesResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 202
   */
  httpCode?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request is processed successfully.
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of instances displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 52BA6DA6-A702-4362-A32F-DFF79655****
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request. Valid values:
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
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
      data: { 'type': 'array', 'itemType': ListAnsServicesResponseBodyData },
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

