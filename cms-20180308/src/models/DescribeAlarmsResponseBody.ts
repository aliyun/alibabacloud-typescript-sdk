// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAlarmsResponseBodyDatapoints } from "./DescribeAlarmsResponseBodyDatapoints";


export class DescribeAlarmsResponseBody extends $dara.Model {
  code?: number;
  datapoints?: DescribeAlarmsResponseBodyDatapoints;
  message?: string;
  requestId?: string;
  success?: boolean;
  total?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      datapoints: DescribeAlarmsResponseBodyDatapoints,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'string',
      traceId: 'string',
    };
  }

  validate() {
    if(this.datapoints && typeof (this.datapoints as any).validate === 'function') {
      (this.datapoints as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

