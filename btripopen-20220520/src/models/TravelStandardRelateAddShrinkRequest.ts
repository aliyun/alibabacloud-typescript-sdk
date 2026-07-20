// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TravelStandardRelateAddShrinkRequest extends $dara.Model {
  addListShrink?: string;
  /**
   * @example
   * false
   */
  fromGroup?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6516571
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      addListShrink: 'add_list',
      fromGroup: 'from_group',
      ruleId: 'rule_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addListShrink: 'string',
      fromGroup: 'boolean',
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

