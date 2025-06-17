// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRealTimeReqHitRateDataResponseBodyData } from "./DescribeDomainRealTimeReqHitRateDataResponseBodyData";


export class DescribeDomainRealTimeReqHitRateDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeDomainRealTimeReqHitRateDataResponseBodyData;
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
      data: DescribeDomainRealTimeReqHitRateDataResponseBodyData,
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

