// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnUserBillTypeResponseBodyBillTypeData } from "./DescribeCdnUserBillTypeResponseBodyBillTypeData";


export class DescribeCdnUserBillTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the metering methods returned.
   */
  billTypeData?: DescribeCdnUserBillTypeResponseBodyBillTypeData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C370DAF1-C838-4288-A1A0-9A87633D248E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      billTypeData: 'BillTypeData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billTypeData: DescribeCdnUserBillTypeResponseBodyBillTypeData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.billTypeData && typeof (this.billTypeData as any).validate === 'function') {
      (this.billTypeData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

