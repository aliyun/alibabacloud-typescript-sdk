// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGroupSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 资料描述
   * 
   * @example
   * recorder function
   */
  description?: string;
  /**
   * @remarks
   * 创建时间，ISO8601格式
   * 
   * @example
   * 2026-08-26T10:00:00+08:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 修改时间，ISO8601格式
   * 
   * @example
   * 2026-08-20T14:00:00+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * 本次授权读取的协作空间ID
   * 
   * @example
   * exampleGroupId
   */
  groupId?: string;
  /**
   * @remarks
   * 错误描述
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * 资料名称
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
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
   * 资料实际范围；引用资料保留 PERSONAL 或 TENANT
   * 
   * @example
   * GROUP
   */
  scope?: string;
  /**
   * @remarks
   * 资料ID
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * 知识归属类型，沿用 Source 分类
   * 
   * @example
   * string_value
   */
  sourceKind?: string;
  /**
   * @remarks
   * 资料标签JSON字符串列表
   * 
   * @example
   * ["重点","文档"]
   */
  sourceTags?: string;
  /**
   * @remarks
   * 资料类型，例如 TEXT、FILE、ONLINE_DOC、FEISHU
   * 
   * @example
   * string_value
   */
  sourceType?: string;
  /**
   * @remarks
   * 当前资料状态，例如 READY、RUNNING、FAILED
   * 
   * @example
   * READY
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      groupId: 'groupId',
      message: 'message',
      name: 'name',
      requestId: 'requestId',
      scope: 'scope',
      sourceId: 'sourceId',
      sourceKind: 'sourceKind',
      sourceTags: 'sourceTags',
      sourceType: 'sourceType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupId: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      scope: 'string',
      sourceId: 'string',
      sourceKind: 'string',
      sourceTags: 'string',
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

