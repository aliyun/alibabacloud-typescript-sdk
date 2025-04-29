// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSavingsPlanPriceResponseBodyPriceInfo } from "./DescribeSavingsPlanPriceResponseBodyPriceInfo";


export class DescribeSavingsPlanPriceResponseBody extends $dara.Model {
  priceInfo?: DescribeSavingsPlanPriceResponseBodyPriceInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: DescribeSavingsPlanPriceResponseBodyPriceInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.priceInfo && typeof (this.priceInfo as any).validate === 'function') {
      (this.priceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

