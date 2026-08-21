// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEditingProjectMaterialsRequest extends $dara.Model {
  /**
   * @remarks
   * The material IDs. Separate multiple IDs with commas (,). A maximum of 10 material IDs are supported.
   * >  When you associate multiple materials, ensure that all materials are of the same type and correspond to the MaterialType value.
   * 
   * This parameter is required.
   * 
   * @example
   * d3251979f9fd41f2acb29ccda5a6f772
   */
  materialIds?: string;
  /**
   * @remarks
   * The material type. Valid values:
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
   * The online editing project ID.
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

