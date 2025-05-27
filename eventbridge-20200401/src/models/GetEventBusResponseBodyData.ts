// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventBusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The timestamp that indicates when the event bus was created.
   * 
   * @example
   * 1641781825000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The description of the event bus.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the event bus.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:123456789098****:eventbus/MyEventBus
   */
  eventBusARN?: string;
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * MyEventBus
   */
  eventBusName?: string;
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'CreateTimestamp',
      description: 'Description',
      eventBusARN: 'EventBusARN',
      eventBusName: 'EventBusName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      description: 'string',
      eventBusARN: 'string',
      eventBusName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

