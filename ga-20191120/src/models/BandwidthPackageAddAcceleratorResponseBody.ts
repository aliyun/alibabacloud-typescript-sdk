// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BandwidthPackageAddAcceleratorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The GA instance IDs.
   */
  accelerators?: string[];
  /**
   * @remarks
   * The bandwidth plan ID.
   * 
   * @example
   * gbwp-bp1sgzldyj6b4q7cx****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B7770CB9-9745-4FE5-9EDA-D14B01A12A50
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerators: 'Accelerators',
      bandwidthPackageId: 'BandwidthPackageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerators: { 'type': 'array', 'itemType': 'string' },
      bandwidthPackageId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accelerators)) {
      $dara.Model.validateArray(this.accelerators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

