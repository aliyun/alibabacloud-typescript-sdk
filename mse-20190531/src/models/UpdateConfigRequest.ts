// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese
   * 
   * - en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Specifies whether to enable forced Simple Authentication and Security Layer (SASL) authentication. After this feature is enabled, clients that do not perform SASL authentication cannot access the cluster
   */
  authEnabled?: boolean;
  /**
   * @remarks
   * The reserved field.
   * 
   * @example
   * none
   */
  autopurgePurgeInterval?: string;
  /**
   * @remarks
   * The reserved field.
   * 
   * @example
   * none
   */
  autopurgeSnapRetainCount?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * mse-09k1q11****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable RAM authentication for the configuration center in Nacos:
   * 
   * - `true`: enabled
   * 
   * - `false`: disabled
   * 
   * > Before you set this parameter, call the QueryConfig operation to obtain the ConfigAuthSupported parameter to check whether the current cluster supports this feature.
   * 
   * @example
   * true
   */
  configAuthEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the configuration encryption feature for the configuration center in Nacos. Valid values:
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
   * 
   * > Before you set this parameter, call the QueryConfig operation to obtain the ConfigSecretSupported parameter to check whether the current cluster supports this feature.
   * 
   * @example
   * true
   */
  configSecretEnabled?: boolean;
  /**
   * @remarks
   * The format of the configurations. Supported formats include TEXT, JSON, XML, and HTML.
   * 
   * @example
   * TEXT
   */
  configType?: string;
  /**
   * @remarks
   * Specifies whether to enable the Nacos open-source console
   * 
   * @example
   * true
   */
  consoleUIEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the four-character command access feature
   */
  enable4lw?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Eureka protocol support in Nacos
   * 
   * @example
   * true
   */
  eurekaSupported?: boolean;
  /**
   * @remarks
   * Specifies whether to enable TTL configuration in ZooKeeper parameters.
   * 
   * @example
   * true
   */
  extendedTypesEnable?: string;
  /**
   * @remarks
   * The maximum connection duration of the instance. This parameter is valid for ZooKeeper instances. Unit: seconds.
   * 
   * @example
   * 100
   */
  initLimit?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * mse_prepaid_public_cn-st2212****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum amount of data on each node. This parameter is valid for ZooKeeper instances. Unit: bytes.
   * 
   * @example
   * 1048575
   */
  juteMaxbuffer?: string;
  /**
   * @remarks
   * Specifies whether MCP is enabled in Nacos configuration. Valid values:
   * 
   * - `true`: enabled
   * 
   * - `false`: disabled
   * 
   * > Before you set this parameter, call the QueryConfig operation to obtain the MCPSupported parameter to check whether the current cluster supports this feature.
   * 
   * @example
   * true
   */
  MCPEnabled?: boolean;
  /**
   * @remarks
   * The number of connections between a single client and a single server in ZooKeeper configuration.<br>
   * If this parameter is set to 0, no limits are imposed on the number of connections.<br>
   * 
   * @example
   * 0
   */
  maxClientCnxns?: string;
  /**
   * @remarks
   * The maximum timeout period in ZooKeeper configuration. Unit: seconds.
   * 
   * @example
   * 1000
   */
  maxSessionTimeout?: string;
  /**
   * @remarks
   * The minimum timeout period in ZooKeeper configuration. Unit: seconds.
   * 
   * @example
   * 10
   */
  minSessionTimeout?: string;
  /**
   * @remarks
   * Specifies whether to enable RAM authentication for the Accreditation Centre in Nacos:
   * 
   * - `true`: enabled
   * 
   * - `false`: disabled
   * 
   * > Before you set this parameter, call the QueryConfig operation to obtain the NamingAuthSupporte parameter to check whether the current cluster supports this feature.
   * 
   * @example
   * true
   */
  namingAuthEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether super permissions are enabled. This parameter is valid for ZooKeeper instances. Valid values:
   * 
   * - `true`: enabled
   * 
   * - `false`: disabled
   * 
   * @example
   * true
   */
  openSuperAcl?: string;
  /**
   * @remarks
   * The password of the account.
   * 
   * > This parameter is required when OpenSuperAcl is set to true.
   * 
   * @example
   * password
   */
  passWord?: string;
  /**
   * @remarks
   * The extended request parameter in the JSON format.
   * 
   * @example
   * {}
   */
  requestPars?: string;
  /**
   * @remarks
   * The frequency at which snapshots are generated in ZooKeeper configuration
   * 
   * @example
   * 100000
   */
  snapshotCount?: string;
  /**
   * @remarks
   * The connection timeout period of the instance. This parameter is valid for ZooKeeper instances. Unit: seconds.
   * 
   * @example
   * 10
   */
  syncLimit?: string;
  /**
   * @remarks
   * Specifies whether to enable TLS transmission link encryption in Nacos
   * 
   * @example
   * true
   */
  TLSEnabled?: boolean;
  /**
   * @remarks
   * The time unit. This parameter is valid for ZooKeeper instances. Default value: 2000. Unit: milliseconds.
   * 
   * @example
   * 2000
   */
  tickTime?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * > This parameter is required when OpenSuperAcl is set to true.
   * 
   * @example
   * name
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      authEnabled: 'AuthEnabled',
      autopurgePurgeInterval: 'AutopurgePurgeInterval',
      autopurgeSnapRetainCount: 'AutopurgeSnapRetainCount',
      clusterId: 'ClusterId',
      configAuthEnabled: 'ConfigAuthEnabled',
      configSecretEnabled: 'ConfigSecretEnabled',
      configType: 'ConfigType',
      consoleUIEnabled: 'ConsoleUIEnabled',
      enable4lw: 'Enable4lw',
      eurekaSupported: 'EurekaSupported',
      extendedTypesEnable: 'ExtendedTypesEnable',
      initLimit: 'InitLimit',
      instanceId: 'InstanceId',
      juteMaxbuffer: 'JuteMaxbuffer',
      MCPEnabled: 'MCPEnabled',
      maxClientCnxns: 'MaxClientCnxns',
      maxSessionTimeout: 'MaxSessionTimeout',
      minSessionTimeout: 'MinSessionTimeout',
      namingAuthEnabled: 'NamingAuthEnabled',
      openSuperAcl: 'OpenSuperAcl',
      passWord: 'PassWord',
      requestPars: 'RequestPars',
      snapshotCount: 'SnapshotCount',
      syncLimit: 'SyncLimit',
      TLSEnabled: 'TLSEnabled',
      tickTime: 'TickTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      authEnabled: 'boolean',
      autopurgePurgeInterval: 'string',
      autopurgeSnapRetainCount: 'string',
      clusterId: 'string',
      configAuthEnabled: 'boolean',
      configSecretEnabled: 'boolean',
      configType: 'string',
      consoleUIEnabled: 'boolean',
      enable4lw: 'boolean',
      eurekaSupported: 'boolean',
      extendedTypesEnable: 'string',
      initLimit: 'string',
      instanceId: 'string',
      juteMaxbuffer: 'string',
      MCPEnabled: 'boolean',
      maxClientCnxns: 'string',
      maxSessionTimeout: 'string',
      minSessionTimeout: 'string',
      namingAuthEnabled: 'boolean',
      openSuperAcl: 'string',
      passWord: 'string',
      requestPars: 'string',
      snapshotCount: 'string',
      syncLimit: 'string',
      TLSEnabled: 'boolean',
      tickTime: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

