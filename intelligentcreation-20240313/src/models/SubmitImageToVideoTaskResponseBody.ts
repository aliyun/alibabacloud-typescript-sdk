// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitImageToVideoTaskResponseBody extends $dara.Model {
  /**
   * @example
   * job added successfully
   */
  message?: string;
  /**
   * @example
   * 53AED51A-74CE-57CE-B1BF-2703F314EEC8
   */
  requestId?: string;
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
      requestId: 'requestId',
      success: 'success',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
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

