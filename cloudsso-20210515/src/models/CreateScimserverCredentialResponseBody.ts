// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSCIMServerCredentialResponseBodySCIMServerCredential extends $dara.Model {
  /**
   * @remarks
   * The time when the SCIM server credential was created. The time is in UTC and follows the RFC 3339 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2021-11-09T08:12:52Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the SCIM server credential.
   * 
   * @example
   * scimcred-004whl0kvfwcypbi****
   */
  credentialId?: string;
  /**
   * @remarks
   * The SCIM server credential secret.
   * 
   * > The SCIM server credential secret is returned only when the credential is created and cannot be queried later. Store it securely.
   * 
   * @example
   * 8aAJCtpbyPJ8saXeYDgyw****
   */
  credentialSecret?: string;
  /**
   * @remarks
   * The type of the SCIM server credential.
   * 
   * @example
   * BearerToken
   */
  credentialType?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The time when the SCIM server credential expires. The time is in UTC and follows the RFC 3339 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2022-11-09T08:12:52Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The status of the SCIM server credential. Valid values:
   * - Enabled: The credential is enabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      credentialId: 'CredentialId',
      credentialSecret: 'CredentialSecret',
      credentialType: 'CredentialType',
      directoryId: 'DirectoryId',
      expireTime: 'ExpireTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      credentialId: 'string',
      credentialSecret: 'string',
      credentialType: 'string',
      directoryId: 'string',
      expireTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSCIMServerCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D2E5180-7ACF-57FF-A56C-26A49ABEBFF7
   */
  requestId?: string;
  /**
   * @remarks
   * The SCIM server credential information.
   */
  SCIMServerCredential?: CreateSCIMServerCredentialResponseBodySCIMServerCredential;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SCIMServerCredential: 'SCIMServerCredential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SCIMServerCredential: CreateSCIMServerCredentialResponseBodySCIMServerCredential,
    };
  }

  validate() {
    if(this.SCIMServerCredential && typeof (this.SCIMServerCredential as any).validate === 'function') {
      (this.SCIMServerCredential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

