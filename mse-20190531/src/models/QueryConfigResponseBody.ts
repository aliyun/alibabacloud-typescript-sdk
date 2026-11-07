// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConfigResponseBodyDataNacosRunningEnvFencePolicy extends $dara.Model {
  enabledModules?: string[];
  interceptPolicy?: { [key: string]: string };
  /**
   * @example
   * query_security_check
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      enabledModules: 'enabledModules',
      interceptPolicy: 'interceptPolicy',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabledModules: { 'type': 'array', 'itemType': 'string' },
      interceptPolicy: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      serviceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.enabledModules)) {
      $dara.Model.validateArray(this.enabledModules);
    }
    if(this.interceptPolicy) {
      $dara.Model.validateMap(this.interceptPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConfigResponseBodyDataNacosRunningEnv extends $dara.Model {
  /**
   * @remarks
   * The switch for push-empty protection.
   * 
   * @example
   * true
   */
  emptyProtect?: boolean;
  fenceEnabled?: boolean;
  fencePolicy?: QueryConfigResponseBodyDataNacosRunningEnvFencePolicy;
  /**
   * @example
   * false
   */
  grayAuth?: string;
  static names(): { [key: string]: string } {
    return {
      emptyProtect: 'emptyProtect',
      fenceEnabled: 'fenceEnabled',
      fencePolicy: 'fencePolicy',
      grayAuth: 'grayAuth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emptyProtect: 'boolean',
      fenceEnabled: 'boolean',
      fencePolicy: QueryConfigResponseBodyDataNacosRunningEnvFencePolicy,
      grayAuth: 'string',
    };
  }

  validate() {
    if(this.fencePolicy && typeof (this.fencePolicy as any).validate === 'function') {
      (this.fencePolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The switch for ZooKeeper SASL-based forced identity authentication.
   * 
   * @example
   * true
   */
  authEnabled?: boolean;
  /**
   * @remarks
   * A reserved field.
   * 
   * @example
   * none
   */
  autopurgePurgeInterval?: string;
  /**
   * @remarks
   * A reserved field.
   * 
   * @example
   * none
   */
  autopurgeSnapRetainCount?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * name
   */
  clusterName?: string;
  /**
   * @remarks
   * The Nacos configuration. This parameter indicates whether RAM authentication is enabled for the configuration center. Valid values:
   * 
   * - `true`: enabled
   * 
   * - `false`: disabled
   * 
   * @example
   * true
   */
  configAuthEnabled?: boolean;
  /**
   * @remarks
   * The Nacos configuration. This parameter indicates whether the configuration center of the current cluster supports RAM authentication. Valid values:
   * 
   * - `true`: supported
   * 
   * - `false`: not supported
   * 
   * @example
   * true
   */
  configAuthSupported?: boolean;
  /**
   * @remarks
   * The maximum size of the content of a single configuration. Unit: KB.
   * 
   * @example
   * 100
   */
  configContentLimit?: number;
  /**
   * @remarks
   * The Nacos configuration. This parameter indicates whether configuration encryption is enabled for the cluster. Valid values:
   * 
   * - `true`: enabled
   * 
   * - `false`: disabled
   * 
   * @example
   * true
   */
  configSecretEnabled?: boolean;
  /**
   * @remarks
   * The Nacos configuration. This parameter indicates whether the cluster supports configuration encryption. Valid values:
   * 
   * - `true`: supported
   * 
   * - `false`: not supported
   * 
   * @example
   * true
   */
  configSecretSupported?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the Nacos open source console.
   * 
   * @example
   * true
   */
  consoleUIEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the four-letter words command.
   * 
   * @example
   * true
   */
  enable4lw?: boolean;
  /**
   * @remarks
   * Specifies whether to enable port 8761 for access to the Eureka protocol. If you disable this port, applications cannot use the Eureka protocol for service registration and discovery.
   * 
   * @example
   * true
   */
  eurekaSupported?: boolean;
  /**
   * @remarks
   * The ZooKeeper parameter that specifies whether to enable the TTL configuration.
   * 
   * @example
   * true
   */
  extendedTypesEnable?: boolean;
  /**
   * @remarks
   * The ZooKeeper configuration. This parameter indicates the maximum connection duration of an instance. Unit: seconds.
   * 
   * @example
   * 100
   */
  initLimit?: string;
  /**
   * @remarks
   * The ZooKeeper configuration. This parameter indicates the maximum data size of each node. Unit: bytes.
   * 
   * @example
   * 1
   */
  juteMaxbuffer?: string;
  /**
   * @remarks
   * A reserved field.
   * 
   * @example
   * none
   */
  jvmFlagsCustom?: string;
  /**
   * @remarks
   * The Nacos configuration. This parameter indicates whether Mesh Configuration Protocol (MCP) is enabled. Valid values:
   * 
   * - `true`: enabled
   * 
   * - `false`: disabled
   * 
   * @example
   * true
   */
  MCPEnabled?: boolean;
  /**
   * @remarks
   * The Nacos configuration. This parameter indicates whether MCP is supported. Valid values:
   * 
   * - `true`: supported
   * 
   * - `false`: not supported
   * 
   * @example
   * true
   */
  MCPSupported?: boolean;
  /**
   * @remarks
   * The ZooKeeper configuration. This parameter indicates the number of connections between a client and a server.<br>
   * If this parameter is set to 0, no limit is imposed.<br>
   * 
   * @example
   * 0
   */
  maxClientCnxns?: string;
  /**
   * @remarks
   * The ZooKeeper configuration. This parameter indicates the maximum timeout duration.
   * 
   * @example
   * -1
   */
  maxSessionTimeout?: string;
  /**
   * @remarks
   * The ZooKeeper configuration. This parameter indicates the minimum timeout duration.
   * 
   * @example
   * -1
   */
  minSessionTimeout?: string;
  /**
   * @remarks
   * The runtime configuration of Nacos.
   */
  nacosRunningEnv?: QueryConfigResponseBodyDataNacosRunningEnv;
  /**
   * @remarks
   * The Nacos configuration. This parameter indicates whether RAM authentication is enabled for the service registry. Valid values:
   * 
   * - `true`: enabled
   * 
   * - `false`: disabled
   * 
   * @example
   * false
   */
  namingAuthEnabled?: boolean;
  /**
   * @remarks
   * The Nacos configuration. This parameter indicates whether the cluster supports RAM authentication for services. Valid values:
   * 
   * - `true`: supported
   * 
   * - `false`: not supported
   * 
   * @example
   * true
   */
  namingAuthSupported?: boolean;
  /**
   * @remarks
   * The Nacos configuration. This parameter indicates whether the cluster supports service creation. Valid values:
   * 
   * - `true`: supported
   * 
   * - `false`: not supported
   * 
   * @example
   * true
   */
  namingCreateServiceSupported?: boolean;
  /**
   * @remarks
   * The ZooKeeper configuration. This parameter indicates whether the super permission is enabled. Valid values:
   * 
   * - `true`: enabled
   * 
   * - `false`: disabled
   * 
   * @example
   * true
   */
  openSuperAcl?: boolean;
  /**
   * @remarks
   * The password. This parameter is returned only when OpenSuperAcl is set to true.
   * 
   * @example
   * password
   */
  passWord?: string;
  /**
   * @example
   * true
   */
  prometheusSdProtocolEnabled?: string;
  /**
   * @remarks
   * Indicates whether the cluster is restarted and the new configuration is applied. Valid values:
   * 
   * - `true`: The cluster is restarted.
   * 
   * - `false`: The cluster fails to be restarted.
   * 
   * @example
   * true
   */
  restartFlag?: boolean;
  /**
   * @remarks
   * The ZooKeeper configuration. This parameter indicates the frequency of generating snapshots.
   * 
   * @example
   * 100000
   */
  snapshotCount?: string;
  /**
   * @remarks
   * The ZooKeeper configuration. This parameter indicates the connection timeout duration of an instance. Unit: seconds.
   * 
   * @example
   * 10
   */
  syncLimit?: string;
  /**
   * @remarks
   * MSE Nacos instances of version 2.1.2.1 or later support Transport Layer Security (TLS) encryption. The version of the Nacos client must be 2.2.1 or later. After you enable TLS, the performance may decrease by about 10%. You must evaluate the system capacity. For more information about the operations, see Nacos TLS transport encryption.
   * 
   * @example
   * true
   */
  TLSEnabled?: boolean;
  /**
   * @remarks
   * The ZooKeeper configuration. This parameter indicates a unit of time in the engine. The default value is 2000. Unit: milliseconds.
   * 
   * @example
   * 2000
   */
  tickTime?: string;
  /**
   * @remarks
   * The username. This parameter is returned only when OpenSuperAcl is set to true.
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
      prometheusSdProtocolEnabled: 'PrometheusSdProtocolEnabled',
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
      prometheusSdProtocolEnabled: 'string',
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

export class QueryConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data overview.
   */
  data?: QueryConfigResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request is processed successfully.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8BD1E58D-0755-42AC-A599-E6B55112EC53
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: QueryConfigResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

