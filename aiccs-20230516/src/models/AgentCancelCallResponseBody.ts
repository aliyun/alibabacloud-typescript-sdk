// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentCancelCallResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * 错误手机列表
   */
  unHandleNumbers?: string[];
  static names(): { [key: string]: string } {
    return {
      unHandleNumbers: 'UnHandleNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unHandleNumbers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.unHandleNumbers)) {
      $dara.Model.validateArray(this.unHandleNumbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentCancelCallResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 示例值
   */
  message?: string;
  model?: AgentCancelCallResponseBodyModel;
  /**
   * @example
   * 8EFC6D10-307B-1ECA-A8C6-7CBDF776AAD2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * 1683440860035
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
      model: AgentCancelCallResponseBodyModel,
      requestId: 'string',
      success: 'string',
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

