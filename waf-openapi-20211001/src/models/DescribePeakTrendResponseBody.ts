// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePeakTrendResponseBodyFlowChart } from "./DescribePeakTrendResponseBodyFlowChart";


export class DescribePeakTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of the QPS statistics of the WAF instance.
   */
  flowChart?: DescribePeakTrendResponseBodyFlowChart[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9D11AC3A-A10C-56E7-A342-E87EC892BAE2
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
      flowChart: { 'type': 'array', 'itemType': DescribePeakTrendResponseBodyFlowChart },
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

