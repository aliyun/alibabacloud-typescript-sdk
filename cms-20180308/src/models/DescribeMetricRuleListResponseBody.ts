// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMetricRuleListResponseBodyAlarms } from "./DescribeMetricRuleListResponseBodyAlarms";


export class DescribeMetricRuleListResponseBody extends $dara.Model {
  alarms?: DescribeMetricRuleListResponseBodyAlarms;
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      alarms: 'Alarms',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarms: DescribeMetricRuleListResponseBodyAlarms,
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'string',
    };
  }

  validate() {
    if(this.alarms && typeof (this.alarms as any).validate === 'function') {
      (this.alarms as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

