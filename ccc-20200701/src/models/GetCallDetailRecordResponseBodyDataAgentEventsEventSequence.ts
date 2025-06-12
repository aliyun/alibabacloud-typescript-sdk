// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCallDetailRecordResponseBodyDataAgentEventsEventSequence extends $dara.Model {
  /**
   * @example
   * 3
   */
  duration?: number;
  /**
   * @example
   * Dialing
   */
  event?: string;
  /**
   * @example
   * 1604639129000
   */
  eventTime?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      event: 'Event',
      eventTime: 'EventTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
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

