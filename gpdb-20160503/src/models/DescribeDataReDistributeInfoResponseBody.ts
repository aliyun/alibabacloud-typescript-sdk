// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataReDistributeInfoResponseBodyDataReDistributeInfo } from "./DescribeDataReDistributeInfoResponseBodyDataReDistributeInfo";


export class DescribeDataReDistributeInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data redistribution information.
   */
  dataReDistributeInfo?: DescribeDataReDistributeInfoResponseBodyDataReDistributeInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04836A02-ADC9-1AA7-AC36-DE5E048BF505
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataReDistributeInfo: 'DataReDistributeInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataReDistributeInfo: DescribeDataReDistributeInfoResponseBodyDataReDistributeInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataReDistributeInfo && typeof (this.dataReDistributeInfo as any).validate === 'function') {
      (this.dataReDistributeInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

