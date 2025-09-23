// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 1994
   */
  data?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F439A659-3B3D-50FB-A4BC-69FBF16413C8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
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

