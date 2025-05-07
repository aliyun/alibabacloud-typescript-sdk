// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEcsSpecsRequest extends $dara.Model {
  /**
   * @remarks
   * Filter by accelerator type. Valid values:
   * 
   * *   CPU
   * *   GPU
   * 
   * @example
   * GPU
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The instance types to query. Separate the types with commas (,).
   * 
   * @example
   * ecs.g6.large,ecs.g6.xlarge
   */
  instanceTypes?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * *   desc: descending order.
   * *   asc: ascending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The number of the page to query. The start value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   ECS
   * *   Lingjun
   * 
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @remarks
   * The field based on which the results are sorted. Valid values:
   * 
   * *   CPU
   * *   GPU
   * *   Memory
   * *   GmtCreateTime
   * 
   * @example
   * Gpu
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

