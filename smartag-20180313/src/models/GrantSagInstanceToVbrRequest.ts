// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantSagInstanceToVbrRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
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
   * sag-0nnteglltw6z4b****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The ID of the VBR.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-bp13gtbhdp0pfqg6s****
   */
  vbrInstanceId?: string;
  /**
   * @remarks
   * The ID of the region where the VBR is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  vbrRegionId?: string;
  /**
   * @remarks
   * The user ID (UID) of the account to which the VBR belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1231212121121212112
   */
  vbrUid?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      vbrInstanceId: 'VbrInstanceId',
      vbrRegionId: 'VbrRegionId',
      vbrUid: 'VbrUid',
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
      vbrInstanceId: 'string',
      vbrRegionId: 'string',
      vbrUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

