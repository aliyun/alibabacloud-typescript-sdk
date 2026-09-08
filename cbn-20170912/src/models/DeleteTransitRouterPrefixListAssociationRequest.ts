// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTransitRouterPrefixListAssociationRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-4266****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without dissociating the prefix list. The system checks the required parameters, request syntax, and business restrictions. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, the prefix list is dissociated.
   * 
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the next hop connection.
   * 
   * If the CIDR blocks in the prefix list are blackhole routes, set this parameter to **BlackHole**.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-attach-flbq507rg2ckrj****
   */
  nextHop?: string;
  /**
   * @remarks
   * The next hop type. Valid values:
   * 
   * - **BlackHole**: All CIDR blocks in the prefix list are blackhole routes. All traffic destined for the CIDR blocks in the prefix list is dropped.
   * - **VPC**: The next hop of the CIDR blocks in the prefix list is a Virtual Private Cloud (VPC) connection.
   * - **VBR**: The next hop of the CIDR blocks in the prefix list is a Virtual Border Router (VBR) connection.
   * - **TR**: The next hop of the CIDR blocks in the prefix list is an inter-region connection.
   * - **ECR**: The next hop of the CIDR blocks in the prefix list is an Express Connect Router (ECR) instance.
   * 
   * @example
   * VPC
   */
  nextHopType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the prefix list.
   * 
   * This parameter is required.
   * 
   * @example
   * pl-6ehtn5kqxgeyy08fi****
   */
  prefixListId?: string;
  /**
   * @remarks
   * The region ID of the transit router instance.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the region ID.
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
   * The ID of the transit routing instance.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-6ehx7q2jze8ch5ji0****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The ID of the transit router route table.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-6ehgc262hr170qgyc****
   */
  transitRouterTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      nextHop: 'NextHop',
      nextHopType: 'NextHopType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      prefixListId: 'PrefixListId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterId: 'TransitRouterId',
      transitRouterTableId: 'TransitRouterTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      nextHop: 'string',
      nextHopType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      prefixListId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterId: 'string',
      transitRouterTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

