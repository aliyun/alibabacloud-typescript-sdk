// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudVendorRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content in the request and response messages. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The service provider of cloud assets. Valid values:
   * 
   * *   **Tencent**, **HUAWEICLOUD**, **Azure**, and **AWS**: other service providers of cloud assets.
   * 
   * @example
   * Tencent
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

