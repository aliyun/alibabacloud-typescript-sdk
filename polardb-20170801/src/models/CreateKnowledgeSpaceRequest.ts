// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeSpaceRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The description of the knowledge space. The description can be up to 512 characters in length.
   * 
   * @example
   * testDesc
   */
  description?: string;
  /**
   * @remarks
   * The vector dimensions.
   * 
   * This parameter is required.
   * 
   * @example
   * 1536
   */
  embeddingDimension?: number;
  /**
   * @remarks
   * The name of the embedding model.
   * 
   * This parameter is required.
   * 
   * @example
   * text-embedding-v4
   */
  embeddingModel?: string;
  /**
   * @remarks
   * Specifies whether to enforce access control list (ACL) authentication for the knowledge space.
   * 
   * @example
   * false
   */
  enforceAcl?: boolean;
  /**
   * @remarks
   * The name of the large language model.
   * 
   * @example
   * qwen3.6-plus
   */
  LLMModel?: string;
  /**
   * @remarks
   * The name of the knowledge space. The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The AccessKey ID used to access OSS.
   * 
   * This parameter is required.
   * 
   * @example
   * LTAI5tExample1234
   */
  OSSAccessKey?: string;
  /**
   * @remarks
   * The name of an existing OSS bucket in the same region.
   * 
   * This parameter is required.
   * 
   * @example
   * test-bucket
   */
  OSSBucket?: string;
  /**
   * @remarks
   * The AccessKey secret used to access OSS.
   * 
   * This parameter is required.
   * 
   * @example
   * example-oss-secret
   */
  OSSSecretKey?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the rerank model.
   * 
   * @example
   * qwen3-rerank
   */
  rerankModel?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-********************
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The shard size, in tokens.
   * 
   * This parameter is required.
   * 
   * @example
   * 512
   */
  shardingSize?: number;
  /**
   * @remarks
   * The sharding strategy. Valid values:
   * - hierarchical: hierarchical sharding. This is the default value.
   * - hybrid: hybrid sharding.
   * 
   * This parameter is required.
   * 
   * @example
   * hierarchical
   */
  shardingStrategy?: string;
  /**
   * @remarks
   * The vSwitch for automatic creation of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-*********************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC for automatic creation of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-*************
   */
  vpcId?: string;
  /**
   * @remarks
   * The active zone for automatic creation of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBType: 'DBType',
      description: 'Description',
      embeddingDimension: 'EmbeddingDimension',
      embeddingModel: 'EmbeddingModel',
      enforceAcl: 'EnforceAcl',
      LLMModel: 'LLMModel',
      name: 'Name',
      OSSAccessKey: 'OSSAccessKey',
      OSSBucket: 'OSSBucket',
      OSSSecretKey: 'OSSSecretKey',
      regionId: 'RegionId',
      rerankModel: 'RerankModel',
      securityGroupId: 'SecurityGroupId',
      shardingSize: 'ShardingSize',
      shardingStrategy: 'ShardingStrategy',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBType: 'string',
      description: 'string',
      embeddingDimension: 'number',
      embeddingModel: 'string',
      enforceAcl: 'boolean',
      LLMModel: 'string',
      name: 'string',
      OSSAccessKey: 'string',
      OSSBucket: 'string',
      OSSSecretKey: 'string',
      regionId: 'string',
      rerankModel: 'string',
      securityGroupId: 'string',
      shardingSize: 'number',
      shardingStrategy: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

