// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UsageQueryResponseBodyData extends $dara.Model {
  createTime?: number;
  /**
   * @example
   * 533
   */
  inputTokens?: number;
  /**
   * @example
   * 38
   */
  outputTokens?: number;
  /**
   * @example
   * d3a2397bc2c14ab4a2e40a4f5b46241b
   */
  taskId?: string;
  /**
   * @example
   * 535
   */
  totalTokens?: number;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      taskId: 'taskId',
      totalTokens: 'totalTokens',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      inputTokens: 'number',
      outputTokens: 'number',
      taskId: 'string',
      totalTokens: 'number',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UsageQueryResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  data?: UsageQueryResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 42FF90E5-5D40-5797-AAF6-8A4D837CCCD5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': UsageQueryResponseBodyData },
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

