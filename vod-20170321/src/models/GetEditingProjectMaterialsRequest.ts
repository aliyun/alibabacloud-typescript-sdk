// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEditingProjectMaterialsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the material. Valid values:
   * 
   * *   **video**
   * *   **audio**
   * *   **image**
   * 
   * @example
   * video
   */
  materialType?: string;
  ownerAccount?: string;
  ownerId?: string;
  /**
   * @remarks
   * The ID of the online editing project. You can use one of the following methods to obtain the ID of the online editing project:
   * 
   * *   Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). In the left-side navigation pane, choose **Production Center** > **Video Editing** to obtain the ID of the specified online editing project.
   * *   Call the **AddEditingProject** operation. The value of the response parameter ProjectId is the ID of the specified online editing project.
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
   * The type of the material. Valid values:
   * 
   * *   **video**
   * *   **audio**
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

