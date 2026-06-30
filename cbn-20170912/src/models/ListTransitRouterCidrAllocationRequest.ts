// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterCidrAllocationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the network instance connection.
   * 
   * @example
   * tr-attach-2nalp6yksc805w****
   */
  attachmentId?: string;
  /**
   * @remarks
   * The name of the network instance connection.
   * 
   * @example
   * nametest
   */
  attachmentName?: string;
  /**
   * @remarks
   * The CIDR block of the transit router.
   * 
   * @example
   * 192.168.10.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The allocated CIDR block.
   * 
   * @example
   * 192.168.10.0/28
   */
  cidrBlock?: string;
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request.
   * 
   * Generate a token from your client to make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** is different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426****
   */
  clientToken?: string;
  /**
   * @remarks
   * The dedicated CIDR block.
   * 
   * The only valid value is **VPN**. This value specifies that you want to query the CIDR block that is reserved by the system for creating VPN connections.
   * 
   * @example
   * VPN
   */
  dedicatedOwnerId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request format, and service limits. If the request fails the check, an error message is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): sends a normal request. After the request passes the check, the system queries the allocation details of the CIDR block.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * - If you do not specify this parameter, the query is not paginated.
   * 
   * - If you specify this parameter, the query is paginated. Valid values: **1** to **100**. The recommended value is **20**.
   * 
   *   The value of the returned **MaxResults** parameter indicates the number of list entries in the current query batch.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * - You do not need to specify this parameter for the first request.
   * 
   * - If a next page exists, set the value to the **NextToken** value returned from the previous request.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Transit Router instance is deployed.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query region IDs.
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
   * The ID of the CIDR block of the transit router.
   * 
   * You can call the [ListTransitRouterCidr](https://help.aliyun.com/document_detail/462772.html) operation to query the IDs of the CIDR blocks of the transit router.
   * 
   * @example
   * cidr-0zv0q9crqpntzz****
   */
  transitRouterCidrId?: string;
  /**
   * @remarks
   * The ID of the Transit Router instance.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-p0w3x8c9em72a40nw****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentId: 'AttachmentId',
      attachmentName: 'AttachmentName',
      cidr: 'Cidr',
      cidrBlock: 'CidrBlock',
      clientToken: 'ClientToken',
      dedicatedOwnerId: 'DedicatedOwnerId',
      dryRun: 'DryRun',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterCidrId: 'TransitRouterCidrId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentId: 'string',
      attachmentName: 'string',
      cidr: 'string',
      cidrBlock: 'string',
      clientToken: 'string',
      dedicatedOwnerId: 'string',
      dryRun: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterCidrId: 'string',
      transitRouterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

