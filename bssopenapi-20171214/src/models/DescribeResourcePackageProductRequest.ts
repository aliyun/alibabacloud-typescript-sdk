// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourcePackageProductRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * ossbag
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

