// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVbrHaRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * CBCE910E-D396-4944-8****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the VBR failover group.
   * 
   * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * VBRHa
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values: Valid Values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and instance status. If the request fails the dry run, an error message is returned. If the request passes the dry run, `DRYRUN.SUCCESS` is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The name of the VBR failover group.
   * 
   * @example
   * VBRHa
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the other VBR in the VBR failover group.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-bp12mw1f8k3jgygk9****
   */
  peerVbrId?: string;
  /**
   * @remarks
   * The ID of the region in which the VBR is deployed.
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
   * The ID of the VBR.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-bp1jcg5cmxjbl9xgc****
   */
  vbrId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      peerVbrId: 'PeerVbrId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vbrId: 'VbrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      peerVbrId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vbrId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

