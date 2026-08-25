// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSCIMServerCredentialsResponseBodySCIMServerCredentials extends $dara.Model {
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
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
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

export class ListSCIMServerCredentialsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE4B7037-C315-5DD5-826E-57A87950BCD1
   */
  requestId?: string;
  /**
   * @remarks
   * The SCIM credentials.
   */
  SCIMServerCredentials?: ListSCIMServerCredentialsResponseBodySCIMServerCredentials[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SCIMServerCredentials: 'SCIMServerCredentials',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SCIMServerCredentials: { 'type': 'array', 'itemType': ListSCIMServerCredentialsResponseBodySCIMServerCredentials },
      totalCounts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.SCIMServerCredentials)) {
      $dara.Model.validateArray(this.SCIMServerCredentials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

