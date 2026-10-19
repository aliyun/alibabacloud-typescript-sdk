// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BatchOperateWorkItemsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 跳过或失败原因
   * 
   * @example
   * example
   */
  reason?: string;
  /**
   * @remarks
   * 是否执行成功
   * 
   * @example
   * false
   */
  success?: boolean;
  /**
   * @remarks
   * 工作项ID
   * 
   * @example
   * example
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'reason',
      success: 'success',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      success: 'boolean',
      workItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchOperateWorkItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码；成功为200
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 逐项结果，顺序与请求一致
   * 
   * @example
   * example
   */
  items?: BatchOperateWorkItemsResponseBodyItems[];
  /**
   * @remarks
   * 错误描述
   * 
   * @example
   * 请求的资源不存在
   */
  message?: string;
  /**
   * @remarks
   * 请求追踪ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 跳过或失败数量
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数量
   * 
   * @example
   * 1
   */
  succeeded?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      requestId: 'requestId',
      skipped: 'skipped',
      succeeded: 'succeeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': BatchOperateWorkItemsResponseBodyItems },
      message: 'string',
      requestId: 'string',
      skipped: 'number',
      succeeded: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

