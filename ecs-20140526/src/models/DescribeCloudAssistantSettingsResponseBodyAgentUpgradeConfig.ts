// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudAssistantSettingsResponseBodyAgentUpgradeConfigAllowedUpgradeWindows } from "./DescribeCloudAssistantSettingsResponseBodyAgentUpgradeConfigAllowedUpgradeWindows";


export class DescribeCloudAssistantSettingsResponseBodyAgentUpgradeConfig extends $dara.Model {
  /**
   * @remarks
   * The time windows during which Cloud Assistant Agent can be upgraded.
   */
  allowedUpgradeWindows?: DescribeCloudAssistantSettingsResponseBodyAgentUpgradeConfigAllowedUpgradeWindows;
  /**
   * @remarks
   * Indicates whether custom upgrade is enabled for Cloud Assistant Agent. If the value is false or empty, an upgrade attempt is performed for Cloud Assistant Agent every 30 minutes.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The time zone of the time windows.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      allowedUpgradeWindows: 'AllowedUpgradeWindows',
      enabled: 'Enabled',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedUpgradeWindows: DescribeCloudAssistantSettingsResponseBodyAgentUpgradeConfigAllowedUpgradeWindows,
      enabled: 'boolean',
      timeZone: 'string',
    };
  }

  validate() {
    if(this.allowedUpgradeWindows && typeof (this.allowedUpgradeWindows as any).validate === 'function') {
      (this.allowedUpgradeWindows as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

