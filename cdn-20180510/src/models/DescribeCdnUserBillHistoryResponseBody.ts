// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnUserBillHistoryResponseBodyBillHistoryData } from "./DescribeCdnUserBillHistoryResponseBodyBillHistoryData";


export class DescribeCdnUserBillHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The billing history returned.
   */
  billHistoryData?: DescribeCdnUserBillHistoryResponseBodyBillHistoryData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ED61C6C3-8241-4187-AAA7-5157AE175CEC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      billHistoryData: 'BillHistoryData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billHistoryData: DescribeCdnUserBillHistoryResponseBodyBillHistoryData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.billHistoryData && typeof (this.billHistoryData as any).validate === 'function') {
      (this.billHistoryData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

