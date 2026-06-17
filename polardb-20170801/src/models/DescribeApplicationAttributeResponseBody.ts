// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationAttributeResponseBodyComponentsSecurityGroups extends $dara.Model {
  /**
   * @remarks
   * The network type. The value is:
   * 
   * - vpc
   * 
   * @example
   * vpc
   */
  netType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-*******************
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The security group name.
   * 
   * @example
   * MyGroupName
   */
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      netType: 'NetType',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netType: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAttributeResponseBodyComponentsSecurityIPArrays extends $dara.Model {
  /**
   * @remarks
   * The name of the IP address group. The default value is `default`.
   * 
   * @example
   * default
   */
  securityIPArrayName?: string;
  /**
   * @remarks
   * The tag of the IP address group.
   * 
   * @example
   * mytag
   */
  securityIPArrayTag?: string;
  /**
   * @remarks
   * The whitelisted IP addresses, separated by commas.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The network type of the whitelisted IP addresses. The default value is `mix`.
   * 
   * @example
   * mix
   */
  securityIPNetType?: string;
  /**
   * @remarks
   * The IP address type.
   * 
   * @example
   * ipv4
   */
  securityIPType?: string;
  static names(): { [key: string]: string } {
    return {
      securityIPArrayName: 'SecurityIPArrayName',
      securityIPArrayTag: 'SecurityIPArrayTag',
      securityIPList: 'SecurityIPList',
      securityIPNetType: 'SecurityIPNetType',
      securityIPType: 'SecurityIPType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIPArrayName: 'string',
      securityIPArrayTag: 'string',
      securityIPList: 'string',
      securityIPNetType: 'string',
      securityIPType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAttributeResponseBodyComponentsTopology extends $dara.Model {
  /**
   * @remarks
   * The IDs or component types of the child nodes for this child component.
   */
  children?: string[];
  /**
   * @remarks
   * The topology layer of the child component.
   * 
   * @example
   * 0
   */
  layer?: string;
  /**
   * @remarks
   * The IDs or component types of the parent nodes for this child component.
   */
  parents?: string[];
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      layer: 'Layer',
      parents: 'Parents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': 'string' },
      layer: 'string',
      parents: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    if(Array.isArray(this.parents)) {
      $dara.Model.validateArray(this.parents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAttributeResponseBodyComponents extends $dara.Model {
  /**
   * @remarks
   * The class of the child component.
   * 
   * @example
   * polar.app.g2.medium
   */
  componentClass?: string;
  /**
   * @remarks
   * The description of the child component\\"s class.
   * 
   * @example
   * 2C4GB
   */
  componentClassDescription?: string;
  /**
   * @remarks
   * The child component ID.
   * 
   * @example
   * pac-*******************
   */
  componentId?: string;
  /**
   * @remarks
   * The maximum number of replicas for the child component.
   * 
   * @example
   * 1
   */
  componentMaxReplica?: number;
  /**
   * @remarks
   * The number of replicas of the child component.
   * 
   * @example
   * 1
   */
  componentReplica?: number;
  /**
   * @remarks
   * The group name of the child component replicas.
   * 
   * @example
   * default
   */
  componentReplicaGroupName?: string;
  /**
   * @remarks
   * The type of the child component.
   * 
   * @example
   * gateway
   */
  componentType?: string;
  /**
   * @remarks
   * The component-level security groups.
   * 
   * This parameter is not returned if the component-level security groups are the same as the application-level security groups.
   */
  securityGroups?: DescribeApplicationAttributeResponseBodyComponentsSecurityGroups[];
  /**
   * @remarks
   * The component-level whitelists.
   * 
   * This parameter is not returned if the component-level whitelists are the same as the application-level whitelists.
   */
  securityIPArrays?: DescribeApplicationAttributeResponseBodyComponentsSecurityIPArrays[];
  /**
   * @remarks
   * The component status. The valid values are the same as those for the application status.
   * 
   * @example
   * Activated
   */
  status?: string;
  /**
   * @remarks
   * The topology of the child component.
   */
  topology?: DescribeApplicationAttributeResponseBodyComponentsTopology;
  static names(): { [key: string]: string } {
    return {
      componentClass: 'ComponentClass',
      componentClassDescription: 'ComponentClassDescription',
      componentId: 'ComponentId',
      componentMaxReplica: 'ComponentMaxReplica',
      componentReplica: 'ComponentReplica',
      componentReplicaGroupName: 'ComponentReplicaGroupName',
      componentType: 'ComponentType',
      securityGroups: 'SecurityGroups',
      securityIPArrays: 'SecurityIPArrays',
      status: 'Status',
      topology: 'Topology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentClass: 'string',
      componentClassDescription: 'string',
      componentId: 'string',
      componentMaxReplica: 'number',
      componentReplica: 'number',
      componentReplicaGroupName: 'string',
      componentType: 'string',
      securityGroups: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodyComponentsSecurityGroups },
      securityIPArrays: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodyComponentsSecurityIPArrays },
      status: 'string',
      topology: DescribeApplicationAttributeResponseBodyComponentsTopology,
    };
  }

  validate() {
    if(Array.isArray(this.securityGroups)) {
      $dara.Model.validateArray(this.securityGroups);
    }
    if(Array.isArray(this.securityIPArrays)) {
      $dara.Model.validateArray(this.securityIPArrays);
    }
    if(this.topology && typeof (this.topology as any).validate === 'function') {
      (this.topology as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAttributeResponseBodyEndpoints extends $dara.Model {
  /**
   * @remarks
   * The endpoint description.
   * 
   * @example
   * myendpoint
   */
  description?: string;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * pa-**************
   */
  endpointId?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 172.31.95.252
   */
  IP?: string;
  /**
   * @remarks
   * The endpoint type. Valid values:
   * 
   * - Private: a VPC endpoint
   * 
   * - Public: a public endpoint
   * 
   * @example
   * Private
   */
  netType?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 8080
   */
  port?: string;
  /**
   * @remarks
   * The port description.
   * 
   * @example
   * kong_http
   */
  portDescription?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      endpointId: 'EndpointId',
      IP: 'IP',
      netType: 'NetType',
      port: 'Port',
      portDescription: 'PortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endpointId: 'string',
      IP: 'string',
      netType: 'string',
      port: 'string',
      portDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAttributeResponseBodyMemApplicationAttribute extends $dara.Model {
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * test-database-name
   */
  dbName?: string;
  /**
   * @remarks
   * The name of the embedder model.
   * 
   * @example
   * text-embedding-v4
   */
  embedderModelName?: string;
  /**
   * @remarks
   * The name of the graph LLM model.
   * 
   * @example
   * qwen3-max
   */
  graphLlmModelName?: string;
  /**
   * @remarks
   * The name of the LLM model.
   * 
   * @example
   * qwen3-max
   */
  llmModelName?: string;
  /**
   * @remarks
   * The project name. It corresponds to the database schema where project data is stored.
   * 
   * @example
   * test-project-name
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the reranker model.
   * 
   * @example
   * qwen3-rerank
   */
  rerankerModelName?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test-user
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      embedderModelName: 'EmbedderModelName',
      graphLlmModelName: 'GraphLlmModelName',
      llmModelName: 'LlmModelName',
      projectName: 'ProjectName',
      rerankerModelName: 'RerankerModelName',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      embedderModelName: 'string',
      graphLlmModelName: 'string',
      llmModelName: 'string',
      projectName: 'string',
      rerankerModelName: 'string',
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

export class DescribeApplicationAttributeResponseBodyPolarClawSaaSApplicationAttribute extends $dara.Model {
  /**
   * @remarks
   * The authentication callback URL.
   * 
   * @example
   * http://8.xxx.xxx.xxx.xxx/xxx
   */
  authCallbackURL?: string;
  /**
   * @remarks
   * The enabled authentication providers.
   */
  authProviders?: string[];
  /**
   * @remarks
   * The Supabase cluster ID.
   * 
   * @example
   * pa-**************
   */
  supabaseClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      authCallbackURL: 'AuthCallbackURL',
      authProviders: 'AuthProviders',
      supabaseClusterId: 'SupabaseClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCallbackURL: 'string',
      authProviders: { 'type': 'array', 'itemType': 'string' },
      supabaseClusterId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authProviders)) {
      $dara.Model.validateArray(this.authProviders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAttributeResponseBodySecurityGroups extends $dara.Model {
  /**
   * @remarks
   * The network type. The value is:
   * 
   * - vpc
   * 
   * @example
   * vpc
   */
  netType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-**************
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The security group name.
   * 
   * @example
   * MyGroupName
   */
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      netType: 'NetType',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netType: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAttributeResponseBodySecurityIPArrays extends $dara.Model {
  /**
   * @remarks
   * The name of the IP address group. The default value is `default`.
   * 
   * @example
   * default
   */
  securityIPArrayName?: string;
  /**
   * @remarks
   * The tag of the IP address group.
   * 
   * @example
   * mytag
   */
  securityIPArrayTag?: string;
  /**
   * @remarks
   * The whitelisted IP addresses, separated by commas.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The network type of the whitelisted IP addresses. The default value is `mix`.
   * 
   * @example
   * mix
   */
  securityIPNetType?: string;
  /**
   * @remarks
   * The IP address type.
   * 
   * @example
   * ipv4
   */
  securityIPType?: string;
  static names(): { [key: string]: string } {
    return {
      securityIPArrayName: 'SecurityIPArrayName',
      securityIPArrayTag: 'SecurityIPArrayTag',
      securityIPList: 'SecurityIPList',
      securityIPNetType: 'SecurityIPNetType',
      securityIPType: 'SecurityIPType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIPArrayName: 'string',
      securityIPArrayTag: 'string',
      securityIPList: 'string',
      securityIPNetType: 'string',
      securityIPType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAttributeResponseBodyStorages extends $dara.Model {
  /**
   * @remarks
   * The storage capacity.
   * 
   * @example
   * 20Gi
   */
  storageCapacity?: string;
  /**
   * @remarks
   * The storage instance ID.
   * 
   * @example
   * pa-**************
   */
  storageInstanceId?: string;
  /**
   * @remarks
   * The storage performance level.
   * 
   * @example
   * PL0
   */
  storagePerformanceLevel?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * essd
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      storageCapacity: 'StorageCapacity',
      storageInstanceId: 'StorageInstanceId',
      storagePerformanceLevel: 'StoragePerformanceLevel',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageCapacity: 'string',
      storageInstanceId: 'string',
      storagePerformanceLevel: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * supabase
   */
  applicationType?: string;
  /**
   * @remarks
   * The CPU architecture. The value is:
   * 
   * - `x86`
   * 
   * @example
   * x86
   */
  architecture?: string;
  /**
   * @remarks
   * Indicates whether SNAT can be disabled.
   */
  canDisableSnat?: boolean;
  /**
   * @remarks
   * The child components.
   */
  components?: DescribeApplicationAttributeResponseBodyComponents[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-03-25T09:37:10Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the PolarDB instance that the application depends on.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The application description.
   * 
   * @example
   * myapp
   */
  description?: string;
  /**
   * @remarks
   * The application endpoints.
   */
  endpoints?: DescribeApplicationAttributeResponseBodyEndpoints[];
  /**
   * @remarks
   * The expiration time.
   * 
   * This parameter is not returned for Postpaid instances.
   * 
   * @example
   * 2025-06-25T09:37:10Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the application has expired.
   * 
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @remarks
   * Indicates whether the application is the latest version.
   * 
   * @example
   * true
   */
  isLatestVersion?: boolean;
  /**
   * @remarks
   * The latest version number.
   * 
   * @example
   * v2026.3.13-1#20260320
   */
  latestVersion?: string;
  /**
   * @remarks
   * The lock mode. Valid values:
   * 
   * - Unlock: The application is not locked.
   * 
   * - Lock: The application is locked.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The maintenance end time.
   * 
   * @example
   * 19:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The maintenance start time.
   * 
   * @example
   * 18:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The attributes of the Mem0 application.
   */
  memApplicationAttribute?: DescribeApplicationAttributeResponseBodyMemApplicationAttribute;
  /**
   * @remarks
   * The minor version number.
   * 
   * @example
   * v2026.3.13-1#20260320
   */
  minorVersion?: string;
  /**
   * @remarks
   * The ID of the NAT Gateway.
   * 
   * @example
   * pc-xxx
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The attributes of the PolarClaw SaaS application.
   */
  polarClawSaaSApplicationAttribute?: DescribeApplicationAttributeResponseBodyPolarClawSaaSApplicationAttribute;
  /**
   * @remarks
   * The ID of the PolarFS Cold Storage or PolarFS High-performance instance.
   * 
   * @example
   * pfs-**************
   */
  polarFSInstanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
   */
  requestId?: string;
  /**
   * @remarks
   * The application-level security groups.
   */
  securityGroups?: DescribeApplicationAttributeResponseBodySecurityGroups[];
  /**
   * @remarks
   * The application-level whitelists.
   */
  securityIPArrays?: DescribeApplicationAttributeResponseBodySecurityIPArrays[];
  /**
   * @remarks
   * The Serverless type. Valid values:
   * 
   * - 2: Agile
   * 
   * - 3: Stable
   * 
   * @example
   * 2
   */
  serverlessType?: string;
  /**
   * @remarks
   * The SNAT status.
   * 
   * @example
   * off
   */
  snatStatus?: string;
  /**
   * @remarks
   * The application status. Valid values:
   * 
   * - Creating: The application is being created.
   * 
   * - Activated: The application is running.
   * 
   * - Maintaining: The application is being maintained.
   * 
   * - ClassChanging: The application configuration is being changed.
   * 
   * - Transing: The application is being migrated.
   * 
   * - MinorVersionUpgrading: The minor version of the application is being upgraded.
   * 
   * - NetCreating: The endpoint is being created.
   * 
   * - NetDeleting: The endpoint is being deleted.
   * 
   * - NetModifying: The endpoint is being modified.
   * 
   * - Restarting: The application is restarting.
   * 
   * - Locking: The application is being locked.
   * 
   * - Locked: The application is locked.
   * 
   * - Unlocking: The application is being unlocked.
   * 
   * - Deleting: The application is being deleted.
   * 
   * @example
   * Activated
   */
  status?: string;
  /**
   * @remarks
   * The details of the storage resources.
   */
  storages?: DescribeApplicationAttributeResponseBodyStorages[];
  /**
   * @remarks
   * Indicates whether an upgrade is available.
   * 
   * @example
   * false
   */
  upgradeAvailable?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-*******************
   */
  VPCId?: string;
  /**
   * @remarks
   * The VSwitch ID.
   * 
   * @example
   * vsw-*******************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing-l
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationType: 'ApplicationType',
      architecture: 'Architecture',
      canDisableSnat: 'CanDisableSnat',
      components: 'Components',
      creationTime: 'CreationTime',
      DBClusterId: 'DBClusterId',
      description: 'Description',
      endpoints: 'Endpoints',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      isLatestVersion: 'IsLatestVersion',
      latestVersion: 'LatestVersion',
      lockMode: 'LockMode',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      memApplicationAttribute: 'MemApplicationAttribute',
      minorVersion: 'MinorVersion',
      natGatewayId: 'NatGatewayId',
      payType: 'PayType',
      polarClawSaaSApplicationAttribute: 'PolarClawSaaSApplicationAttribute',
      polarFSInstanceId: 'PolarFSInstanceId',
      regionId: 'RegionId',
      requestId: 'RequestId',
      securityGroups: 'SecurityGroups',
      securityIPArrays: 'SecurityIPArrays',
      serverlessType: 'ServerlessType',
      snatStatus: 'SnatStatus',
      status: 'Status',
      storages: 'Storages',
      upgradeAvailable: 'UpgradeAvailable',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      version: 'Version',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationType: 'string',
      architecture: 'string',
      canDisableSnat: 'boolean',
      components: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodyComponents },
      creationTime: 'string',
      DBClusterId: 'string',
      description: 'string',
      endpoints: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodyEndpoints },
      expireTime: 'string',
      expired: 'boolean',
      isLatestVersion: 'boolean',
      latestVersion: 'string',
      lockMode: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      memApplicationAttribute: DescribeApplicationAttributeResponseBodyMemApplicationAttribute,
      minorVersion: 'string',
      natGatewayId: 'string',
      payType: 'string',
      polarClawSaaSApplicationAttribute: DescribeApplicationAttributeResponseBodyPolarClawSaaSApplicationAttribute,
      polarFSInstanceId: 'string',
      regionId: 'string',
      requestId: 'string',
      securityGroups: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodySecurityGroups },
      securityIPArrays: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodySecurityIPArrays },
      serverlessType: 'string',
      snatStatus: 'string',
      status: 'string',
      storages: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodyStorages },
      upgradeAvailable: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      version: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    if(this.memApplicationAttribute && typeof (this.memApplicationAttribute as any).validate === 'function') {
      (this.memApplicationAttribute as any).validate();
    }
    if(this.polarClawSaaSApplicationAttribute && typeof (this.polarClawSaaSApplicationAttribute as any).validate === 'function') {
      (this.polarClawSaaSApplicationAttribute as any).validate();
    }
    if(Array.isArray(this.securityGroups)) {
      $dara.Model.validateArray(this.securityGroups);
    }
    if(Array.isArray(this.securityIPArrays)) {
      $dara.Model.validateArray(this.securityIPArrays);
    }
    if(Array.isArray(this.storages)) {
      $dara.Model.validateArray(this.storages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

