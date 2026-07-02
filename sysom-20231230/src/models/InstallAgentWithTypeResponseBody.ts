// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallAgentWithTypeResponseBodyData extends $dara.Model {
  /**
   * @example
   * 26b3cd97389c43dcad6bc4901c36fcec
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

export class InstallAgentWithTypeResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: InstallAgentWithTypeResponseBodyData;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * 1D8887FC-4BDB-5A1C-AB19-135C29A9E481
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
      data: InstallAgentWithTypeResponseBodyData,
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

