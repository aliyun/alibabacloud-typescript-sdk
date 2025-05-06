// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLicenseOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud order. The value can be the ID of a virtual order.
   * 
   * @example
   * 239618016570503
   */
  aliyunOrderId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The plan type. Valid values:
   * 
   * *   single_node_subscribe: Single-node Edition (Subscription).
   * *   single_node_long_term: Single-node Edition (Long-term).
   * *   primary_backup_subscribe: HA Edition (Subscription).
   * *   primary_backup_long_term: HA Edition (Long-term).
   * *   pre_generation_long_term: Pre-generated (Long-term).
   * 
   * @example
   * single_node_subscribe
   */
  packageType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The purchase channel. Valid values: aliyun_market and aliyun_public. aliyun_market specifies Alibaba Cloud Marketplace. aliyun_public specifies the PolarDB buy page.
   * 
   * @example
   * aliyun_market
   */
  purchaseChannel?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to query only virtual orders.
   * 
   * @example
   * true
   */
  virtualOrder?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliyunOrderId: 'AliyunOrderId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      packageType: 'PackageType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      purchaseChannel: 'PurchaseChannel',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      virtualOrder: 'VirtualOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunOrderId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      packageType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      purchaseChannel: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      virtualOrder: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

