// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserTagsResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The key of a tag.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag values returned.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

