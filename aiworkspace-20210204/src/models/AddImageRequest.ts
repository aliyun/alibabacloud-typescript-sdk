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
   * - PUBLIC: All members in the current workspace can manage the image.
   * - PRIVATE: Only the creator can manage the image.
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
   * The ID of the image. If you do not specify this parameter, the system automatically generates an image ID.
   * The format is image- followed by 18 uppercase or lowercase letters or digits.
   * 
   * @example
   * image-k83*****cv
   */
  imageId?: string;
  /**
   * @remarks
   * The URI of the image. The URI can be duplicated. For more information about how to view the image URI, see [ListImage](https://help.aliyun.com/document_detail/449118.html).
   * 
   * This parameter is required.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/pai-compression/nlp:gpu
   */
  imageUri?: string;
  /**
   * @remarks
   * The labels of the image. This parameter is an array, and each item in the array contains the key and value fields.
   * Official images have the following label: system.official=true.
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
   * The name of the image. The naming rules are as follows:
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
   * The size of the image. Unit: GB.
   * 
   * @example
   * 2
   */
  size?: number;
  /**
   * @remarks
   * The source ID of the image. If the source type of the image is Build, the source ID is the image build ID.
   * 
   * @example
   * build-****ks92
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type of the image. Valid values:
   * - Import: The image is imported.
   * - Build: The image is built.
   * 
   * @example
   * Build
   */
  sourceType?: string;
  /**
   * @remarks
   * The user ID (UID) of the image creator.
   * 
   * @example
   * 1611******3000
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the image belongs. For more information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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

