// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceADAuthServerRequest extends $dara.Model {
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
   * The domain on the AD server.
   * 
   * This parameter is required.
   * 
   * @example
   * domain
   */
  domain?: string;
  /**
   * @remarks
   * The server attribute name that maps to the user email address.
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
   * The ID of the Bastionhost instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether the AD authentication server is the default server. Valid values: true and false. A value of true indicates that the server is the default AD authentication server, and a value of false indicates that the server is not the default AD authentication server.
   * 
   * @example
   * true
   */
  isDefault?: string;
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
   * Specifies whether to synchronize the email address. Valid values: true and false. A value of true indicates that the email address is synchronized, and a value of false indicates that the email address is not synchronized.
   * 
   * @example
   * true
   */
  isSyncEmailAttr?: string;
  /**
   * @remarks
   * Specifies whether to synchronize the mobile phone number. Valid values: true and false. A value of true indicates that the mobile phone number is synchronized, and a value of false indicates that the mobile phone number is not synchronized.
   * 
   * @example
   * true
   */
  isSyncMobileAttr?: string;
  /**
   * @remarks
   * Specifies whether to synchronize the display name. Valid values: true and false. A value of true indicates that the display name is synchronized, and a value of false indicates that the display name is not synchronized.
   * 
   * @example
   * true
   */
  isSyncNameAttr?: string;
  /**
   * @remarks
   * Specifies whether to synchronize the organization to which the user belongs as a user group. Valid values: true and false. A value of true indicates that the organization is synchronized as a user group, and a value of false indicates that the organization is not synchronized as a user group.
   * 
   * @example
   * true
   */
  isSyncOuAsUserGroup?: string;
  /**
   * @remarks
   * The server attribute name that maps to the user mobile phone number.
   * 
   * @example
   * mobileAttr
   */
  mobileMapping?: string;
  /**
   * @remarks
   * The server attribute name that maps to the username.
   * 
   * @example
   * nameAttr
   */
  nameMapping?: string;
  /**
   * @remarks
   * The password of the server account.
   * 
   * @example
   * Demo****123!
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
   * The name of the AD authentication server.
   * 
   * @example
   * AD Server
   */
  serverName?: string;
  /**
   * @remarks
   * The address of the standby server.
   * 
   * @example
   * 192.168.XX.XX
   */
  standbyServer?: string;
  /**
   * @remarks
   * The interval at which user snapshots are automatically synchronized. Unit: hours. Valid values: 0, and 4 to 168. A value of 0 indicates that automatic synchronization is disabled.
   * 
   * @example
   * 12
   */
  syncInterval?: string;
  /**
   * @example
   * 39
   */
  userSourceId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      baseDN: 'BaseDN',
      domain: 'Domain',
      emailMapping: 'EmailMapping',
      filter: 'Filter',
      instanceId: 'InstanceId',
      isDefault: 'IsDefault',
      isSSL: 'IsSSL',
      isSyncEmailAttr: 'IsSyncEmailAttr',
      isSyncMobileAttr: 'IsSyncMobileAttr',
      isSyncNameAttr: 'IsSyncNameAttr',
      isSyncOuAsUserGroup: 'IsSyncOuAsUserGroup',
      mobileMapping: 'MobileMapping',
      nameMapping: 'NameMapping',
      password: 'Password',
      port: 'Port',
      regionId: 'RegionId',
      server: 'Server',
      serverName: 'ServerName',
      standbyServer: 'StandbyServer',
      syncInterval: 'SyncInterval',
      userSourceId: 'UserSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      baseDN: 'string',
      domain: 'string',
      emailMapping: 'string',
      filter: 'string',
      instanceId: 'string',
      isDefault: 'string',
      isSSL: 'string',
      isSyncEmailAttr: 'string',
      isSyncMobileAttr: 'string',
      isSyncNameAttr: 'string',
      isSyncOuAsUserGroup: 'string',
      mobileMapping: 'string',
      nameMapping: 'string',
      password: 'string',
      port: 'string',
      regionId: 'string',
      server: 'string',
      serverName: 'string',
      standbyServer: 'string',
      syncInterval: 'string',
      userSourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

