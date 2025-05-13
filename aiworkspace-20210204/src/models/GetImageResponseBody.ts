// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetImageResponseBodyLabels } from "./GetImageResponseBodyLabels";


export class GetImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The accessibility of the image. Valid values:
   * 
   * *   PUBLIC: All members can access the workspace.
   * *   PRIVATE: Only the creator can access the workspace.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The image description.
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
   * The image address, which contains the version number.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.******ession/nlp:gpu
   */
  imageUri?: string;
  /**
   * @remarks
   * The image tags, which are of the array data type. Each element in the array contains a key-value pair. The key of official tags is system.official and the tag value is true.
   */
  labels?: GetImageResponseBodyLabels[];
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * nlp-compression
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account of the creator.
   * 
   * @example
   * 15577******8921
   */
  parentUserId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The size of the image. Unit: GB.
   * 
   * @example
   * 10
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
   * The user ID of the image.
   * 
   * @example
   * 15577******8921
   */
  userId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 15945
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageUri: 'ImageUri',
      labels: 'Labels',
      name: 'Name',
      parentUserId: 'ParentUserId',
      requestId: 'RequestId',
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
      imageUri: 'string',
      labels: { 'type': 'array', 'itemType': GetImageResponseBodyLabels },
      name: 'string',
      parentUserId: 'string',
      requestId: 'string',
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

