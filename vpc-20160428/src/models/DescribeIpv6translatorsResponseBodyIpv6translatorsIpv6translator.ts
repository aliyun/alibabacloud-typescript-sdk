// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIPv6TranslatorsResponseBodyIpv6TranslatorsIpv6TranslatorIpv6TranslatorEntryIds } from "./DescribeIpv6translatorsResponseBodyIpv6translatorsIpv6translatorIpv6translatorEntryIds";


export class DescribeIPv6TranslatorsResponseBodyIpv6TranslatorsIpv6Translator extends $dara.Model {
  /**
   * @remarks
   * The IPv4 address allocated to the IPv6 Translation Service instance.
   * 
   * @example
   * 47.99.XX.XX
   */
  allocateIpv4Addr?: string;
  /**
   * @remarks
   * The IPv6 address allocated to the IPv6 Translation Service instance.
   * 
   * @example
   * 2400:3200:1600::XXXX
   */
  allocateIpv6Addr?: string;
  /**
   * @remarks
   * The bandwidth of the IPv6 Translation Service instance.
   * 
   * @example
   * 1
   */
  availableBandwidth?: string;
  /**
   * @remarks
   * The bandwidth of the IPv6 Translation Service instance. Unit: Mbit/s.
   * 
   * @example
   * 1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The business status of the IPv6 Translation Service instance. Valid values:
   * 
   * *   **Normal**
   * *   **FinancialLocked**
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The timestamp when the IPv6 Translation Service instance was created.
   * 
   * @example
   * 1537151540000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the IPv6 Translation Service instance.
   * 
   * @example
   * descriptionforinstance
   */
  description?: string;
  /**
   * @remarks
   * The timestamp when IPv6 Translation Service instance expires.
   * 
   * @example
   * 1539792000000
   */
  endTime?: number;
  /**
   * @remarks
   * The IDs of IPv6 mapping entries of the IPv6 Translation Service instance.
   */
  ipv6TranslatorEntryIds?: DescribeIPv6TranslatorsResponseBodyIpv6TranslatorsIpv6TranslatorIpv6TranslatorEntryIds;
  /**
   * @remarks
   * The ID of the IPv6 Translation Service instance.
   * 
   * @example
   * ipv6trans-bp1858ys*****
   */
  ipv6TranslatorId?: string;
  /**
   * @remarks
   * The name of the IPv6 Translation Service instance.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The billing method of the IPv6 Translation Service instance.
   * 
   * *   **Prepay**: subscription
   * *   **Postpay**: pay-as-you-go
   * 
   * @example
   * Prepay
   */
  payType?: string;
  /**
   * @remarks
   * The region of the IPv6 Translation Service instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The specification of the IPv6 Translation Service instance.
   * 
   * @example
   * small
   */
  spec?: string;
  /**
   * @remarks
   * The status of the IPv6 Translation Service instance.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      allocateIpv4Addr: 'AllocateIpv4Addr',
      allocateIpv6Addr: 'AllocateIpv6Addr',
      availableBandwidth: 'AvailableBandwidth',
      bandwidth: 'Bandwidth',
      businessStatus: 'BusinessStatus',
      createTime: 'CreateTime',
      description: 'Description',
      endTime: 'EndTime',
      ipv6TranslatorEntryIds: 'Ipv6TranslatorEntryIds',
      ipv6TranslatorId: 'Ipv6TranslatorId',
      name: 'Name',
      payType: 'PayType',
      regionId: 'RegionId',
      spec: 'Spec',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocateIpv4Addr: 'string',
      allocateIpv6Addr: 'string',
      availableBandwidth: 'string',
      bandwidth: 'number',
      businessStatus: 'string',
      createTime: 'number',
      description: 'string',
      endTime: 'number',
      ipv6TranslatorEntryIds: DescribeIPv6TranslatorsResponseBodyIpv6TranslatorsIpv6TranslatorIpv6TranslatorEntryIds,
      ipv6TranslatorId: 'string',
      name: 'string',
      payType: 'string',
      regionId: 'string',
      spec: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.ipv6TranslatorEntryIds && typeof (this.ipv6TranslatorEntryIds as any).validate === 'function') {
      (this.ipv6TranslatorEntryIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

