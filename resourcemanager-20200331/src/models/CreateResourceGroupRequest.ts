// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * v1
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

export class CreateResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the resource group.
   * 
   * The name must be 1 to 50 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * my-project
   */
  displayName?: string;
  /**
   * @remarks
   * The unique identifier of the resource group.
   * 
   * The identifier must be 2 to 50 characters in length and can contain letters, digits, and hyphens (-). It must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * my-project
   */
  name?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateResourceGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      name: 'Name',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      name: 'string',
      tag: { 'type': 'array', 'itemType': CreateResourceGroupRequestTag },
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

