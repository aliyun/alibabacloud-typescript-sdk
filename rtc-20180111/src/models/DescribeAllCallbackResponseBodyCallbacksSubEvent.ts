// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAllCallbackResponseBodyCallbacksSubEvent extends $dara.Model {
  /**
   * @example
   * 2000
   */
  event?: number;
  /**
   * @example
   * 录制开始
   */
  eventName?: string;
  /**
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      eventName: 'EventName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'number',
      eventName: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

