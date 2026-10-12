// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMobileAgentTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The session ID. Tasks with the same session ID share the same context, such as ses-260702-21b****.
   * 
   * @example
   * ses-261005-6ekkb1m9ls00
   */
  sessionId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-22ex666a653gq****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
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

export class CreateMobileAgentTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result object.
   */
  data?: CreateMobileAgentTaskResponseBodyData;
  /**
   * @remarks
   * The message returned by the operation.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateMobileAgentTaskResponseBodyData,
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

