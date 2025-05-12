// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesWithEcsInfoResponseBodyDataInstanceTag extends $dara.Model {
  /**
   * @example
   * test_tag_key
   */
  tagKey?: string;
  /**
   * @example
   * test_tag_value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tag_key',
      tagValue: 'tag_value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

