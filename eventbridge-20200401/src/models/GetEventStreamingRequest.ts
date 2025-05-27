// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventStreamingRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the event stream whose details you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * myeventstreaming
   */
  eventStreamingName?: string;
  static names(): { [key: string]: string } {
    return {
      eventStreamingName: 'EventStreamingName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventStreamingName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

