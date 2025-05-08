// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateIndexResponseBodyData } from "./CreateIndexResponseBodyData";


export class CreateIndexResponseBody extends $dara.Model {
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * Forbidden
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateIndexResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid input, variable name is missing
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17204B98-7734-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indications whether the API call is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
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
      data: CreateIndexResponseBodyData,
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

