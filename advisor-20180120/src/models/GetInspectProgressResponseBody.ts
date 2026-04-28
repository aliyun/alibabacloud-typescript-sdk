// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInspectProgressResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100
   */
  allSubtaskCount?: number;
  /**
   * @example
   * True
   */
  finish?: boolean;
  /**
   * @example
   * 1
   */
  finishRate?: number;
  /**
   * @example
   * 1
   */
  finishSubtaskCount?: number;
  /**
   * @example
   * 111
   */
  lastInspectDate?: number;
  /**
   * @example
   * 95***135
   */
  taskId?: number;
  /**
   * @example
   * 1
   */
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      allSubtaskCount: 'AllSubtaskCount',
      finish: 'Finish',
      finishRate: 'FinishRate',
      finishSubtaskCount: 'FinishSubtaskCount',
      lastInspectDate: 'LastInspectDate',
      taskId: 'TaskId',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allSubtaskCount: 'number',
      finish: 'boolean',
      finishRate: 'number',
      finishSubtaskCount: 'number',
      lastInspectDate: 'number',
      taskId: 'number',
      usedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInspectProgressResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetInspectProgressResponseBodyData;
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 566331F9-****-550F-B745-A730331F97A9
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInspectProgressResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

