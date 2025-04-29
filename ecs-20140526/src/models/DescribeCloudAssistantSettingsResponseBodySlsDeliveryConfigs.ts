// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudAssistantSettingsResponseBodySlsDeliveryConfigsSlsDeliveryConfig } from "./DescribeCloudAssistantSettingsResponseBodySlsDeliveryConfigsSlsDeliveryConfig";


export class DescribeCloudAssistantSettingsResponseBodySlsDeliveryConfigs extends $dara.Model {
  slsDeliveryConfig?: DescribeCloudAssistantSettingsResponseBodySlsDeliveryConfigsSlsDeliveryConfig[];
  static names(): { [key: string]: string } {
    return {
      slsDeliveryConfig: 'SlsDeliveryConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slsDeliveryConfig: { 'type': 'array', 'itemType': DescribeCloudAssistantSettingsResponseBodySlsDeliveryConfigsSlsDeliveryConfig },
    };
  }

  validate() {
    if(Array.isArray(this.slsDeliveryConfig)) {
      $dara.Model.validateArray(this.slsDeliveryConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

