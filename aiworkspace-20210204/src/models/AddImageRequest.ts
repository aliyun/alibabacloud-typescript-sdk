// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImageRequestLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the label.
   * 
   * @example
   * system.chipType
   */
  key?: string;
  /**
   * @remarks
   * The value of the label.
   * 
   * @example
   * GPU
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the image. Valid values:
   * 
   * - PUBLIC: All members in the current workspace can access the image.
   * - PRIVATE: Only the creator can access the image.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * NLP model compression training image
   */
  description?: string;
  /**
   * @remarks
   * The image ID. If this parameter is not specified, the system automatically generates one. The format is image- followed by 18 uppercase or lowercase letters or digits.
   * 
   * @example
   * image-k83*****cv
   */
  imageId?: string;
  /**
   * @remarks
   * The image URI, which can be duplicated. For information about how to view the image URI, see [ListImage](https://help.aliyun.com/document_detail/449118.html).
   * 
   * This parameter is required.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/pai-compression/nlp:gpu
   */
  imageUri?: string;
  /**
   * @remarks
   * The image labels. This is an array in which each item contains a key field and a value field.
   * Official images have the following label: system.official=true
   * The following keys are supported:
   * 
   * - system.chipType
   * - system.dsw.cudaVersion
   * - system.dsw.fromImageId
   * - system.dsw.fromInstanceId
   * - system.dsw.id
   * - system.dsw.os
   * - system.dsw.osVersion
   * - system.dsw.resourceType
   * - system.dsw.rootImageId
   * - system.dsw.stage
   * - system.dsw.tag
   * - system.dsw.type
   * - system.framework
   * - system.origin
   * - system.pythonVersion
   * - system.source
   * - system.supported.dlc
   * - system.supported.dsw
   */
  labels?: AddImageRequestLabels[];
  /**
   * @remarks
   * The image name. Naming rules:
   * - The name must be 1 to 50 characters in length.
   * - The name can contain lowercase letters, digits, and hyphens (-), and must start with a letter.
   * - The name must be unique within the same workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * nlp-compression
   */
  name?: string;
  /**
   * @remarks
   * The image size, in GB.
   * 
   * @example
   * 2
   */
  size?: number;
  /**
   * @remarks
   * The image source ID. When the image source type is Build, the source ID corresponds to the image build ID.
   */
  sourceId?: string;
  /**
   * @remarks
   * The image source type. Valid values:
   * - Import: import.
   * - Build: generate.
   */
  sourceType?: string;
  userId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the image belongs. For information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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
      userId: 'UserId',
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

