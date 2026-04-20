// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIDBClusterTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @example
   * polar.pg.g6.4xlarge.guh
   */
  DBInstanceClass?: string;
  /**
   * @example
   * pds-2zetrain***
   */
  datasetPath?: string;
  /**
   * @example
   * pds-2zetrain***
   */
  evalDatasetPath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aitrain
   */
  kubeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Qwen3-8B
   */
  modelName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * public
   */
  modelSource?: string;
  /**
   * @example
   * qwen3
   */
  modelType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"split_dataset_ratio": 0.1,"train_mode": "grpo","train_type": "lora","num_epochs": 1,"batch_size": 2,"eval_batch_size": 2, "num_generations": 2, "learning_rate": "1e-6", "data_file_list": "test-00000-of-00001.jsonl#1000", "lora_rank": 8, "lora_alpha": 32, "external_plugins": "/plugin/train/plugin.py", "reward_funcs": "format,external_countdown", "gpu_memory_utilization": 0.4}
   */
  runningParameter?: string;
  /**
   * @example
   * sg-bp**************
   */
  securityGroupId?: string;
  /**
   * @example
   * xxxx
   */
  taskName?: string;
  /**
   * @example
   * vpc-*******************
   */
  VPCId?: string;
  /**
   * @example
   * vsw-*********************
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBInstanceClass: 'DBInstanceClass',
      datasetPath: 'DatasetPath',
      evalDatasetPath: 'EvalDatasetPath',
      kubeType: 'KubeType',
      modelName: 'ModelName',
      modelSource: 'ModelSource',
      modelType: 'ModelType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      runningParameter: 'RunningParameter',
      securityGroupId: 'SecurityGroupId',
      taskName: 'TaskName',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBInstanceClass: 'string',
      datasetPath: 'string',
      evalDatasetPath: 'string',
      kubeType: 'string',
      modelName: 'string',
      modelSource: 'string',
      modelType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      runningParameter: 'string',
      securityGroupId: 'string',
      taskName: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
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

