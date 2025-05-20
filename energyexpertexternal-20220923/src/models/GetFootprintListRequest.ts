// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFootprintListRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20080808-1
   */
  code?: string;
  /**
   * @remarks
   * The pagination parameter. The number of the page that starts from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Product type: 1 indicates that the carbon footprint of the product is requested, and 5 indicates that the carbon footprint of the supply chain is requested.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      productType: 'productType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      pageSize: 'number',
      productType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

