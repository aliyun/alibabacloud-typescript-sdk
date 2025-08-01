// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEurekaServicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the instance.
   */
  instancesId?: string[];
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * CONTACTINFO
   */
  name?: string;
  /**
   * @remarks
   * The number of service providers. The value is in the following format: Number of healthy instances/Total number of instances.
   * 
   * @example
   * 1/1
   */
  upStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instancesId: 'InstancesId',
      name: 'Name',
      upStatus: 'UpStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancesId: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      upStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instancesId)) {
      $dara.Model.validateArray(this.instancesId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEurekaServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the data.
   */
  data?: ListEurekaServicesResponseBodyData[];
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code returned.
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
   * The request is successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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
   * 316F5F64-F73D-42DC-8632-01E308B6****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned instances.
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
      data: { 'type': 'array', 'itemType': ListEurekaServicesResponseBodyData },
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

