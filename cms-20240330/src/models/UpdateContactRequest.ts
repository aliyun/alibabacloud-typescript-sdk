// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContactRequest extends $dara.Model {
  /**
   * @example
   * test@aliyun.com
   */
  email?: string;
  imUserIds?: { [key: string]: string };
  /**
   * @example
   * zh_CN
   */
  lang?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 150123456789
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      imUserIds: 'imUserIds',
      lang: 'lang',
      name: 'name',
      phone: 'phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      imUserIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      lang: 'string',
      name: 'string',
      phone: 'string',
    };
  }

  validate() {
    if(this.imUserIds) {
      $dara.Model.validateMap(this.imUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

