// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudAssistantSettingsRequestAgentUpgradeConfig extends $dara.Model {
  /**
   * @remarks
   * The time windows during which Cloud Assistant Agent can be upgraded. The time windows can be accurate to minutes. The Coordinated Universal Time (UTC) time zone is used by default.
   * 
   * Make sure that the upgrade windows specified by this parameter are not shorter than 1 hour.
   * 
   * Specify each upgrade window in the following format: \\<Start time in the HH:mm format>-\\<End time in the HH:mm format>.
   * 
   * For example, [ "02:00-03:00", "05:00-06:00" ] specifies that Cloud Assistant Agent can be upgraded from 2:00:00 to 3:00:00 and from 5:00:00 to 6:00:00 every day in the UTC time zone.
   */
  allowedUpgradeWindow?: string[];
  /**
   * @remarks
   * Specifies whether to enable custom upgrade for Cloud Assistant Agent. If you set this parameter to false, an upgrade attempt is performed for Cloud Assistant Agent every 30 minutes.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The time zone of the time windows. Default value: UTC. You can specify a time zone in the following forms:
   * 
   * *   The time zone name. Examples: Asia/Shanghai and America/Los_Angeles.
   * *   The time offset from GMT. Examples: GMT+8:00 (UTC+8) and GMT-7:00 (UTC-7). You cannot add leading zeros to the hour value.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      allowedUpgradeWindow: 'AllowedUpgradeWindow',
      enabled: 'Enabled',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedUpgradeWindow: { 'type': 'array', 'itemType': 'string' },
      enabled: 'boolean',
      timeZone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedUpgradeWindow)) {
      $dara.Model.validateArray(this.allowedUpgradeWindow);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

