// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetWorkspaceQuotaResponseBodyData extends $dara.Model {
  /**
   * @example
   * 200
   */
  cuQuota?: number;
  /**
   * @example
   * 20
   */
  cuQuotaUsage?: number;
  /**
   * @example
   * i-2zehld3y1tphzctyyq7o
   */
  instanceId?: string;
  /**
   * @example
   * 263013787210103
   */
  orderId?: string;
  /**
   * @example
   * Catched
   */
  state?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
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
   * @example
   * NOT_FOUND
   */
  accessDeniedDetail?: string;
  data?: SetWorkspaceQuotaResponseBodyData;
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * This record is being collected, please wait for a moment.
   */
  message?: string;
  /**
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
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

