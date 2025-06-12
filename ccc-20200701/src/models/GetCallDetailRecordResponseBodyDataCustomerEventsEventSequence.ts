// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCallDetailRecordResponseBodyDataCustomerEventsEventSequence extends $dara.Model {
  /**
   * @example
   * Released
   */
  event?: string;
  /**
   * @example
   * 1532458000000
   */
  eventTime?: number;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      eventTime: 'EventTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

