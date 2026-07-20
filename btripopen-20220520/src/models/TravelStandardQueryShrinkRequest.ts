// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TravelStandardQueryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use the group travel standard.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  fromGroup?: boolean;
  /**
   * @remarks
   * The personnel rule code.
   * 
   * This parameter is required.
   * 
   * @example
   * 2006523763
   */
  ruleCode?: number;
  /**
   * @remarks
   * The service categories to query.
   * 
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

