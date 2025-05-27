// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventBusesResponseBodyDataEventBuses extends $dara.Model {
  /**
   * @remarks
   * The timestamp that indicates when the event bus was created.
   * 
   * @example
   * 1607071602000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * bus_description
   */
  description?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the event bus.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:123456789098***:eventbus/default
   */
  eventBusARN?: string;
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * default
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

