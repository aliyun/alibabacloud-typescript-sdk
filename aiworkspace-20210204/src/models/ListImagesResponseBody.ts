// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesResponseBodyImagesLabels extends $dara.Model {
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

export class ListImagesResponseBodyImages extends $dara.Model {
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
   * The image description.
   * 
   * @example
   * desc
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
   * The image ID.
   * 
   * @example
   * image-tzi7f9******s45t
   */
  imageId?: string;
  /**
   * @remarks
   * The image URL, which includes the version number.
   */
  imageUri?: string;
  /**
   * @remarks
   * The list of image labels.
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
   * The UID of the Alibaba Cloud account that created the image.
   * 
   * @example
   * 155**********904
   */
  parentUserId?: string;
  /**
   * @remarks
   * The image size in bytes.
   * 
   * @example
   * 2
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
   * The UID of the Alibaba Cloud account that created the image.
   * 
   * @example
   * 155**********904
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

export class ListImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of images.
   */
  images?: ListImagesResponseBodyImages[];
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
   * The total number of returned images.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListImagesResponseBodyImages },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

