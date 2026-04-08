// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMmsTimerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * timer id
   * 
   * @example
   * 1
   */
  timerId?: number;
  static names(): { [key: string]: string } {
    return {
      timerId: 'timerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMmsTimerResponseBody extends $dara.Model {
  data?: CreateMmsTimerResponseBodyData;
  /**
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
      data: CreateMmsTimerResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

