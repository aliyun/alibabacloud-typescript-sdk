// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceADAuthServerResponseBodyAD extends $dara.Model {
  /**
   * @remarks
   * The distinguished name (DN) of the server account.
   * 
   * @example
   * cn=Manager,dc=test,dc=com
   */
  account?: string;
  /**
   * @remarks
   * The base DN used to connect to the AD server.
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
   * The name of the field that maps to the user email address on the AD server.
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
   * (&(objectClass=top))
   */
  filter?: string;
  /**
   * @remarks
   * Specifies whether a password is set. Valid values:
   * - **true**: A password is set.
   * - **false**: No password is set.
   * 
   * @example
   * true
   */
  hasPassword?: boolean;
  /**
   * @remarks
   * Specifies whether the server is the default AD authentication server. A value of true indicates that the server is the default AD authentication server, and a value of false indicates that the server is not the default AD authentication server.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
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
  isSSL?: boolean;
  /**
   * @remarks
   * Specifies whether email addresses are synchronized. A value of true indicates that email addresses are synchronized, and a value of false indicates that email addresses are not synchronized.
   * 
   * @example
   * true
   */
  isSyncEmailAttr?: boolean;
  /**
   * @remarks
   * Specifies whether mobile phone numbers are synchronized. A value of true indicates that mobile phone numbers are synchronized, and a value of false indicates that mobile phone numbers are not synchronized.
   * 
   * @example
   * true
   */
  isSyncMobileAttr?: boolean;
  /**
   * @remarks
   * Specifies whether display names are synchronized. A value of true indicates that display names are synchronized, and a value of false indicates that display names are not synchronized.
   * 
   * @example
   * true
   */
  isSyncNameAttr?: boolean;
  /**
   * @remarks
   * Specifies whether the organization to which a user belongs is synchronized as a user group. A value of true indicates that the organization is synchronized as a user group, and a value of false indicates that the organization is not synchronized as a user group.
   * 
   * @example
   * true
   */
  isSyncOuAsUserGroup?: boolean;
  /**
   * @remarks
   * The time when the user snapshot was last synchronized.
   * 
   * @example
   * 0
   */
  latestSyncTime?: number;
  /**
   * @remarks
   * The name of the field that maps to the user mobile phone number on the AD server.
   * 
   * @example
   * mobileAttr
   */
  mobileMapping?: string;
  /**
   * @remarks
   * The name of the field that maps to the username on the AD server.
   * 
   * @example
   * nameAttr
   */
  nameMapping?: string;
  /**
   * @remarks
   * The port of the server.
   * 
   * @example
   * 389
   */
  port?: number;
  /**
   * @remarks
   * The address of the server.
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
   * The interval for automatic synchronization of user snapshots. Unit: hours. Valid values: 0, and 4 to 168. A value of 0 indicates that automatic synchronization is disabled and no synchronization is performed.
   * 
   * @example
   * 0
   */
  syncInterval?: number;
  userSourceId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      baseDN: 'BaseDN',
      domain: 'Domain',
      emailMapping: 'EmailMapping',
      filter: 'Filter',
      hasPassword: 'HasPassword',
      isDefault: 'IsDefault',
      isSSL: 'IsSSL',
      isSyncEmailAttr: 'IsSyncEmailAttr',
      isSyncMobileAttr: 'IsSyncMobileAttr',
      isSyncNameAttr: 'IsSyncNameAttr',
      isSyncOuAsUserGroup: 'IsSyncOuAsUserGroup',
      latestSyncTime: 'LatestSyncTime',
      mobileMapping: 'MobileMapping',
      nameMapping: 'NameMapping',
      port: 'Port',
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
      hasPassword: 'boolean',
      isDefault: 'boolean',
      isSSL: 'boolean',
      isSyncEmailAttr: 'boolean',
      isSyncMobileAttr: 'boolean',
      isSyncNameAttr: 'boolean',
      isSyncOuAsUserGroup: 'boolean',
      latestSyncTime: 'number',
      mobileMapping: 'string',
      nameMapping: 'string',
      port: 'number',
      server: 'string',
      serverName: 'string',
      standbyServer: 'string',
      syncInterval: 'number',
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

export class GetInstanceADAuthServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Active Directory (AD) authentication configurations.
   */
  AD?: GetInstanceADAuthServerResponseBodyAD;
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier generated by Alibaba Cloud for the request and can be used to troubleshoot issues.
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

