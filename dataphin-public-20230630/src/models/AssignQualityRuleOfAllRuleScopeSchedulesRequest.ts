// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignQualityRuleOfAllRuleScopeSchedulesRequestAssignCommand extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   */
  ruleIdList?: number[];
  /**
   * @remarks
   * The schedule ID.
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
   * 平均值
   */
  watchId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleIdList: 'RuleIdList',
      scheduleIdList: 'ScheduleIdList',
      watchId: 'WatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleIdList: { 'type': 'array', 'itemType': 'number' },
      scheduleIdList: { 'type': 'array', 'itemType': 'number' },
      watchId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleIdList)) {
      $dara.Model.validateArray(this.ruleIdList);
    }
    if(Array.isArray(this.scheduleIdList)) {
      $dara.Model.validateArray(this.scheduleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignQualityRuleOfAllRuleScopeSchedulesRequest extends $dara.Model {
  /**
   * @remarks
   * The assignment binding command.
   * 
   * This parameter is required.
   */
  assignCommand?: AssignQualityRuleOfAllRuleScopeSchedulesRequestAssignCommand;
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
   * The ID of the operator user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      assignCommand: 'AssignCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignCommand: AssignQualityRuleOfAllRuleScopeSchedulesRequestAssignCommand,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.assignCommand && typeof (this.assignCommand as any).validate === 'function') {
      (this.assignCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

