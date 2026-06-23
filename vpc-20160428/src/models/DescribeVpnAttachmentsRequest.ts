// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnAttachmentsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of resource to which the IPsec-VPN connection is attached. Default value: **CEN**.
   * 
   * The value can only be **CEN**, which indicates that the system queries IPsec-VPN connections that are associated with transit router instances.
   * 
   * @example
   * CEN
   */
  attachType?: string;
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
   * The number of entries per page when paging is used. Default value: **10**. Valid values: **1** to **50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the IPsec-VPN connection.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
   * The ID of the IPsec-VPN connection.
   * 
   * > If you do not specify the IPsec-VPN connection ID, the system queries information about all IPsec-VPN connections that are associated with transit router instances in the current region.
   * 
   * @example
   * vco-p0w2jpkhi2eeop6q6****
   */
  vpnConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      attachType: 'AttachType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vpnConnectionId: 'VpnConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vpnConnectionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

