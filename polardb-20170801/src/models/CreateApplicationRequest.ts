// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationRequestComponents extends $dara.Model {
  /**
   * @remarks
   * The specifications of the child component.
   * 
   * @example
   * polar.app.g2.medium
   */
  componentClass?: string;
  /**
   * @remarks
   * The maximum number of child components with the same specifications. The default value is the value of ComponentReplica.
   * 
   * - This parameter is supported only for raycluster.
   * 
   * @example
   * 1
   */
  componentMaxReplica?: number;
  /**
   * @remarks
   * The number of replicas for the child component. The default value is 1.
   * 
   * @example
   * 1
   */
  componentReplica?: number;
  /**
   * @remarks
   * The type of the child component.
   * 
   * For supabase, valid values are:
   * 
   * - gateway
   * 
   * - backend
   * 
   * For raycluster, valid values are:
   * 
   * - head
   * 
   * - worker
   * 
   * - gpuworker
   * 
   * @example
   * gateway
   */
  componentType?: string;
  /**
   * @remarks
   * The maximum number of component replicas for scaling.
   * 
   * @example
   * 16
   */
  scaleMax?: string;
  /**
   * @remarks
   * The minimum number of component replicas for scaling.
   * 
   * @example
   * 1
   */
  scaleMin?: string;
  /**
   * @remarks
   * The security groups for the child component. Separate multiple security group IDs with commas (,).
   * 
   * @example
   * sg-********************
   */
  securityGroups?: string;
  /**
   * @remarks
   * The name of the IP address whitelist group for the child component. The default value is default.
   * 
   * @example
   * default
   */
  securityIPArrayName?: string;
  /**
   * @remarks
   * The IP address whitelist for the child component. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The type of the IP address in the whitelist for the child component. The default value is ipv4.
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

export class CreateApplicationRequestEndpoints extends $dara.Model {
  /**
   * @remarks
   * The description of the server-side endpoint.
   * 
   * @example
   * my_endpoint
   */
  description?: string;
  /**
   * @remarks
   * The type of the server-side endpoint. This value is fixed to Primary.
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
   * The password for the dashboard.
   */
  dashboardPassword?: string;
  /**
   * @remarks
   * The password.
   */
  dbPassword?: string;
  /**
   * @remarks
   * This parameter is required for knowledge applications. It specifies the name of the LLM, such as qwen3-max.
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
   * The name of the database.
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
   * This parameter is required for mem0 applications. It specifies the name of the embedder model, such as text-embedding-v4.
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
   * The graph LLM.
   * 
   * @example
   * qwen-plus
   */
  graphLlmModel?: string;
  /**
   * @remarks
   * This parameter is required for mem0 applications. It specifies the name of the large language model (LLM), such as qwen3-max.
   * 
   * @example
   * qwen3-max
   */
  llmModel?: string;
  /**
   * @remarks
   * The project name. This corresponds to the schema in the database where project data is stored.
   * 
   * @example
   * test-project-name
   */
  projectName?: string;
  /**
   * @remarks
   * This parameter is required for mem0 applications. It specifies the name of the reranker model, such as qwen3-rerank.
   * 
   * @example
   * qwen3-rerank
   */
  rerankerModel?: string;
  /**
   * @remarks
   * The number of sharded tables.
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

export class CreateApplicationRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * The ID of an existing model operator instance to associate. This parameter is effective only when ApplicationType is set to polarclaw.
   * 
   * @example
   * pm-xxxxxx
   */
  AIDBClusterId?: string;
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * - supabase: Creates a managed Supabase application.
   * 
   * - raycluster: Creates a managed Ray Cluster application.
   * 
   * - polarclaw: Creates a managed PolarClaw application.
   * 
   * This parameter is required.
   * 
   * @example
   * supabase
   */
  applicationType?: string;
  /**
   * @remarks
   * The CPU architecture. Valid value:
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
   * Specifies whether to automatically create and bind an Elastic IP Address (EIP).
   * 
   * @example
   * qwen3-max
   */
  autoAllocatePublicEip?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically create a PolarFS cold storage instance. Valid values:
   * 
   * - false (default): Does not automatically create the instance.
   * 
   * - true: Automatically creates the instance.
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
   * 
   * - true (default): Uses a coupon.
   * 
   * - false: Does not use a coupon.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * A list of custom child components for the application.
   */
  components?: CreateApplicationRequestComponents[];
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
   * The description of the application.
   * 
   * @example
   * myapp
   */
  description?: string;
  /**
   * @remarks
   * The default value is `false`. If you set this parameter to `true`, the system only checks the parameters and resources without creating the actual resources.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * A list of custom server-side endpoints. By default, a VPC Endpoint is created.
   */
  endpoints?: CreateApplicationRequestEndpoints[];
  /**
   * @remarks
   * This parameter is required for knowledge applications.
   */
  knowledgeApplicationSpec?: CreateApplicationRequestKnowledgeApplicationSpec;
  /**
   * @remarks
   * This parameter is required for mem0 applications.
   */
  memApplicationSpec?: CreateApplicationRequestMemApplicationSpec;
  /**
   * @remarks
   * The model API. This parameter is effective only when ApplicationType is set to polarclaw.
   * 
   * @example
   * openai-completions
   */
  modelApi?: string;
  /**
   * @remarks
   * The API key for the model. This parameter is effective only when ApplicationType is set to polarclaw.
   * 
   * @example
   * sk-xxxxxx
   */
  modelApiKey?: string;
  /**
   * @remarks
   * The URL of the model. This parameter is effective only when ApplicationType is set to polarclaw.
   * 
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  modelBaseUrl?: string;
  /**
   * @remarks
   * The source of the model. Valid values:
   * 
   * - bailian: Alibaba Cloud Model Studio model.
   * 
   * - custom: A custom model.
   * 
   * - maas: PolarDB model operator.
   * 
   * @example
   * bailian
   */
  modelFrom?: string;
  /**
   * @remarks
   * The name of the model. This parameter is effective only when ApplicationType is set to polarclaw.
   * 
   * @example
   * qwen3-max
   */
  modelName?: string;
  /**
   * @remarks
   * A list of parameters.
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
   * The subscription period type.
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The ID of the PolarFileSystem (PolarFS) cold storage or high-performance instance. This parameter is empty by default. If you specify this parameter, the corresponding storage is mounted to the application.
   * 
   * This feature is currently supported only by the following applications:
   * 
   * - supabase
   * 
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
   * The region. The default value is the region of the instance.
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
   * The name of the IP address whitelist group. The default value is `default`.
   * 
   * @example
   * default
   */
  securityIPArrayName?: string;
  /**
   * @remarks
   * The IP address whitelist. If you do not specify this parameter, the default value `127.0.0.1` is used.
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
   * The ID of the skill template.
   * 
   * @example
   * xxx
   */
  skillTemplateId?: string;
  /**
   * @remarks
   * The tag.
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
   * The vSwitch. The default value is the current vSwitch in the primary zone of the instance.
   * 
   * @example
   * vsw-*********************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the Virtual Private Cloud (VPC).
   * 
   * @example
   * vpc-********************
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone. The default value is the primary zone of the instance.
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

