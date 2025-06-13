// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListImagesFromLibResponseBodyItems } from "./ListImagesFromLibResponseBodyItems";


export class ListImagesFromLibResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  items?: ListImagesFromLibResponseBodyItems[];
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
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

