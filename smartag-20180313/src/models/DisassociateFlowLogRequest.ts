// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisassociateFlowLogRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the flow log.
   * 
   * This parameter is required.
   * 
   * @example
   * fl-l934tsa5504yuc****
   */
  flowLogId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the flow log belongs.
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
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-0v3pmd7qpnvx5f****
   */
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      flowLogId: 'FlowLogId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

