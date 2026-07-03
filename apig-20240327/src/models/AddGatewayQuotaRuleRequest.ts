// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayQuotaRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The conflict snapshot hash used to prevent concurrent dirty overwrites during confirmation. Obtain this value from the response of a previous dryRun=true call.
   * 
   * You do not need to specify this parameter in the following cases: no conflict exists, the request is a dry run (dryRun=true), or overwrite=false.
   * 
   * When dryRun=false and overwrite=true, if this parameter is not specified or the value has expired, the backend returns accepted=false with a new conflict preview. Perform a dry run again to confirm the new conflict.
   * 
   * @example
   * f8f44dc6cf369a017d56b7197eb4fb5ac4bbb6b09a92b9b41999541fxxxxxxxx
   */
  conflictHash?: string;
  /**
   * @remarks
   * The list of consumer group IDs. This parameter is not supported.
   * 
   * @example
   * group1,group2
   * 
   * @deprecated
   */
  consumerGroupIds?: string[];
  /**
   * @remarks
   * The list of consumer IDs to bind to the rule.
   * 
   * @example
   * 1001,1002,1003
   */
  consumerIds?: string[];
  /**
   * @remarks
   * Specifies whether to perform only a dry run without persisting or applying the configuration. A dry run checks whether conflicting rules exist on the bound consumers. For example, a consumer that already has a daily calendar quota cannot have another daily calendar quota rule added.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to allow overwriting on conflict. If overwriting is allowed, the conflicting principals (consumers) are unbound from the old rule and bound to the new rule.
   * 
   * @example
   * false
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The period multiplier.
   * 
   * @example
   * 10
   */
  periodMultiplier?: number;
  /**
   * @remarks
   * The period type. Valid values: day (calendar day), week (calendar week), and month (calendar month).
   * 
   * This parameter is required.
   * 
   * @example
   * week
   */
  periodType?: string;
  /**
   * @remarks
   * The quota dimension or throttling type. Currently, only token is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * token
   */
  quotaDimension?: string;
  /**
   * @remarks
   * The total available quota per period.
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
   * 团队规则
   */
  ruleName?: string;
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
   * The reset period alignment type. Currently, only calendar alignment is supported, which means windowAlignment="calendar".
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

