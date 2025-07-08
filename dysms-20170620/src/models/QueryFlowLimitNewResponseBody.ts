// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFlowLimitNewResponseBody extends $dara.Model {
  dailyLimit?: number;
  hourLimit?: number;
  minuteLimit?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dailyLimit: 'DailyLimit',
      hourLimit: 'HourLimit',
      minuteLimit: 'MinuteLimit',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyLimit: 'number',
      hourLimit: 'number',
      minuteLimit: 'number',
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

