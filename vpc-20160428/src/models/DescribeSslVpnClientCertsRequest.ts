// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSslVpnClientCertsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the SSL client certificate.
   * 
   * @example
   * cert1
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
   * The number of entries per page in a paged query. Default value: **10**. Valid values: **1** to **50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the SSL client certificate that you want to query.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the SSL client certificate belongs.
   * 
   * The SSL client certificate belongs to the same resource group as its associated SSL server. You can call the [DescribeSslVpnServers](https://help.aliyun.com/document_detail/2794078.html) operation to query the resource group ID of the SSL server.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the SSL client certificate.
   * 
   * @example
   * vsc-bp1n8wcf134yl0osr****
   */
  sslVpnClientCertId?: string;
  /**
   * @remarks
   * The ID of the SSL server.
   * 
   * @example
   * vss-bp18q7hzj6largv4v****
   */
  sslVpnServerId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sslVpnClientCertId: 'SslVpnClientCertId',
      sslVpnServerId: 'SslVpnServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sslVpnClientCertId: 'string',
      sslVpnServerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

