// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContactRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * testId
   */
  contactId?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * test@aliyun.com
   */
  email?: string;
  /**
   * @remarks
   * The instant messaging (IM) user ID mapping, which supports multi-platform integration. The key is the IM type (such as DING or WEIXIN), and the value is the corresponding user ID.
   */
  imUserIds?: { [key: string]: string };
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh_CN
   */
  lang?: string;
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * test_07
   */
  name?: string;
  /**
   * @remarks
   * The mobile phone number. Currently, only mobile phone numbers in the Chinese mainland are supported.
   * 
   * @example
   * 13012345678
   */
  phone?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
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

