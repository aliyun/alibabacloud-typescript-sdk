// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQuotaAlarmResponseBody extends $dara.Model {
  /**
   * @remarks
   * Alarm ID.
   * 
   * @example
   * 18b3be23-b7b0-4d45-91bc-d0c331aa****
   */
  alarmId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD219E2B-E687-45EE-B5F3-61FB730551B1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'string',
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

