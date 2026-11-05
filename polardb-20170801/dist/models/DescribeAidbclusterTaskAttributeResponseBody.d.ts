import * as $dara from '@darabonba/typescript';
export declare class DescribeAIDBClusterTaskAttributeResponseBodyCustomBucketInfo extends $dara.Model {
    /**
     * @remarks
     * The name of the custom OSS bucket.
     *
     * @example
     * my-bucket
     */
    customOssBucketName?: string;
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
export declare class DescribeAIDBClusterTaskAttributeResponseBodyDataSets extends $dara.Model {
    /**
     * @remarks
     * The name of the dataset.
     *
     * @example
     * dataset02
     */
    datasetName?: string;
    /**
     * @remarks
     * The path of the dataset.
     *
     * @example
     * polardb_ai/datasets/train/grpo/dataset02/test-**.jsonl#1000
     */
    path?: string;
    /**
     * @remarks
     * The split ratio from the training set.
     *
     * @example
     * 0.1
     */
    splitDatasetRatio?: string;
    /**
     * @remarks
     * The type. Valid values:
     * * **train**: Training set.
     * * **eval**: Validation set.
     *
     * @example
     * train
     */
    type?: string;
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
export declare class DescribeAIDBClusterTaskAttributeResponseBodyTaskInfo extends $dara.Model {
    /**
     * @remarks
     * The completion time of the task. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2025-09-10T01:56:00Z
     */
    completedTime?: string;
    /**
     * @remarks
     * The foundation model.
     *
     * @example
     * Qwen-1.7B
     */
    modelName?: string;
    /**
     * @remarks
     * The path of the custom model.
     *
     * @example
     * Qwen-1.7B
     */
    modelPath?: string;
    /**
     * @remarks
     * The model source. Valid values:
     * * **public**: Preset model.
     * * **custom**: Custom model.
     *
     * @example
     * public
     */
    modelSource?: string;
    /**
     * @remarks
     * The runtime parameters.
     *
     * @example
     * {"split_dataset_ratio": 0.1,"train_mode": "grpo","train_type": "lora","num_epochs": 1,"batch_size": 2,"eval_batch_size": 2, "num_generations": 2, "learning_rate": "1e-6", "data_file_list": "test-00000-of-00001.jsonl#1000", "lora_rank": 8, "lora_alpha": 32, "external_plugins": "/plugin/train/plugin.py", "reward_funcs": "format,external_countdown", "gpu_memory_utilization": 0.4}
     */
    runningTimes?: string;
    /**
     * @remarks
     * The start time of the task. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2025-09-10T01:56:00Z
     */
    startTime?: string;
    /**
     * @remarks
     * The task type. Valid values:
     * * **sft**: SFT-efficient training.
     * * **grpo**: GRPO-reinforcement learning.
     *
     * @example
     * stf
     */
    trainMode?: string;
    /**
     * @remarks
     * The training method. Valid values:
     * * **lora**: LoRA.
     * * **full**: Full training.
     *
     * @example
     * lora
     */
    trainType?: string;
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
export declare class DescribeAIDBClusterTaskAttributeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The access information of the model in the test deployment scenario.
     *
     * @example
     * {\\"networkInterfaceId\\":\\"eni-2zea***\\",\\"port\\":\\"8000\\",\\"host\\":\\"192.**.**.**\\"}
     */
    accessInfo?: string;
    /**
     * @remarks
     * The network type of the cluster.
     *
     * @example
     * VPC
     */
    clusterNetworkType?: string;
    /**
     * @remarks
     * The creation time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2025-11-12T03:45:13Z
     */
    createTime?: string;
    /**
     * @remarks
     * The custom OSS bucket information.
     */
    customBucketInfo?: DescribeAIDBClusterTaskAttributeResponseBodyCustomBucketInfo;
    /**
     * @remarks
     * The task name.
     *
     * @example
     * task01
     */
    DBClusterDescription?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * pm-2ze99***
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The training status. Valid values:
     * * **ACTIVATION**: Training.
     * * **COMPLETED**: Training succeeded.
     * * **FAILED**: Training failed.
     *
     * @example
     * COMPLETED
     */
    DBClusterStatus?: string;
    /**
     * @remarks
     * The training status. Valid values:
     * * **ACTIVATION**: Training.
     * * **COMPLETED**: Training succeeded.
     * * **FAILED**: Training failed.
     *
     * @example
     * COMPLETED
     */
    DBClusterStatusDesc?: string;
    /**
     * @remarks
     * The engine type.
     *
     * @example
     * polardb_ai
     */
    DBType?: string;
    /**
     * @remarks
     * The version. Valid values:
     * * **3.1**: Model operator tuning.
     *
     * @example
     * 3.1
     */
    DBVersion?: string;
    /**
     * @remarks
     * The datasets.
     */
    dataSets?: DescribeAIDBClusterTaskAttributeResponseBodyDataSets[];
    /**
     * @remarks
     * The extra information, including runtime parameters.
     */
    extraInfo?: {
        [key: string]: any;
    }[];
    /**
     * @remarks
     * The instance type. Valid values:
     * - **18**.
     *
     * @example
     * 18
     */
    kindCode?: number;
    /**
     * @remarks
     * The lock mode. Valid values:
     * * **0**: Locked.
     * * **1**: Unlocked.
     *
     * @example
     * 1
     */
    lockMode?: string;
    /**
     * @remarks
     * The end time of the maintenance window. The time is displayed in UTC in the HH:mmZ format.
     *
     * @example
     * 12:00Z
     */
    maintainEndTime?: string;
    /**
     * @remarks
     * The start time of the maintenance window. The time is displayed in UTC, for example, 08:00Z.
     *
     * @example
     * 8:00Z
     */
    maintainStartTime?: string;
    /**
     * @remarks
     * The list of output model paths in the model fine-tuning scenario.
     */
    modelPath?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 45D24263-7E3A-4140-9472-************
     */
    requestId?: string;
    /**
     * @remarks
     * The task information.
     */
    taskInfo?: DescribeAIDBClusterTaskAttributeResponseBodyTaskInfo[];
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
     * The VPC ID.
     *
     * @example
     * vpc-**********
     */
    VPCId?: string;
    /**
     * @remarks
     * The vSwitch ID.
     *
     * @example
     * vsw-*********************
     */
    vSwitchId?: string;
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
