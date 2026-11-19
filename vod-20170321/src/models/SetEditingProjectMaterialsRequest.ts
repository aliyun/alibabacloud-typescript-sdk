// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetEditingProjectMaterialsRequest extends $dara.Model {
  /**
   * @remarks
   * The material IDs, which are media asset IDs such as video IDs, image IDs, and auxiliary media asset IDs. Separate multiple material IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 9e3101bf24bf41c*****123318788ca
   */
  materialIds?: string;
  ownerAccount?: string;
  ownerId?: string;
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * This parameter is required.
   * 
   * @example
   * fb2101bf24bf4*****754cb318787dc
   */
  projectId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      materialIds: 'MaterialIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectId: 'ProjectId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialIds: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      projectId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

