// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVbrHaRequest extends $dara.Model {
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
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VBR.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The VBR failover group instance ID. You must specify at least one of **VbrHaId** and **VbrId**. If both are omitted, the service returns MissingParam.VbrHaIdOrVbrId (400).
   * 
   * @example
   * vbrha-sa1sxheuxtd98****
   */
  vbrHaId?: string;
  /**
   * @remarks
   * The VBR instance ID. You must specify at least one of **VbrId** and **VbrHaId**. If both are omitted, the service returns MissingParam.VbrHaIdOrVbrId (400).
   * 
   * @example
   * vbr-bp1jcg5cmxjbl9xgc****
   */
  vbrId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vbrHaId: 'VbrHaId',
      vbrId: 'VbrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vbrHaId: 'string',
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

