// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFlowChartResponseBodyFlowChart } from "./DescribeFlowChartResponseBodyFlowChart";


export class DescribeFlowChartResponseBody extends $dara.Model {
  /**
   * @remarks
   * The traffic statistics.
   */
  flowChart?: DescribeFlowChartResponseBodyFlowChart[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BFA71416-670E-585D-AAE6-E7BBEE248FAB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowChart: 'FlowChart',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowChart: { 'type': 'array', 'itemType': DescribeFlowChartResponseBodyFlowChart },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flowChart)) {
      $dara.Model.validateArray(this.flowChart);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

