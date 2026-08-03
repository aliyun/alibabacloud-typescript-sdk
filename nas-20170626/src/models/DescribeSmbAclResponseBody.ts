// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSmbAclResponseBodyAcl extends $dara.Model {
  /**
   * @remarks
   * Indicates whether anonymous access is allowed. Valid values:
   * 
   * - true: Anonymous access is allowed.
   * 
   * - false: Anonymous access is not allowed.
   * 
   * @example
   * true
   */
  enableAnonymousAccess?: boolean;
  /**
   * @remarks
   * Indicates whether the SMB AD ACL feature is enabled.
   * 
   * - true: The SMB AD ACL feature is enabled.
   * 
   * - false: The SMB AD ACL feature is not enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether encryption in transit is enabled.
   * 
   * - true: Encryption in transit is enabled.
   * 
   * - false: Encryption in transit is not enabled.
   * 
   * @example
   * true
   */
  encryptData?: boolean;
  /**
   * @remarks
   * The home directory path for each user.
   * 
   * @example
   * /home
   */
  homeDirPath?: string;
  /**
   * @remarks
   * Indicates whether unencrypted clients are rejected.
   * 
   * - true: Unencrypted clients are rejected.
   * 
   * - false: Unencrypted clients are not rejected.
   * 
   * @example
   * true
   */
  rejectUnencryptedAccess?: boolean;
  /**
   * @remarks
   * The ID of the superuser.
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

export class DescribeSmbAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ACL information.
   */
  acl?: DescribeSmbAclResponseBodyAcl;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      acl: 'Acl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: DescribeSmbAclResponseBodyAcl,
      requestId: 'string',
    };
  }

  validate() {
    if(this.acl && typeof (this.acl as any).validate === 'function') {
      (this.acl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

