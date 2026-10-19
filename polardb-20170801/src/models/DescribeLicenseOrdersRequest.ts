// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLicenseOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud order ID, including virtual order IDs.
   * 
   * @example
   * 239618016570503
   */
  aliyunOrderId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The package type. Valid values:
   * - single_node_subscribe: single node (subscription).
   * - single_node_long_term: single node (long-term).
   * - primary_backup_subscribe: primary/secondary (subscription).
   * - primary_backup_long_term: primary/secondary (long-term).
   * - pre_generation_long_term: pre-generation (long-term).
   * 
   * @example
   * single_node_subscribe
   */
  packageType?: string;
  /**
   * @remarks
   * The page number of the page to return.
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
   * The purchase channel. Valid values:
   * - aliyun_market: Alibaba Cloud Marketplace.
   * - aliyun_public: standard purchase page.
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

