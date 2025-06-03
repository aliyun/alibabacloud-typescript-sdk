// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUsageOverallDataResponseBodyUsageOverallDataNodes } from "./DescribeUsageOverallDataResponseBodyUsageOverallDataNodes";


export class DescribeUsageOverallDataResponseBodyUsageOverallData extends $dara.Model {
  nodes?: DescribeUsageOverallDataResponseBodyUsageOverallDataNodes[];
  /**
   * @example
   * ONLINE_USER_PEAK
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
      nodes: { 'type': 'array', 'itemType': DescribeUsageOverallDataResponseBodyUsageOverallDataNodes },
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

