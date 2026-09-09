// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerMmsTimerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the timer.
   * 
   * @example
   * 1
   */
  data?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0be3e0b716671885050924814e3623
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

