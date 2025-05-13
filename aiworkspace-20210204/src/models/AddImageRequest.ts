// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddImageRequestLabels } from "./AddImageRequestLabels";


export class AddImageRequest extends $dara.Model {
  /**
   * @remarks
   * The accessibility of the image. Valid values:
   * 
   * *   PUBLIC: The image is accessible to all members in the workspace.
   * *   PRIVATE: The image is accessible only to the image creator.
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
   * The image ID. If you do not specify this parameter, the system automatically generates an image ID. The image ID must start with image- followed by 18 characters in letters or digits.
   * 
   * @example
   * image-k83*****cv
   */
  imageId?: string;
  /**
   * @remarks
   * The URL of the image, which can be repeated. You can call [ListImage](https://help.aliyun.com/document_detail/449118.html) to view the image URL.
   * 
   * This parameter is required.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/pai-compression/nlp:gpu
   */
  imageUri?: string;
  /**
   * @remarks
   * The image tag, which is an array. Each element in the array contains a key-value pair. Alibaba Cloud images have the system.official=true tag. You can add the following keys to an image:
   * 
   * *   system.chipType
   * *   system.dsw.cudaVersion
   * *   system.dsw.fromImageId
   * *   system.dsw.fromInstanceId
   * *   system.dsw.id
   * *   system.dsw.os
   * *   system.dsw.osVersion
   * *   system.dsw.resourceType
   * *   system.dsw.rootImageId
   * *   system.dsw.stage
   * *   system.dsw.tag
   * *   system.dsw.type
   * *   system.framework
   * *   system.origin
   * *   system.pythonVersion
   * *   system.source
   * *   system.supported.dlc
   * *   system.supported.dsw
   */
  labels?: AddImageRequestLabels[];
  /**
   * @remarks
   * The image name. The name must meet the following requirements:
   * 
   * *   The name must be 1 to 50 characters in length.
   * *   The name can contain lowercase letters, digits, and hyphens (-). The name must start with a lowercase letter.
   * *   The name must be unique in a workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * nlp-compression
   */
  name?: string;
  /**
   * @remarks
   * The size of the image. Unit: GB.
   * 
   * @example
   * 2
   */
  size?: number;
  sourceId?: string;
  sourceType?: string;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * @example
   * 15******45
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      description: 'Description',
      imageId: 'ImageId',
      imageUri: 'ImageUri',
      labels: 'Labels',
      name: 'Name',
      size: 'Size',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      description: 'string',
      imageId: 'string',
      imageUri: 'string',
      labels: { 'type': 'array', 'itemType': AddImageRequestLabels },
      name: 'string',
      size: 'number',
      sourceId: 'string',
      sourceType: 'string',
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

