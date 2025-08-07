// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChunkResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 35A267BF-xxxx-54DB-8394-AA3B0742D833
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
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

