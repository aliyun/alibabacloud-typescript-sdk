// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserAbnormalTrendResponseBodyTrend } from "./DescribeUserAbnormalTrendResponseBodyTrend";


export class DescribeUserAbnormalTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The trends of risks.
   */
  trend?: DescribeUserAbnormalTrendResponseBodyTrend[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trend: 'Trend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trend: { 'type': 'array', 'itemType': DescribeUserAbnormalTrendResponseBodyTrend },
    };
  }

  validate() {
    if(Array.isArray(this.trend)) {
      $dara.Model.validateArray(this.trend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

