// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrailDeliveryMetricDataResponseBodyMetricList extends $dara.Model {
  /**
   * @example
   * 21
   */
  count?: number;
  /**
   * @example
   * 1775721600000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrailDeliveryMetricDataResponseBody extends $dara.Model {
  metricList?: DescribeTrailDeliveryMetricDataResponseBodyMetricList[];
  /**
   * @example
   * 851038F3-33AB-4C49-97D7-6AB37D35****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metricList: 'MetricList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricList: { 'type': 'array', 'itemType': DescribeTrailDeliveryMetricDataResponseBodyMetricList },
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

