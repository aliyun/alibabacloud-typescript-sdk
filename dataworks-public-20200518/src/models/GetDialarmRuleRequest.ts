// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDIAlarmRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The alert rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 34994
   */
  DIAlarmRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      DIAlarmRuleId: 'DIAlarmRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIAlarmRuleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

