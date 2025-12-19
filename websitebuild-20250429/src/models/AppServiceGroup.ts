// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppServiceGroup extends $dara.Model {
  name?: string;
  qrCode?: string;
  /**
   * @remarks
   * 例如：dingtalk、wx 等
   */
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      qrCode: 'QrCode',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      qrCode: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

