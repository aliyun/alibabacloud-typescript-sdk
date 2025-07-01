// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSmbAclResponseBodyAcl extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the file system allows anonymous access. Valid values:
   * 
   * *   true: The file system allows anonymous access.
   * *   false: The file system does not allow anonymous access.
   * 
   * @example
   * true
   */
  enableAnonymousAccess?: boolean;
  /**
   * @remarks
   * Indicates whether the ACL feature is enabled. Valid values:
   * 
   * *   true: The ACL feature is enabled.
   * *   false: The ACL feature is disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether encryption in transit is enabled. Valid values:
   * 
   * *   true: Encryption in transit is enabled.
   * *   false: Encryption in transit is disabled.
   * 
   * @example
   * true
   */
  encryptData?: boolean;
  /**
   * @remarks
   * The home directory of each user.
   * 
   * @example
   * /home
   */
  homeDirPath?: string;
  /**
   * @remarks
   * Indicates whether the file system denies access from non-encrypted clients. Valid values:
   * 
   * *   true: The file system denies access from non-encrypted clients.
   * *   false: The file system allows access from non-encrypted clients.
   * 
   * @example
   * true
   */
  rejectUnencryptedAccess?: boolean;
  /**
   * @remarks
   * The ID of a super admin.
   * 
   * @example
   * S-1-0-0
   */
  superAdminSid?: string;
  static names(): { [key: string]: string } {
    return {
      enableAnonymousAccess: 'EnableAnonymousAccess',
      enabled: 'Enabled',
      encryptData: 'EncryptData',
      homeDirPath: 'HomeDirPath',
      rejectUnencryptedAccess: 'RejectUnencryptedAccess',
      superAdminSid: 'SuperAdminSid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAnonymousAccess: 'boolean',
      enabled: 'boolean',
      encryptData: 'boolean',
      homeDirPath: 'string',
      rejectUnencryptedAccess: 'boolean',
      superAdminSid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

