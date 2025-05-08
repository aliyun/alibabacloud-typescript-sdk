// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFileResponseBodyData } from "./ListFileResponseBodyData";


export class ListFileResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  data?: ListFileResponseBodyData;
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
   * 8F97A63B-55F1-527F-9D6E-467B6A7E8CF1
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
      data: ListFileResponseBodyData,
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

