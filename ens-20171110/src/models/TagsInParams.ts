// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class TagsInParamsTag extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @example
   * test-key-value
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

export class TagsInParams extends $dara.Model {
  tag?: TagsInParamsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': TagsInParamsTag },
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

