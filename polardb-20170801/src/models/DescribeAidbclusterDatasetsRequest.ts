// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterDatasetsRequest extends $dara.Model {
  /**
   * @example
   * EFSDF-DF-***
   */
  continuationToken?: string;
  /**
   * @example
   * pc-2ze88***
   */
  DBClusterId?: string;
  /**
   * @example
   * pds-2ze88***
   */
  datasetId?: string;
  /**
   * @example
   * train
   */
  datasetType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * grpo
   */
  trainMode?: string;
  static names(): { [key: string]: string } {
    return {
      continuationToken: 'ContinuationToken',
      DBClusterId: 'DBClusterId',
      datasetId: 'DatasetId',
      datasetType: 'DatasetType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trainMode: 'TrainMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continuationToken: 'string',
      DBClusterId: 'string',
      datasetId: 'string',
      datasetType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'string',
      pageSize: 'string',
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

