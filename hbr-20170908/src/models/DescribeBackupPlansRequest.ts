// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPlansRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The key of the query filter. Valid values:
   * 
   * @example
   * vaultId
   */
  key?: string;
  /**
   * @remarks
   * The values to match in the query filter.
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
   * The edition type. Valid values: BASIC and STANDARD. Default value: STANDARD.
   * 
   * @example
   * STANDARD
   */
  edition?: string;
  /**
   * @remarks
   * The query filters.
   */
  filters?: DescribeBackupPlansRequestFilters[];
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
   * The number of entries per page. Minimum value: 1. Maximum value: 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the data source. Valid values:
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
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'string',
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

