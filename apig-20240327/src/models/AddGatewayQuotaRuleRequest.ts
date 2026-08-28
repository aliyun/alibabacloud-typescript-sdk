// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayQuotaRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The conflict snapshot hash, used to prevent concurrent dirty overwrites during confirmation. Obtain this value from the response of a previous dryRun=true request.
   * 
   * This parameter is not required in the following cases: no conflicts exist, the request is a dry run (dryRun=true), or overwrite=false (no overwrite confirmation).
   * 
   * When dryRun=false and overwrite=true, if this parameter is not provided or the value has expired and no longer matches, the backend returns accepted=false with a new conflict preview. Perform a dry run again to confirm the new conflicts.
   * 
   * @example
   * f8f44dc6cf369a017d56b7197eb4fb5ac4bbb6b09a92b9b41999541fxxxxxxxx
   */
  conflictHash?: string;
  /**
   * @remarks
   * The list of consumer group IDs (not supported currently).
   * 
   * @example
   * group1,group2
   */
  consumerGroupIds?: string[];
  /**
   * @remarks
   * The list of consumer IDs to bind to the rule. A maximum of 1000 consumers can be specified in a single request.
   * 
   * @example
   * 1001,1002,1003
   */
  consumerIds?: string[];
  /**
   * @remarks
   * Specifies whether to perform only a dry run without applying the configuration. A dry run checks whether conflicting rules exist on the bound consumers. For example, a consumer that already has a calendar-day quota cannot have another calendar-day quota rule added.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to allow overwriting when conflicts exist. If overwriting is allowed, the conflicting subjects (consumers) are unbound from the old rule and bound to the new rule.
   * 
   * @example
   * false
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The period multiplier. This parameter applies to epoch period rules.
   * 
   * @example
   * 10
   */
  periodMultiplier?: number;
  /**
   * @remarks
   * The period type. For calendar periods, statistics are collected by day, week, or month. Valid values: day, week, and month. For epoch periods, only day is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * week
   */
  periodType?: string;
  /**
   * @remarks
   * The quota dimension or throttling type. Valid values: token and credit. The credit quota applies only to dedicated instances running version 2.1.19 or later.
   * 
   * This parameter is required.
   * 
   * @example
   * token
   */
  quotaDimension?: string;
  /**
   * @remarks
   * The total available quota per period (limit).
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  quotaLimit?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * team-rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule subject type. Valid values: consumer (a consumer) and consumer_group (a consumer group). Default value: consumer.
   * 
   * @example
   * consumer_group
   */
  subjectType?: string;
  /**
   * @remarks
   * The time zone for the calendar period, in UTC+x format.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  /**
   * @remarks
   * The reset period type. Valid values: calendar (the period starts from the beginning of a calendar day, week, or month) and epoch (the period starts from when the rule is applied). The epoch type applies only to dedicated instances running version 2.1.19 or later.
   * 
   * @example
   * calendar
   */
  windowAlignment?: string;
  static names(): { [key: string]: string } {
    return {
      conflictHash: 'conflictHash',
      consumerGroupIds: 'consumerGroupIds',
      consumerIds: 'consumerIds',
      dryRun: 'dryRun',
      overwrite: 'overwrite',
      periodMultiplier: 'periodMultiplier',
      periodType: 'periodType',
      quotaDimension: 'quotaDimension',
      quotaLimit: 'quotaLimit',
      ruleName: 'ruleName',
      subjectType: 'subjectType',
      timezone: 'timezone',
      windowAlignment: 'windowAlignment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictHash: 'string',
      consumerGroupIds: { 'type': 'array', 'itemType': 'string' },
      consumerIds: { 'type': 'array', 'itemType': 'string' },
      dryRun: 'boolean',
      overwrite: 'boolean',
      periodMultiplier: 'number',
      periodType: 'string',
      quotaDimension: 'string',
      quotaLimit: 'number',
      ruleName: 'string',
      subjectType: 'string',
      timezone: 'string',
      windowAlignment: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.consumerGroupIds)) {
      $dara.Model.validateArray(this.consumerGroupIds);
    }
    if(Array.isArray(this.consumerIds)) {
      $dara.Model.validateArray(this.consumerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

