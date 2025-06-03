// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeChannelOverallDataResponseBodyMetricDatasNodes } from "./DescribeChannelOverallDataResponseBodyMetricDatasNodes";


export class DescribeChannelOverallDataResponseBodyMetricDatas extends $dara.Model {
  nodes?: DescribeChannelOverallDataResponseBodyMetricDatasNodes[];
  /**
   * @example
   * CALL_QUALITY
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
      nodes: { 'type': 'array', 'itemType': DescribeChannelOverallDataResponseBodyMetricDatasNodes },
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

