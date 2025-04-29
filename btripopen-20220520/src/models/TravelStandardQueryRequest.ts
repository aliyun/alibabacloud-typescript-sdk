// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TravelStandardQueryRequest extends $dara.Model {
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
  serviceTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      fromGroup: 'from_group',
      ruleCode: 'rule_code',
      serviceTypeList: 'service_type_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromGroup: 'boolean',
      ruleCode: 'number',
      serviceTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceTypeList)) {
      $dara.Model.validateArray(this.serviceTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

