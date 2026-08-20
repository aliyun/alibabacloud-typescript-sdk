// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDistributionProductsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The search label category. Valid values:
   * 
   * - code: the commodity code of the promotional product
   * - name: the name of the promotional product
   * - supplierName: the name of the promotion service provider.
   * 
   * This parameter is required.
   * 
   * @example
   * supplierName
   */
  key?: string;
  /**
   * @remarks
   * The search tag value:
   * 
   * - code: the product code to search for
   * - name: the product name to search for
   * - supplierName: the supplier name to search for.
   * 
   * This parameter is required.
   * 
   * @example
   * cmj0000000
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributionProductsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of filter conditions.
   */
  filter?: DescribeDistributionProductsRequestFilter[];
  /**
   * @remarks
   * The current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of promotional products per page.
   * 
   * This parameter is required.
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
      filter: { 'type': 'array', 'itemType': DescribeDistributionProductsRequestFilter },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

