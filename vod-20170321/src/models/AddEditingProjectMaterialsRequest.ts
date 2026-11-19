// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEditingProjectMaterialsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the media assets. Separate multiple IDs with commas (,). You can specify up to 10 media asset IDs.
   * > When you associate multiple media assets, make sure that they are of the same type and the type matches the value of MaterialType.
   * 
   * This parameter is required.
   * 
   * @example
   * d3251979f9fd41f2acb29ccda5a6f772
   */
  materialIds?: string;
  /**
   * @remarks
   * The type of the media asset. Valid values:
   * - **video**: video.
   * - **audio**: audio-only.
   * - **image**: image.
   * 
   * This parameter is required.
   * 
   * @example
   * video
   */
  materialType?: string;
  ownerAccount?: string;
  ownerId?: string;
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * This parameter is required.
   * 
   * @example
   * afa31b483b5c41609185de0e1b790579
   */
  projectId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      materialIds: 'MaterialIds',
      materialType: 'MaterialType',
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
      materialType: 'string',
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

