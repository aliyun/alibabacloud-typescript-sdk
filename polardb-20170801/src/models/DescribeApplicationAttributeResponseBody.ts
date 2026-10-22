// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationAttributeResponseBodyComponentsSecurityGroups extends $dara.Model {
  /**
   * @remarks
   * The network type. Valid values: 
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
   * The name of the IP address group. Default value: `default`.
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
   * The whitelist IP addresses, separated by commas.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The network type of the whitelist IP addresses. Default value: `mix`.
   * 
   * @example
   * mix
   */
  securityIPNetType?: string;
  /**
   * @remarks
   * The type of the IP address.
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
   * The list of topology child node IDs for the current application subcomponent, or the list of subcomponent types of the child nodes.
   */
  children?: string[];
  /**
   * @remarks
   * The topology layer of the topology information for the current application subcomponent.
   * 
   * @example
   * 0
   */
  layer?: string;
  /**
   * @remarks
   * The list of topology parent node IDs for the current application subcomponent, or the list of subcomponent types of the parent nodes.
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
   * The specifications of the application subcomponent.
   * 
   * @example
   * polar.app.g2.medium
   */
  componentClass?: string;
  /**
   * @remarks
   * The description of the application subcomponent specifications.
   * 
   * @example
   * 2C4GB
   */
  componentClassDescription?: string;
  /**
   * @remarks
   * The subcomponent ID.
   * 
   * @example
   * pac-*******************
   */
  componentId?: string;
  /**
   * @remarks
   * The maximum number of replicas for the application subcomponent.
   * 
   * @example
   * 1
   */
  componentMaxReplica?: number;
  /**
   * @remarks
   * The number of replicas for the application subcomponent.
   * 
   * @example
   * 1
   */
  componentReplica?: number;
  /**
   * @remarks
   * The replica group name of the application subcomponent.
   * 
   * @example
   * default
   */
  componentReplicaGroupName?: string;
  /**
   * @remarks
   * The type of the application subcomponent.
   * 
   * @example
   * gateway
   */
  componentType?: string;
  /**
   * @remarks
   * The list of security groups at the subcomponent level.
   * 
   * If the security groups at the subcomponent level are the same as those at the application level, this return value is omitted.
   */
  securityGroups?: DescribeApplicationAttributeResponseBodyComponentsSecurityGroups[];
  /**
   * @remarks
   * The list of whitelist IP addresses at the subcomponent level.
   * 
   * If the whitelist at the subcomponent level is the same as that at the application level, this return value is omitted.
   */
  securityIPArrays?: DescribeApplicationAttributeResponseBodyComponentsSecurityIPArrays[];
  /**
   * @remarks
   * The component status. The valid values are the same as the application status.
   * 
   * @example
   * Activated
   */
  status?: string;
  /**
   * @remarks
   * The topology information of the application subcomponent.
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

export class DescribeApplicationAttributeResponseBodyDnatMappings extends $dara.Model {
  /**
   * @remarks
   * The access address in the NatIp:FrontPort format, which can be directly used on the office network.
   * 
   * @example
   * 10.64.0.10:10001
   */
  accessAddress?: string;
  /**
   * @remarks
   * The backend service port.
   * 
   * @example
   * 8787
   */
  backendPort?: number;
  /**
   * @remarks
   * The DNAT entry ID.
   * 
   * @example
   * fwd-xxx
   */
  entryId?: string;
  /**
   * @remarks
   * The frontend port.
   * 
   * @example
   * 10001
   */
  frontPort?: number;
  /**
   * @remarks
   * The port name. Valid values: webui, hermesagent, dashboard, and ssh.
   * 
   * @example
   * webui
   */
  portName?: string;
  /**
   * @remarks
   * The entry status.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessAddress: 'AccessAddress',
      backendPort: 'BackendPort',
      entryId: 'EntryId',
      frontPort: 'FrontPort',
      portName: 'PortName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessAddress: 'string',
      backendPort: 'number',
      entryId: 'string',
      frontPort: 'number',
      portName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAttributeResponseBodyEndpoints extends $dara.Model {
  /**
   * @remarks
   * The description of the endpoint.
   * 
   * @example
   * myendpoint
   */
  description?: string;
  /**
   * @remarks
   * The domain name of the application endpoint.
   */
  domain?: string;
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
   * - Private: VPC address.
   * - Public: Internet address.
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
      domain: 'Domain',
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
      domain: 'string',
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

export class DescribeApplicationAttributeResponseBodyMemApplicationAttributeSessionStore extends $dara.Model {
  /**
   * @remarks
   * The account source. Valid values: reuse_vector, existing. This parameter is returned only when the status is ENABLED.
   * 
   * @example
   * existing
   */
  accountMode?: string;
  /**
   * @remarks
   * The ID of the PolarDB cluster used for session storage. This parameter is returned only when the status is ENABLED.
   * 
   * @example
   * pc-xxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the session database. This parameter is returned only when the status is ENABLED.
   * 
   * @example
   * contextdb_example
   */
  DBName?: string;
  /**
   * @remarks
   * The session storage status. Valid values: DISABLED, ENABLING, ENABLED, DISABLING.
   * 
   * @example
   * ENABLED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountMode: 'AccountMode',
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountMode: 'string',
      DBClusterId: 'string',
      DBName: 'string',
      status: 'string',
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
   * The embedder model name.
   * 
   * @example
   * text-embedding-v4
   */
  embedderModelName?: string;
  /**
   * @remarks
   * The graph LLM model support.
   * 
   * @example
   * qwen3-max
   */
  graphLlmModelName?: string;
  /**
   * @remarks
   * The LLM model name.
   * 
   * @example
   * qwen3-max
   */
  llmModelName?: string;
  /**
   * @remarks
   * The currently active memory type.
   * 
   * @example
   * MULTIMODAL_TEXT
   */
  memoryType?: string;
  /**
   * @remarks
   * Indicates whether multimodal capabilities are currently enabled.
   * 
   * @example
   * true
   */
  multimodalEnabled?: boolean;
  /**
   * @remarks
   * The project name, which corresponds to the schema where project data is stored in the database.
   * 
   * @example
   * test-project-name
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the Reranker model.
   * 
   * @example
   * qwen3-rerank
   */
  rerankerModelName?: string;
  /**
   * @remarks
   * The Mem0 full session information storage configuration.
   */
  sessionStore?: DescribeApplicationAttributeResponseBodyMemApplicationAttributeSessionStore;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test-user
   */
  userName?: string;
  /**
   * @remarks
   * The current VisualEmbedder dimensions.
   * 
   * @example
   * 2560
   */
  visualEmbedderDimensions?: number;
  /**
   * @remarks
   * The current VisualEmbedder model.
   * 
   * @example
   * qwen3.7-text-embedding
   */
  visualEmbedderModelName?: string;
  /**
   * @remarks
   * The currently enabled understanding modalities.
   */
  visualLlmModalities?: string[];
  /**
   * @remarks
   * The current VisualLLM model.
   * 
   * @example
   * qwen3.6-flash
   */
  visualLlmModelName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      embedderModelName: 'EmbedderModelName',
      graphLlmModelName: 'GraphLlmModelName',
      llmModelName: 'LlmModelName',
      memoryType: 'MemoryType',
      multimodalEnabled: 'MultimodalEnabled',
      projectName: 'ProjectName',
      rerankerModelName: 'RerankerModelName',
      sessionStore: 'SessionStore',
      userName: 'UserName',
      visualEmbedderDimensions: 'VisualEmbedderDimensions',
      visualEmbedderModelName: 'VisualEmbedderModelName',
      visualLlmModalities: 'VisualLlmModalities',
      visualLlmModelName: 'VisualLlmModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      embedderModelName: 'string',
      graphLlmModelName: 'string',
      llmModelName: 'string',
      memoryType: 'string',
      multimodalEnabled: 'boolean',
      projectName: 'string',
      rerankerModelName: 'string',
      sessionStore: DescribeApplicationAttributeResponseBodyMemApplicationAttributeSessionStore,
      userName: 'string',
      visualEmbedderDimensions: 'number',
      visualEmbedderModelName: 'string',
      visualLlmModalities: { 'type': 'array', 'itemType': 'string' },
      visualLlmModelName: 'string',
    };
  }

  validate() {
    if(this.sessionStore && typeof (this.sessionStore as any).validate === 'function') {
      (this.sessionStore as any).validate();
    }
    if(Array.isArray(this.visualLlmModalities)) {
      $dara.Model.validateArray(this.visualLlmModalities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAttributeResponseBodyPolarClawApplicationAttributeLangfuseBinding extends $dara.Model {
  /**
   * @remarks
   * The effective period of the attachment. The value is a UNIX timestamp.
   * 
   * @example
   * 1788771141
   */
  activatedAt?: number;
  /**
   * @remarks
   * Langfuse API Key ID
   * 
   * @example
   * api-key-xxx
   */
  apiKeyId?: string;
  /**
   * @remarks
   * The ID of the binding task.
   * 
   * @example
   * 387
   */
  bindingTaskId?: number;
  /**
   * @remarks
   * The Langfuse application ID.
   * 
   * @example
   * pa-xxx
   */
  langfuseApplicationId?: string;
  /**
   * @remarks
   * The binding phase.
   * 
   * @example
   * ACTIVE
   */
  phase?: string;
  /**
   * @remarks
   * The Langfuse project ID.
   * 
   * @example
   * project-xxx
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      activatedAt: 'ActivatedAt',
      apiKeyId: 'ApiKeyId',
      bindingTaskId: 'BindingTaskId',
      langfuseApplicationId: 'LangfuseApplicationId',
      phase: 'Phase',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activatedAt: 'number',
      apiKeyId: 'string',
      bindingTaskId: 'number',
      langfuseApplicationId: 'string',
      phase: 'string',
      projectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAttributeResponseBodyPolarClawApplicationAttribute extends $dara.Model {
  /**
   * @remarks
   * The Langfuse binding information.
   */
  langfuseBinding?: DescribeApplicationAttributeResponseBodyPolarClawApplicationAttributeLangfuseBinding;
  static names(): { [key: string]: string } {
    return {
      langfuseBinding: 'LangfuseBinding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      langfuseBinding: DescribeApplicationAttributeResponseBodyPolarClawApplicationAttributeLangfuseBinding,
    };
  }

  validate() {
    if(this.langfuseBinding && typeof (this.langfuseBinding as any).validate === 'function') {
      (this.langfuseBinding as any).validate();
    }
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
   * The list of authentication providers for the application.
   */
  authProviders?: string[];
  /**
   * @remarks
   * The Supabase cluster identifier.
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
   * The network type. Valid values: 
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
   * The name of the IP address group. Default value: `default`.
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
   * The whitelist IP addresses, separated by commas.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The network type of the whitelist IP addresses. Default value: `mix`.
   * 
   * @example
   * mix
   */
  securityIPNetType?: string;
  /**
   * @remarks
   * The type of the IP address.
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
   * The storage performance level (PL).
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
   * The CPU architecture. Valid values:
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
   * The list of subcomponents.
   */
  components?: DescribeApplicationAttributeResponseBodyComponents[];
  /**
   * @remarks
   * The creation time.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2025-03-25T09:37:10Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The PolarDB instance ID on which the application depends.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * myapp
   */
  description?: string;
  /**
   * @remarks
   * The NAT mapping: the list of DNAT mapping entries.
   */
  dnatMappings?: DescribeApplicationAttributeResponseBodyDnatMappings[];
  /**
   * @remarks
   * The list of endpoints for the application.
   */
  endpoints?: DescribeApplicationAttributeResponseBodyEndpoints[];
  /**
   * @remarks
   * The expiration time.
   * 
   * This parameter is empty when the billing method is pay-as-you-go.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
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
   * Indicates whether the application is of the latest version.
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
   * - Unlock: unlocked.
   * - Lock: locked.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The end time of the maintenance window.
   * 
   * The time is displayed in UTC in the HH:mmZ format.
   * 
   * @example
   * 19:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window.
   * 
   * The time is displayed in UTC in the HH:mmZ format.
   * 
   * @example
   * 18:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The Mem0 application attributes.
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
   * The NAT gateway ID.
   * 
   * @example
   * pc-xxx
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The NAT mapping: the SNAT IP address bound to the vSwitch where the application resides. This refers to a customer-managed SNAT entry that is discovered and returned in real time by the control plane, and is unrelated to the SNAT of the Internet NAT gateway.
   * 
   * @example
   * 10.64.0.20
   */
  natMappingSnatIpAddress?: string;
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
   * The PolarClaw application attributes.
   */
  polarClawApplicationAttribute?: DescribeApplicationAttributeResponseBodyPolarClawApplicationAttribute;
  /**
   * @remarks
   * The PolarClaw SaaS application attributes.
   */
  polarClawSaaSApplicationAttribute?: DescribeApplicationAttributeResponseBodyPolarClawSaaSApplicationAttribute;
  /**
   * @remarks
   * The instance ID of the PolarFS Cold Storage Edition or High-performance Edition.
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
   * The list of application-level security groups.
   */
  securityGroups?: DescribeApplicationAttributeResponseBodySecurityGroups[];
  /**
   * @remarks
   * The list of application-level whitelists.
   */
  securityIPArrays?: DescribeApplicationAttributeResponseBodySecurityIPArrays[];
  /**
   * @remarks
   * The Serverless type. Valid values:
   * - 2: Agile.
   * - 3: Stable.
   * 
   * @example
   * 2
   */
  serverlessType?: string;
  /**
   * @remarks
   * The SNAT status. Valid values: on, off.
   * 
   * @example
   * off
   */
  snatStatus?: string;
  /**
   * @remarks
   * The application status. Valid values:
   * - Creating: The application is being created.
   * - Activated: The application is running.
   * - Maintaining: The application is under maintenance.
   * - ClassChanging: The application configuration is being changed.
   * - Transing: The application is being migrated.
   * - MinorVersionUpgrading: The minor version of the application is being upgraded.
   * - NetCreating: The endpoint of the application is being created.
   * - NetDeleting: The endpoint of the application is being deleted.
   * - NetModifying: The endpoint of the application is being modified.
   * - Restarting: The application is being restarted.
   * - Locking: The application is being locked.
   * - Locked: The application is locked.
   * - Unlocking: The application is being unlocked.
   * - Deleting: The application is being deleted.
   * 
   * @example
   * Activated
   */
  status?: string;
  /**
   * @remarks
   * The storage resource description.
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
   * VPC ID
   * 
   * @example
   * vpc-*******************
   */
  VPCId?: string;
  /**
   * @remarks
   * VSwitch ID
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
   * The NAT mapping: the customer-managed VPC NAT gateway ID.
   * 
   * @example
   * ngw-xxx
   */
  vpcNatGatewayId?: string;
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
      dnatMappings: 'DnatMappings',
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
      natMappingSnatIpAddress: 'NatMappingSnatIpAddress',
      payType: 'PayType',
      polarClawApplicationAttribute: 'PolarClawApplicationAttribute',
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
      vpcNatGatewayId: 'VpcNatGatewayId',
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
      dnatMappings: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodyDnatMappings },
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
      natMappingSnatIpAddress: 'string',
      payType: 'string',
      polarClawApplicationAttribute: DescribeApplicationAttributeResponseBodyPolarClawApplicationAttribute,
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
      vpcNatGatewayId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(Array.isArray(this.dnatMappings)) {
      $dara.Model.validateArray(this.dnatMappings);
    }
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    if(this.memApplicationAttribute && typeof (this.memApplicationAttribute as any).validate === 'function') {
      (this.memApplicationAttribute as any).validate();
    }
    if(this.polarClawApplicationAttribute && typeof (this.polarClawApplicationAttribute as any).validate === 'function') {
      (this.polarClawApplicationAttribute as any).validate();
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

