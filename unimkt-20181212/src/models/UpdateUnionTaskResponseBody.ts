// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUnionTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 1687154040871094
   */
  data?: number;
  /**
   * @example
   * error check permissions
   */
  errorMsg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6CBD8D0F-D84A-5545-817C-16C7430FD612
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
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      errorMsg: 'string',
      requestId: 'string',
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

