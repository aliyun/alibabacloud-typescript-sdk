// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceAttributeResponseBodyEipAddress extends $dara.Model {
  /**
   * @remarks
   * The EIP ID.
   * 
   * @example
   * eip-bp14k3rz6cbg6zxbe****
   */
  allocationId?: string;
  /**
   * @remarks
   * The maximum Internet bandwidth of the EIP. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billing method of the Internet-facing instance. Valid values:
   * 
   * *   **paybytraffic:** pay-by-data-transfer
   * *   **paybybandwidth**: pay-by-bandwidth
   * 
   * >  If the **pay-by-traffic** billing method is used for network usage, the maximum inbound and outbound bandwidths are used as the upper limits of bandwidths instead of guaranteed performance specifications. In scenarios in which demands exceed resource supplies, the maximum bandwidths may not be reached. If you want guaranteed bandwidths for your instance, use the **pay-by-bandwidth** billing method for network usage.
   * 
   * @example
   * paybytraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The EIP.
   * 
   * @example
   * 8.147.XXX.XXX
   */
  ipAddress?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      bandwidth: 'Bandwidth',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      bandwidth: 'number',
      internetChargeType: 'string',
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

