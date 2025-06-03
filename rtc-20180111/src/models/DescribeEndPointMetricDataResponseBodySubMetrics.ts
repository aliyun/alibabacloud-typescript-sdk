// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEndPointMetricDataResponseBodySubMetricsNodes } from "./DescribeEndPointMetricDataResponseBodySubMetricsNodes";


export class DescribeEndPointMetricDataResponseBodySubMetrics extends $dara.Model {
  nodes?: DescribeEndPointMetricDataResponseBodySubMetricsNodes[];
  /**
   * @example
   * VIDEO_STUCK_CAMERA
   */
  type?: string;
  /**
   * @example
   * testuserid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodySubMetricsNodes },
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

