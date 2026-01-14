// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskCallInfoResponseBodyModel extends $dara.Model {
  /**
   * @example
   * 75
   */
  finishTotal?: number;
  /**
   * @example
   * 59
   */
  total?: number;
  /**
   * @example
   * 3
   */
  unCallTotal?: number;
  static names(): { [key: string]: string } {
    return {
      finishTotal: 'FinishTotal',
      total: 'Total',
      unCallTotal: 'UnCallTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTotal: 'number',
      total: 'number',
      unCallTotal: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskCallInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 15
   */
  code?: number;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  model?: TaskCallInfoResponseBodyModel;
  /**
   * @example
   * 示例值示例值示例值
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 62
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      model: TaskCallInfoResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
      timestamp: 'number',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

