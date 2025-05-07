// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangePasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * 42f6645a-9c3c-4772-be2a-cc5f5732****
   */
  clientId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * liming
   */
  endUserId?: string;
  /**
   * @remarks
   * The logon token.
   * 
   * This parameter is required.
   * 
   * @example
   * v18101ac6a9e69c66b04a163031680463660b4b216cd758f34b60b9ad6a7c7f7334b83dd8f75eef4209c68f9f1080b****
   */
  loginToken?: string;
  /**
   * @remarks
   * The new password.
   * 
   * This parameter is required.
   * 
   * @example
   * 67436290
   */
  newPassword?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai+dir-227468****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The current password.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  oldPassword?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 1
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      endUserId: 'EndUserId',
      loginToken: 'LoginToken',
      newPassword: 'NewPassword',
      officeSiteId: 'OfficeSiteId',
      oldPassword: 'OldPassword',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      endUserId: 'string',
      loginToken: 'string',
      newPassword: 'string',
      officeSiteId: 'string',
      oldPassword: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

