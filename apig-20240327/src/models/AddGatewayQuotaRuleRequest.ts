// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayQuotaRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The conflict snapshot hash, which is used to prevent concurrent dirty overwrites when you confirm to overwrite. You can obtain this value by first setting dryRun to true and extracting it from the response.
   * 
   * You do not need to specify this parameter in the following scenarios: no conflicts exist; you only perform a dry run by setting dryRun to true; or you do not confirm overwriting by setting overwrite to false.
   * 
   * If you set dryRun to false and overwrite to true but do not specify this parameter or the parameter expires and does not match, the backend returns accepted=false along with a new conflict preview. In this case, you must perform a dry run again to confirm the new conflicts.
   * 
   * @example
   * f8f44dc6cf369a017d56b7197eb4fb5ac4bbb6b09a92b9b41999541fxxxxxxxx
   */
  conflictHash?: string;
  /**
   * @remarks
   * The IDs of the consumer groups to which the rule is bound. This parameter is used when subjectType is set to consumer_group and cannot be specified together with consumerIds.
   * 
   * @example
   * group1,group2
   */
  consumerGroupIds?: string[];
  /**
   * @remarks
   * The IDs of the consumers to which the rule is bound. You can specify up to 1,000 consumers in a single request.
   * 
   * @example
   * 1001,1002,1003
   */
  consumerIds?: string[];
  /**
   * @remarks
   * Specifies whether to perform only a dry run without saving or delivering the actual configuration. This is used to check whether conflicting rules exist on the bound consumption subjects. A single consumption subject cannot be configured with two natural period quotas of the same period. For example, a consumption subject that already has a natural day quota cannot be added with another natural day quota rule.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to allow overwriting when a conflict occurs. If overwriting is allowed, the conflicting subjects (consumers or consumer groups) are unbound from the old rule and bound to the new rule.
   * 
   * @example
   * false
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The period multiplier in days. This parameter is required for custom period rules and applies when windowAlignment is set to epoch. Valid values: 1 to 106751. Do not set this parameter for natural periods.
   * 
   * @example
   * 10
   */
  periodMultiplier?: number;
  /**
   * @remarks
   * The period type. For natural periods, valid values are day, week, and month. For custom periods, only day is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * week
   */
  periodType?: string;
  /**
   * @remarks
   * The quota dimension or limit type. Valid values: token, credit.
   * 
   * This parameter is required.
   * 
   * @example
   * token
   */
  quotaDimension?: string;
  /**
   * @remarks
   * The total available quota (limit) per period.
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
   * The subject type of the rule. Valid values: consumer, consumer_group. Default value: consumer.
   * 
   * @example
   * consumer_group
   */
  subjectType?: string;
  /**
   * @remarks
   * The time zone for the natural period in UTC+x format.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  /**
   * @remarks
   * The reset period type. A natural period starts from the beginning of a natural day, week, or month. A custom period starts when the rule is delivered. Valid values: calendar, epoch.
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

