// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEndPointMetricDataResponseBodyPubMetrics } from "./DescribeEndPointMetricDataResponseBodyPubMetrics";
import { DescribeEndPointMetricDataResponseBodySubMetrics } from "./DescribeEndPointMetricDataResponseBodySubMetrics";


export class DescribeEndPointMetricDataResponseBody extends $dara.Model {
  pubMetrics?: DescribeEndPointMetricDataResponseBodyPubMetrics[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  subMetrics?: DescribeEndPointMetricDataResponseBodySubMetrics[];
  static names(): { [key: string]: string } {
    return {
      pubMetrics: 'PubMetrics',
      requestId: 'RequestId',
      subMetrics: 'SubMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubMetrics: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodyPubMetrics },
      requestId: 'string',
      subMetrics: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodySubMetrics },
    };
  }

  validate() {
    if(Array.isArray(this.pubMetrics)) {
      $dara.Model.validateArray(this.pubMetrics);
    }
    if(Array.isArray(this.subMetrics)) {
      $dara.Model.validateArray(this.subMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

