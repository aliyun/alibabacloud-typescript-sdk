// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPrevLimitNewResponseBody extends $dara.Model {
  hourLimit?: number;
  increaseRate?: number;
  requestId?: string;
  successRate?: number;
  static names(): { [key: string]: string } {
    return {
      hourLimit: 'HourLimit',
      increaseRate: 'IncreaseRate',
      requestId: 'RequestId',
      successRate: 'SuccessRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hourLimit: 'number',
      increaseRate: 'number',
      requestId: 'string',
      successRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

