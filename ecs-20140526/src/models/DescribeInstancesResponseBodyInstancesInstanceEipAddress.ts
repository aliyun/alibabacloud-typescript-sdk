// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceEipAddress extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * @example
   * eip-2ze88m67qx5z****
   */
  allocationId?: string;
  /**
   * @remarks
   * The maximum public bandwidth of the EIP. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  /**
   * @remarks
   * The metering method of the EIP. Valid values:
   * 
   * *   PayByBandwidth
   * *   PayByTraffic
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The EIP.
   * 
   * @example
   * ``42.112.**.**``
   */
  ipAddress?: string;
  /**
   * @remarks
   * Indicates whether the EIP can be disassociated.
   * 
   * @example
   * true
   */
  isSupportUnassociate?: boolean;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      bandwidth: 'Bandwidth',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
      isSupportUnassociate: 'IsSupportUnassociate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      bandwidth: 'number',
      internetChargeType: 'string',
      ipAddress: 'string',
      isSupportUnassociate: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

