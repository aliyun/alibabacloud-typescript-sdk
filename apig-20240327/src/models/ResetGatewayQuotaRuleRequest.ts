// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetGatewayQuotaRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The conflict snapshot hash, which is used to prevent concurrent dirty overwrites when you confirm to overwrite. You can obtain this value by first executing a dry run with dryRun=true and extracting it from the response.
   * 
   * You do not need to specify this parameter in the following scenarios: no conflicts exist; you are only performing a dry run with dryRun=true; or overwrite=false, meaning you do not confirm to overwrite.
   * 
   * If dryRun=false and overwrite=true, but this parameter is not provided or has expired and does not match, the backend returns accepted=false along with a new conflict preview. You must perform a dry run again to confirm the new conflicts.
   * 
   * @example
   * f8f44dc6cf369a017d56b7197eb4fb5ac4bbb6b09a92b9b41999541fxxxxxxxx
   */
  conflictHash?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run only. A dry run does not deliver the actual configuration. This parameter is used to check whether conflicting rules exist on the bound subjects. A single subject cannot be configured with two calendar period quotas of the same period. For example, a subject that already has a calendar day quota cannot be assigned another calendar day quota rule.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to allow overwriting when conflicts exist. Note that if you allow overwriting, the conflicting subjects (consumers or consumer groups) are unbound from the old rule and bound to the new rule.
   * 
   * @example
   * false
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The period multiplier, which specifies the number of periods after which the quota is reset. This parameter is required when the rule uses a custom period. Valid values: 1 to 60.
   * 
   * @example
   * 1
   */
  periodMultiplier?: number;
  /**
   * @remarks
   * The period type. For a calendar period, statistics can be collected by day, week, or month. Valid values: day, week, and month. For a custom period, statistics can only be collected by day. Valid value: day.
   * 
   * @example
   * week
   */
  periodType?: string;
  /**
   * @remarks
   * The total available quota per period after the reset.
   * 
   * @example
   * 1000
   */
  quotaLimit?: number;
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
   * The period type after the reset. Valid values:
   * - calendar: Calendar period.
   * - epoch: Custom period.
   * 
   * @example
   * calendar
   */
  windowAlignment?: string;
  static names(): { [key: string]: string } {
    return {
      conflictHash: 'conflictHash',
      dryRun: 'dryRun',
      overwrite: 'overwrite',
      periodMultiplier: 'periodMultiplier',
      periodType: 'periodType',
      quotaLimit: 'quotaLimit',
      timezone: 'timezone',
      windowAlignment: 'windowAlignment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictHash: 'string',
      dryRun: 'boolean',
      overwrite: 'boolean',
      periodMultiplier: 'number',
      periodType: 'string',
      quotaLimit: 'number',
      timezone: 'string',
      windowAlignment: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

