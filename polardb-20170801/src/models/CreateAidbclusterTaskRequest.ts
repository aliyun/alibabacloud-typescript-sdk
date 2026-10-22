// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIDBClusterTaskRequest extends $dara.Model {
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
   * The data service mode. A value of custom indicates that custom OSS is used, and a value of cold_storage indicates that cold storage is used.
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
   *  * **aitrain**: model operator fine-tuning.
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
   * * **For a preset model, specify the name of the selected model.**
   * * **For a custom model, specify the path of the model (the model trained in a cold storage instance).**
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
   * * **public**: preset model.
   * * **custom**: custom model.
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
   * The runtime parameters. The value is a JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * {"split_dataset_ratio": 0.1,"train_mode": "grpo","train_type": "lora","num_epochs": 1,"batch_size": 2,"eval_batch_size": 2, "num_generations": 2, "learning_rate": "1e-6", "data_file_list": "test-00000-of-00001.jsonl#1000", "lora_rank": 8, "lora_alpha": 32, "external_plugins": "/plugin/train/plugin.py", "reward_funcs": "format,external_countdown", "gpu_memory_utilization": 0.4}
   */
  runningParameter?: string;
  /**
   * @remarks
   * The security group ID.
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
   * xxxx
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
   * The VPC ID.
   * 
   * @example
   * vpc-*******************
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
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
  static names(): { [key: string]: string } {
    return {
      customOssBucketName: 'CustomOssBucketName',
      DBClusterId: 'DBClusterId',
      DBInstanceClass: 'DBInstanceClass',
      dataserviceMode: 'DataserviceMode',
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
      tuneArch: 'TuneArch',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customOssBucketName: 'string',
      DBClusterId: 'string',
      DBInstanceClass: 'string',
      dataserviceMode: 'string',
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
      tuneArch: 'string',
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

