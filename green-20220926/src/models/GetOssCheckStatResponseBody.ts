// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOssCheckStatResponseBodyBarChart } from "./GetOssCheckStatResponseBodyBarChart";


export class GetOssCheckStatResponseBody extends $dara.Model {
  barChart?: GetOssCheckStatResponseBodyBarChart;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      barChart: 'BarChart',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      barChart: GetOssCheckStatResponseBodyBarChart,
      requestId: 'string',
    };
  }

  validate() {
    if(this.barChart && typeof (this.barChart as any).validate === 'function') {
      (this.barChart as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

