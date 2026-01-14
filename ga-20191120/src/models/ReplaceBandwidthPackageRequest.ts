// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceBandwidthPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The GA instance ID.
   * 
   * @example
   * ga-bp17frjjh0udz4qz****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The ID of the required bandwidth plan. When you specify a replacement bandwidth plan, take note of the following items:
   * 
   * *   Only a bandwidth plan that is not associated with a GA instance can be specified.
   * *   If you want to replace a basic bandwidth plan, make sure that the bandwidth provided by the replacement bandwidth plan is not less than the total bandwidth allocated to the acceleration area.
   * 
   * This parameter is required.
   * 
   * @example
   * gbwp-bp176neb61yhcymow****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The region ID of the GA instance. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the bandwidth plan that you want to replace.
   * 
   * This parameter is required.
   * 
   * @example
   * gbwp-o978hgeb61yhcymow****
   */
  targetBandwidthPackageId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      bandwidthPackageId: 'BandwidthPackageId',
      regionId: 'RegionId',
      targetBandwidthPackageId: 'TargetBandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      bandwidthPackageId: 'string',
      regionId: 'string',
      targetBandwidthPackageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

