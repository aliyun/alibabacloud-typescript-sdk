// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDBClusterEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-******************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the custom cluster endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * pe-******************
   */
  DBEndpointId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * pfs-test*****
   */
  polarFsInstanceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBEndpointId: 'DBEndpointId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      polarFsInstanceId: 'PolarFsInstanceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBEndpointId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      polarFsInstanceId: 'string',
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

