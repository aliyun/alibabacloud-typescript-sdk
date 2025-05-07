// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisecStatisticsResponseBodyData } from "./DescribeApisecStatisticsResponseBodyData";


export class DescribeApisecStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned results.
   */
  data?: DescribeApisecStatisticsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 221F0F14-54C6-59A1-9967-72***81B61A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeApisecStatisticsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

