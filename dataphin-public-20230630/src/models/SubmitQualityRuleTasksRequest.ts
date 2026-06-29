// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitQualityRuleTasksRequestSubmitCommandWatchRuleIdList extends $dara.Model {
  /**
   * @remarks
   * Rule ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ruleId?: number;
  /**
   * @remarks
   * Monitoring object ID
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
   * Business date, format: yyyy-MM-dd
   * 
   * @example
   * 2025-06-30
   */
  bizDate?: string;
  /**
   * @remarks
   * Whether it is a test run: true for test run, false for formal run.
   * 
   * This parameter is required.
   */
  isTestRun?: boolean;
  /**
   * @remarks
   * Partition expression - custom expression
   * 
   * @example
   * ds=${yyyyMMdd}
   */
  partitionExpression?: string;
  /**
   * @remarks
   * Source of the test run partition expression: SCHEDULE for existing schedule, CUSTOM for custom.
   * 
   * @example
   * CUSTOM
   */
  partitionExpressionFrom?: string;
  /**
   * @remarks
   * Existing schedule ID
   * 
   * @example
   * 1
   */
  scheduleId?: number;
  /**
   * @remarks
   * Monitoring object and rule IDs
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
   * Tenant ID
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * Submit command
   * 
   * This parameter is required.
   */
  submitCommand?: SubmitQualityRuleTasksRequestSubmitCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      submitCommand: 'SubmitCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
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

