// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceLDAPAuthServerResponseBodyLDAP extends $dara.Model {
  /**
   * @remarks
   * The account of the LDAP server.
   * 
   * @example
   * cn=Manager,dc=test,dc=com
   */
  account?: string;
  /**
   * @remarks
   * The Base distinguished name (DN).
   * 
   * @example
   * dc=test,dc=com
   */
  baseDN?: string;
  /**
   * @remarks
   * The field that is used to indicate the email address of a user on the LDAP server.
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
   * *   **true**: required
   * *   **false**: not required
   * 
   * @example
   * true
   */
  hasPassword?: string;
  /**
   * @remarks
   * Indicates whether SSL is supported. Valid values:
   * 
   * *   **true**: supported
   * *   **false**: not supported
   * 
   * @example
   * true
   */
  isSSL?: boolean;
  /**
   * @remarks
   * The field that is used to indicate the logon name of a user on the LDAP server.
   * 
   * @example
   * userNameAttr
   */
  loginNameMapping?: string;
  /**
   * @remarks
   * The field that is used to indicate the mobile phone number of a user on the LDAP server.
   * 
   * @example
   * mobileAttr
   */
  mobileMapping?: string;
  /**
   * @remarks
   * The field that is used to indicate the name of a user on the LDAP server.
   * 
   * @example
   * nameAttr
   */
  nameMapping?: string;
  /**
   * @remarks
   * The port that is used to access the LDAP server.
   * 
   * @example
   * 389
   */
  port?: number;
  /**
   * @remarks
   * The address of the LDAP server.
   * 
   * @example
   * 192.168.XX.XX
   */
  server?: string;
  /**
   * @remarks
   * The address of the secondary LDAP server.
   * 
   * @example
   * 192.168.XX.XX
   */
  standbyServer?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      baseDN: 'BaseDN',
      emailMapping: 'EmailMapping',
      filter: 'Filter',
      hasPassword: 'HasPassword',
      isSSL: 'IsSSL',
      loginNameMapping: 'LoginNameMapping',
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
      emailMapping: 'string',
      filter: 'string',
      hasPassword: 'string',
      isSSL: 'boolean',
      loginNameMapping: 'string',
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

