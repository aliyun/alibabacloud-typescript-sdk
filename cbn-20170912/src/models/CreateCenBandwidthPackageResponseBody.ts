// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenBandwidthPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the bandwidth plan.
   * 
   * @example
   * cenbwp-4c2zaavbvh5fx****
   */
  cenBandwidthPackageId?: string;
  /**
   * @remarks
   * The ID of the order for the bandwidth plan.
   * 
   * @example
   * 20156420004****
   */
  cenBandwidthPackageOrderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E4B345CD-2CBA-4881-AF6D-E5D9BAE1CA7B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      cenBandwidthPackageOrderId: 'CenBandwidthPackageOrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenBandwidthPackageId: 'string',
      cenBandwidthPackageOrderId: 'string',
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

