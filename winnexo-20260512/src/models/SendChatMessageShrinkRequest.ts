// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatMessageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 用户消息正文
   * 
   * This parameter is required.
   * 
   * @example
   * 示例内容
   */
  content?: string;
  /**
   * @remarks
   * 消息类型: Text / Markdown
   * 
   * @example
   * Text
   */
  contentType?: string;
  /**
   * @remarks
   * 数字员工名称列表（兼容旧格式可传单个字符串）
   * 
   * @example
   * string_value
   */
  digitalEmployeeNameShrink?: string;
  /**
   * @remarks
   * 是否启用直连模式；true 时跳过常规场景路由，直接进入直连对话场景
   * 
   * @example
   * false
   */
  directChat?: boolean;
  /**
   * @remarks
   * 文件引用列表；每项为对象，fileId 必传（由 uploadChatFile 返回）
   */
  filesShrink?: string;
  /**
   * @remarks
   * 抽象模型档位（quick / standard / flagship）；缺省时新会话用 standard，已有会话沿用会话当前档位
   * 
   * @example
   * quick
   */
  model?: string;
  /**
   * @remarks
   * 不传 sessionId 时是否复用该数字员工下最近一个会话（CLI 场景），缺省 false 即新建会话
   * 
   * @example
   * false
   */
  reuseLastSession?: boolean;
  /**
   * @remarks
   * 会话 ID
   * 
   * @example
   * exampleSessionId
   */
  sessionId?: string;
  /**
   * @remarks
   * 是否流式返回，默认True
   * 
   * @example
   * true
   */
  stream?: boolean;
  /**
   * @remarks
   * executeScheduledTask 返回的任务执行元数据；传入后按任务执行链路处理
   */
  taskExecutionShrink?: string;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentType: 'contentType',
      digitalEmployeeNameShrink: 'digitalEmployeeName',
      directChat: 'directChat',
      filesShrink: 'files',
      model: 'model',
      reuseLastSession: 'reuseLastSession',
      sessionId: 'sessionId',
      stream: 'stream',
      taskExecutionShrink: 'taskExecution',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      digitalEmployeeNameShrink: 'string',
      directChat: 'boolean',
      filesShrink: 'string',
      model: 'string',
      reuseLastSession: 'boolean',
      sessionId: 'string',
      stream: 'boolean',
      taskExecutionShrink: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

