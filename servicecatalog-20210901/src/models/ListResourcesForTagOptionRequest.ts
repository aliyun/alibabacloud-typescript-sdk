// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesForTagOptionRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100 Minimum value: 1. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of resource that is associated with the tag option. Valid values:
   * 
   * *   product: product
   * *   Portfolio: product portfolio
   * 
   * This parameter is required.
   * 
   * @example
   * Product
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the tag option.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-bp1u6mdf3d****
   */
  tagOptionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      tagOptionId: 'TagOptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceType: 'string',
      tagOptionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

