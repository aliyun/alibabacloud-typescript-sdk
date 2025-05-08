// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  authEnabled?: boolean;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * none
   */
  autopurgePurgeInterval?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * none
   */
  autopurgeSnapRetainCount?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * mse-09k1q11****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable Resource Access Management (RAM) authentication for a configuration center. This parameter is valid for Nacos instances. Valid values:
   * 
   * *   `true`: enabled.
   * *   `false`: disabled.
   * 
   * > Before you configure this parameter, you must call the QueryConfig operation to obtain the ConfigAuthSupported parameter value to check whether the instance supports the RAM authentication feature.
   * 
   * @example
   * true
   */
  configAuthEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable configuration encryption for a configuration center. This parameter is valid for Nacos instances. Valid values:
   * 
   * *   `true`: enabled.
   * *   `false`: disabled.
   * 
   * > Before you configure this parameter, you must call the QueryConfig operation to obtain the ConfigSecretSupported parameter value to check whether the instance supports configuration encryption.
   * 
   * @example
   * true
   */
  configSecretEnabled?: boolean;
  /**
   * @remarks
   * The format of the configuration. Supported formats include TEXT, JSON, XML, and HTML.
   * 
   * @example
   * TEXT
   */
  configType?: string;
  consoleUIEnabled?: boolean;
  enable4lw?: boolean;
  /**
   * @example
   * true
   */
  eurekaSupported?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the time to live (TTL) configuration. This parameter is valid for ZooKeeper instances.
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
   * The ID of the instance.
   * 
   * @example
   * mse_prepaid_public_cn-st2212****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum amount of data on each node. This parameter is valid for ZooKeeper instances. The default maximum data amount on each node is 1 megabyte. Unit: bytes.
   * 
   * @example
   * 1048575
   */
  juteMaxbuffer?: string;
  /**
   * @remarks
   * Specifies whether to enable Mesh Configuration Protocol (MCP). This parameter is valid for Nacos instances. Valid values:
   * 
   * *   `true`: enabled.
   * *   `false`: disabled.
   * 
   * > Before you configure this parameter, you must call the QueryConfig operation to obtain the MCPSupported parameter value to check whether the instance supports MCP.
   * 
   * @example
   * true
   */
  MCPEnabled?: boolean;
  /**
   * @remarks
   * The number of connections between a client and a server. This parameter is valid for ZooKeeper instances.\\
   * If this parameter is set to 0, no limits are imposed on the number of connections.
   * 
   * @example
   * 0
   */
  maxClientCnxns?: string;
  /**
   * @remarks
   * The maximum timeout period. This parameter is valid for ZooKeeper instances. Unit: seconds.
   * 
   * @example
   * 1000
   */
  maxSessionTimeout?: string;
  /**
   * @remarks
   * The minimum timeout period. This parameter is valid for ZooKeeper instances. Unit: seconds.
   * 
   * @example
   * 10
   */
  minSessionTimeout?: string;
  /**
   * @remarks
   * Specifies whether to enable RAM authentication for a registry. This parameter is valid for Nacos instances. Valid values:
   * 
   * *   `true`: enabled.
   * *   `false`: disabled.
   * 
   * > Before you configure this parameter, you must call the QueryConfig operation to obtain the NamingAuthSupporte parameter value to check whether the instance supports the RAM authentication feature.
   * 
   * @example
   * true
   */
  namingAuthEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable super permissions. This parameter is valid for ZooKeeper instances. Valid values:
   * 
   * *   `true`: enabled
   * *   `false`: disabled
   * 
   * @example
   * true
   */
  openSuperAcl?: string;
  /**
   * @remarks
   * The password that corresponds to the username.
   * 
   * > You must specify this parameter if OpenSuperAcl is set to true.
   * 
   * @example
   * password
   */
  passWord?: string;
  /**
   * @remarks
   * The extended request parameters in the JSON format.
   * 
   * @example
   * {}
   */
  requestPars?: string;
  /**
   * @remarks
   * The frequency for generating snapshots. This parameter is valid for ZooKeeper instances.
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
   * The name of the user.
   * 
   * > You must specify this parameter if OpenSuperAcl is set to true.
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

