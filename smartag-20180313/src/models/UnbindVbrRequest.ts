// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindVbrRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway instance.
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
   * The instance ID of the Smart Access Gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-pek29fu47tmpj0****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the Smart Access Gateway instance belongs.
   * 
   * @example
   * 253460731706911258
   */
  smartAGUid?: number;
  /**
   * @remarks
   * The instance ID of the virtual border routing device to be disassociated.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-wz90rs6ef1m2fq0yn****
   */
  vbrId?: string;
  /**
   * @remarks
   * The region ID of the virtual border router.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  vbrRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGUid: 'SmartAGUid',
      vbrId: 'VbrId',
      vbrRegionId: 'VbrRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGUid: 'number',
      vbrId: 'string',
      vbrRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

