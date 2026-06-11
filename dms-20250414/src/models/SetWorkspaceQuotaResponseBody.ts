// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetWorkspaceQuotaResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The compute unit (CU) quota.
   * 
   * @example
   * 200
   */
  cuQuota?: number;
  /**
   * @remarks
   * The amount of compute unit (CU) quota used.
   * 
   * @example
   * 20
   */
  cuQuotaUsage?: number;
  /**
   * @remarks
   * The ID of the billing instance.
   * 
   * @example
   * i-2zehld3y1tphzctyyq7o
   */
  instanceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 263013787210103
   */
  orderId?: string;
  /**
   * @remarks
   * The status of the order.
   * 
   * @example
   * Catched
   */
  state?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 20923*****7291
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      cuQuota: 'CuQuota',
      cuQuotaUsage: 'CuQuotaUsage',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      state: 'State',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuQuota: 'number',
      cuQuotaUsage: 'number',
      instanceId: 'string',
      orderId: 'string',
      state: 'string',
      status: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetWorkspaceQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the access denial.
   * 
   * @example
   * NOT_FOUND
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: SetWorkspaceQuotaResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * A human-readable message about the request\\"s outcome.
   * 
   * @example
   * This record is being collected, please wait for a moment.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: SetWorkspaceQuotaResponseBodyData,
      errorCode: 'string',
      httpStatusCode: 'number',
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

