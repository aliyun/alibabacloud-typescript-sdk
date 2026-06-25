// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageResponseBodyLabels extends $dara.Model {
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

export class GetImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The visibility of the image. Valid values:
   * 
   * - PUBLIC: All members in the current workspace can perform operations on the image.
   * 
   * - PRIVATE: Only the creator can perform operations on the image.
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
   * The time when the image was created. The time is in UTC and the format is ISO 8601.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the image was last modified. The time is in UTC and the format is ISO 8601.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The URL of the image, including the version number.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.******ession/nlp:gpu
   */
  imageUri?: string;
  /**
   * @remarks
   * A list of image labels. This is an array. Each item in the array contains a Key and a Value field.
   * Official images have the following label: the key is system.official and the value is true.
   */
  labels?: GetImageResponseBodyLabels[];
  /**
   * @remarks
   * The name of the image.
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
   * The size of the image in bytes.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The ID of the image source.
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the image source.
   */
  sourceType?: string;
  /**
   * @remarks
   * The UID of the user who created the image.
   * 
   * @example
   * 15577******8921
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the image belongs.
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

