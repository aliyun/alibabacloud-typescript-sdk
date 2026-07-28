// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIPv6TranslatorsRequest extends $dara.Model {
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
   * The business status of the IPv6 Translation Service instance. Valid values:
   * 
   * - **Normal**: normal.
   * 
   * - **FinancialLocked**: locked.
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The ID of the IPv6 Translation Service instance.
   * 
   * @example
   * ipv6trans-bp1858ys****
   */
  ipv6TranslatorId?: string;
  /**
   * @remarks
   * The name of the IPv6 Translation Service instance.
   * 
   * @example
   * ipv6_1
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the list. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in paging query. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The billing transform type of the IPv6 Translation Service instance. Valid values:
   * 
   * - **Prepay**: subscription.
   * 
   * - **Postpay**: pay-as-you-go.
   * 
   * @example
   * Prepay
   */
  payType?: string;
  /**
   * @remarks
   * The region of the IPv6 Translation Service instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The specification of the IPv6 Translation Service instance. Valid values: **small**.
   * 
   * @example
   * small
   */
  spec?: string;
  /**
   * @remarks
   * The status of the IPv6 Translation Service instance. Valid values:
   * 
   * - **init**: initializing.
   * 
   * - **provisioning**: being provisioned.
   * 
   * - **active**: available.
   * 
   * - **updating**: being updated.
   * 
   * - **upgrading**: being upgraded.
   * 
   * - **deleting**: being deleted.
   * 
   * - **deleted**: deleted.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      allocateIpv4Addr: 'AllocateIpv4Addr',
      allocateIpv6Addr: 'AllocateIpv6Addr',
      businessStatus: 'BusinessStatus',
      ipv6TranslatorId: 'Ipv6TranslatorId',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      spec: 'Spec',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocateIpv4Addr: 'string',
      allocateIpv6Addr: 'string',
      businessStatus: 'string',
      ipv6TranslatorId: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      payType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      spec: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

