// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequest extends $dara.Model {
  /**
   * @example
   * cmgj000112,cmgj000113
   */
  codes?: string;
  /**
   * @example
   * cmgj000114,cmgj000115
   */
  exceptCodes?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      codes: 'Codes',
      exceptCodes: 'ExceptCodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codes: 'string',
      exceptCodes: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

