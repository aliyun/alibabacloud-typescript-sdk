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
   * The transit router CIDR block.
   * 
   * @example
   * 192.168.10.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The allocated CIDR block under the transit router CIDR block.
   * 
   * @example
   * 192.168.10.0/28
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426****
   */
  clientToken?: string;
  /**
   * @remarks
   * The dedicated CIDR block.
   * 
   * Set the value to **VPN**, which specifies that you want to query the CIDR block reserved by the system for creating VPN connections in the backend.
   * 
   * @example
   * VPN
   */
  dedicatedOwnerId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and business restrictions. If the request fails the dry run, the corresponding error is returned. If the request passes the dry run, the error code `DryRunOperation` is returned.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, the transit router CIDR block allocation details are queried.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * - If you do not specify a value for **MaxResults**, it indicates that you do not need to query results by page. The value of **MaxResults** in the response indicates the total number of entries.
   * - If you specify a value for **MaxResults**, it indicates that you need to query results by page. Valid values: **1** to **100**. We recommend that you set **MaxResults** to **20**.      
   * 
   *   The value of **MaxResults** in the response indicates the number of entries on the current page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * - You do not need to specify this parameter for the first request or if no subsequent request exists.
   * - If a subsequent request exists, set the value to the **NextToken** value returned in the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the transit router instance.
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
   * The ID of the transit router CIDR block.
   * 
   * You can call the [ListTransitRouterCidr](https://help.aliyun.com/document_detail/462772.html) operation to query the transit router CIDR block ID.
   * 
   * @example
   * cidr-0zv0q9crqpntzz****
   */
  transitRouterCidrId?: string;
  /**
   * @remarks
   * The forward router instance ID.
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

