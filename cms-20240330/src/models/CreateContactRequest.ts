// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContactRequest extends $dara.Model {
  /**
   * @example
   * testId
   */
  contactId?: string;
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
   * test_07
   */
  name?: string;
  /**
   * @example
   * 13012345678
   */
  phone?: string;
  /**
   * @example
   * default-cms-5884500827389836-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'contactId',
      email: 'email',
      imUserIds: 'imUserIds',
      lang: 'lang',
      name: 'name',
      phone: 'phone',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      email: 'string',
      imUserIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      lang: 'string',
      name: 'string',
      phone: 'string',
      workspace: 'string',
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

