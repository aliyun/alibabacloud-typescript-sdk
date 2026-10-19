// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterDatasetsResponseBodyDatasets extends $dara.Model {
  /**
   * @remarks
   * The bucket to which the dataset belongs.
   * 
   * @example
   * pcs-2ze22***-q7***
   */
  bucketName?: string;
  /**
   * @remarks
   * The file size.
   * 
   * @example
   * 2845904
   */
  capacity?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * The time is in ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
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
   * The type of the dataset. Valid values:
   * 
   * * **train**: training dataset.
   * * **eval**: evaluation dataset.
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
   * The last modified time.
   * 
   * @example
   * 2025-11-06T06:50:43Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The dataset path.
   * 
   * @example
   * polardb_ai/datasets/train/sft/dataset01/train-***.json
   */
  path?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * * **Standard**: Standard storage.
   * 
   * @example
   * Standard
   */
  storageType?: string;
  /**
   * @remarks
   * The training mode of the dataset. Valid values:
   * 
   * * **sft**: supervised fine-tuning.
   * * **grpo**: reinforcement learning.
   * * **text**: text generation.
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
   * The ContinuationToken element is included in the response if the ContinuationToken parameter is specified in the request.
   * 
   * @example
   * EFSDF-DF-***
   */
  continuationToken?: string;
  /**
   * @remarks
   * The instance ID of the dataset management service.
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
   * The training mode of the dataset. Valid values:
   * 
   * * **sft**: supervised fine-tuning.
   * * **grpo**: reinforcement learning.
   * * **text**: text generation.
   * 
   * @example
   * stf
   */
  datasetMode?: string;
  /**
   * @remarks
   * The type of the dataset. Valid values:
   * 
   * * **train**: training dataset.
   * * **eval**: evaluation dataset.
   * 
   * @example
   * train
   */
  datasetType?: string;
  /**
   * @remarks
   * The datasets.
   */
  datasets?: DescribeAIDBClusterDatasetsResponseBodyDatasets[];
  /**
   * @remarks
   * The total number of files.
   * 
   * @example
   * 6
   */
  fileCount?: string;
  /**
   * @remarks
   * Indicates whether more datasets exist. Valid values:
   * 
   * * **true**: More datasets exist.
   * * **false**: No more datasets exist.
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The ContinuationToken for the next listing of files.
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
   * The ID of the database management service.
   * 
   * @example
   * pc-2ze88***
   */
  relativeDBClusterId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records. This parameter is returned only when you query a list.
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

