// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DistributeProductResult extends $dara.Model {
  /**
   * @remarks
   * The return code.
   */
  code?: string;
  /**
   * @remarks
   * The return message.
   * 
   * @example
   * 操作成功
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 48A34399-A72C-1E23-8388-7E63A1B2E927
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

