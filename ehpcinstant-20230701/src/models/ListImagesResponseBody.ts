// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListImagesResponseBodyImages } from "./ListImagesResponseBodyImages";


export class ListImagesResponseBody extends $dara.Model {
  images?: ListImagesResponseBodyImages[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

