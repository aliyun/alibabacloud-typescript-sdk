// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindSmartAccessGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CCN instance with which you want to associate the SAG instance.
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
   * The ID of the region where the SAG instance is deployed.
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
   * sag-m7ez44zpayma*****
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

