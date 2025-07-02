// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncTaskEvent extends $dara.Model {
  /**
   * @example
   * body
   */
  eventDetail?: string;
  /**
   * @example
   * 1
   */
  eventId?: number;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @example
   * 1647420449721
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      eventDetail: 'eventDetail',
      eventId: 'eventId',
      status: 'status',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDetail: 'string',
      eventId: 'number',
      status: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

