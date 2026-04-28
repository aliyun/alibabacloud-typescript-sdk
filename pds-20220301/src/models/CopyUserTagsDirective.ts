// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyUserTagsDirective extends $dara.Model {
  /**
   * @example
   * all, include, none, exclude
   */
  directive?: string;
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      directive: 'directive',
      keys: 'keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directive: 'string',
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

