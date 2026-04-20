// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterTaskAttributeResponseBodyDataSets extends $dara.Model {
  /**
   * @example
   * dataset02
   */
  datasetName?: string;
  /**
   * @example
   * polardb_ai/datasets/train/grpo/dataset02/test-**.jsonl#1000
   */
  path?: string;
  /**
   * @example
   * 0.1
   */
  splitDatasetRatio?: string;
  /**
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
   * @example
   * 2025-09-10T01:56:00Z
   */
  completedTime?: string;
  /**
   * @example
   * Qwen-1.7B
   */
  modelName?: string;
  /**
   * @example
   * Qwen-1.7B
   */
  modelPath?: string;
  /**
   * @example
   * public
   */
  modelSource?: string;
  /**
   * @example
   * {"split_dataset_ratio": 0.1,"train_mode": "grpo","train_type": "lora","num_epochs": 1,"batch_size": 2,"eval_batch_size": 2, "num_generations": 2, "learning_rate": "1e-6", "data_file_list": "test-00000-of-00001.jsonl#1000", "lora_rank": 8, "lora_alpha": 32, "external_plugins": "/plugin/train/plugin.py", "reward_funcs": "format,external_countdown", "gpu_memory_utilization": 0.4}
   */
  runningTimes?: string;
  /**
   * @example
   * 2025-09-10T01:56:00Z
   */
  startTime?: string;
  /**
   * @example
   * stf
   */
  trainMode?: string;
  /**
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
   * @example
   * {\\"networkInterfaceId\\":\\"eni-2zea***\\",\\"port\\":\\"8000\\",\\"host\\":\\"192.**.**.**\\"}
   */
  accessInfo?: string;
  /**
   * @example
   * VPC
   */
  clusterNetworkType?: string;
  /**
   * @example
   * 2025-11-12T03:45:13Z
   */
  createTime?: string;
  /**
   * @example
   * task01
   */
  DBClusterDescription?: string;
  /**
   * @example
   * pm-2ze99***
   */
  DBClusterId?: string;
  /**
   * @example
   * COMPLETED
   */
  DBClusterStatus?: string;
  /**
   * @example
   * COMPLETED
   */
  DBClusterStatusDesc?: string;
  /**
   * @example
   * polardb_ai
   */
  DBType?: string;
  /**
   * @example
   * 3.1
   */
  DBVersion?: string;
  dataSets?: DescribeAIDBClusterTaskAttributeResponseBodyDataSets[];
  extraInfo?: { [key: string]: any }[];
  /**
   * @example
   * 18
   */
  kindCode?: number;
  /**
   * @example
   * 1
   */
  lockMode?: string;
  /**
   * @example
   * 12:00Z
   */
  maintainEndTime?: string;
  /**
   * @example
   * 8:00Z
   */
  maintainStartTime?: string;
  modelPath?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 45D24263-7E3A-4140-9472-************
   */
  requestId?: string;
  taskInfo?: DescribeAIDBClusterTaskAttributeResponseBodyTaskInfo[];
  /**
   * @example
   * vpc-**********
   */
  VPCId?: string;
  /**
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

