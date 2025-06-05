// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEcsSpecsRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerator type.
   * 
   * *   CPU: Only CPU computing is used.
   * *   GPU: GPUs are used to accelerate computing.
   * 
   * This parameter is required.
   * 
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * *   ASC
   * *   DESC
   * 
   * @example
   * DESC
   */
  order?: string;
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceType?: string;
  /**
   * @remarks
   * The field by which the query results are sorted. Set the value to gmtCreate.
   * 
   * @example
   * gmtCreate
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
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

