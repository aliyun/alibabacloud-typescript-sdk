// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventBusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the event bus.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:123456789098****:eventbus/MyEventBus
   */
  eventBusARN?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusARN: 'EventBusARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusARN: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

