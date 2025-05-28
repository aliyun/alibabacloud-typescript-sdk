// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountLowAvailableAmountAlarmResponseBody extends $dara.Model {
  alarmEnabled?: boolean;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  thresholdAmount?: string;
  static names(): { [key: string]: string } {
    return {
      alarmEnabled: 'AlarmEnabled',
      metadata: 'Metadata',
      requestId: 'RequestId',
      thresholdAmount: 'ThresholdAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEnabled: 'boolean',
      metadata: 'any',
      requestId: 'string',
      thresholdAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

