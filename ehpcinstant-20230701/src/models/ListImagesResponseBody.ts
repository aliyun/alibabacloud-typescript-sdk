// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ci-vm-kHLPzEWun6zz****
   */
  appId?: string;
  /**
   * @remarks
   * The time when the storage resource was created.
   * 
   * @example
   * 2022-12-09T07:06:34Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the image.
   */
  description?: string;
  /**
   * @remarks
   * The document ID.
   * 
   * @example
   * 30
   */
  documentId?: number;
  /**
   * @remarks
   * The image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * m-bp181x855551ww5yq****
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * VM
   */
  imageType?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * app-image
   */
  name?: string;
  /**
   * @remarks
   * The ID of the specific OS version.
   * 
   * @example
   * Ubuntu  22.04 64 bit
   */
  osTag?: string;
  /**
   * @remarks
   * The time when the image was updated.
   * 
   * @example
   * 2024-09-25 14:15:28
   */
  updateTime?: string;
  /**
   * @remarks
   * The version of the image.
   * 
   * @example
   * v1.0
   */
  version?: string;
  /**
   * @remarks
   * The weight.
   * 
   * @example
   * 70
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      description: 'Description',
      documentId: 'DocumentId',
      imageId: 'ImageId',
      imageType: 'ImageType',
      name: 'Name',
      osTag: 'OsTag',
      updateTime: 'UpdateTime',
      version: 'Version',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'string',
      description: 'string',
      documentId: 'number',
      imageId: 'string',
      imageType: 'string',
      name: 'string',
      osTag: 'string',
      updateTime: 'string',
      version: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of image information.
   */
  images?: ListImagesResponseBodyImages[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListImagesResponseBodyImages },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
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

