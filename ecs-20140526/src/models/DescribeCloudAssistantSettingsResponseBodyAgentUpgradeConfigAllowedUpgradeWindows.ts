// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudAssistantSettingsResponseBodyAgentUpgradeConfigAllowedUpgradeWindows extends $dara.Model {
  allowedUpgradeWindow?: string[];
  static names(): { [key: string]: string } {
    return {
      allowedUpgradeWindow: 'AllowedUpgradeWindow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedUpgradeWindow: { 'type': 'array', 'itemType': 'string' },
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

