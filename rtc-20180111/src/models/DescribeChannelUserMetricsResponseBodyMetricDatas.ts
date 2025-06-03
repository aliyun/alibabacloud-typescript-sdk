// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeChannelUserMetricsResponseBodyMetricDatasNodes } from "./DescribeChannelUserMetricsResponseBodyMetricDatasNodes";


export class DescribeChannelUserMetricsResponseBodyMetricDatas extends $dara.Model {
  nodes?: DescribeChannelUserMetricsResponseBodyMetricDatasNodes[];
  /**
   * @example
   * ALL_NUM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeChannelUserMetricsResponseBodyMetricDatasNodes },
      type: 'string',
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

