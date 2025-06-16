// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstancePublicIpAddressesPublicIpAddress extends $dara.Model {
  /**
   * @remarks
   * The ID of the public IP address of the GA instance.
   * 
   * @example
   * eip-bp19yqraac4w3y0jd****
   */
  allocationId?: string;
  /**
   * @remarks
   * The public IP address of the GA instance.
   * 
   * @example
   * 12.xx.xx.78
   */
  ipAddress?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
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

