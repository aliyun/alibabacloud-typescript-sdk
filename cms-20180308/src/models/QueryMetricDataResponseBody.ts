// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMetricDataResponseBody extends $dara.Model {
  code?: string;
  datapoints?: string;
  message?: string;
  period?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      period: 'Period',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datapoints: 'string',
      message: 'string',
      period: 'string',
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

