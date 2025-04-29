// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigEventBridgeConfig extends $dara.Model {
  /**
   * @remarks
   * The region ID of the event bus in EventBridge.
   * 
   * @example
   * cn-hangzhou
   */
  eventBridgeRegionId?: string;
  /**
   * @remarks
   * The event bus.
   * 
   * @example
   * testBus
   */
  eventBus?: string;
  /**
   * @remarks
   * The event source.
   * 
   * @example
   * dds_driver
   */
  eventSource?: string;
  /**
   * @remarks
   * The ARN of the RAM role to be assumed by API Gateway to access EventBridge.
   * 
   * @example
   * acs:ram::1975133748561***:role/aliyunserviceroleforiotlogexport
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      eventBridgeRegionId: 'EventBridgeRegionId',
      eventBus: 'EventBus',
      eventSource: 'EventSource',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBridgeRegionId: 'string',
      eventBus: 'string',
      eventSource: 'string',
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

