// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveTagsFromResourceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The TagKey of the first tag that you want to unbind. Each tag consists of a TagKey and a TagValue. You can specify up to five tags in a single request. You cannot specify an empty string as the tag key. You can specify an empty string as the tag value.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The TagValue of the first tag that you want to unbind. Each tag consists of a TagKey and a TagValue. You can specify up to five tags in a single request. You cannot specify an empty string as the tag key. You can specify an empty string as the tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

