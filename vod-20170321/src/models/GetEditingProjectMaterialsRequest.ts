// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEditingProjectMaterialsRequest extends $dara.Model {
  /**
   * @remarks
   * The material type. Valid values:
   * 
   * - **video**: video
   * - **audio**: audio-only
   * - **image**: image
   * 
   * @example
   * video
   */
  materialType?: string;
  ownerAccount?: string;
  ownerId?: string;
  /**
   * @remarks
   * The online editing project ID. You can obtain the ID by using one of the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com), and choose **Production Center** > **Video Editing** to view the ID.
   * - Obtain the value of the ProjectId response parameter when you create a project by calling the **CreateEditingProject** operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1982361011093374****
   */
  projectId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  /**
   * @remarks
   * The material type. Valid values:
   * 
   * - **video**: video
   * - **audio**: audio-only
   * 
   * @example
   * video
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      materialType: 'MaterialType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectId: 'ProjectId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialType: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      projectId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

