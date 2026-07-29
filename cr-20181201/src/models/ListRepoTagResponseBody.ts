// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoTagResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The digest value.
   * 
   * @example
   * 67bfbcc12b67936ec7f867927817cbb071832b873dbcaed312a1930ba5f1****
   */
  digest?: string;
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 1572839125000
   */
  imageCreate?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * 45023655bf39c382e26a8607d057c27871dee163c1ecf48cc1ebf2a1****
   */
  imageId?: string;
  /**
   * @remarks
   * The image size, in bytes.
   * 
   * @example
   * 27107966
   */
  imageSize?: number;
  /**
   * @remarks
   * The time when the image was updated.
   * 
   * @example
   * 1572875608000
   */
  imageUpdate?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * v0.1
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      imageCreate: 'ImageCreate',
      imageId: 'ImageId',
      imageSize: 'ImageSize',
      imageUpdate: 'ImageUpdate',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      imageCreate: 'string',
      imageId: 'string',
      imageSize: 'number',
      imageUpdate: 'string',
      status: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The image list.
   */
  images?: ListRepoTagResponseBodyImages[];
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 031572FA-7D8F-4C05-B790-1071E0E05DE6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      images: 'Images',
      isSuccess: 'IsSuccess',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      images: { 'type': 'array', 'itemType': ListRepoTagResponseBodyImages },
      isSuccess: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
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

