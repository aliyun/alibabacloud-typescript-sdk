// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreJobs2RequestFilters extends $dara.Model {
  /**
   * @remarks
   * The key in the filter. Valid values:
   * 
   * *   **RegionId**: the region ID
   * *   **PlanId**: the ID of a backup plan
   * *   **JobId**: the ID of a backup job
   * *   **VaultId**: the ID of a backup vault
   * *   **InstanceId**: the ID of an ECS instance
   * *   **Bucket**: the name of an OSS bucket
   * *   **FileSystemId**: the ID of a file system
   * *   **Status**: the status of a backup job
   * *   **CompleteTime**: the end time of a backup job
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
   * *   **BETWEEN**: specifies a JSON array as a range. The results must fall within the range in the `[Minimum value,Maximum value]` format.
   * *   **IN**: specifies an array as a collection. The results must fall within the collection.
   * 
   * > If you specify the **CompleteTime** parameter as a key to query backup jobs, you cannot use the IN operator to perform a match.
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

export class DescribeRestoreJobs2Request extends $dara.Model {
  /**
   * @example
   * STANDARD
   */
  edition?: string;
  /**
   * @remarks
   * The keys in the filter.
   */
  filters?: DescribeRestoreJobs2RequestFilters[];
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: Elastic Compute Service (ECS) files
   * *   **OSS**: Object Storage Service (OSS) buckets
   * *   **NAS**: Apsara File Storage NAS file systems
   * *   **OTS_TABLE**: Tablestore instances
   * *   **UDM_ECS_ROLLBACK**: ECS instances
   * 
   * @example
   * ECS_FILE
   */
  restoreType?: string;
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      restoreType: 'RestoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'string',
      filters: { 'type': 'array', 'itemType': DescribeRestoreJobs2RequestFilters },
      pageNumber: 'number',
      pageSize: 'number',
      restoreType: 'string',
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

