// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainDetailDataByLayerResponseBodyData } from "./DescribeDomainDetailDataByLayerResponseBodyData";


export class DescribeDomainDetailDataByLayerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of IPv6 requests per second.
   */
  data?: DescribeDomainDetailDataByLayerResponseBodyData;
  /**
   * @remarks
   * The number of queries per second.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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
      data: DescribeDomainDetailDataByLayerResponseBodyData,
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

