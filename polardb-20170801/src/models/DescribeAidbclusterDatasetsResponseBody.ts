// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterDatasetsResponseBodyDatasets extends $dara.Model {
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * pcs-2ze22***-q7***
   */
  bucketName?: string;
  /**
   * @remarks
   * The file size in bytes.
   * 
   * @example
   * 2845904
   */
  capacity?: string;
  /**
   * @remarks
   * The time the file was created, in UTC and formatted as ISO 8601.
   * 
   * @example
   * 2025-11-06T06:50:43Z
   */
  creationTime?: string;
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
   * The dataset type. Valid values:
   * 
   * - **train**: The training set.
   * 
   * - **eval**: The evaluation set.
   * 
   * @example
   * train
   */
  datasetType?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * train-***.json
   */
  fileName?: string;
  /**
   * @remarks
   * The time the file was last modified, in UTC and formatted as ISO 8601.
   * 
   * @example
   * 2025-11-06T06:50:43Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * polardb_ai/datasets/train/sft/dataset01/train-***.json
   */
  path?: string;
  /**
   * @remarks
   * The storage type. The only valid value is:
   * 
   * - **Standard**.
   * 
   * @example
   * Standard
   */
  storageType?: string;
  /**
   * @remarks
   * The training mode. Valid values:
   * 
   * - **sft**: Supervised Fine-Tuning (SFT).
   * 
   * - **grpo**: Reinforcement Learning (RL).
   * 
   * - **text**: Text generation.
   * 
   * @example
   * stf
   */
  trainMode?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      capacity: 'Capacity',
      creationTime: 'CreationTime',
      datasetId: 'DatasetId',
      datasetType: 'DatasetType',
      fileName: 'FileName',
      lastModified: 'LastModified',
      path: 'Path',
      storageType: 'StorageType',
      trainMode: 'TrainMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      capacity: 'string',
      creationTime: 'string',
      datasetId: 'string',
      datasetType: 'string',
      fileName: 'string',
      lastModified: 'string',
      path: 'string',
      storageType: 'string',
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

export class DescribeAIDBClusterDatasetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The continuation token from the request.
   * 
   * @example
   * EFSDF-DF-***
   */
  continuationToken?: string;
  /**
   * @remarks
   * The data service ID.
   * 
   * @example
   * pcs-2zeei***
   */
  dataServiceId?: string;
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
   * The training mode. Valid values:
   * 
   * - **sft**: Supervised Fine-Tuning (SFT).
   * 
   * - **grpo**: Reinforcement Learning (RL).
   * 
   * - **text**: Text generation.
   * 
   * @example
   * stf
   */
  datasetMode?: string;
  /**
   * @remarks
   * The dataset type. Valid values:
   * 
   * - **train**: The training set.
   * 
   * - **eval**: The evaluation set.
   * 
   * @example
   * train
   */
  datasetType?: string;
  /**
   * @remarks
   * An array of dataset objects.
   */
  datasets?: DescribeAIDBClusterDatasetsResponseBodyDatasets[];
  /**
   * @remarks
   * The total number of files in the dataset.
   * 
   * @example
   * 6
   */
  fileCount?: string;
  /**
   * @remarks
   * Indicates if more datasets are available. Valid values:
   * 
   * - **true**: More datasets are available.
   * 
   * - **false**: All datasets have been listed.
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The token for retrieving the next page of results. This parameter is returned only if `IsTruncated` is `true`.
   * 
   * @example
   * EFSDF-DF-***
   */
  nextContinuationToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The relative DB cluster ID.
   * 
   * @example
   * pc-2ze88***
   */
  relativeDBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  /**
   * @remarks
   * The total count of datasets.
   * 
   * @example
   * 6
   */
  totalCount?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 6
   */
  totalRecords?: string;
  static names(): { [key: string]: string } {
    return {
      continuationToken: 'ContinuationToken',
      dataServiceId: 'DataServiceId',
      datasetId: 'DatasetId',
      datasetMode: 'DatasetMode',
      datasetType: 'DatasetType',
      datasets: 'Datasets',
      fileCount: 'FileCount',
      isTruncated: 'IsTruncated',
      nextContinuationToken: 'NextContinuationToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      relativeDBClusterId: 'RelativeDBClusterId',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalRecords: 'TotalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continuationToken: 'string',
      dataServiceId: 'string',
      datasetId: 'string',
      datasetMode: 'string',
      datasetType: 'string',
      datasets: { 'type': 'array', 'itemType': DescribeAIDBClusterDatasetsResponseBodyDatasets },
      fileCount: 'string',
      isTruncated: 'boolean',
      nextContinuationToken: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      relativeDBClusterId: 'string',
      requestId: 'string',
      totalCount: 'string',
      totalRecords: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datasets)) {
      $dara.Model.validateArray(this.datasets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

