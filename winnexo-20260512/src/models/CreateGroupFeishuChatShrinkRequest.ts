// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupFeishuChatShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 飞书群聊ID，以oc_开头，需当前用户有权读取
   * 
   * This parameter is required.
   * 
   * @example
   * cidxxxxxxxx
   */
  chatId?: string;
  /**
   * @remarks
   * 资料描述
   * 
   * @example
   * string_value
   */
  description?: string;
  /**
   * @remarks
   * 空间物理目录ID；省略/root使用空间根，首次可能初始化根目录
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 协作空间 ID
   * 
   * This parameter is required.
   * 
   * @example
   * exampleGroupId
   */
  groupId?: string;
  /**
   * @remarks
   * 历史起始时间，YYYY-MM-DD或YYYY-MM-DD HH:MM:SS；省略读取全部可见历史
   * 
   * @example
   * 2026-08-01
   */
  historyStartTime?: string;
  /**
   * @remarks
   * 分析指令
   * 
   * @example
   * 重点识别客户诉求与待办
   */
  notes?: string;
  /**
   * @remarks
   * 运营对象名称，用于来源追溯
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * 资料标签JSON字符串列表
   * 
   * @example
   * ["重点","文件"]
   */
  sourceTags?: string;
  /**
   * @remarks
   * 租户ID，公共参数；缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * Source级同步配置
   */
  updateFrequencyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      chatId: 'chatId',
      description: 'description',
      directoryId: 'directoryId',
      groupId: 'groupId',
      historyStartTime: 'historyStartTime',
      notes: 'notes',
      operatingObjectName: 'operatingObjectName',
      sourceTags: 'sourceTags',
      tenantId: 'tenantId',
      updateFrequencyShrink: 'updateFrequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatId: 'string',
      description: 'string',
      directoryId: 'string',
      groupId: 'string',
      historyStartTime: 'string',
      notes: 'string',
      operatingObjectName: 'string',
      sourceTags: 'string',
      tenantId: 'string',
      updateFrequencyShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

