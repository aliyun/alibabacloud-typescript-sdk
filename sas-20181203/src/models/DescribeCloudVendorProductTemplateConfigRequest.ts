// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudVendorProductTemplateConfigRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * CHAITIN
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

