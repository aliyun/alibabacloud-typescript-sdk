// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupTextResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码，成功为200
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 解析并绑定的真实目录ID
   * 
   * @example
   * dir_example
   */
  directoryId?: string;
  /**
   * @remarks
   * 创建时间，ISO8601格式
   * 
   * @example
   * example
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 协作空间ID
   * 
   * @example
   * group_example
   */
  groupId?: string;
  /**
   * @remarks
   * 错误描述
   * 
   * @example
   * The current zone list is illegal.
   */
  message?: string;
  /**
   * @remarks
   * Provider处理后的实际资料名称
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
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 资料范围，固定GROUP
   * 
   * @example
   * example
   */
  scope?: string;
  /**
   * @remarks
   * 新建资料ID
   * 
   * @example
   * example
   */
  sourceId?: string;
  /**
   * @remarks
   * 实际资料状态；RUNNING表示处理中，FAILED表示创建处理失败
   * 
   * @example
   * example
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      directoryId: 'directoryId',
      gmtCreate: 'gmtCreate',
      groupId: 'groupId',
      message: 'message',
      name: 'name',
      requestId: 'requestId',
      scope: 'scope',
      sourceId: 'sourceId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      directoryId: 'string',
      gmtCreate: 'string',
      groupId: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      scope: 'string',
      sourceId: 'string',
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

