// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayQuotaRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The hash of the conflict snapshot, which is used to prevent concurrent dirty overwrites when you confirm to overwrite. You can obtain this value by performing a dry run with dryRun set to true and extracting it from the response.
   * 
   * You do not need to specify this parameter in the following scenarios: no conflicts exist, you perform only a dry run with dryRun set to true, or you do not confirm to overwrite with overwrite set to false.
   * 
   * If you set dryRun to false and overwrite to true but do not specify this parameter or the parameter expires and does not match, the backend returns accepted=false and a new conflict preview. In this case, you must perform a dry run again to confirm the new conflicts.
   * 
   * @example
   * f8f44dc6cf369a017d56b7197eb4fb5ac4bbb6b09a92b9b41999541fxxxxxxxx
   */
  conflictHash?: string;
  /**
   * @remarks
   * The IDs of the consumer groups to which the rule is bound.
   * 
   * @example
   * group1,group2
   */
  consumerGroupIds?: string[];
  /**
   * @remarks
   * The IDs of the consumers to which the rule is bound. You can specify up to 1,000 consumers at a time.
   * 
   * @example
   * 1001,1002,1003
   */
  consumerIds?: string[];
  /**
   * @remarks
   * Specifies whether to perform only a dry run without saving the configuration or delivering it to the gateway. A dry run checks whether conflicting rules exist on the bound subjects. A subject cannot have two natural period quotas with the same period. For example, if a subject already has a natural day quota, you cannot add another natural day quota rule to it.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to allow overwriting when conflicts occur. If you allow overwriting, the conflicting subjects (consumers or consumer groups) are unbound from the old rule and bound to the new rule.
   * 
   * @example
   * false
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The period multiplier in days. This parameter is required when windowAlignment is set to epoch. Valid values: 1 to 106751. Do not set this parameter for a natural period.
   * 
   * @example
   * 10
   */
  periodMultiplier?: number;
  /**
   * @remarks
   * The period type. For a natural period, valid values are day, week, and month. For a custom period, only day is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * week
   */
  periodType?: string;
  /**
   * @remarks
   * The quota dimension or limit type. Valid values: token and credit.
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
   * The subject type of the rule. A value of consumer indicates a consumer, and a value of consumer_group indicates a consumer group. Default value: consumer.
   * 
   * @example
   * consumer_group
   */
  subjectType?: string;
  /**
   * @remarks
   * The time zone for the natural period, in UTC+x format.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  /**
   * @remarks
   * The reset period type. A value of calendar indicates a natural period, and a value of epoch indicates a custom period.
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

