// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudImportTaskTelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 座席接听时自动在双侧播放开场白语音，指定语音变量值；企业语音库里的语音变量值
   * 
   * @example
   * 示例值示例值
   */
  bridgeVoicePath?: string;
  /**
   * @remarks
   * 座席接听时自动在双侧播放开场白语音类型；1. 公共语音库；2. 企业语音库，静态话术； 3. 企业语音库，动态话术（座席号），传bridgeVoicePath后生效，默认为3
   * 
   * @example
   * 3
   */
  bridgeVoiceType?: number;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 17
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 批次Id；传此值表示在批次中增加号码
   * 
   * @example
   * 666
   */
  fileId?: number;
  /**
   * @remarks
   * 是否自动启动任务；0:不自动启动 1:自动启动，默认为0
   * 
   * @example
   * 0
   */
  importTelAutoStart?: number;
  /**
   * @remarks
   * 是否排重；0.不排重 1.任务内排重 2.导入号码排重 3.批次内排重，默认为1。注：任务内排重与批次内排重不能同时支持，如果中途切换，则从本次切换开始进行排重。
   * 
   * @example
   * 1
   */
  isRepeat?: number;
  /**
   * @remarks
   * 批次名称
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * 优先级；默认0，值越大越优先，最大999999
   * 
   * @example
   * 5
   */
  priority?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 任务Id
   * 
   * This parameter is required.
   * 
   * @example
   * 25
   */
  taskId?: number;
  /**
   * @remarks
   * 任务号码列表；CtiLinkTaskTel中只有Tel是必选字段，长度大小不超过8MB 注：获取导入失败明细，需配置[事件推送](../字段定义/推送变量和值/预测外呼导入号码失败推送变量.md)
   * 
   * This parameter is required.
   */
  taskTelListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bridgeVoicePath: 'BridgeVoicePath',
      bridgeVoiceType: 'BridgeVoiceType',
      enterpriseId: 'EnterpriseId',
      fileId: 'FileId',
      importTelAutoStart: 'ImportTelAutoStart',
      isRepeat: 'IsRepeat',
      name: 'Name',
      ownerId: 'OwnerId',
      priority: 'Priority',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
      taskTelListShrink: 'TaskTelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bridgeVoicePath: 'string',
      bridgeVoiceType: 'number',
      enterpriseId: 'number',
      fileId: 'number',
      importTelAutoStart: 'number',
      isRepeat: 'number',
      name: 'string',
      ownerId: 'number',
      priority: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
      taskTelListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

