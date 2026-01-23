// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignQualityRuleOfAllRuleScopeSchedulesRequestAssignCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ruleIdList?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  scheduleIdList?: number[];
  /**
   * @remarks
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
   * This parameter is required.
   */
  assignCommand?: AssignQualityRuleOfAllRuleScopeSchedulesRequestAssignCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      assignCommand: 'AssignCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignCommand: AssignQualityRuleOfAllRuleScopeSchedulesRequestAssignCommand,
      opTenantId: 'number',
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

