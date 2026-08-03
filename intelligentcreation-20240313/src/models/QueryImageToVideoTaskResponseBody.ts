// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryImageToVideoTaskResponseBody extends $dara.Model {
  message?: string;
  originUrl?: string;
  requestId?: string;
  status?: number;
  success?: boolean;
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

