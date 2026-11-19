// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPoolsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The list of resource pool names to query.
   * 
   * @example
   * ["MyPool"]
   */
  poolName?: string[];
  /**
   * @remarks
   * The list of resource pool statuses to query.
   * 
   * @example
   * ["Working"]
   */
  status?: string[];
  /**
   * @remarks
   * The UNIX timestamp. Only resource pools created after the specified time are queried. The time is converted to a UNIX timestamp based on the time zone of the region where the resource pool resides. For regions in the Chinese mainland, the time zone is UTC+8.
   * 
   * @example
   * 1703819914
   */
  timeCreatedAfter?: number;
  /**
   * @remarks
   * The UNIX timestamp. Only resource pools created before the specified time are queried. The time is converted to a UNIX timestamp based on the time zone of the region where the resource pool resides. For regions in the Chinese mainland, the time zone is UTC+8.
   * 
   * @example
   * 1703820113
   */
  timeCreatedBefore?: number;
  static names(): { [key: string]: string } {
    return {
      poolName: 'PoolName',
      status: 'Status',
      timeCreatedAfter: 'TimeCreatedAfter',
      timeCreatedBefore: 'TimeCreatedBefore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolName: { 'type': 'array', 'itemType': 'string' },
      status: { 'type': 'array', 'itemType': 'string' },
      timeCreatedAfter: 'number',
      timeCreatedBefore: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.poolName)) {
      $dara.Model.validateArray(this.poolName);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoolsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions for querying resource pools.
   */
  filter?: ListPoolsRequestFilter;
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paging query. Maximum value: 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: ListPoolsRequestFilter,
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

