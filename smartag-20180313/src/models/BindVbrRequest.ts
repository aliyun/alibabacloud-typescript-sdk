// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindVbrRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
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
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-eoqbp1fmrsgbrn****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the SAG instance belongs.
   * 
   * @example
   * 1250123456123456
   */
  smartAGUid?: number;
  /**
   * @remarks
   * The ID of the VBR that you want to associate with the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-gc7ccdvtp3l4fec0j****
   */
  vbrId?: string;
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

