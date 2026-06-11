// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceQuotaResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The CU quota.
   * 
   * @example
   * 200
   */
  cuQuota?: number;
  /**
   * @remarks
   * The amount of CU quota used.
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
   * i-bp16pha0zu99yybi59qr
   */
  instanceId?: string;
  /**
   * @remarks
   * The available free notebook quota (in CU-H).
   * 
   * @example
   * 0
   */
  notebookFreeQuotaAvailable?: number;
  /**
   * @remarks
   * The total free notebook quota (in CU-H).
   * 
   * @example
   * 0
   */
  notebookFreeQuotaTotal?: number;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * RELEASED
   */
  status?: string;
  /**
   * @remarks
   * The workspace ID.
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
      notebookFreeQuotaAvailable: 'NotebookFreeQuotaAvailable',
      notebookFreeQuotaTotal: 'NotebookFreeQuotaTotal',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuQuota: 'number',
      cuQuotaUsage: 'number',
      instanceId: 'string',
      notebookFreeQuotaAvailable: 'number',
      notebookFreeQuotaTotal: 'number',
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

export class GetWorkspaceQuotaResponseBody extends $dara.Model {
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
  data?: GetWorkspaceQuotaResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidTid
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
   * The response message.
   * 
   * @example
   * Successful
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
      data: GetWorkspaceQuotaResponseBodyData,
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

