// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceADAuthServerResponseBodyAD extends $dara.Model {
  /**
   * @remarks
   * The distinguished name (DN) of the AD server account.
   * 
   * @example
   * cn=Manager,dc=test,dc=com
   */
  account?: string;
  /**
   * @remarks
   * The Base DN of the AD server.
   * 
   * @example
   * dc=test,dc=com
   */
  baseDN?: string;
  /**
   * @remarks
   * The domain on the AD server.
   * 
   * @example
   * domain
   */
  domain?: string;
  /**
   * @remarks
   * The field that is used to indicate the email address of a user on the AD server.
   * 
   * @example
   * emailAttr
   */
  emailMapping?: string;
  /**
   * @remarks
   * The condition that is used to filter users.
   * 
   * @example
   * (&(objectClass=top))
   */
  filter?: string;
  /**
   * @remarks
   * Indicates whether passwords are required. Valid values:
   * 
   * *   **true**:
   * *   **false**
   * 
   * @example
   * true
   */
  hasPassword?: boolean;
  /**
   * @remarks
   * Indicates whether SSL is supported. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isSSL?: boolean;
  /**
   * @remarks
   * The field that is used to indicate the mobile phone number of a user on the AD server.
   * 
   * @example
   * mobileAttr
   */
  mobileMapping?: string;
  /**
   * @remarks
   * The field that is used to indicate the name of a user on the AD server.
   * 
   * @example
   * nameAttr
   */
  nameMapping?: string;
  /**
   * @remarks
   * The port that is used to access the AD server.
   * 
   * @example
   * 389
   */
  port?: number;
  /**
   * @remarks
   * The address of the AD server.
   * 
   * @example
   * 192.168.XX.XX
   */
  server?: string;
  /**
   * @remarks
   * The address of the secondary AD server.
   * 
   * @example
   * 192.168.XX.XX
   */
  standbyServer?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      baseDN: 'BaseDN',
      domain: 'Domain',
      emailMapping: 'EmailMapping',
      filter: 'Filter',
      hasPassword: 'HasPassword',
      isSSL: 'IsSSL',
      mobileMapping: 'MobileMapping',
      nameMapping: 'NameMapping',
      port: 'Port',
      server: 'Server',
      standbyServer: 'StandbyServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      baseDN: 'string',
      domain: 'string',
      emailMapping: 'string',
      filter: 'string',
      hasPassword: 'boolean',
      isSSL: 'boolean',
      mobileMapping: 'string',
      nameMapping: 'string',
      port: 'number',
      server: 'string',
      standbyServer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceADAuthServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The settings of AD authentication.
   */
  AD?: GetInstanceADAuthServerResponseBodyAD;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 89398CFB-4EB6-4C7E-BB3C-EF213AC8FA50
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AD: 'AD',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AD: GetInstanceADAuthServerResponseBodyAD,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AD && typeof (this.AD as any).validate === 'function') {
      (this.AD as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

