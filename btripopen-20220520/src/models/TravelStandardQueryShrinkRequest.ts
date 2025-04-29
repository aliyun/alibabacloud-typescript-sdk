// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TravelStandardQueryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  fromGroup?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2006523763
   */
  ruleCode?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  serviceTypeListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      fromGroup: 'from_group',
      ruleCode: 'rule_code',
      serviceTypeListShrink: 'service_type_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromGroup: 'boolean',
      ruleCode: 'number',
      serviceTypeListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

