// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreJobs2RequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter key. Valid values:
   * 
   * - **RegionId**: region ID
   * 
   * - **PlanId**: backup plan ID
   * 
   * - **JobId**: backup job ID
   * 
   * - **VaultId**: vault ID
   * 
   * - **InstanceId**: ECS instance ID
   * 
   * - **Bucket**: OSS bucket name
   * 
   * - **FileSystemId**: file system ID
   * 
   * - **Status**: job status
   * 
   * - **CompleteTime**: completion time
   * 
   * @example
   * VaultId
   */
  key?: string;
  /**
   * @remarks
   * The matching method. The default value is IN. Valid values:
   * 
   * - **EQUAL**: Equal to
   * 
   * - **NOT_EQUAL**: Not equal to
   * 
   * - **GREATER_THAN**: Greater than
   * 
   * - **GREATER_THAN_OR_EQUAL**: Greater than or equal to
   * 
   * - **LESS_THAN**: Less than
   * 
   * - **LESS_THAN_OR_EQUAL**: Less than or equal to
   * 
   * - **BETWEEN**: The value is within a specified range. The `Values` parameter must be a JSON array in the `[min, max]` format.
   * 
   * - **IN**: The value is in a specified set. The `Values` parameter must be an array.
   * 
   * > The IN operator is not supported when `Key` is **CompleteTime**.
   * 
   * @example
   * IN
   */
  operator?: string;
  /**
   * @remarks
   * An array of values for the specified filter key.
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
   * @remarks
   * The edition. Valid values: `BASIC` and `STANDARD`. Default value: `STANDARD`.
   * 
   * @example
   * STANDARD
   */
  edition?: string;
  /**
   * @remarks
   * The filter conditions.
   */
  filters?: DescribeRestoreJobs2RequestFilters[];
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
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
   * The data source type. Valid values:
   * 
   * - **ECS_FILE**: Restores ECS files.
   * 
   * - **OSS**: Restores OSS objects.
   * 
   * - **NAS**: Restores NAS files.
   * 
   * - **COMMON_FILE_SYSTEM**: Restores data to a CPFS file system.
   * 
   * - **OTS_TABLE**: Restores an OTS table.
   * 
   * - **UDM_ECS_ROLLBACK**: Restores an entire ECS instance.
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

