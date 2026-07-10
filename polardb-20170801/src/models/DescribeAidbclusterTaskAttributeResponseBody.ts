// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterTaskAttributeResponseBodyDataSets extends $dara.Model {
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * dataset02
   */
  datasetName?: string;
  /**
   * @remarks
   * The dataset path.
   * 
   * @example
   * polardb_ai/datasets/train/grpo/dataset02/test-**.jsonl#1000
   */
  path?: string;
  /**
   * @remarks
   * The ratio of data split from the training set.
   * 
   * @example
   * 0.1
   */
  splitDatasetRatio?: string;
  /**
   * @remarks
   * The type. Valid values:
   * 
   * * **train**: training set.
   * * **eval**: validation set.
   * 
   * @example
   * train
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      path: 'Path',
      splitDatasetRatio: 'SplitDatasetRatio',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      path: 'string',
      splitDatasetRatio: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClusterTaskAttributeResponseBodyTaskInfo extends $dara.Model {
  /**
   * @remarks
   * The task completion time.
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
   * 
   * * **public**: pre-trained model.
   * * **custom**: custom model.
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
   * The task start time.
   * 
   * @example
   * 2025-09-10T01:56:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
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
   * 
   * * **lora**
   * * **full**: full-parameter training.
   * 
   * @example
   * lora
   */
  trainType?: string;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      modelName: 'ModelName',
      modelPath: 'ModelPath',
      modelSource: 'ModelSource',
      runningTimes: 'RunningTimes',
      startTime: 'StartTime',
      trainMode: 'TrainMode',
      trainType: 'TrainType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'string',
      modelName: 'string',
      modelPath: 'string',
      modelSource: 'string',
      runningTimes: 'string',
      startTime: 'string',
      trainMode: 'string',
      trainType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClusterTaskAttributeResponseBody extends $dara.Model {
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
   * The creation time.
   * 
   * @example
   * 2025-11-12T03:45:13Z
   */
  createTime?: string;
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
   * 
   * * **ACTIVATION**: Training in progress.
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
   * 
   * * **ACTIVATION**: Training in progress.
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
   * 
   * * **3.1**: model operator tuning.
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
   * The additional information, including runtime parameters.
   */
  extraInfo?: { [key: string]: any }[];
  /**
   * @remarks
   * The type of the instance. Valid values:
   * 
   * - **18**.
   * 
   * @example
   * 18
   */
  kindCode?: number;
  /**
   * @remarks
   * The lock mode. Valid values:
   * 
   * * **0**: Locked.
   * * **1**: Unlocked.
   * 
   * @example
   * 1
   */
  lockMode?: string;
  /**
   * @remarks
   * The maintenance end time.
   * 
   * @example
   * 12:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The maintenance start time.
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
  tuneArch?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
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
  static names(): { [key: string]: string } {
    return {
      accessInfo: 'AccessInfo',
      clusterNetworkType: 'ClusterNetworkType',
      createTime: 'CreateTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterStatus: 'DBClusterStatus',
      DBClusterStatusDesc: 'DBClusterStatusDesc',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      dataSets: 'DataSets',
      extraInfo: 'ExtraInfo',
      kindCode: 'KindCode',
      lockMode: 'LockMode',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      modelPath: 'ModelPath',
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
      tuneArch: 'TuneArch',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInfo: 'string',
      clusterNetworkType: 'string',
      createTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterStatus: 'string',
      DBClusterStatusDesc: 'string',
      DBType: 'string',
      DBVersion: 'string',
      dataSets: { 'type': 'array', 'itemType': DescribeAIDBClusterTaskAttributeResponseBodyDataSets },
      extraInfo: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      kindCode: 'number',
      lockMode: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      modelPath: 'string',
      requestId: 'string',
      taskInfo: { 'type': 'array', 'itemType': DescribeAIDBClusterTaskAttributeResponseBodyTaskInfo },
      tuneArch: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSets)) {
      $dara.Model.validateArray(this.dataSets);
    }
    if(Array.isArray(this.extraInfo)) {
      $dara.Model.validateArray(this.extraInfo);
    }
    if(Array.isArray(this.taskInfo)) {
      $dara.Model.validateArray(this.taskInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

