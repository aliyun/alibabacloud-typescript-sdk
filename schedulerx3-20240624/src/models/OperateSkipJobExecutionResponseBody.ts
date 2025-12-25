// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateSkipJobExecutionResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C78E2AD2-5985-515B-BAD2-31A248AFC263
   */
  requestId?: string;
  /**
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
      code: 'number',
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

