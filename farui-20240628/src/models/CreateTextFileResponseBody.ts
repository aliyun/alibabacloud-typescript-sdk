// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTextFileResponseBodyData } from "./CreateTextFileResponseBodyData";


export class CreateTextFileResponseBody extends $dara.Model {
  /**
   * @example
   * Request.Signature.Error
   */
  code?: string;
  data?: CreateTextFileResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 81E6F6D2-8ACB-5BDA-9C7C-4D6268CD9652
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateTextFileResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
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

