// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHostInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > The value 200 indicates that the call was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EBB5215C-44AB-4000-A2D7-48634FDC4F04
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. The value true indicates that the call was successful. The value false indicates that the call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
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

