// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListImagesResponseBodyImagesLabels } from "./ListImagesResponseBodyImagesLabels";


export class ListImagesResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The accessibility of the image. Valid values:
   * 
   * *   PUBLIC: All members can access the image.
   * *   PRIVATE: Only the creator can access the image.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The image description.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The time when the image is created, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the image is modified, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * image-tzi7f9******s45t
   */
  imageId?: string;
  /**
   * @remarks
   * The image address, which includes the version number.
   */
  imageUri?: string;
  /**
   * @remarks
   * The image tags.
   */
  labels?: ListImagesResponseBodyImagesLabels[];
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * tensorflow_2.9
   */
  name?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 15577******82932
   */
  parentUserId?: string;
  /**
   * @remarks
   * The image size. Unit: GB.
   * 
   * @example
   * 2
   */
  size?: number;
  /**
   * @remarks
   * 镜像来源 ID
   */
  sourceId?: string;
  /**
   * @remarks
   * 镜像来源类型
   */
  sourceType?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 15577******82932
   */
  userId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 20******55
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageUri: 'ImageUri',
      labels: 'Labels',
      name: 'Name',
      parentUserId: 'ParentUserId',
      size: 'Size',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageUri: 'string',
      labels: { 'type': 'array', 'itemType': ListImagesResponseBodyImagesLabels },
      name: 'string',
      parentUserId: 'string',
      size: 'number',
      sourceId: 'string',
      sourceType: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

