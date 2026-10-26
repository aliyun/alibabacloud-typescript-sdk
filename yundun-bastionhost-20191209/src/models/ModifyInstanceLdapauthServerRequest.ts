// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceLDAPAuthServerRequest extends $dara.Model {
  /**
   * @remarks
   * The account of the server.
   * 
   * This parameter is required.
   * 
   * @example
   * cn=Manager,dc=test,dc=com
   */
  account?: string;
  /**
   * @remarks
   * The base distinguished name (Base DN).
   * 
   * This parameter is required.
   * 
   * @example
   * dc=test,dc=com
   */
  baseDN?: string;
  /**
   * @remarks
   * The server attribute name that corresponds to the user email address.
   * 
   * @example
   * emailAttr
   */
  emailMapping?: string;
  /**
   * @remarks
   * The filter condition for users.
   * 
   * @example
   * (objectClass=top)
   */
  filter?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the parameter value.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether SSL is supported. Valid values:
   * 
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  isSSL?: string;
  /**
   * @remarks
   * The server attribute name that corresponds to the user logon name.
   * 
   * @example
   * userNameAttr
   */
  loginNameMapping?: string;
  /**
   * @remarks
   * The server attribute name that corresponds to the user mobile phone number.
   * 
   * @example
   * mobileAttr
   */
  mobileMapping?: string;
  /**
   * @remarks
   * The server attribute name that corresponds to the username.
   * 
   * @example
   * nameAttr
   */
  nameMapping?: string;
  /**
   * @remarks
   * The password of the server account. This parameter is required when you add an LDAP authentication server. When you modify the information of an LDAP authentication server, if you do not specify this parameter, the current password is retained.
   * 
   * @example
   * ******
   */
  password?: string;
  /**
   * @remarks
   * The port used to access the server.
   * 
   * This parameter is required.
   * 
   * @example
   * 389
   */
  port?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The address of the server.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX
   */
  server?: string;
  /**
   * @remarks
   * The address of the standby server.
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
      instanceId: 'InstanceId',
      isSSL: 'IsSSL',
      loginNameMapping: 'LoginNameMapping',
      mobileMapping: 'MobileMapping',
      nameMapping: 'NameMapping',
      password: 'Password',
      port: 'Port',
      regionId: 'RegionId',
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
      instanceId: 'string',
      isSSL: 'string',
      loginNameMapping: 'string',
      mobileMapping: 'string',
      nameMapping: 'string',
      password: 'string',
      port: 'string',
      regionId: 'string',
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

