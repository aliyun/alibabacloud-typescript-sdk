// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventStreamingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ARN of the event stream.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:164901546557****:eventstreaming/myeventstreaming
   */
  eventStreamingARN?: string;
  static names(): { [key: string]: string } {
    return {
      eventStreamingARN: 'EventStreamingARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventStreamingARN: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

