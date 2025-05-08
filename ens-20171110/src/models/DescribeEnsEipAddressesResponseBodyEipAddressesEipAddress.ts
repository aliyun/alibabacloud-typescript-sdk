// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressTags } from "./DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressTags";


export class DescribeEnsEipAddressesResponseBodyEipAddressesEipAddress extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * @example
   * eip-5sainglpw7qfem3icir4s****
   */
  allocationId?: string;
  /**
   * @remarks
   * The time when the EIP was created.
   * 
   * @example
   * 1624885274000
   */
  allocationTime?: string;
  /**
   * @remarks
   * The peak bandwidth of the EIP. Default value: 5. Valid values: **5** to **10000**. Unit: Mbit/s.
   * 
   * @example
   * 50
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billing method of the EIP. Valid values:
   * 
   * *   **PrePaid**: subscription.
   * *   **PostPaid**: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The description of the EIP.
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * The ID of the ENS node.
   * 
   * @example
   * cn-xian-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the instance that is associated with the EIP.
   * 
   * @example
   * lb-5sc3kum2e0sz34wbqrws9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance that is associated with the EIP. Valid values:
   * 
   * *   **EnsInstance**: ENS instance in a VPC
   * *   **SlbInstance**: SLB instance
   * 
   * @example
   * SlbInstance
   */
  instanceType?: string;
  /**
   * @remarks
   * The metering method of the EIP.
   * 
   * *   **95BandwidthByMonth**: Pay by monthly 95th percentile bandwidth
   * *   **PayByBandwidth**: Pay by bandwidth
   * 
   * @example
   * 95BandwidthByMonth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The EIP.
   * 
   * @example
   * 10.10.10
   */
  ipAddress?: string;
  /**
   * @remarks
   * The running status of the EIP. This parameter is returned if the EIP is a secondary EIP. Valid values:
   * 
   * *   **Stopped**
   * *   **Running**
   * *   **Starting**
   * *   **Stopping**
   * 
   * @example
   * Stopped
   */
  ipStatus?: string;
  /**
   * @remarks
   * The Internet service provider (ISP). Valid values:
   * 
   * *   **cmcc**: China Mobile
   * *   **unicom**: China Unicom
   * *   **telecom**: China Telecom
   * 
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @remarks
   * The name of the EIP.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the EIP is a secondary EIP.
   * 
   * @example
   * true
   */
  standby?: boolean;
  /**
   * @remarks
   * The status of the EIP. Valid values:
   * 
   * *   **Associating**
   * *   **Unassociating**
   * *   **InUse**
   * *   **Available**
   * 
   * @example
   * Available
   */
  status?: string;
  tags?: DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressTags;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      allocationTime: 'AllocationTime',
      bandwidth: 'Bandwidth',
      chargeType: 'ChargeType',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
      ipStatus: 'IpStatus',
      isp: 'Isp',
      name: 'Name',
      standby: 'Standby',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      allocationTime: 'string',
      bandwidth: 'number',
      chargeType: 'string',
      description: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      ipAddress: 'string',
      ipStatus: 'string',
      isp: 'string',
      name: 'string',
      standby: 'boolean',
      status: 'string',
      tags: DescribeEnsEipAddressesResponseBodyEipAddressesEipAddressTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

