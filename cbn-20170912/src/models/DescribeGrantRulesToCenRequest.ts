// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGrantRulesToCenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-nye53d7p3hzyu4****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the network instance to query.
   * 
   * @example
   * vpc-rj9gt5nll27onu7****
   */
  childInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the network instance.
   * 
   * @example
   * 1250123456123456
   */
  childInstanceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether IPv6 is enabled.
   * 
   * 1. This parameter applies only when **ProductType** is set to **VPC**.
   * 
   * 2. Set to **true** to return only VPCs with IPv6 enabled, or **false** to return only those with IPv6 disabled. If you omit this parameter, the response is not filtered by the IPv6 status.
   * 
   * @example
   * true
   */
  enabledIpv6?: boolean;
  /**
   * @remarks
   * - If you omit this parameter, all entries are returned. The **MaxResults** value in the response then indicates the total number of entries.
   * 
   * - If you set this parameter, the response is paginated. The **MaxResults** value specifies the number of entries to return on each page. Valid values: **1** to **100**. The **MaxResults** value in the response indicates the number of entries on the current page. Setting **MaxResults** to **20** is recommended.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results.
   * 
   * - Omit this parameter for the first request.
   * 
   * - Set this parameter to the **NextToken** value from the previous response to retrieve the next page of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * - **VPC**: a virtual private cloud (VPC).
   * 
   * - **VBR**: a virtual border router (VBR).
   * 
   * - **CCN**: a Cloud Connect Network (CCN) instance.
   * 
   * - **VPN**: an IPsec-VPN connection.
   * 
   * - **ECR**: an Express Connect router.
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the region where the network instance is located.
   * 
   * You can call the [](t2264556.xdita#)operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceId: 'ChildInstanceId',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      enabledIpv6: 'EnabledIpv6',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      productType: 'ProductType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceId: 'string',
      childInstanceOwnerId: 'number',
      enabledIpv6: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      productType: 'string',
      regionId: 'string',
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

