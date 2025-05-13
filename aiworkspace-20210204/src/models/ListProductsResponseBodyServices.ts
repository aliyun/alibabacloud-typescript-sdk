// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsResponseBodyServices extends $dara.Model {
  /**
   * @example
   * true
   */
  isOpen?: boolean;
  openUrl?: string;
  /**
   * @example
   * oss
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      isOpen: 'IsOpen',
      openUrl: 'OpenUrl',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isOpen: 'boolean',
      openUrl: 'string',
      serviceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

