// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterDatasetsRequest extends $dara.Model {
  /**
   * @remarks
   * The token used to retrieve the next page of results. This value is obtained from the response of a previous request. For the first request, leave this parameter empty.
   * 
   * @example
   * EFSDF-DF-***
   */
  continuationToken?: string;
  /**
   * @remarks
   * The ID of the PolarDB cluster for AI model services.
   * 
   * @example
   * pc-2ze88***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * pds-2ze88***
   */
  datasetId?: string;
  /**
   * @remarks
   * The type of the dataset. Valid values:
   * 
   * - **train**: The training set.
   * 
   * - **eval**: The evaluation set.
   * 
   * @example
   * train
   */
  datasetType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30**, **50**, and **100**.
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: string;
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
   * The training mode. Valid values:
   * 
   * - **sft**: supervised fine-tuning.
   * 
   * - **grpo**: reinforcement learning.
   * 
   * - **text**: text generation.
   * 
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

