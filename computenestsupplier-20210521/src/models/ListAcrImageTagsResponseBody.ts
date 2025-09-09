// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAcrImageTagsResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The image size. Unit: bytes.
   * 
   * @example
   * 188394616
   */
  imageSize?: string;
  /**
   * @remarks
   * The time when the image was modified.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * 5.7.2
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      imageSize: 'ImageSize',
      modifiedTime: 'ModifiedTime',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      imageSize: 'string',
      modifiedTime: 'string',
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

export class ListAcrImageTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of images.
   */
  images?: ListAcrImageTagsResponseBodyImages[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * ey14..
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FEF343B9-1A15-5789-BE88-7B36190F5BF6
   */
  requestId?: string;
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
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListAcrImageTagsResponseBodyImages },
      maxResults: 'number',
      nextToken: 'string',
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

