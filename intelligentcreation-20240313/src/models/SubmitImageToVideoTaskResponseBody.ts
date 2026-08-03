// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitImageToVideoTaskResponseBody extends $dara.Model {
  message?: string;
  requestId?: string;
  success?: boolean;
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

