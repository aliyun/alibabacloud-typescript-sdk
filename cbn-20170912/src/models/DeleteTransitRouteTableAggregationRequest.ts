// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTransitRouteTableAggregationRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this deletion request, including permission and instance status verification. Valid values:
   * 
   * - **false** (default): Sends a normal request. If the request passes the check, the aggregate route is deleted.
   * - **true**: Sends a check request. Only verification is performed without actually deleting the aggregate route. The check items include whether required parameters are specified and the request format. If the check fails, the corresponding error is returned. If the check passes, the error code `DryRunOperation` is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The destination CIDR block of the aggregate route.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.10.0/24
   */
  transitRouteTableAggregationCidr?: string;
  /**
   * @remarks
   * The ID of the Enterprise Edition transit router route table.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-6ehgc262hr170qgyc****
   */
  transitRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouteTableAggregationCidr: 'TransitRouteTableAggregationCidr',
      transitRouteTableId: 'TransitRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouteTableAggregationCidr: 'string',
      transitRouteTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

