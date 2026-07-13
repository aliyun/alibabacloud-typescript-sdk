// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the asynchronous task.
   * 
   * @example
   * t-0000e4w0u1v592zdf6s7
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
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

export class CheckRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: CheckRulesResponseBodyData;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 700683DE-0154-56D4-8D76-3B7A2C2C7DF9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CheckRulesResponseBodyData,
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

