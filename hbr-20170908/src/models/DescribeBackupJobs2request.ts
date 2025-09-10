// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupJobs2RequestFilters extends $dara.Model {
  /**
   * @remarks
   * The keys in the filter. Valid values:
   * 
   * *   **RegionId**: the ID of a region
   * *   **PlanId**: the ID of a backup plan
   * *   **JobId**: the ID of a backup job
   * *   **VaultId**: the ID of a backup vault
   * *   **InstanceId**: the ID of an ECS instance
   * *   **Bucket**: the name of an OSS bucket
   * *   **FileSystemId**: the ID of a file system
   * *   **Status**: the status of a backup job
   * *   **CreatedTime**: the start time of a backup job
   * *   **CompleteTime**: the end time of a backup job
   * *   **instanceName**: the name of a Tablestore instance
   * 
   * @example
   * VaultId
   */
  key?: string;
  /**
   * @remarks
   * The matching method. Default value: IN. This parameter specifies the operator that you want to use to match a key and a value in the filter. Valid values:
   * 
   * *   **EQUAL**: equal to
   * *   **NOT_EQUAL**: not equal to
   * *   **GREATER_THAN**: greater than
   * *   **GREATER_THAN_OR_EQUAL**: greater than or equal to
   * *   **LESS_THAN**: less than
   * *   **LESS_THAN_OR_EQUAL**: less than or equal to
   * *   **BETWEEN**: specifies a JSON array as a range. The results must fall within the range in the `[Minimum value,maximum value]` format.
   * *   **IN**: specifies an array as a collection. The results must fall within the collection.
   * 
   * >  If you specify **CompleteTime** as a key to query backup jobs, you cannot use the IN operator to perform a match.
   * 
   * @example
   * IN
   */
  operator?: string;
  /**
   * @remarks
   * The values that you want to match in the filter.
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
   * @example
   * STANDARD
   */
  edition?: string;
  /**
   * @remarks
   * The keys that you want to match in the filter.
   */
  filters?: DescribeBackupJobs2RequestFilters[];
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The order in which you want to sort the results. Valid values:
   * 
   * *   **ASCEND**: sorts the results in ascending order
   * *   **DESCEND** (default value): sorts the results in descending order
   * 
   * @example
   * DESCEND
   */
  sortDirection?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: Elastic Compute Service (ECS) files
   * *   **OSS**: Object Storage Service (OSS) buckets
   * *   **NAS**: Apsara File Storage NAS file systems
   * *   **OTS**: Tablestore instances
   * *   **UDM_ECS**: ECS instances
   * *   **UDM_ECS_DISK**: ECS disks
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

