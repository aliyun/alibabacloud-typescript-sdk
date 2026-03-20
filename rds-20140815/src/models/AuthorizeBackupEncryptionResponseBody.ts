// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeBackupEncryptionResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  authorizationState?: number;
  /**
   * @example
   * create backup encrypt service linked role error.
   */
  message?: string;
  /**
   * @example
   * 1A1DD2A4-69F7-5848-AD56-********
   */
  requestId?: string;
  /**
   * @example
   * acs:ram::113991************:role/AliyunServiceRoleForRdsBackupEncryption
   */
  roleARN?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationState: 'AuthorizationState',
      message: 'Message',
      requestId: 'RequestId',
      roleARN: 'RoleARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationState: 'number',
      message: 'string',
      requestId: 'string',
      roleARN: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

