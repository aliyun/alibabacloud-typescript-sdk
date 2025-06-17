// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRealTimeByteHitRateDataResponseBodyData } from "./DescribeDomainRealTimeByteHitRateDataResponseBodyData";


export class DescribeDomainRealTimeByteHitRateDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeDomainRealTimeByteHitRateDataResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 70A26B11-3673-479C-AEA8-E03FC5D3496D
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
      data: DescribeDomainRealTimeByteHitRateDataResponseBodyData,
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

