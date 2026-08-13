// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedAgentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * 有指定权限的数字员工名称列表
   * 
   * @example
   * string_value
   */
  agentNames?: string[];
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
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      agentNames: 'agentNames',
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentNames: { 'type': 'array', 'itemType': 'string' },
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentNames)) {
      $dara.Model.validateArray(this.agentNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

