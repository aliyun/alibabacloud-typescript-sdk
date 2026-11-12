// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCloudConnectNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Connect Network (CCN).
   * 
   * This parameter is required.
   * 
   * @example
   * ccn-bxuau4ezctts2*****
   */
  ccnId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the Cloud Connect Network (CCN) belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ccnId: 'CcnId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

