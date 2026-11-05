import * as $dara from '@darabonba/typescript';
export declare class CreateKnowledgeSpaceRequest extends $dara.Model {
    /**
     * @remarks
     * The database engine type.
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
     * Specifies whether to enable ACL-based authentication for the knowledge space.
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
     * OSS AK
     *
     * This parameter is required.
     *
     * @example
     * ******
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
     * OSS SK
     *
     * This parameter is required.
     *
     * @example
     * ******
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
     * The name of the reranking model.
     *
     * @example
     * qwen3-rerank
     */
    rerankModel?: string;
    /**
     * @remarks
     * The security group ID.
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
     *
     * - hierarchical (default)
     * - hybrid
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
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
