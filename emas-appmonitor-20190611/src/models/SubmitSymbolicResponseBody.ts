// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSymbolicResponseBody extends $dara.Model {
  /**
   * @remarks
   * args
   */
  args?: { [key: string]: any };
  /**
   * @example
   * 500
   */
  errorCode?: number;
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * B3AD0FE4-36EF-1641-90B1-77618166F2ff
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.args) {
      $dara.Model.validateMap(this.args);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

