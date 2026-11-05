// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindSmartAccessGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Connect Network (CCN).
   * 
   * This parameter is required.
   * 
   * @example
   * ccn-isdjvvkexkrpk*****
   */
  ccnId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the Smart Access Gateway (SAG) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-m7ez44zpayma*****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The user ID of the Smart Access Gateway instance.
   * 
   * @example
   * 1250123456123456
   */
  smartAGUid?: number;
  static names(): { [key: string]: string } {
    return {
      ccnId: 'CcnId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGUid: 'SmartAGUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

