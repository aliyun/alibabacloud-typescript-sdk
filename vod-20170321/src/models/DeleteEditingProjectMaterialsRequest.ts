// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEditingProjectMaterialsRequest extends $dara.Model {
  /**
   * @remarks
   * The material IDs. These are media asset IDs, such as VideoId for videos, ImageId for images, and MediaId for auxiliary media assets. Separate multiple material IDs with commas (,).
   * 
   * To obtain material IDs, see [Search for media information](https://help.aliyun.com/document_detail/86044.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 9e3101bf24bf41c*****123318788ca
   */
  materialIds?: string;
  /**
   * @remarks
   * The material type. Valid values:
   * 
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
   * 198236101*****1093374
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

