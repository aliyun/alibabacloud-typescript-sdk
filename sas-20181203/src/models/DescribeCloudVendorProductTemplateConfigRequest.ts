// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudVendorProductTemplateConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for request and response messages, default is **zh**. Values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Cloud asset vendor. Values:
   * - **CHAITIN**: Chaitin Technology
   * - **FORTINET**: Fortinet
   * - **THREATBOOK**: ThreatBook
   * 
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

