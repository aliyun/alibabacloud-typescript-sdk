// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEurekaServicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance information.
   */
  instancesId?: string[];
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * CONTACTINFO
   */
  name?: string;
  /**
   * @remarks
   * The number of service providers, in the format of healthy instances/total instances.
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
   * The data overview.
   */
  data?: ListEurekaServicesResponseBodyData[];
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
   * The message.
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
   * The number of instances to return per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 316F5F64-F73D-42DC-8632-01E308B6****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - `true`: The request succeeded.
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

