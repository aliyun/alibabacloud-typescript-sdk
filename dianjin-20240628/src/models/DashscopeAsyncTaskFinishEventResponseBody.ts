// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DashscopeAsyncTaskFinishEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * Return message
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the operation can be retried
   */
  retryAble?: boolean;
  /**
   * @remarks
   * Indicates whether the operation succeeded
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      retryAble: 'retryAble',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      retryAble: 'boolean',
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

