// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEmployeeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * C61ECFF6-****-****-****-D77369043A5F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The global trace identifier of the request, which is typically used for troubleshooting.
   * 
   * @example
   * 21041ce********056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

