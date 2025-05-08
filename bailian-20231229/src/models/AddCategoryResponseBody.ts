// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddCategoryResponseBodyData } from "./AddCategoryResponseBodyData";


export class AddCategoryResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  data?: AddCategoryResponseBodyData;
  /**
   * @example
   * Requests throttling triggered.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 778C0B3B-03C1-5FC1-A947-36EDD13606AB
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddCategoryResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

