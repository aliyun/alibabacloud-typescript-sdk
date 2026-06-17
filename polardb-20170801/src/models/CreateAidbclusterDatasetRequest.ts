// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIDBClusterDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB database cluster.
   * 
   * @example
   * pc-2ze88***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * dataset01
   */
  datasetName?: string;
  /**
   * @remarks
   * The type of the dataset. Valid values:
   * 
   * - **train**: training set
   * 
   * - **eval**: evaluation set
   * 
   * @example
   * train
   */
  datasetType?: string;
  /**
   * @remarks
   * The import method. Valid values:
   * 
   * - **LocalImport**: local import
   * 
   * @example
   * LocalImport
   */
  importMode?: string;
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
   * The training mode for the dataset. The dataset format depends on the mode. Valid values:
   * 
   * - **sft**: supervised fine-tuning. For training sets only.
   * 
   * - **grpo**: reinforcement learning optimization. For training sets only.
   * 
   * - **text**: text generation. For validation sets only.
   * 
   * @example
   * sft
   */
  trainMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      importMode: 'ImportMode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trainMode: 'TrainMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      datasetName: 'string',
      datasetType: 'string',
      importMode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trainMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

