// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventSourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the resource.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:164901546557****:eventbus/my-event-bus/eventsource/mymns.source
   */
  eventSourceARN?: string;
  static names(): { [key: string]: string } {
    return {
      eventSourceARN: 'EventSourceARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSourceARN: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

