// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitQualityRuleTasksRequestSubmitCommandWatchRuleIdList extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ruleId?: number;
  /**
   * @remarks
   * The monitored object ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  watchId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      watchId: 'WatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      watchId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitQualityRuleTasksRequestSubmitCommand extends $dara.Model {
  /**
   * @remarks
   * The business date. Format: yyyy-MM-dd.
   * 
   * @example
   * 2025-06-30
   */
  bizDate?: string;
  /**
   * @remarks
   * Specifies whether to perform a test run. Valid values:
   * - true: performs a test run.
   * - false: performs a formal run.
   * 
   * This parameter is required.
   */
  isTestRun?: boolean;
  /**
   * @remarks
   * The custom partition expression.
   * 
   * @example
   * ds=${yyyyMMdd}
   */
  partitionExpression?: string;
  /**
   * @remarks
   * The source of the partition expression for the test run. Valid values:
   * - SCHEDULE: existing schedule.
   * - CUSTOM: custom expression.
   * 
   * @example
   * CUSTOM
   */
  partitionExpressionFrom?: string;
  /**
   * @remarks
   * The ID of the existing schedule.
   * 
   * @example
   * 1
   */
  scheduleId?: number;
  /**
   * @remarks
   * The monitored object and rule IDs.
   * 
   * This parameter is required.
   */
  watchRuleIdList?: SubmitQualityRuleTasksRequestSubmitCommandWatchRuleIdList[];
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      isTestRun: 'IsTestRun',
      partitionExpression: 'PartitionExpression',
      partitionExpressionFrom: 'PartitionExpressionFrom',
      scheduleId: 'ScheduleId',
      watchRuleIdList: 'WatchRuleIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      isTestRun: 'boolean',
      partitionExpression: 'string',
      partitionExpressionFrom: 'string',
      scheduleId: 'number',
      watchRuleIdList: { 'type': 'array', 'itemType': SubmitQualityRuleTasksRequestSubmitCommandWatchRuleIdList },
    };
  }

  validate() {
    if(Array.isArray(this.watchRuleIdList)) {
      $dara.Model.validateArray(this.watchRuleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitQualityRuleTasksRequest extends $dara.Model {
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
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The submit command.
   * 
   * This parameter is required.
   */
  submitCommand?: SubmitQualityRuleTasksRequestSubmitCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      submitCommand: 'SubmitCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      submitCommand: SubmitQualityRuleTasksRequestSubmitCommand,
    };
  }

  validate() {
    if(this.submitCommand && typeof (this.submitCommand as any).validate === 'function') {
      (this.submitCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

