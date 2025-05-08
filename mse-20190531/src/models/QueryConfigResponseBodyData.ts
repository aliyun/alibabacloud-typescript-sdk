// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryConfigResponseBodyDataNacosRunningEnv } from "./QueryConfigResponseBodyDataNacosRunningEnv";


export class QueryConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Simple Authentication and Security Layer (SASL) forced identity authentication is enabled for the ZooKeeper instance.
   */
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
   * The name of the instance.
   * 
   * @example
   * name
   */
  clusterName?: string;
  /**
   * @remarks
   * Indicates whether RAM authentication of a configuration center is enabled. This parameter is valid for Nacos instances. Valid values:
   * 
   * *   `true`: enabled.
   * *   `false`: disabled.
   * 
   * @example
   * true
   */
  configAuthEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether RAM authentication is supported by a configuration center of the instance. This parameter is valid for Nacos instances. Valid values:
   * 
   * *   `true`: supported.
   * *   `false`: not supported.
   * 
   * @example
   * true
   */
  configAuthSupported?: boolean;
  /**
   * @remarks
   * The maximum size of contents in a configuration. Unit: KB.
   * 
   * @example
   * 100
   */
  configContentLimit?: number;
  /**
   * @remarks
   * Indicates whether configuration encryption of a configuration center is enabled by the instance. This parameter is valid for Nacos instances. Valid values:
   * 
   * *   `true`: enabled.
   * *   `false`: disabled.
   * 
   * @example
   * true
   */
  configSecretEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether configuration encryption of a configuration center is supported by the instance. This parameter is valid for Nacos instances. Valid values:
   * 
   * *   `true`: supported.
   * *   `false`: not supported.
   * 
   * @example
   * true
   */
  configSecretSupported?: boolean;
  /**
   * @remarks
   * Indicates whether the Nacos open source console is enabled.
   * 
   * @example
   * true
   */
  consoleUIEnabled?: boolean;
  enable4lw?: boolean;
  /**
   * @remarks
   * Indicates whether access port 8761 was enabled for Eureka. If this port is disabled, applications cannot use the Eureka protocol for service registration and discovery.
   * 
   * @example
   * true
   */
  eurekaSupported?: boolean;
  /**
   * @remarks
   * Indicates whether the time to live (TTL) configuration is enabled. This parameter is valid for ZooKeeper instances.
   * 
   * @example
   * true
   */
  extendedTypesEnable?: boolean;
  /**
   * @remarks
   * The maximum connection duration of the instance. Unit: seconds. This parameter is valid for ZooKeeper instances.
   * 
   * @example
   * 100
   */
  initLimit?: string;
  /**
   * @remarks
   * The maximum amount of data on each node. This parameter is valid for ZooKeeper instances. Unit: bytes.
   * 
   * @example
   * 1
   */
  juteMaxbuffer?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * none
   */
  jvmFlagsCustom?: string;
  /**
   * @remarks
   * Indicates whether Mesh Configuration Protocol (MCP) is enabled. This parameter is valid for Nacos instances. Valid values:
   * 
   * *   `true`: enabled.
   * *   `false`: disabled.
   * 
   * @example
   * true
   */
  MCPEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether MCP is supported. This parameter is valid for Nacos instances. Valid values:
   * 
   * *   `true`: supported.
   * *   `false`: not supported.
   * 
   * @example
   * true
   */
  MCPSupported?: boolean;
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
   * The maximum timeout period. This parameter is valid for ZooKeeper instances.
   * 
   * @example
   * -1
   */
  maxSessionTimeout?: string;
  /**
   * @remarks
   * The minimum timeout period. This parameter is valid for ZooKeeper instances.
   * 
   * @example
   * -1
   */
  minSessionTimeout?: string;
  /**
   * @remarks
   * The runtime configuration of the Nacos instance.
   */
  nacosRunningEnv?: QueryConfigResponseBodyDataNacosRunningEnv;
  /**
   * @remarks
   * Indicates whether RAM authentication of a registry is enabled. This parameter is valid for Nacos instances. Valid values:
   * 
   * *   `true`: enabled.
   * *   `false`: disabled.
   * 
   * @example
   * false
   */
  namingAuthEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether RAM authentication of services is supported by the instance. This parameter is valid for Nacos instances. Valid values:
   * 
   * *   `true`: supported.
   * *   `false`: not supported.
   * 
   * @example
   * true
   */
  namingAuthSupported?: boolean;
  /**
   * @remarks
   * Indicates whether service creation is supported for the instance. This parameter is valid for Nacos instances. Valid values:
   * 
   * *   `true`: supported.
   * *   `false`: not supported.
   * 
   * @example
   * true
   */
  namingCreateServiceSupported?: boolean;
  /**
   * @remarks
   * Indicates whether super permissions are enabled. This parameter is valid for ZooKeeper instances. Valid values:
   * 
   * *   `true`: enabled.
   * *   `false`: disabled.
   * 
   * @example
   * true
   */
  openSuperAcl?: boolean;
  /**
   * @remarks
   * The password that corresponds to the username. This parameter is valid only if OpenSuperAcl is set to true.
   * 
   * @example
   * password
   */
  passWord?: string;
  /**
   * @remarks
   * Indicates whether the instance was restarted and new configurations have taken effect. Valid values:
   * 
   * *   `true`: The restart was successful.
   * *   `false`: The restart failed.
   * 
   * @example
   * true
   */
  restartFlag?: boolean;
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
   * @remarks
   * MSE Nacos supports TLS transmission link encryption since version 2.1.2.1. Nacos clients must be upgraded to version 2.2.1 or later. After TLS is enabled, the system performance will decrease by about 10%. You must evaluate the system capacity. For more information about the relevant operations, see Nacos TLS transmission encryption.
   * 
   * @example
   * true
   */
  TLSEnabled?: boolean;
  /**
   * @remarks
   * The time unit of the engine. This parameter is valid for ZooKeeper instances. Default value: 2000. Unit: milliseconds.
   * 
   * @example
   * 2000
   */
  tickTime?: string;
  /**
   * @remarks
   * The username of the user. This parameter is valid only if OpenSuperAcl is set to true.
   * 
   * @example
   * name
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      authEnabled: 'AuthEnabled',
      autopurgePurgeInterval: 'AutopurgePurgeInterval',
      autopurgeSnapRetainCount: 'AutopurgeSnapRetainCount',
      clusterName: 'ClusterName',
      configAuthEnabled: 'ConfigAuthEnabled',
      configAuthSupported: 'ConfigAuthSupported',
      configContentLimit: 'ConfigContentLimit',
      configSecretEnabled: 'ConfigSecretEnabled',
      configSecretSupported: 'ConfigSecretSupported',
      consoleUIEnabled: 'ConsoleUIEnabled',
      enable4lw: 'Enable4lw',
      eurekaSupported: 'EurekaSupported',
      extendedTypesEnable: 'ExtendedTypesEnable',
      initLimit: 'InitLimit',
      juteMaxbuffer: 'JuteMaxbuffer',
      jvmFlagsCustom: 'JvmFlagsCustom',
      MCPEnabled: 'MCPEnabled',
      MCPSupported: 'MCPSupported',
      maxClientCnxns: 'MaxClientCnxns',
      maxSessionTimeout: 'MaxSessionTimeout',
      minSessionTimeout: 'MinSessionTimeout',
      nacosRunningEnv: 'NacosRunningEnv',
      namingAuthEnabled: 'NamingAuthEnabled',
      namingAuthSupported: 'NamingAuthSupported',
      namingCreateServiceSupported: 'NamingCreateServiceSupported',
      openSuperAcl: 'OpenSuperAcl',
      passWord: 'PassWord',
      restartFlag: 'RestartFlag',
      snapshotCount: 'SnapshotCount',
      syncLimit: 'SyncLimit',
      TLSEnabled: 'TLSEnabled',
      tickTime: 'TickTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authEnabled: 'boolean',
      autopurgePurgeInterval: 'string',
      autopurgeSnapRetainCount: 'string',
      clusterName: 'string',
      configAuthEnabled: 'boolean',
      configAuthSupported: 'boolean',
      configContentLimit: 'number',
      configSecretEnabled: 'boolean',
      configSecretSupported: 'boolean',
      consoleUIEnabled: 'boolean',
      enable4lw: 'boolean',
      eurekaSupported: 'boolean',
      extendedTypesEnable: 'boolean',
      initLimit: 'string',
      juteMaxbuffer: 'string',
      jvmFlagsCustom: 'string',
      MCPEnabled: 'boolean',
      MCPSupported: 'boolean',
      maxClientCnxns: 'string',
      maxSessionTimeout: 'string',
      minSessionTimeout: 'string',
      nacosRunningEnv: QueryConfigResponseBodyDataNacosRunningEnv,
      namingAuthEnabled: 'boolean',
      namingAuthSupported: 'boolean',
      namingCreateServiceSupported: 'boolean',
      openSuperAcl: 'boolean',
      passWord: 'string',
      restartFlag: 'boolean',
      snapshotCount: 'string',
      syncLimit: 'string',
      TLSEnabled: 'boolean',
      tickTime: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.nacosRunningEnv && typeof (this.nacosRunningEnv as any).validate === 'function') {
      (this.nacosRunningEnv as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

