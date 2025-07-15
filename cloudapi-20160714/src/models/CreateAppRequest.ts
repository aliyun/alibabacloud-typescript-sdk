// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * Valid values of n: `[1, 20]`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * Valid values of n: `[1, 20]`. If the parameter has a value, you must specify a value for the tag key with the same N as tag.N.Key. Otherwise, an error is reported.
   * 
   * @example
   * \\" \\"
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $dara.Model {
  /**
   * @remarks
   * The AppCode of the application.
   * 
   * @example
   * 3aaf905a0a1f4f0eabc6d891dfa08afc
   */
  appCode?: string;
  /**
   * @remarks
   * The key of the application that is used to make an API call.
   * 
   * @example
   * 60030986
   */
  appKey?: string;
  /**
   * @remarks
   * The name of the application. The name must be 4 to 26 characters in length. The name can contain letters, digits, and underscores (_), and must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * CreateAppTest
   */
  appName?: string;
  /**
   * @remarks
   * The password of the application.
   * 
   * @example
   * nzyNqFkRWB2uLw86
   */
  appSecret?: string;
  /**
   * @remarks
   * The description of the application. The description can be up to 180 characters in length.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * 110210264071
   */
  extend?: string;
  securityToken?: string;
  /**
   * @remarks
   * The tag of objects that match the rule. You can specify multiple tags.
   * 
   * @example
   * Key， Value
   */
  tag?: CreateAppRequestTag[];
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appKey: 'AppKey',
      appName: 'AppName',
      appSecret: 'AppSecret',
      description: 'Description',
      extend: 'Extend',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appKey: 'string',
      appName: 'string',
      appSecret: 'string',
      description: 'string',
      extend: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': CreateAppRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

