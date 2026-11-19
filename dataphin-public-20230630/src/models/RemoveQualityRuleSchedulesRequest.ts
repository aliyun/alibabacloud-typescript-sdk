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
   * The monitored object ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Average value
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
   * The operator user ID.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The unbind command.
   * 
   * This parameter is required.
   */
  removeCommand?: RemoveQualityRuleSchedulesRequestRemoveCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      removeCommand: 'RemoveCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
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

