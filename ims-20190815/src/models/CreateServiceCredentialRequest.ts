// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration period of the service credential, in days. Valid values: 1 to 36600. If this parameter is not specified, the service credential never expires.
   * 
   * @example
   * 30
   * 
   * **if can be null:**
   * false
   */
  credentialAgeDays?: number;
  /**
   * @remarks
   * The name of the service credential. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * yourServiceCredentialName
   */
  serviceCredentialName?: string;
  /**
   * @remarks
   * The service name of the Alibaba Cloud service.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx.aliyuncs.com
   */
  serviceName?: string;
  /**
   * @remarks
   * The logon name of the RAM user. If this parameter is left empty, the service credential is created for the current user by default.
   * 
   * @example
   * test@example.onaliyun.com
   * 
   * **if can be null:**
   * false
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      credentialAgeDays: 'CredentialAgeDays',
      serviceCredentialName: 'ServiceCredentialName',
      serviceName: 'ServiceName',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialAgeDays: 'number',
      serviceCredentialName: 'string',
      serviceName: 'string',
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

