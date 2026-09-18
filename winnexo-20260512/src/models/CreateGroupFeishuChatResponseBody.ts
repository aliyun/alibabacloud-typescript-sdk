// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupFeishuChatResponseBody extends $dara.Model {
  /**
   * @remarks
   * 飞书群聊ID
   * 
   * @example
   * cidxxxxxxxx
   */
  chatId?: string;
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
   * 解析并绑定的真实目录ID
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
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
   * 协作空间ID
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
   * Provider处理后的实际资料名称
   * 
   * @example
   * oklabs_tongyici
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
   * PERSONAL
   */
  scope?: string;
  /**
   * @remarks
   * 新建资料ID
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * 实际资料状态；RUNNING表示处理中，FAILED表示创建处理失败
   * 
   * @example
   * PENDING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      chatId: 'chatId',
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
      chatId: 'string',
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

