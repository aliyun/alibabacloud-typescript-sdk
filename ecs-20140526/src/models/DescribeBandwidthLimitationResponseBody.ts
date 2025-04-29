// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBandwidthLimitationResponseBodyBandwidths } from "./DescribeBandwidthLimitationResponseBodyBandwidths";


export class DescribeBandwidthLimitationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the maximum public bandwidth.
   */
  bandwidths?: DescribeBandwidthLimitationResponseBodyBandwidths;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidths: 'Bandwidths',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidths: DescribeBandwidthLimitationResponseBodyBandwidths,
      requestId: 'string',
    };
  }

  validate() {
    if(this.bandwidths && typeof (this.bandwidths as any).validate === 'function') {
      (this.bandwidths as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

