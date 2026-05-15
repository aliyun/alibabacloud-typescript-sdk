// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceQuotaResponseBodyData extends $dara.Model {
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
   * i-bp16pha0zu99yybi59qr
   */
  instanceId?: string;
  /**
   * @example
   * 0
   */
  notebookFreeQuotaAvailable?: number;
  /**
   * @example
   * 0
   */
  notebookFreeQuotaTotal?: number;
  /**
   * @example
   * RELEASED
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
   * @example
   * NOT_FOUND
   */
  accessDeniedDetail?: string;
  data?: GetWorkspaceQuotaResponseBodyData;
  /**
   * @example
   * InvalidTid
   */
  errorCode?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Successful
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

