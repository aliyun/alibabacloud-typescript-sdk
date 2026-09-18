// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGroupSourceContentResponseBody extends $dara.Model {
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
   * ok
   */
  message?: string;
  /**
   * @remarks
   * 操作后的资料名称，沿用已有名称维护规则
   * 
   * @example
   * 项目资料
   */
  name?: string;
  /**
   * @remarks
   * 请求追踪ID
   * 
   * @example
   * C474BFC7-7B11-5D92-971E-74AA82EC495B
   */
  requestId?: string;
  /**
   * @remarks
   * 资料 ID；替换、编辑、重新解析均保持该 ID
   * 
   * @example
   * source_example
   */
  sourceId?: string;
  /**
   * @remarks
   * 资料类型
   * 
   * @example
   * example
   */
  sourceType?: string;
  /**
   * @remarks
   * 当前资料状态；RUNNING 表示处理中，异步受理不代表解析完成
   * 
   * @example
   * example
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      name: 'name',
      requestId: 'requestId',
      sourceId: 'sourceId',
      sourceType: 'sourceType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

