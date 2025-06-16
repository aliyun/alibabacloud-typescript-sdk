// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackagePublicIpAddressesPublicIpAddresse extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * @example
   * eip-bp13e9i2qst4g6jzi****
   */
  allocationId?: string;
  /**
   * @remarks
   * Indicates whether the EIP is associated with the Internet Shared Bandwidth instance. Valid values:
   * 
   * *   **BINDED**
   * *   **BINDING**
   * 
   * @example
   * BINDED
   */
  bandwidthPackageIpRelationStatus?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 47.95.XX.XX
   */
  ipAddress?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      bandwidthPackageIpRelationStatus: 'BandwidthPackageIpRelationStatus',
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      bandwidthPackageIpRelationStatus: 'string',
      ipAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

