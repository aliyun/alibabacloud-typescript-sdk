// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudAssistantSettingsResponseBodyAgentUpgradeConfig } from "./DescribeCloudAssistantSettingsResponseBodyAgentUpgradeConfig";
import { DescribeCloudAssistantSettingsResponseBodyOssDeliveryConfigs } from "./DescribeCloudAssistantSettingsResponseBodyOssDeliveryConfigs";
import { DescribeCloudAssistantSettingsResponseBodySlsDeliveryConfigs } from "./DescribeCloudAssistantSettingsResponseBodySlsDeliveryConfigs";


export class DescribeCloudAssistantSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations for upgrading Cloud Assistant Agent.
   */
  agentUpgradeConfig?: DescribeCloudAssistantSettingsResponseBodyAgentUpgradeConfig;
  /**
   * @remarks
   * The configurations for delivering items to Object Storage Service (OSS).
   */
  ossDeliveryConfigs?: DescribeCloudAssistantSettingsResponseBodyOssDeliveryConfigs;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations for delivering items to Simple Log Service.
   */
  slsDeliveryConfigs?: DescribeCloudAssistantSettingsResponseBodySlsDeliveryConfigs;
  static names(): { [key: string]: string } {
    return {
      agentUpgradeConfig: 'AgentUpgradeConfig',
      ossDeliveryConfigs: 'OssDeliveryConfigs',
      requestId: 'RequestId',
      slsDeliveryConfigs: 'SlsDeliveryConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentUpgradeConfig: DescribeCloudAssistantSettingsResponseBodyAgentUpgradeConfig,
      ossDeliveryConfigs: DescribeCloudAssistantSettingsResponseBodyOssDeliveryConfigs,
      requestId: 'string',
      slsDeliveryConfigs: DescribeCloudAssistantSettingsResponseBodySlsDeliveryConfigs,
    };
  }

  validate() {
    if(this.agentUpgradeConfig && typeof (this.agentUpgradeConfig as any).validate === 'function') {
      (this.agentUpgradeConfig as any).validate();
    }
    if(this.ossDeliveryConfigs && typeof (this.ossDeliveryConfigs as any).validate === 'function') {
      (this.ossDeliveryConfigs as any).validate();
    }
    if(this.slsDeliveryConfigs && typeof (this.slsDeliveryConfigs as any).validate === 'function') {
      (this.slsDeliveryConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

