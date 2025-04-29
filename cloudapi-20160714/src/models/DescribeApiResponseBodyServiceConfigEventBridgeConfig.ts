// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiResponseBodyServiceConfigEventBridgeConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the EventBridge instance is located.
   * 
   * @example
   * cn-beijing
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
   * baas_driver
   */
  eventSource?: string;
  /**
   * @remarks
   * The Arn that is authorized by a RAM user to EventBridge.
   * 
   * @example
   * acs:ram::1933122015759***:role/adminoidcaliyun
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

