// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddressBookResponseBodyAclsTagList extends $dara.Model {
  /**
   * @remarks
   * The key of the ECS tag.
   * 
   * @example
   * company
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the ECS tag.
   * 
   * @example
   * admin
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
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

