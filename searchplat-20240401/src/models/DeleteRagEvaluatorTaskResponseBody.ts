// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRagEvaluatorTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * not found
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * "xx not found"
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0B66A850-506C-56B7-B001-EA09411CCD69
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

