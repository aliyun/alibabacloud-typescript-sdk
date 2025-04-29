// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudAssistantSettingsResponseBodyOssDeliveryConfigsOssDeliveryConfig } from "./DescribeCloudAssistantSettingsResponseBodyOssDeliveryConfigsOssDeliveryConfig";


export class DescribeCloudAssistantSettingsResponseBodyOssDeliveryConfigs extends $dara.Model {
  ossDeliveryConfig?: DescribeCloudAssistantSettingsResponseBodyOssDeliveryConfigsOssDeliveryConfig[];
  static names(): { [key: string]: string } {
    return {
      ossDeliveryConfig: 'OssDeliveryConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossDeliveryConfig: { 'type': 'array', 'itemType': DescribeCloudAssistantSettingsResponseBodyOssDeliveryConfigsOssDeliveryConfig },
    };
  }

  validate() {
    if(Array.isArray(this.ossDeliveryConfig)) {
      $dara.Model.validateArray(this.ossDeliveryConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

