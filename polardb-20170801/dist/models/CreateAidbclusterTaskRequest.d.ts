import * as $dara from '@darabonba/typescript';
export declare class CreateAIDBClusterTaskRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the custom OSS bucket.
     *
     * @example
     * my-bucket
     */
    customOssBucketName?: string;
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The instance type.
     *
     * @example
     * polar.pg.g6.4xlarge.guh
     */
    DBInstanceClass?: string;
    /**
     * @remarks
     * The data service mode. A value of custom indicates that custom OSS is used. A value of cold_storage indicates that cold storage is used.
     *
     * @example
     * cold_storage
     */
    dataserviceMode?: string;
    /**
     * @remarks
     * The ID of the training dataset. This parameter is required for fine-tuning.
     *
     * @example
     * pds-2zetrain***
     */
    datasetPath?: string;
    /**
     * @remarks
     * The ID of the validation dataset. This parameter is required for evaluation.
     *
     * @example
     * pds-2zetrain***
     */
    evalDatasetPath?: string;
    /**
     * @remarks
     * The type of the model service. Valid values:
     *  * **aitrain**: model operator tuning
     *
     * This parameter is required.
     *
     * @example
     * aitrain
     */
    kubeType?: string;
    /**
     * @remarks
     * The name of the model.
     * * **For a preset model, specify the selected model name.**
     * * **For a custom model, specify the path of the model (the trained model in a cold storage instance).**
     *
     * This parameter is required.
     *
     * @example
     * Qwen3-8B
     */
    modelName?: string;
    /**
     * @remarks
     * The source of the model. Valid values:
     * * **public**: preset model
     * * **custom**: custom model
     *
     * This parameter is required.
     *
     * @example
     * public
     */
    modelSource?: string;
    /**
     * @remarks
     * The type of the custom model.
     *
     * @example
     * qwen3
     */
    modelType?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The runtime parameters in JSON string format.
     *
     * This parameter is required.
     *
     * @example
     * {"split_dataset_ratio": 0.1,"train_mode": "grpo","train_type": "lora","num_epochs": 1,"batch_size": 2,"eval_batch_size": 2, "num_generations": 2, "learning_rate": "1e-6", "data_file_list": "test-00000-of-00001.jsonl#1000", "lora_rank": 8, "lora_alpha": 32, "external_plugins": "/plugin/train/plugin.py", "reward_funcs": "format,external_countdown", "gpu_memory_utilization": 0.4}
     */
    runningParameter?: string;
    /**
     * @remarks
     * The ID of the security group. This parameter is actually required. If it is not provided, the service returns InvalidEcsSecurityGroupId.Malformed (400).
     *
     * @example
     * sg-bp**************
     */
    securityGroupId?: string;
    /**
     * @remarks
     * The description of the model service.
     *
     * @example
     * Model operator instance
     */
    taskName?: string;
    /**
     * @remarks
     * The model fine-tuning architecture.
     *
     * @example
     * lora
     */
    tuneArch?: string;
    /**
     * @remarks
     * The ID of the virtual private cloud (VPC). This parameter is actually required. If it is not provided, the service returns InvalidVpcId.Malformed (400).
     *
     * @example
     * vpc-*******************
     */
    VPCId?: string;
    /**
     * @remarks
     * The ID of the vSwitch. This parameter is actually required and must belong to the VPC specified by VPCId.
     *
     * @example
     * vsw-*********************
     */
    vSwitchId?: string;
    /**
     * @remarks
     * The zone ID.
     *
     * @example
     * cn-hangzhou-k
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
