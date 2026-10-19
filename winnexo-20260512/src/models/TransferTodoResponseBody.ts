// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferTodoResponseBodyTargets extends $dara.Model {
  /**
   * @remarks
   * 处理结果：CREATED/REVIVED/ALREADY_PENDING
   * 
   * @example
   * CREATED
   */
  result?: string;
  /**
   * @remarks
   * 目标用户ID
   * 
   * @example
   * 43
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferTodoResponseBody extends $dara.Model {
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
   * 逐目标处理结果
   */
  targets?: TransferTodoResponseBodyTargets[];
  /**
   * @remarks
   * 待办ID
   * 
   * @example
   * todo_abc123
   */
  todoId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      targets: 'targets',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      targets: { 'type': 'array', 'itemType': TransferTodoResponseBodyTargets },
      todoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

