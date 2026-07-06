// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallAgentWithTypeResponseBodyData extends $dara.Model {
  /**
   * @example
   * 63fc5acb99e642d793f42912612e8001
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UninstallAgentWithTypeResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: UninstallAgentWithTypeResponseBodyData;
  /**
   * @example
   * “”
   */
  message?: string;
  /**
   * @example
   * 13772206-1162-5A0F-81F0-79A10C249A5E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UninstallAgentWithTypeResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

