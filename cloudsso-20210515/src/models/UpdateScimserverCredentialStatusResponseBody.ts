// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSCIMServerCredentialStatusResponseBodySCIMServerCredential extends $dara.Model {
  /**
   * @remarks
   * The time when the SCIM credential was created.
   * 
   * @example
   * 2021-11-09T08:12:52Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the SCIM credential.
   * 
   * @example
   * scimcred-004whl0kvfwcypbi****
   */
  credentialId?: string;
  /**
   * @remarks
   * The type of the SCIM credential.
   * 
   * @example
   * BearerToken
   */
  credentialType?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The time when the SCIM credential expires.
   * 
   * @example
   * 2022-11-09T08:12:52Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The status of the SCIM credential. Valid values:
   * 
   * - Enabled: The SCIM credential is enabled.
   * 
   * - Disabled: The SCIM credential is disabled.
   * 
   * @example
   * Disabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      credentialId: 'CredentialId',
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

export class UpdateSCIMServerCredentialStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7C086C2F-1C66-57B3-B14E-2C1DA70727CD
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the SCIM credential.
   */
  SCIMServerCredential?: UpdateSCIMServerCredentialStatusResponseBodySCIMServerCredential;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SCIMServerCredential: 'SCIMServerCredential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SCIMServerCredential: UpdateSCIMServerCredentialStatusResponseBodySCIMServerCredential,
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

