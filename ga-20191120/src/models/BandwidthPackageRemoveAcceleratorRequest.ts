// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BandwidthPackageRemoveAcceleratorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud Global Accelerator (GA) instance to disassociate from the bandwidth plan.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1qe94o52ot4pkfn****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The ID of the bandwidth plan to disassociate from the Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * gbwp-bp1sgzldyj6b4q7cx****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The region of the Alibaba Cloud Global Accelerator (GA) instance. Set the value to **ap-southeast-1**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      bandwidthPackageId: 'BandwidthPackageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      bandwidthPackageId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

