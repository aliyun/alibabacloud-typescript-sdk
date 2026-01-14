// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BandwidthPackageRemoveAcceleratorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance.
   */
  accelerators?: string[];
  /**
   * @remarks
   * The ID of the bandwidth plan.
   * 
   * @example
   * gbwp-bp1sgzldyj6b4q7cx****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The ID of the request.
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

