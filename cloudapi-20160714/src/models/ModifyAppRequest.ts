// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppRequestTag extends $dara.Model {
  /**
   * @remarks
   * The value of the tag.
   * 
   * N can be an integer from 1 to 20.``
   * 
   * This parameter is required.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * N can be an integer from 1 to 20.``
   * 
   * @example
   * value
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

export class ModifyAppRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the app.
   * 
   * This parameter is required.
   * 
   * @example
   * 20112314518278
   */
  appId?: number;
  /**
   * @remarks
   * The value must be 4 to 26 characters in length and can contain letters, digits, and underscores (_). It must start with a letter.
   * 
   * This parameter is required only when you want to modify the value.
   * 
   * @example
   * jiedian_pord
   */
  appName?: string;
  /**
   * @remarks
   * The description of the app. The description can contain a maximum of 180 characters in length.
   * 
   * This parameter is required only when you want to modify the value.
   * 
   * @example
   * modidyTest
   */
  description?: string;
  disabled?: boolean;
  /**
   * @remarks
   * 扩展信息
   * 
   * @example
   * 110461946884
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
  tag?: ModifyAppRequestTag[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      description: 'Description',
      disabled: 'Disabled',
      extend: 'Extend',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      description: 'string',
      disabled: 'boolean',
      extend: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': ModifyAppRequestTag },
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

