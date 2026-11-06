// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetGatewayQuotaRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The conflict snapshot hash, which is used to prevent concurrent dirty overwrites when overwriting is confirmed. You can obtain this value by first executing a request with dryRun=true and extracting it from the returned data.
   * 
   * This parameter is not required in the following scenarios: no conflicts exist; the request is only a dry run with dryRun=true; overwrite=false, meaning overwriting is not confirmed.
   * 
   * If dryRun=false and overwrite=true but this parameter is not provided or has expired and does not match, the backend returns accepted=false along with a new conflict preview. You must perform a dry run again to confirm the new conflicts.
   * 
   * @example
   * f8f44dc6cf369a017d56b7197eb4fb5ac4bbb6b09a92b9b41999541fxxxxxxxx
   */
  conflictHash?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run only without saving to the database or delivering actual configurations. This is used to check whether conflicting rules exist on the bound subjects. A single subject cannot be configured with two natural period quotas of the same period. For example, a subject that already has a natural daily quota cannot be added with another natural daily quota rule.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to allow overwriting when a conflict occurs. Note that if overwriting is allowed, the conflicting subjects (consumers or consumer groups) are unbound from the old rule and bound to the new rule.
   * 
   * @example
   * false
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The period multiplier, which specifies the number of periods after which the quota is reset. This parameter is returned when the rule uses a custom period. Minimum value: 1. Maximum value: 60.
   * 
   * @example
   * 1
   */
  periodMultiplier?: number;
  /**
   * @remarks
   * The period type. Natural periods support daily, weekly, and monthly statistics, and valid values are day, week, and month. Custom periods support only daily statistics, and the fixed value is day.
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
   * The time zone corresponding to the natural period, in UTC+x format.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  /**
   * @remarks
   * The period type for the reset. Natural periods (windowAlignment=calendar) and custom periods (windowAlignment=epoch) are supported.
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

