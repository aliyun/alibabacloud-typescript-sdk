// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupJobs2RequestFilters extends $dara.Model {
  /**
   * @remarks
   * The key of the filter. Valid values:
   * 
   * - **RegionId**: The region ID.
   * 
   * - **PlanId**: The backup plan ID.
   * 
   * - **JobId**: The backup job ID.
   * 
   * - **VaultId**: The repository ID.
   * 
   * - **InstanceId**: The ECS instance ID.
   * 
   * - **Bucket**: The name of the OSS bucket.
   * 
   * - **FileSystemId**: The file system ID.
   * 
   * - **Status**: The job status.
   * 
   * - **CreatedTime**: The start time of the job.
   * 
   * - **CompleteTime**: The end time of the job.
   * 
   * - **InstanceName**: The name of the Tablestore instance.
   * 
   * - **BackupType**: The backup job. This parameter is required only when SourceType is set to COMMON_NAS.
   * 
   * - **ParentId**: The ID of the parent job. This parameter is required when you query sub-tasks. For example, if you set SourceType to UDM_ECS_DISK, you must specify the ID of the UDM_ECS job.
   * 
   * @example
   * VaultId
   */
  key?: string;
  /**
   * @remarks
   * The matching operator. The default value is IN. This parameter specifies the operator to use for matching the Key and Value. Valid values:
   * 
   * - **EQUAL**: Equal to.
   * 
   * - **NOT_EQUAL**: Not equal to.
   * 
   * - **GREATER_THAN**: Greater than.
   * 
   * - **GREATER_THAN_OR_EQUAL**: Greater than or equal to.
   * 
   * - **LESS_THAN**: Less than.
   * 
   * - **LESS_THAN_OR_EQUAL**: Less than or equal to.
   * 
   * - **BETWEEN**: The value is a JSON array in the format of `[start,end]`.
   * 
   * - **IN**: The value is an array.
   * 
   * > The IN operator is not supported when you use **CompleteTime** as the key for a query.
   * 
   * @example
   * IN
   */
  operator?: string;
  /**
   * @remarks
   * The value of the filter.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2Request extends $dara.Model {
  /**
   * @remarks
   * The edition. Valid values: BASIC and STANDARD. The default value is STANDARD.
   * 
   * @example
   * STANDARD
   */
  edition?: string;
  /**
   * @remarks
   * The key-value pairs of the filter.
   */
  filters?: DescribeBackupJobs2RequestFilters[];
  /**
   * @remarks
   * The page number. Pages start from page 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. The default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort direction. Valid values:
   * 
   * - **ASCEND**: Ascending order.
   * 
   * - **DESCEND** (Default): Descending order.
   * 
   * @example
   * DESCEND
   */
  sortDirection?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * - **ECS_FILE**: Backs up Elastic Compute Service (ECS) files.
   * 
   * - **OSS**: Backs up Alibaba Cloud Object Storage Service (OSS) buckets.
   * 
   * - **NAS**: Backs up Alibaba Cloud Apsara File Storage NAS (NAS) file systems.
   * 
   * - **OTS**: Backs up Alibaba Cloud Tablestore instances.
   * 
   * - **UDM_ECS**: Backs up entire ECS instances.
   * 
   * - **UDM_ECS_DISK**: A sub-task for disk backup in an ECS instance backup job.
   * 
   * - **COMMON_NAS**: A generic NAS data source. This includes archive NAS and on-premises NAS data sources. Use the Values parameter of Filters to specify the data source type.
   * 
   * - **File**: Backs up on-premises files.
   * 
   * - **SYNC**: Data synchronization.
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortDirection: 'SortDirection',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'string',
      filters: { 'type': 'array', 'itemType': DescribeBackupJobs2RequestFilters },
      pageNumber: 'number',
      pageSize: 'number',
      sortDirection: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

