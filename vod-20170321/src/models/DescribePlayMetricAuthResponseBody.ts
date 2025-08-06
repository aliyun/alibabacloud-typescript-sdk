// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayMetricAuthResponseBody extends $dara.Model {
  metricList?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metricList: 'MetricList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metricList)) {
      $dara.Model.validateArray(this.metricList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

