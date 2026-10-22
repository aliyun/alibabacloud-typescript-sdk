// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationRequestAgenticDBBranchSpec extends $dara.Model {
  /**
   * @remarks
   * The ID of the AgenticDB branch.
   * 
   * @example
   * br-9054b3b7649e4c0d977bd0df37
   */
  branchId?: string;
  /**
   * @remarks
   * The ID of the AgenticDB cluster.
   * 
   * @example
   * pagc-2zea920mcvd5o87
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the source application.
   * 
   * @example
   * pa-source
   */
  forkFromApplicationId?: string;
  /**
   * @remarks
   * Specifies whether to create the application based on a specified AgenticDB branch.
   * 
   * @example
   * true
   */
  forkFromBranch?: boolean;
  /**
   * @remarks
   * The ID of the AgenticDB project.
   * 
   * @example
   * proj-d7849d0050664c758af795d468
   */
  projectId?: string;
  /**
   * @remarks
   * The ID of the AgenticDB tenant.
   * 
   * @example
   * t-cfc2d7df0e59439681f0087f51
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      branchId: 'BranchId',
      DBClusterId: 'DBClusterId',
      forkFromApplicationId: 'ForkFromApplicationId',
      forkFromBranch: 'ForkFromBranch',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchId: 'string',
      DBClusterId: 'string',
      forkFromApplicationId: 'string',
      forkFromBranch: 'boolean',
      projectId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequestComponents extends $dara.Model {
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
   * The maximum number of application subcomponents of the same specifications. Default value: the value of ComponentReplica.
   * - This parameter is supported only by raycluster.
   * 
   * @example
   * 1
   */
  componentMaxReplica?: number;
  /**
   * @remarks
   * The number of replicas for the application subcomponent. Default value: 1.
   * 
   * @example
   * 1
   */
  componentReplica?: number;
  /**
   * @remarks
   * The type of the application subcomponent.
   * For supabase, valid values:
   * - gateway
   * - backend
   * For raycluster, valid values:
   * - head
   * - worker
   * - gpuworker
   * 
   * @example
   * gateway
   */
  componentType?: string;
  /**
   * @remarks
   * The upper limit for component scaling.
   * 
   * @example
   * 16
   */
  scaleMax?: string;
  /**
   * @remarks
   * The lower limit for component scaling.
   * 
   * @example
   * 1
   */
  scaleMin?: string;
  /**
   * @remarks
   * The list of security groups for the application subcomponent. Separate multiple security group IDs with commas (,).
   * 
   * @example
   * sg-********************
   */
  securityGroups?: string;
  /**
   * @remarks
   * The name of the IP address whitelist group for the application subcomponent. Default value: default.
   * 
   * @example
   * default
   */
  securityIPArrayName?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist for the application subcomponent. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The type of the IP addresses in the whitelist for the application subcomponent. Default value: ipv4.
   * 
   * @example
   * ipv4
   */
  securityIPType?: string;
  static names(): { [key: string]: string } {
    return {
      componentClass: 'ComponentClass',
      componentMaxReplica: 'ComponentMaxReplica',
      componentReplica: 'ComponentReplica',
      componentType: 'ComponentType',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      securityGroups: 'SecurityGroups',
      securityIPArrayName: 'SecurityIPArrayName',
      securityIPList: 'SecurityIPList',
      securityIPType: 'SecurityIPType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentClass: 'string',
      componentMaxReplica: 'number',
      componentReplica: 'number',
      componentType: 'string',
      scaleMax: 'string',
      scaleMin: 'string',
      securityGroups: 'string',
      securityIPArrayName: 'string',
      securityIPList: 'string',
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

export class CreateApplicationRequestDnatEntries extends $dara.Model {
  /**
   * @remarks
   * The frontend port. This parameter is optional. By default, the system automatically assigns a port that is not occupied by the gateway. You can call the DescribeApplicationAttribute operation to query the assigned port.
   * 
   * @example
   * 10001
   */
  frontPort?: number;
  /**
   * @remarks
   * The name of the port. Valid values: webui, hermesagent, dashboard, and ssh.
   * 
   * @example
   * webui
   */
  portName?: string;
  static names(): { [key: string]: string } {
    return {
      frontPort: 'FrontPort',
      portName: 'PortName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontPort: 'number',
      portName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequestEndpoints extends $dara.Model {
  /**
   * @remarks
   * The remark of the service endpoint.
   * 
   * @example
   * my_endpoint
   */
  description?: string;
  /**
   * @remarks
   * The type of the service endpoint. Set the value to Primary.
   * 
   * @example
   * Primary
   */
  endpointType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      endpointType: 'EndpointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endpointType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequestKnowledgeApplicationSpec extends $dara.Model {
  /**
   * @remarks
   * The dashboard password.
   * 
   * @example
   * test-dashboard-password
   */
  dashboardPassword?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * test-user-password
   */
  dbPassword?: string;
  /**
   * @remarks
   * Required for knowledge applications. The name of the LLM model, such as qwen3-max.
   * 
   * @example
   * qwen3-max
   */
  llmModel?: string;
  static names(): { [key: string]: string } {
    return {
      dashboardPassword: 'DashboardPassword',
      dbPassword: 'DbPassword',
      llmModel: 'LlmModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardPassword: 'string',
      dbPassword: 'string',
      llmModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequestMemApplicationSpec extends $dara.Model {
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
   * The password.
   * 
   * @example
   * test-user-password
   */
  dbPassword?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test-user
   */
  dbUser?: string;
  /**
   * @remarks
   * Required for mem0 applications. The name of the embedder model, such as text-embedding-v4.
   * 
   * @example
   * text-embedding-v4
   */
  embedderModel?: string;
  /**
   * @remarks
   * The vector dimensions.
   * 
   * @example
   * 1024
   */
  embedderModelDimension?: number;
  /**
   * @remarks
   * The graph LLM model.
   * 
   * @example
   * qwen-plus
   */
  graphLlmModel?: string;
  /**
   * @remarks
   * Required for mem0 applications. The name of the LLM model, such as qwen3-max.
   * 
   * @example
   * qwen3-max
   */
  llmModel?: string;
  /**
   * @remarks
   * The memory type, such as multimodal.
   * 
   * @example
   * MULTIMODAL_TEXT
   */
  memoryType?: string;
  /**
   * @remarks
   * The instance ID of the PolarAI embedding model.
   * 
   * @example
   * pm-xxx
   */
  polarAIEmbedderInstanceId?: string;
  /**
   * @remarks
   * The instance ID of the PolarAI graph LLM model.
   * 
   * @example
   * pm-xxx
   */
  polarAIGraphLlmInstanceId?: string;
  /**
   * @remarks
   * The instance ID of the PolarAI LLM model.
   * 
   * @example
   * pm-xxx
   */
  polarAILlmInstanceId?: string;
  /**
   * @remarks
   * The instance ID of the PolarAI reranker model.
   * 
   * @example
   * pm-xxx
   */
  polarAIRerankerInstanceId?: string;
  /**
   * @remarks
   * The project name, which corresponds to the schema in the database where project data is stored.
   * 
   * @example
   * test-project-name
   */
  projectName?: string;
  /**
   * @remarks
   * Required for mem0 applications. The name of the reranker model, such as qwen3-rerank.
   * 
   * @example
   * qwen3-rerank
   */
  rerankerModel?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * 1
   */
  shard?: number;
  /**
   * @remarks
   * The name of the visual embedder model.
   * 
   * @example
   * qwen3.7-text-embedding
   */
  visualEmbedderModel?: string;
  /**
   * @remarks
   * The vector dimensions of the visual embedder.
   * 
   * @example
   * 2560
   */
  visualEmbedderModelDimension?: number;
  /**
   * @remarks
   * The list of modalities for the visual LLM, such as image.
   */
  visualLlmModalities?: string[];
  /**
   * @remarks
   * The name of the visual LLM model.
   * 
   * @example
   * qwen3.6-flash
   */
  visualLlmModel?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      dbPassword: 'DbPassword',
      dbUser: 'DbUser',
      embedderModel: 'EmbedderModel',
      embedderModelDimension: 'EmbedderModelDimension',
      graphLlmModel: 'GraphLlmModel',
      llmModel: 'LlmModel',
      memoryType: 'MemoryType',
      polarAIEmbedderInstanceId: 'PolarAIEmbedderInstanceId',
      polarAIGraphLlmInstanceId: 'PolarAIGraphLlmInstanceId',
      polarAILlmInstanceId: 'PolarAILlmInstanceId',
      polarAIRerankerInstanceId: 'PolarAIRerankerInstanceId',
      projectName: 'ProjectName',
      rerankerModel: 'RerankerModel',
      shard: 'Shard',
      visualEmbedderModel: 'VisualEmbedderModel',
      visualEmbedderModelDimension: 'VisualEmbedderModelDimension',
      visualLlmModalities: 'VisualLlmModalities',
      visualLlmModel: 'VisualLlmModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      dbPassword: 'string',
      dbUser: 'string',
      embedderModel: 'string',
      embedderModelDimension: 'number',
      graphLlmModel: 'string',
      llmModel: 'string',
      memoryType: 'string',
      polarAIEmbedderInstanceId: 'string',
      polarAIGraphLlmInstanceId: 'string',
      polarAILlmInstanceId: 'string',
      polarAIRerankerInstanceId: 'string',
      projectName: 'string',
      rerankerModel: 'string',
      shard: 'number',
      visualEmbedderModel: 'string',
      visualEmbedderModelDimension: 'number',
      visualLlmModalities: { 'type': 'array', 'itemType': 'string' },
      visualLlmModel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.visualLlmModalities)) {
      $dara.Model.validateArray(this.visualLlmModalities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * secret.gateway.auth.token
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * TK***
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequestStorages extends $dara.Model {
  /**
   * @remarks
   * The mount path in the container.
   * 
   * @example
   * /data/container
   */
  containerMountPath?: string;
  /**
   * @remarks
   * The ID of the storage endpoint.
   * 
   * @example
   * pe-xxxx
   */
  endpointId?: string;
  /**
   * @remarks
   * The mount path of the storage.
   * 
   * @example
   * /data/source
   */
  mountPath?: string;
  /**
   * @remarks
   * The storage capacity.
   * 
   * @example
   * 100
   */
  storageCapacity?: string;
  /**
   * @remarks
   * The access endpoint of the storage.
   * 
   * @example
   * polarfs.example.com
   */
  storageEndpoint?: string;
  /**
   * @remarks
   * The ID of the storage instance.
   * 
   * @example
   * pfs-xxxx
   */
  storageInstanceId?: string;
  /**
   * @remarks
   * The storage performance level.
   * 
   * @example
   * PL1
   */
  storagePerformanceLevel?: string;
  /**
   * @remarks
   * The type of the storage.
   * 
   * @example
   * oss
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      containerMountPath: 'ContainerMountPath',
      endpointId: 'EndpointId',
      mountPath: 'MountPath',
      storageCapacity: 'StorageCapacity',
      storageEndpoint: 'StorageEndpoint',
      storageInstanceId: 'StorageInstanceId',
      storagePerformanceLevel: 'StoragePerformanceLevel',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerMountPath: 'string',
      endpointId: 'string',
      mountPath: 'string',
      storageCapacity: 'string',
      storageEndpoint: 'string',
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

export class CreateApplicationRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * testValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated existing model operator instance. This parameter takes effect only when ApplicationType is set to polarclaw.
   * 
   * @example
   * pm-xxxxxx
   */
  AIDBClusterId?: string;
  /**
   * @remarks
   * The AgenticDB branch specifications.
   * 
   * @example
   * {"DBClusterId":"pagc-2zea920mcvd5o87","TenantId":"t-cfc2d7df0e59439681f0087f51","ProjectId":"proj-d7849d0050664c758af795d468","BranchId":"br-9054b3b7649e4c0d977bd0df37","ForkFromBranch":true,"ForkFromApplicationId":"pa-source"}
   */
  agenticDBBranchSpec?: CreateApplicationRequestAgenticDBBranchSpec;
  /**
   * @remarks
   * The ID of the AgenticDB cluster.
   * 
   * @example
   * pagc-xxx
   */
  agenticDBClusterId?: string;
  /**
   * @remarks
   * The application type. Valid values:
   * - supabase: Specify this value to create a managed Supabase application.
   * - raycluster: Specify this value to create a managed Ray Cluster application.
   * - polarclaw: Specify this value to create a managed PolarClaw application.
   * 
   * This parameter is required.
   * 
   * @example
   * supabase
   */
  applicationType?: string;
  /**
   * @remarks
   * The CPU architecture. Valid values:
   * - x86
   * 
   * This parameter is required.
   * 
   * @example
   * x86
   */
  architecture?: string;
  /**
   * @remarks
   * The authentication service provider.
   * 
   * @example
   * feishu
   */
  authProvider?: string;
  /**
   * @remarks
   * The authentication provider configuration.
   * 
   * @example
   * xxx
   */
  authProviderConfig?: string;
  /**
   * @remarks
   * Specifies whether to automatically create and attach an EIP.
   */
  autoAllocatePublicEip?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically create a Polarlakebase Cold Storage Edition instance. Valid values:
   * * false (default): Do not automatically create the instance.
   * * true: Automatically create the instance.
   * 
   * @example
   * false
   */
  autoCreatePolarFs?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically use a coupon. Valid values:
   * * true (default): Use the coupon.
   * * false: Do not use the coupon.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The list of custom application subcomponents.
   */
  components?: CreateApplicationRequestComponents[];
  /**
   * @remarks
   * The ID of the PolarDB instance on which the application depends.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The description or remark of the application.
   * 
   * @example
   * myapp
   */
  description?: string;
  /**
   * @remarks
   * The list of expected DNAT entries for NAT mapping. Specify this parameter together with VpcNatGatewayId. If this parameter is left empty, no DNAT entries are created.
   */
  dnatEntries?: CreateApplicationRequestDnatEntries[];
  /**
   * @remarks
   * The DNAT-specific NAT IP address allocated for NAT mapping, which is separate from the SNAT IP address. The IP address must belong to the NAT gateway, be in the available state, and the vSwitch where the gateway resides must belong to a primary CIDR block reachable from the office network. Specify this parameter together with VpcNatGatewayId. Prerequisite: An SNAT entry is associated with the vSwitch where the application resides.
   * 
   * @example
   * 10.64.0.10
   */
  dnatIpAddress?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Default value: false. If you set this parameter to true, only parameter and resource validation is performed, and no resources are actually created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The list of custom service endpoints. By default, a VPC endpoint is created.
   */
  endpoints?: CreateApplicationRequestEndpoints[];
  /**
   * @remarks
   * The required parameters for knowledge applications.
   */
  knowledgeApplicationSpec?: CreateApplicationRequestKnowledgeApplicationSpec;
  /**
   * @remarks
   * The required parameters for mem0 applications.
   */
  memApplicationSpec?: CreateApplicationRequestMemApplicationSpec;
  /**
   * @remarks
   * The model API. This parameter takes effect only when ApplicationType is set to polarclaw.
   * 
   * @example
   * openai-completions
   */
  modelApi?: string;
  /**
   * @remarks
   * The model API key. This parameter takes effect only when ApplicationType is set to polarclaw.
   * 
   * @example
   * sk-xxxxxx
   */
  modelApiKey?: string;
  /**
   * @remarks
   * The model endpoint. This parameter takes effect only when ApplicationType is set to polarclaw.
   * 
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  modelBaseUrl?: string;
  /**
   * @remarks
   * The model source. Valid values:
   * * bailian: Model Studio model.
   * * custom: Custom model.
   * * maas: PolarDB model operator.
   * 
   * @example
   * bailian
   */
  modelFrom?: string;
  /**
   * @remarks
   * The model name. This parameter takes effect only when ApplicationType is set to polarclaw.
   * 
   * @example
   * qwen3-max
   */
  modelName?: string;
  /**
   * @remarks
   * The list of parameters.
   */
  parameters?: CreateApplicationRequestParameters[];
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
   * The subscription period unit.
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The ID of the Polarlakebase Cold Storage Edition or High-performance Edition instance. Default value: empty. If you specify this parameter, the corresponding storage is mounted to the application.
   * 
   * Currently, only the following applications support this parameter:
   * - supabase
   * - raycluster
   * 
   * @example
   * pcs-********************
   */
  polarFSInstanceId?: string;
  /**
   * @remarks
   * The coupon code. If you do not specify this parameter, the default coupon is used.
   * 
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  /**
   * @remarks
   * The region ID. Default value: the region of the instance.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-********************
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-********************
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the IP address whitelist group. Default value: default.
   * 
   * @example
   * default
   */
  securityIPArrayName?: string;
  /**
   * @remarks
   * The IP address whitelist. If you do not specify this parameter, the default value 127.0.0.1 is used.
   * 
   * @example
   * 127.0.0.1,172.17.0.0/24
   */
  securityIPList?: string;
  /**
   * @remarks
   * The type of the IP address.
   * 
   * @example
   * ipv4
   */
  securityIPType?: string;
  /**
   * @remarks
   * The skill template ID.
   * 
   * @example
   * xxx
   */
  skillTemplateId?: string;
  /**
   * @remarks
   * The list of application storages.
   * 
   * @example
   * [{"StorageType":"oss","StorageInstanceId":"pfs-xxxx","EndpointId":"pe-xxxx"}]
   */
  storages?: CreateApplicationRequestStorages[];
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateApplicationRequestTag[];
  /**
   * @remarks
   * The target version.
   * 
   * @example
   * latest
   */
  targetVersion?: string;
  /**
   * @remarks
   * The subscription duration.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The vSwitch ID. Default value: the current vSwitch in the primary zone of the instance.
   * 
   * @example
   * vsw-*********************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-********************
   */
  vpcId?: string;
  /**
   * @remarks
   * The NAT gateway ID of the self-managed VPC NAT gateway for NAT mapping. If you specify this parameter, NAT mapping is enabled when the instance is created. The NAT gateway must be in the same VPC as the application, use the private network (intranet) type, and be active.
   * 
   * @example
   * ngw-xxx
   */
  vpcNatGatewayId?: string;
  /**
   * @remarks
   * The zone ID. Default value: the primary zone of the instance.
   * 
   * @example
   * cn-beijing-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      AIDBClusterId: 'AIDBClusterId',
      agenticDBBranchSpec: 'AgenticDBBranchSpec',
      agenticDBClusterId: 'AgenticDBClusterId',
      applicationType: 'ApplicationType',
      architecture: 'Architecture',
      authProvider: 'AuthProvider',
      authProviderConfig: 'AuthProviderConfig',
      autoAllocatePublicEip: 'AutoAllocatePublicEip',
      autoCreatePolarFs: 'AutoCreatePolarFs',
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      components: 'Components',
      DBClusterId: 'DBClusterId',
      description: 'Description',
      dnatEntries: 'DnatEntries',
      dnatIpAddress: 'DnatIpAddress',
      dryRun: 'DryRun',
      endpoints: 'Endpoints',
      knowledgeApplicationSpec: 'KnowledgeApplicationSpec',
      memApplicationSpec: 'MemApplicationSpec',
      modelApi: 'ModelApi',
      modelApiKey: 'ModelApiKey',
      modelBaseUrl: 'ModelBaseUrl',
      modelFrom: 'ModelFrom',
      modelName: 'ModelName',
      parameters: 'Parameters',
      payType: 'PayType',
      period: 'Period',
      polarFSInstanceId: 'PolarFSInstanceId',
      promotionCode: 'PromotionCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      securityIPArrayName: 'SecurityIPArrayName',
      securityIPList: 'SecurityIPList',
      securityIPType: 'SecurityIPType',
      skillTemplateId: 'SkillTemplateId',
      storages: 'Storages',
      tag: 'Tag',
      targetVersion: 'TargetVersion',
      usedTime: 'UsedTime',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      vpcNatGatewayId: 'VpcNatGatewayId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIDBClusterId: 'string',
      agenticDBBranchSpec: CreateApplicationRequestAgenticDBBranchSpec,
      agenticDBClusterId: 'string',
      applicationType: 'string',
      architecture: 'string',
      authProvider: 'string',
      authProviderConfig: 'string',
      autoAllocatePublicEip: 'boolean',
      autoCreatePolarFs: 'boolean',
      autoRenew: 'boolean',
      autoUseCoupon: 'boolean',
      components: { 'type': 'array', 'itemType': CreateApplicationRequestComponents },
      DBClusterId: 'string',
      description: 'string',
      dnatEntries: { 'type': 'array', 'itemType': CreateApplicationRequestDnatEntries },
      dnatIpAddress: 'string',
      dryRun: 'boolean',
      endpoints: { 'type': 'array', 'itemType': CreateApplicationRequestEndpoints },
      knowledgeApplicationSpec: CreateApplicationRequestKnowledgeApplicationSpec,
      memApplicationSpec: CreateApplicationRequestMemApplicationSpec,
      modelApi: 'string',
      modelApiKey: 'string',
      modelBaseUrl: 'string',
      modelFrom: 'string',
      modelName: 'string',
      parameters: { 'type': 'array', 'itemType': CreateApplicationRequestParameters },
      payType: 'string',
      period: 'string',
      polarFSInstanceId: 'string',
      promotionCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      securityIPArrayName: 'string',
      securityIPList: 'string',
      securityIPType: 'string',
      skillTemplateId: 'string',
      storages: { 'type': 'array', 'itemType': CreateApplicationRequestStorages },
      tag: { 'type': 'array', 'itemType': CreateApplicationRequestTag },
      targetVersion: 'string',
      usedTime: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      vpcNatGatewayId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.agenticDBBranchSpec && typeof (this.agenticDBBranchSpec as any).validate === 'function') {
      (this.agenticDBBranchSpec as any).validate();
    }
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(Array.isArray(this.dnatEntries)) {
      $dara.Model.validateArray(this.dnatEntries);
    }
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    if(this.knowledgeApplicationSpec && typeof (this.knowledgeApplicationSpec as any).validate === 'function') {
      (this.knowledgeApplicationSpec as any).validate();
    }
    if(this.memApplicationSpec && typeof (this.memApplicationSpec as any).validate === 'function') {
      (this.memApplicationSpec as any).validate();
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.storages)) {
      $dara.Model.validateArray(this.storages);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

