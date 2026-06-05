// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSpecificationsResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 4090CU
   */
  class?: string;
  /**
   * @example
   * 2
   */
  cores?: number;
  /**
   * @example
   * 8
   */
  memory?: number;
  /**
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
  items?: ListSpecificationsResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * xxxx-xxx-xxx
   */
  requestId?: string;
  /**
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

