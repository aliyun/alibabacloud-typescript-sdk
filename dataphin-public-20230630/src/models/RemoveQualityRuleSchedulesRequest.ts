// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveQualityRuleSchedulesRequestRemoveCommand extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  ruleId?: number;
  /**
   * @remarks
   * The schedule IDs.
   * 
   * This parameter is required.
   */
  scheduleIdList?: number[];
  /**
   * @remarks
   * The ID of the monitored object.
   * 
   * This parameter is required.
   * 
   * @example
   * 平均值
   */
  watchId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      scheduleIdList: 'ScheduleIdList',
      watchId: 'WatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      scheduleIdList: { 'type': 'array', 'itemType': 'number' },
      watchId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scheduleIdList)) {
      $dara.Model.validateArray(this.scheduleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveQualityRuleSchedulesRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The unbinding instruction.
   * 
   * This parameter is required.
   */
  removeCommand?: RemoveQualityRuleSchedulesRequestRemoveCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      removeCommand: 'RemoveCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      removeCommand: RemoveQualityRuleSchedulesRequestRemoveCommand,
    };
  }

  validate() {
    if(this.removeCommand && typeof (this.removeCommand as any).validate === 'function') {
      (this.removeCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

