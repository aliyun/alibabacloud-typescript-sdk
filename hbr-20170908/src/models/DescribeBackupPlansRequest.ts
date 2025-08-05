// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPlansRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The keys in the filter. Valid values:
   * 
   * *   **regionId**: the ID of a region
   * *   **planId**: the ID of a backup plan
   * *   **sourceType**: the type of a data source
   * *   **vaultId**: the ID of a backup vault
   * *   **instanceName**: the name of an instance
   * *   **instanceId**: the ID of an instance
   * *   **planName**: the name of a backup plan
   * 
   * @example
   * vaultId
   */
  key?: string;
  /**
   * @remarks
   * The values that you want to match in the filter.
   * 
   * @example
   * ["v-*********************"]
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class DescribeBackupPlansRequest extends $dara.Model {
  /**
   * @remarks
   * The filters.
   */
  filters?: DescribeBackupPlansRequestFilters[];
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
   * *   **NAS**: File Storage NAS (NAS) file systems
   * *   **OTS**: Tablestore instances
   * *   **UDM_ECS**: ECS instances
   * *   **SYNC**: data synchronization
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': DescribeBackupPlansRequestFilters },
      pageNumber: 'number',
      pageSize: 'number',
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

