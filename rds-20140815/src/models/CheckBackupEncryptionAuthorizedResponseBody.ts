// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckBackupEncryptionAuthorizedResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  authorizationState?: string;
  /**
   * @example
   * CB07C463-7428-50AA-9E39-********
   */
  requestId?: string;
  /**
   * @example
   * acs:ram::1139916************:role/AliyunServiceRoleForRdsBackupEncryption
   */
  roleARN?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationState: 'AuthorizationState',
      requestId: 'RequestId',
      roleARN: 'RoleARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationState: 'string',
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

