// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDIAlarmRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Use the Id parameter instead.
   * 
   * @example
   * 2
   * 
   * @deprecated
   */
  DIAlarmRuleId?: number;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 1
   */
  DIJobId?: number;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 2
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      DIAlarmRuleId: 'DIAlarmRuleId',
      DIJobId: 'DIJobId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIAlarmRuleId: 'number',
      DIJobId: 'number',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

