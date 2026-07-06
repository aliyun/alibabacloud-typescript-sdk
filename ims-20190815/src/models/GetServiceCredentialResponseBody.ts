// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceCredentialResponseBodyServiceCredential extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-03-15T09:20:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The expiration time. This field is not returned for permanent service credentials.
   * 
   * @example
   * 2026-04-15T09:20:58Z
   */
  expirationTime?: string;
  /**
   * @remarks
   * The service credential ID.
   * 
   * @example
   * SC***************
   */
  serviceCredentialId?: string;
  /**
   * @remarks
   * The service credential name.
   * 
   * @example
   * test
   */
  serviceCredentialName?: string;
  /**
   * @remarks
   * The Alibaba Cloud service name.
   * 
   * @example
   * xxx.aliyuncs.com
   */
  serviceName?: string;
  /**
   * @remarks
   * The service credential status.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The logon name of the Resource Access Management (RAM) user.
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

export class GetServiceCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 66815255-7CCE-4759-AC37-9755794C3626
   */
  requestId?: string;
  /**
   * @remarks
   * The service credential information.
   */
  serviceCredential?: GetServiceCredentialResponseBodyServiceCredential;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceCredential: 'ServiceCredential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceCredential: GetServiceCredentialResponseBodyServiceCredential,
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

