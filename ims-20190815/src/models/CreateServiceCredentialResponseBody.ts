// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceCredentialResponseBodyServiceCredential extends $dara.Model {
  /**
   * @remarks
   * The time when the service credential was created. The time follows RFC 3339 (UTC). Example: 2026-01-01T10:05:24Z.
   * 
   * @example
   * 2026-01-01T10:05:24Z
   */
  createTime?: string;
  /**
   * @remarks
   * The expiration time of the service credential. This field is not returned for service credentials that never expire. The time follows RFC 3339 (UTC). Example: 2026-02-01T10:05:24Z.
   * 
   * @example
   * 2026-02-01T10:05:24Z
   * 
   * **if can be null:**
   * true
   */
  expirationTime?: string;
  /**
   * @remarks
   * The ID of the service credential.
   * 
   * @example
   * SC*************
   */
  serviceCredentialId?: string;
  /**
   * @remarks
   * The name of the service credential.
   * 
   * @example
   * yourServiceCredentialName
   */
  serviceCredentialName?: string;
  /**
   * @remarks
   * The secret of the service credential.
   * 
   * @example
   * yourServiceCredentialSecret
   */
  serviceCredentialSecret?: string;
  /**
   * @remarks
   * The service name of the Alibaba Cloud service.
   * 
   * @example
   * xxx.aliyuncs.com
   */
  serviceName?: string;
  /**
   * @remarks
   * The status of the service credential. Valid values:
   * - Active: enabled.
   * - Inactive: disabled.
   * - Expired: expired.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * @example
   * test@example.onaliyun.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expirationTime: 'ExpirationTime',
      serviceCredentialId: 'ServiceCredentialId',
      serviceCredentialName: 'ServiceCredentialName',
      serviceCredentialSecret: 'ServiceCredentialSecret',
      serviceName: 'ServiceName',
      status: 'Status',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expirationTime: 'string',
      serviceCredentialId: 'string',
      serviceCredentialName: 'string',
      serviceCredentialSecret: 'string',
      serviceName: 'string',
      status: 'string',
      userPrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 81313F5E-3C85-478F-BCC9-E1B70E4556DB
   */
  requestId?: string;
  /**
   * @remarks
   * The service credential information.
   */
  serviceCredential?: CreateServiceCredentialResponseBodyServiceCredential;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceCredential: 'ServiceCredential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceCredential: CreateServiceCredentialResponseBodyServiceCredential,
    };
  }

  validate() {
    if(this.serviceCredential && typeof (this.serviceCredential as any).validate === 'function') {
      (this.serviceCredential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

