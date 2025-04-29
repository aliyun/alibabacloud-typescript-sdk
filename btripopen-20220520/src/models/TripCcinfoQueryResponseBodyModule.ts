// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TripCCInfoQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * user_12138
   */
  notifier?: string;
  /**
   * @example
   * 1525104000
   */
  notifyStartTime?: number;
  static names(): { [key: string]: string } {
    return {
      notifier: 'notifier',
      notifyStartTime: 'notify_start_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifier: 'string',
      notifyStartTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

