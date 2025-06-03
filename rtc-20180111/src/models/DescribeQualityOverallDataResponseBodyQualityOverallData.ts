// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeQualityOverallDataResponseBodyQualityOverallDataNodes } from "./DescribeQualityOverallDataResponseBodyQualityOverallDataNodes";


export class DescribeQualityOverallDataResponseBodyQualityOverallData extends $dara.Model {
  /**
   * @example
   * 0.9376
   */
  average?: string;
  nodes?: DescribeQualityOverallDataResponseBodyQualityOverallDataNodes[];
  /**
   * @example
   * JOIN_CHANNEL_SUC_RATE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      nodes: 'Nodes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeQualityOverallDataResponseBodyQualityOverallDataNodes },
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

