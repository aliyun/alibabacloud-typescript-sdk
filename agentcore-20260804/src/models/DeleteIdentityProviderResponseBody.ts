// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIdentityProviderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The type of the external identity provider. Valid values: DingTalk, Feishu.
   * 
   * @example
   * DingTalk
   */
  identityProviderType?: string;
  /**
   * @remarks
   * The status. Valid values:
   * - CONFIGURED: The configuration has been accepted and is waiting for the user pool to be provisioned.
   * - SYNCING: Organization members are being synchronized.
   * - SYNCED: Organization member synchronization is complete.
   * - READY: The binding is in effect.
   * - SYNC_FAILED: Organization member synchronization failed.
   * - UPDATING: The configuration is being updated.
   * - UPDATE_FAILED: Configuration update failed.
   * - DISCONNECTING: The unbinding is in progress.
   * - DISCONNECT_FAILED: The unbinding failed.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-123456
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      identityProviderType: 'identityProviderType',
      status: 'status',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderType: 'string',
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

export class DeleteIdentityProviderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The binding information of the external identity provider after the unbinding operation is accepted.
   */
  data?: DeleteIdentityProviderResponseBodyData;
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
   * The response message. An error description is returned if the request fails.
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
   * request-123456
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteIdentityProviderResponseBodyData,
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

