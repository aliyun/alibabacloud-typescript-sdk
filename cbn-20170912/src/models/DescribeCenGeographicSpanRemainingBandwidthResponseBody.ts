// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenGeographicSpanRemainingBandwidthResponseBody extends $dara.Model {
  /**
   * @remarks
   * The remaining bandwidth of the bandwidth plan. Unit: Mbps.
   * 
   * @example
   * 2
   */
  remainingBandwidth?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E4B345CD-2CBA-4881-AF6D-E5D9BAE1CA7B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remainingBandwidth: 'RemainingBandwidth',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remainingBandwidth: 'number',
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

