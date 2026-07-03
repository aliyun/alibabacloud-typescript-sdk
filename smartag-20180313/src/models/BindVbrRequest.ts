// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindVbrRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway instance.
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
   * The instance ID of the Smart Access Gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-eoqbp1fmrsgbrn****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID that owns the Smart Access Gateway instance.
   * 
   * @example
   * 1250123456123456
   */
  smartAGUid?: number;
  /**
   * @remarks
   * The instance ID of the virtual border routing instance to bind.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-gc7ccdvtp3l4fec0j****
   */
  vbrId?: string;
  /**
   * @remarks
   * The region ID of the virtual border router (VBR) to bind.
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

