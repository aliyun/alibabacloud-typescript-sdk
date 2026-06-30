// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteServicesInCenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the cloud service is accessed.
   * 
   * @example
   * cn-hangzhou
   */
  accessRegionId?: string;
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-pfa6ugf3xl0qsd****
   */
  cenId?: string;
  /**
   * @remarks
   * The endpoint of the Alibaba Cloud service.
   * 
   * The endpoint can be a domain name, an IP address, or a CIDR block.
   * 
   * @example
   * 100.118.28.0/24
   */
  host?: string;
  /**
   * @remarks
   * The ID of the region where the Alibaba Cloud service is deployed.
   * 
   * Call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to obtain the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  hostRegionId?: string;
  /**
   * @remarks
   * The ID of the VPC that is associated with the Alibaba Cloud service.
   * 
   * @example
   * vpc-bp1h8vbrbcgohcju5****
   */
  hostVpcId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The default value is **10**. Valid values: **1** to **50**.
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

