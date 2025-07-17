// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateEventBridgeIntegrationRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID that is used to connect to EventBridge.
   * 
   * @example
   * abc******************
   */
  accessKey?: string;
  /**
   * @remarks
   * The AccessKey secret that is used to connect to EventBridge.
   * 
   * @example
   * abc******************
   */
  accessSecret?: string;
  /**
   * @remarks
   * The description of the EventBridge integration.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The public endpoint of EventBridge.
   * 
   * @example
   * http://xxxxx
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * EventBus_Test
   */
  eventBusName?: string;
  /**
   * @remarks
   * The region ID of the event bus.
   * 
   * @example
   * cn-hangzhou
   */
  eventBusRegionId?: string;
  /**
   * @remarks
   * The ID of the EventBridge integration.
   * 
   * *   If you do not specify this parameter, an EventBridge integration is created.
   * *   If you specify this parameter, the specified EventBridge integration is modified.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The name of the EventBridge integration.
   * 
   * This parameter is required.
   * 
   * @example
   * EventBridge_Test
   */
  name?: string;
  /**
   * @remarks
   * The event source.
   * 
   * @example
   * arms
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      accessSecret: 'AccessSecret',
      description: 'Description',
      endpoint: 'Endpoint',
      eventBusName: 'EventBusName',
      eventBusRegionId: 'EventBusRegionId',
      id: 'Id',
      name: 'Name',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      description: 'string',
      endpoint: 'string',
      eventBusName: 'string',
      eventBusRegionId: 'string',
      id: 'number',
      name: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

