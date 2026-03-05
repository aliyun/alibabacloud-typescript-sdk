// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUnionBrandResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  /**
   * @example
   * True
   */
  data?: boolean;
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
  success?: string;
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
      code: 'string',
      data: 'boolean',
      errorMsg: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

