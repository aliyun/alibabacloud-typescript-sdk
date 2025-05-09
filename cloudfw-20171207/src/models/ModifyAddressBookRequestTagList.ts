// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAddressBookRequestTagList extends $dara.Model {
  /**
   * @remarks
   * The key of ECS tag N that you want to match.
   * 
   * @example
   * TXY
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of ECS tag N that you want to match.
   * 
   * @example
   * 1
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

