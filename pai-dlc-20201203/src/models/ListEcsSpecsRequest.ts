// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEcsSpecsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters by accelerator type. Valid values:
   * - CPU
   * - GPU
   * 
   * @example
   * GPU
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The list of instance types to query. Separate multiple instance types with commas (,).
   * 
   * @example
   * ecs.g6.large,ecs.g6.xlarge
   */
  instanceTypes?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - desc: descending order.
   * - asc: ascending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. The minimum value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page in a paged query. This parameter is used for paging.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource type. Valid values:
   * - ECS
   * - Lingjun
   * 
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @remarks
   * Sorts by return field. Valid values:
   * - CPU
   * - GPU
   * - Memory
   * - GmtCreateTime
   * 
   * @example
   * GPU
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      instanceTypes: 'InstanceTypes',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      instanceTypes: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceType: 'string',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

