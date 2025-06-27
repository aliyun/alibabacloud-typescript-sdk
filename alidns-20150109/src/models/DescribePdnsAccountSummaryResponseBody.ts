// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePdnsAccountSummaryResponseBodyData } from "./DescribePdnsAccountSummaryResponseBodyData";


export class DescribePdnsAccountSummaryResponseBody extends $dara.Model {
  data?: DescribePdnsAccountSummaryResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribePdnsAccountSummaryResponseBodyData,
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

