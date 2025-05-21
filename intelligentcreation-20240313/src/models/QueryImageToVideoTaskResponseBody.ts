// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryImageToVideoTaskResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  message?: string;
  /**
   * @example
   * https://xxx/xxx.mp4
   */
  originUrl?: string;
  /**
   * @example
   * CC2967CA-0114-57E0-A0CF-7DEEEDAB953D
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 868125994191405056
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      originUrl: 'originUrl',
      requestId: 'requestId',
      status: 'status',
      success: 'success',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      originUrl: 'string',
      requestId: 'string',
      status: 'number',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

