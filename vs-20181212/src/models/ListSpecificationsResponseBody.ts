// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSpecificationsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The specification family.
   * 
   * @example
   * 4090CU
   */
  class?: string;
  /**
   * @remarks
   * The number of cores.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 8
   */
  memory?: number;
  /**
   * @remarks
   * The number of cards per single load.
   * 
   * @example
   * 1
   */
  shard?: number;
  /**
   * @remarks
   * `RenderingSpec`
   * 
   * @example
   * crs.xic.s1
   */
  specification?: string;
  /**
   * @remarks
   * The maximum storage capacity. Unit: GB.
   * 
   * @example
   * 90
   */
  storage?: number;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
      cores: 'Cores',
      memory: 'Memory',
      shard: 'Shard',
      specification: 'Specification',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
      cores: 'number',
      memory: 'number',
      shard: 'number',
      specification: 'string',
      storage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpecificationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result objects.
   */
  items?: ListSpecificationsResponseBodyItems[];
  /**
   * @remarks
   * The page number of the query list. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxx-xxx-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListSpecificationsResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

