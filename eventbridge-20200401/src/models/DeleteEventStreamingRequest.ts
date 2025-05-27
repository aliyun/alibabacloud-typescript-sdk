// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventStreamingRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the event stream that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * rocketmq-sync
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

