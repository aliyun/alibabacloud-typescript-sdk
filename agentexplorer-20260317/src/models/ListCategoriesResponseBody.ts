// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Category } from "./Category";


export class ListCategoriesResponseBody extends $dara.Model {
  data?: Category[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 099A671E-FA21-5A36-8A73-918572DDEF53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Category },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

