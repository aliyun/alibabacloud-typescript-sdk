// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TravelStandardScopeSaveRequest extends $dara.Model {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  scope?: number;
  static names(): { [key: string]: string } {
    return {
      fromGroup: 'from_group',
      ruleId: 'rule_id',
      scope: 'scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromGroup: 'boolean',
      ruleId: 'number',
      scope: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

