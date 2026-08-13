// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceObjectBindingsResponseBodyObjectBindings extends $dara.Model {
  /**
   * @remarks
   * 绑定对象归属的语义图谱名（object_id 在该 graph 下唯一，必填）
   * 
   * @example
   * string_value
   */
  graphName?: string;
  /**
   * @remarks
   * 绑定对象 ID
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * 绑定对象类型（如 customer / project）
   * 
   * @example
   * string_value
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      graphName: 'graphName',
      objectId: 'objectId',
      objectType: 'objectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graphName: 'string',
      objectId: 'string',
      objectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceObjectBindingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  objectBindings?: ReplaceObjectBindingsResponseBodyObjectBindings[];
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 数据源 ID
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      objectBindings: 'objectBindings',
      requestId: 'requestId',
      sourceId: 'sourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      objectBindings: { 'type': 'array', 'itemType': ReplaceObjectBindingsResponseBodyObjectBindings },
      requestId: 'string',
      sourceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objectBindings)) {
      $dara.Model.validateArray(this.objectBindings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

