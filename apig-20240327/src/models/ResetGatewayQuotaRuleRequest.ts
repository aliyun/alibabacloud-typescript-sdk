// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetGatewayQuotaRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The conflict snapshot hash, used to prevent concurrent dirty overwrites when confirming an overwrite. Obtain this value from the response of a dryRun=true request.
   * 
   * This parameter is not required in the following cases: no conflict exists, the request is a dry run (dryRun=true), or overwrite=false (overwrite not confirmed).
   * 
   * When dryRun=false and overwrite=true, if this parameter is not provided or the value has expired and does not match, the backend returns accepted=false with a new conflict preview. You must perform a dry run again to confirm the new conflict.
   * 
   * @example
   * f8f44dc6cf369a017d56b7197eb4fb5ac4bbb6b09a92b9b41999541fxxxxxxxx
   */
  conflictHash?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run without delivering the actual configuration. A dry run checks whether conflicting rules exist on the bound consumers. For example, a consumer that already has a calendar-day quota cannot have another calendar-day quota rule added.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to allow overwriting on conflict. If overwriting is allowed, the conflicting subject (consumer) is unbound from the old rule and bound to the new rule.
   * 
   * @example
   * false
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The period multiplier. Specifies how many periods elapse before the quota resets. Returned when the rule uses a custom period. Minimum value: 1. Maximum value: 60.
   * 
   * @example
   * 1
   */
  periodMultiplier?: number;
  /**
   * @remarks
   * The period type. Calendar periods support daily, weekly, and monthly statistics. Valid values: day, week, and month. Custom periods support only daily statistics. The value is fixed to day.
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
   * The time zone for the calendar period in UTC+x format.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  /**
   * @remarks
   * The period type after the reset. Valid values:
   * 
   * - calendar: calendar period.
   * - epoch: custom period. Custom periods are supported only on dedicated instances with version 2.1.19 or later.
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

