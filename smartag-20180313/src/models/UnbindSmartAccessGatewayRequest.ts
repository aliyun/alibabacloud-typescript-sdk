// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindSmartAccessGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Connect Network (CCN).
   * 
   * This parameter is required.
   * 
   * @example
   * ccn-kygbldwikz********
   */
  ccnId?: string;
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
   * The ID of the Smart Access Gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-0ovhf732a********
   */
  smartAGId?: string;
  /**
   * @remarks
   * The user ID of the Smart Access Gateway instance.
   * 
   * @example
   * 1688401595963306
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

