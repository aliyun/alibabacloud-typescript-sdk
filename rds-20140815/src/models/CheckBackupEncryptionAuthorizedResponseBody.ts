// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckBackupEncryptionAuthorizedResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the account is authorized. Valid values:
   * * 0: Not authorized.
   * * 1: Authorized.
   * 
   * @example
   * 1
   */
  authorizationState?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB07C463-7428-50AA-9E39-********
   */
  requestId?: string;
  /**
   * @remarks
   * The Alibaba Resource Name (ARN) of the service-linked role associated with Cloud Hardware Security Module (CloudHSM) for backup encryption.
   * 
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

