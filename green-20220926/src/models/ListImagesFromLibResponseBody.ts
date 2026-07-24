// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesFromLibResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The creation time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2022-11-30 16:30:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * 112
   */
  imageId?: string;
  /**
   * @remarks
   * The URL of the image.
   * 
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com/image/upload/IMG_2123.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The URL of the thumbnail.
   * 
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com/image/upload/IMG_2123.jpg
   */
  thumbnailUrl?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      thumbnailUrl: 'ThumbnailUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      imageId: 'string',
      imageUrl: 'string',
      thumbnailUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesFromLibResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code, which is consistent with the HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The data on the current page.
   */
  items?: ListImagesFromLibResponseBodyItems[];
  /**
   * @remarks
   * The further description of the error code.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The backend-assigned ID that uniquely identifies a request. This ID can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The success flag.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of images.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      msg: 'Msg',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      currentPage: 'number',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListImagesFromLibResponseBodyItems },
      msg: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

