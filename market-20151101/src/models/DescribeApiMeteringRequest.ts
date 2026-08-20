// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiMeteringRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * cmapi0004****
   */
  productCode?: string;
  /**
   * @remarks
   * The type. Valid values:
   * - 1: subscription package.
   * - 2: resource plan.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'pageNum',
      productCode: 'productCode',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      productCode: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

