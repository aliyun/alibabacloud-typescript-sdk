// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserEventTrendResponseBodyTrend } from "./DescribeUserEventTrendResponseBodyTrend";


export class DescribeUserEventTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F51E6DD6-B2D2-57C9-90F1-FAFD0A19DE00
   */
  requestId?: string;
  /**
   * @remarks
   * The trends of attacks.
   */
  trend?: DescribeUserEventTrendResponseBodyTrend[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trend: 'Trend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trend: { 'type': 'array', 'itemType': DescribeUserEventTrendResponseBodyTrend },
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

