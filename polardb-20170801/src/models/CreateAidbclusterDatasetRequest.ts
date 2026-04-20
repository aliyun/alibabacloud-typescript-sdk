// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIDBClusterDatasetRequest extends $dara.Model {
  /**
   * @example
   * pc-2ze88***
   */
  DBClusterId?: string;
  /**
   * @example
   * dataset01
   */
  datasetName?: string;
  /**
   * @example
   * train
   */
  datasetType?: string;
  /**
   * @example
   * LocalImport
   */
  importMode?: string;
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

