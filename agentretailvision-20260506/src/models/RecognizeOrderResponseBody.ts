// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeOrderResponseBodyData extends $dara.Model {
  /**
   * @example
   * ORDER_001
   */
  orderUniqueId?: string;
  /**
   * @example
   * TASK_001
   */
  taskId?: string;
  /**
   * @example
   * PROCESSING
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      orderUniqueId: 'OrderUniqueId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderUniqueId: 'string',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeOrderResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: RecognizeOrderResponseBodyData;
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
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
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
      data: RecognizeOrderResponseBodyData,
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

