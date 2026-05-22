// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalGuardAsyncResponseBodyData extends $dara.Model {
  /**
   * @example
   * dataIdxxx
   */
  dataId?: string;
  /**
   * @example
   * au_f_xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
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

export class MultiModalGuardAsyncResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: MultiModalGuardAsyncResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
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
      code: 'number',
      data: MultiModalGuardAsyncResponseBodyData,
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

