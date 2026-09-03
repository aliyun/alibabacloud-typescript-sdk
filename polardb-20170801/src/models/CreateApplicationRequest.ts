// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
   * The maximum number of application subcomponents with the same specifications. Default value: the value of ComponentReplica.
   * 
   * - Only raycluster supports this parameter.
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
   * 
   * For supabase, valid values:
   * 
   * - gateway
   * - backend
   * 
   * For raycluster, valid values:
   * 
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
   * The maximum number of replicas for component scaling.
   * 
   * @example
   * 16
   */
  scaleMax?: string;
  /**
   * @remarks
   * The minimum number of replicas for component scaling.
   * 
   * @example
   * 1
   */
  scaleMin?: string;
  /**
   * @remarks
   * The list of security groups for the application subcomponent. Separate multiple security groups with commas (,).
   * 
   * @example
   * sg-********************
   */
  securityGroups?: string;
  /**
   * @remarks
   * The name of the whitelist IP address group for the application subcomponent. Default value: default.
   * 
   * @example
   * default
   */
  securityIPArrayName?: string;
  /**
   * @remarks
   * The whitelist IP addresses of the application subcomponent. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The type of the whitelist IP addresses for the application subcomponent. Default value: ipv4.
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
   * The frontend port. This parameter is optional. If not specified, the port is automatically assigned by the control plane to avoid conflicts with ports already in use on the gateway. You can query the assignment result by calling the DescribeApplicationAttribute operation.
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
   * The description of the service endpoint.
   * 
   * @example
   * my_endpoint
   */
  description?: string;
  /**
   * @remarks
   * The type of the service endpoint. The value is fixed as Primary.
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
   */
  dashboardPassword?: string;
  /**
   * @remarks
   * The password.
   */
  dbPassword?: string;
  /**
   * @remarks
   * Required for knowledge applications. The name of the LLM model, such as qwen3-max.
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
   * The project name, which corresponds to the database schema that stores project data.
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
   * The number of table shards.
   * 
   * @example
   * 1
   */
  shard?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      dbPassword: 'DbPassword',
      dbUser: 'DbUser',
      embedderModel: 'EmbedderModel',
      embedderModelDimension: 'EmbedderModelDimension',
      graphLlmModel: 'GraphLlmModel',
      llmModel: 'LlmModel',
      projectName: 'ProjectName',
      rerankerModel: 'RerankerModel',
      shard: 'Shard',
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
      projectName: 'string',
      rerankerModel: 'string',
      shard: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * secret.gateway.auth.token
   */
  parameterName?: string;
  /**
   * @remarks
   * The parameter value.
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
   * The ID of an existing template operator instance to associate. This parameter takes effect only when ApplicationType is set to polarclaw.
   * 
   * @example
   * pm-xxxxxx
   */
  AIDBClusterId?: string;
  /**
   * @remarks
   * The application type. Valid values:
   * 
   * - supabase: Set this value to create a managed Supabase application.
   * - raycluster: Set this value to create a managed Ray Cluster application.
   * - polarclaw: Set this value to create a managed PolarClaw application.
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
   * 
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
   * The configuration of the authentication provider.
   * 
   * @example
   * xxx
   */
  authProviderConfig?: string;
  /**
   * @remarks
   * Specifies whether to automatically create and associate with an elastic IP address (EIP).
   * 
   * @example
   * qwen3-max
   */
  autoAllocatePublicEip?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic creation of a cold storage Polarlakebase instance. Valid values:
   * * false (default): Automatic creation is disabled.
   * * true: Automatic creation is enabled.
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
   * Specifies whether to automatically use coupons. Valid values:
   * * true (default): Use coupons.
   * * false: Do not use coupons.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The list of user-defined application subcomponents.
   */
  components?: CreateApplicationRequestComponents[];
  /**
   * @remarks
   * The instance ID of the PolarDB instance on which the application depends.
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
   * The list of expected DNAT entries for NAT mapping. Specify this parameter together with VpcNatGatewayId. This parameter can be left empty, which indicates that no DNAT entries are created.
   */
  dnatEntries?: CreateApplicationRequestDnatEntries[];
  /**
   * @remarks
   * The dedicated DNAT NAT IP address that is allocated by the customer (separate from the SNAT IP address) for NAT mapping. The IP address must belong to the specified gateway and be in the available state. The vSwitch of the gateway must belong to the primary CIDR block that is reachable from the office network. Specify this parameter together with VpcNatGatewayId. Prerequisite: An SNAT entry is bound to the vSwitch where the application resides.
   * 
   * @example
   * 10.64.0.10
   */
  dnatIpAddress?: string;
  /**
   * @remarks
   * Default value: `false`. If you set this parameter to `true`, only parameter and resource validation is performed without actually creating resources.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The list of user-defined service endpoints. By default, a VPC endpoint is created.
   */
  endpoints?: CreateApplicationRequestEndpoints[];
  /**
   * @remarks
   * Required for knowledge applications.
   */
  knowledgeApplicationSpec?: CreateApplicationRequestKnowledgeApplicationSpec;
  /**
   * @remarks
   * Required for mem0 applications.
   */
  memApplicationSpec?: CreateApplicationRequestMemApplicationSpec;
  /**
   * @remarks
   * The API of the model. This parameter takes effect only when ApplicationType is set to polarclaw.
   * 
   * @example
   * openai-completions
   */
  modelApi?: string;
  /**
   * @remarks
   * The API key of the model. This parameter takes effect only when ApplicationType is set to polarclaw.
   * 
   * @example
   * sk-xxxxxx
   */
  modelApiKey?: string;
  /**
   * @remarks
   * The URL of the model. This parameter takes effect only when ApplicationType is set to polarclaw.
   * 
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  modelBaseUrl?: string;
  /**
   * @remarks
   * The model source. Valid values:
   * * bailian: Bailian model.
   * * custom: Custom model.
   * * maas: PolarDB model operator.
   * 
   * @example
   * bailian
   */
  modelFrom?: string;
  /**
   * @remarks
   * The name of the model. This parameter takes effect only when ApplicationType is set to polarclaw.
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
   * The billing type.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription type, such as yearly or monthly.
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The instance ID of the Polarlakebase cold storage or high-performance instance. Default value: empty. If specified, the corresponding storage is mounted to the application.
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
   * The region. Default value: the region of the instance.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-********************
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-********************
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the IP whitelist group. Default value: `default`.
   * 
   * @example
   * default
   */
  securityIPArrayName?: string;
  /**
   * @remarks
   * The IP whitelist. If you do not specify this parameter, the default value `127.0.0.1` is used.
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
   * The vSwitch. Default value: the current vSwitch in the primary zone of the instance.
   * 
   * @example
   * vsw-*********************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-********************
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC NAT gateway ID for NAT mapping. If specified, NAT mapping is enabled when the instance is created. The NAT gateway must be in the same VPC as the application, use the private network type (intranet), and be in the active state.
   * 
   * @example
   * ngw-xxx
   */
  vpcNatGatewayId?: string;
  /**
   * @remarks
   * The zone. Default value: the primary zone of the instance.
   * 
   * @example
   * cn-beijing-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      AIDBClusterId: 'AIDBClusterId',
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
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

