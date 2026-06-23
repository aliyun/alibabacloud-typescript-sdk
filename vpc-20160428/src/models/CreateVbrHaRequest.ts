// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVbrHaRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * CBCE910E-D396-4944-8****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the VBR failover group.
   * 
   * The description must be 2 to 256 characters in length and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
   * 
   * @example
   * VBRHa
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and instance status. If the check fails, the corresponding error is returned. If the check succeeds, `DRYRUN.SUCCESS` is returned.
   * 
   * - **false** (default): sends the request. After the request passes the check, the instance is started.
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
   * The instance ID of the other VBR in the VBR failover group.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-bp12mw1f8k3jgygk9****
   */
  peerVbrId?: string;
  /**
   * @remarks
   * The region ID of the VBR.
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
   * The instance ID of the VBR.
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

