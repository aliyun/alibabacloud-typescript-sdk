// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIpsetsBandwidthLimitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the bandwidth that is allocated.
   * 
   * *   **ShareBandwidth:** shared bandwidth.
   * *   **ExclusiveBandwidth:** dedicated bandwidth.
   * 
   * @example
   * ShareBandwidth
   */
  bandwidthAllocationType?: string;
  /**
   * @remarks
   * The maximum bandwidth of the acceleration area. Unit: Mbit/s.
   * 
   * @example
   * 20
   */
  bandwidthLimit?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthAllocationType: 'BandwidthAllocationType',
      bandwidthLimit: 'BandwidthLimit',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthAllocationType: 'string',
      bandwidthLimit: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

