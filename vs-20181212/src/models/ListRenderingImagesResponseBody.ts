// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingImagesResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The image description.
   * 
   * @example
   * this is test.
   */
  description?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-0nd0nxyl7zn220n2y
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The publish time.
   * 
   * @example
   * 2026-09-17T00:22:53+08:00
   */
  publishTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      imageId: 'ImageId',
      name: 'Name',
      publishTime: 'PublishTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      imageId: 'string',
      name: 'string',
      publishTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRenderingImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The session list.
   */
  images?: ListRenderingImagesResponseBodyImages[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of matched sessions.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListRenderingImagesResponseBodyImages },
      pageNumber: 'string',
      pageSize: 'string',
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

