// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TravelStandardRelateDeleteShrinkRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  fromGroup?: boolean;
  removeListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6523763
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      fromGroup: 'from_group',
      removeListShrink: 'remove_list',
      ruleId: 'rule_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromGroup: 'boolean',
      removeListShrink: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

