// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteServicesInCenRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID from which the cloud service is accessed.
   * 
   * @example
   * cn-hangzhou
   */
  accessRegionId?: string;
  /**
   * @remarks
   * The Cloud Enterprise Network (CEN) instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-pfa6ugf3xl0qsd****
   */
  cenId?: string;
  /**
   * @remarks
   * The service address of the cloud service.
   * 
   * You can enter a domain name, an IP address, or a CIDR block.
   * 
   * @example
   * 100.118.28.0/24
   */
  host?: string;
  /**
   * @remarks
   * The region ID of the cloud service.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  hostRegionId?: string;
  /**
   * @remarks
   * The instance ID of the VPC-connected instance associated with the cloud service.
   * 
   * @example
   * vpc-bp1h8vbrbcgohcju5****
   */
  hostVpcId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging. Default value: **10**. Valid values: **1** to **50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessRegionId: 'AccessRegionId',
      cenId: 'CenId',
      host: 'Host',
      hostRegionId: 'HostRegionId',
      hostVpcId: 'HostVpcId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRegionId: 'string',
      cenId: 'string',
      host: 'string',
      hostRegionId: 'string',
      hostVpcId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

