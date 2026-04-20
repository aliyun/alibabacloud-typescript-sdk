// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterDatasetsResponseBodyDatasets extends $dara.Model {
  /**
   * @example
   * pcs-2ze22***-q7***
   */
  bucketName?: string;
  /**
   * @example
   * 2845904
   */
  capacity?: string;
  /**
   * @example
   * 2025-11-06T06:50:43Z
   */
  creationTime?: string;
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
  /**
   * @example
   * train-***.json
   */
  fileName?: string;
  /**
   * @example
   * 2025-11-06T06:50:43Z
   */
  lastModified?: string;
  /**
   * @example
   * polardb_ai/datasets/train/sft/dataset01/train-***.json
   */
  path?: string;
  /**
   * @example
   * Standard
   */
  storageType?: string;
  /**
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
   * @example
   * EFSDF-DF-***
   */
  continuationToken?: string;
  /**
   * @example
   * pcs-2zeei***
   */
  dataServiceId?: string;
  /**
   * @example
   * pds-2ze88***
   */
  datasetId?: string;
  /**
   * @example
   * stf
   */
  datasetMode?: string;
  /**
   * @example
   * train
   */
  datasetType?: string;
  datasets?: DescribeAIDBClusterDatasetsResponseBodyDatasets[];
  /**
   * @example
   * 6
   */
  fileCount?: string;
  /**
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @example
   * EFSDF-DF-***
   */
  nextContinuationToken?: string;
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
   * @example
   * 6
   */
  totalCount?: string;
  /**
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

