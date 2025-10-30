// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNamespaceSlsConfigsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  errorCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 0a98a02315955564772843261e****
   */
  traceId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AD0286B2-F4A4-5D43-9329-97DEF1019F06
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
      success: 'Success',
      traceId: 'TraceId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      message: 'string',
      success: 'boolean',
      traceId: 'string',
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

