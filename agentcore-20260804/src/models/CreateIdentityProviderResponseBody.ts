// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIdentityProviderResponseBodyData extends $dara.Model {
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
   * Specifies whether workspace users are allowed to log on through this external identity provider.
   */
  loginEnabled?: boolean;
  /**
   * @remarks
   * The binding status. Valid values:
   * - CONFIGURED: The configuration has been accepted and is waiting for user pool provisioning.
   * - SYNCING: Organization members are being synchronized.
   * - SYNCED: Organization member synchronization is complete.
   * - READY: The binding is active.
   * - SYNC_FAILED: Organization member synchronization failed.
   * - UPDATING: The configuration is being updated.
   * - UPDATE_FAILED: The configuration update failed.
   * - DISCONNECTING: The binding is being removed.
   * - DISCONNECT_FAILED: The unbinding failed.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether to enable organization member synchronization. After this feature is enabled, the external identity provider synchronizes organization members as workspace users.
   */
  syncEnabled?: boolean;
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
      loginEnabled: 'loginEnabled',
      status: 'status',
      syncEnabled: 'syncEnabled',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderType: 'string',
      loginEnabled: 'boolean',
      status: 'string',
      syncEnabled: 'boolean',
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

export class CreateIdentityProviderResponseBody extends $dara.Model {
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
   * The binding information of the external identity provider.
   */
  data?: CreateIdentityProviderResponseBodyData;
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
      data: CreateIdentityProviderResponseBodyData,
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

