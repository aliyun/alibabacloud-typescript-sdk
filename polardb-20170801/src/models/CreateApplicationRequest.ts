// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationRequestComponents extends $dara.Model {
  /**
   * @example
   * polar.app.g2.medium
   */
  componentClass?: string;
  /**
   * @example
   * 1
   */
  componentMaxReplica?: number;
  /**
   * @example
   * 1
   */
  componentReplica?: number;
  /**
   * @example
   * gateway
   */
  componentType?: string;
  scaleMax?: string;
  scaleMin?: string;
  /**
   * @example
   * sg-********************
   */
  securityGroups?: string;
  /**
   * @example
   * default
   */
  securityIPArrayName?: string;
  /**
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
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
   * @example
   * my_endpoint
   */
  description?: string;
  /**
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

export class CreateApplicationRequestMemApplicationSpec extends $dara.Model {
  dbName?: string;
  dbPassword?: string;
  dbUser?: string;
  embedderModel?: string;
  embedderModelDimension?: number;
  graphLlmModel?: string;
  llmModel?: string;
  projectName?: string;
  rerankerModel?: string;
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

export class CreateApplicationRequestTag extends $dara.Model {
  /**
   * @example
   * testKey
   */
  key?: string;
  /**
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
   * @example
   * pm-xxxxxx
   */
  AIDBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * supabase
   */
  applicationType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * x86
   */
  architecture?: string;
  autoAllocatePublicEip?: boolean;
  autoCreatePolarFs?: boolean;
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  autoUseCoupon?: boolean;
  components?: CreateApplicationRequestComponents[];
  /**
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @example
   * myapp
   */
  description?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  endpoints?: CreateApplicationRequestEndpoints[];
  memApplicationSpec?: CreateApplicationRequestMemApplicationSpec;
  /**
   * @example
   * openai-completions
   */
  modelApi?: string;
  /**
   * @example
   * sk-xxxxxx
   */
  modelApiKey?: string;
  /**
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  modelBaseUrl?: string;
  /**
   * @example
   * bailian
   */
  modelFrom?: string;
  /**
   * @example
   * qwen3-max
   */
  modelName?: string;
  /**
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * Year
   */
  period?: string;
  /**
   * @example
   * pcs-********************
   */
  polarFSInstanceId?: string;
  /**
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * rg-********************
   */
  resourceGroupId?: string;
  securityGroupId?: string;
  tag?: CreateApplicationRequestTag[];
  /**
   * @example
   * latest
   */
  targetVersion?: string;
  /**
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @example
   * vsw-*********************
   */
  vSwitchId?: string;
  vpcId?: string;
  /**
   * @example
   * cn-beijing-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      AIDBClusterId: 'AIDBClusterId',
      applicationType: 'ApplicationType',
      architecture: 'Architecture',
      autoAllocatePublicEip: 'AutoAllocatePublicEip',
      autoCreatePolarFs: 'AutoCreatePolarFs',
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      components: 'Components',
      DBClusterId: 'DBClusterId',
      description: 'Description',
      dryRun: 'DryRun',
      endpoints: 'Endpoints',
      memApplicationSpec: 'MemApplicationSpec',
      modelApi: 'ModelApi',
      modelApiKey: 'ModelApiKey',
      modelBaseUrl: 'ModelBaseUrl',
      modelFrom: 'ModelFrom',
      modelName: 'ModelName',
      payType: 'PayType',
      period: 'Period',
      polarFSInstanceId: 'PolarFSInstanceId',
      promotionCode: 'PromotionCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
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
      autoAllocatePublicEip: 'boolean',
      autoCreatePolarFs: 'boolean',
      autoRenew: 'boolean',
      autoUseCoupon: 'boolean',
      components: { 'type': 'array', 'itemType': CreateApplicationRequestComponents },
      DBClusterId: 'string',
      description: 'string',
      dryRun: 'boolean',
      endpoints: { 'type': 'array', 'itemType': CreateApplicationRequestEndpoints },
      memApplicationSpec: CreateApplicationRequestMemApplicationSpec,
      modelApi: 'string',
      modelApiKey: 'string',
      modelBaseUrl: 'string',
      modelFrom: 'string',
      modelName: 'string',
      payType: 'string',
      period: 'string',
      polarFSInstanceId: 'string',
      promotionCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
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
    if(this.memApplicationSpec && typeof (this.memApplicationSpec as any).validate === 'function') {
      (this.memApplicationSpec as any).validate();
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

