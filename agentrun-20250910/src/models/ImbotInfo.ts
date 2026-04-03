// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IMBotMetadata } from "./ImbotMetadata";


export class IMBotInfo extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  agentRuntimeId?: string;
  botBizId?: string;
  /**
   * @remarks
   * dingtalk、wecom、feishu、custom
   */
  botBizType?: string;
  /**
   * @remarks
   * standard、custom
   */
  botMode?: string;
  botName?: string;
  createdAt?: string;
  /**
   * @remarks
   * 可选；来自账号元数据 scaling.currentInstances，同一租户下各 Bot 响应中值相同
   * 
   * **if can be null:**
   * true
   */
  currentInstances?: number;
  /**
   * @remarks
   * Bot 描述信息
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  id?: string;
  imChannelServerResourceName?: string;
  /**
   * @remarks
   * 可选
   * 
   * **if can be null:**
   * true
   */
  lastMessageTime?: string;
  /**
   * **if can be null:**
   * true
   */
  metadata?: IMBotMetadata;
  status?: string;
  tenantId?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      agentRuntimeId: 'agentRuntimeId',
      botBizId: 'botBizId',
      botBizType: 'botBizType',
      botMode: 'botMode',
      botName: 'botName',
      createdAt: 'createdAt',
      currentInstances: 'currentInstances',
      description: 'description',
      id: 'id',
      imChannelServerResourceName: 'imChannelServerResourceName',
      lastMessageTime: 'lastMessageTime',
      metadata: 'metadata',
      status: 'status',
      tenantId: 'tenantId',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRuntimeId: 'string',
      botBizId: 'string',
      botBizType: 'string',
      botMode: 'string',
      botName: 'string',
      createdAt: 'string',
      currentInstances: 'number',
      description: 'string',
      id: 'string',
      imChannelServerResourceName: 'string',
      lastMessageTime: 'string',
      metadata: IMBotMetadata,
      status: 'string',
      tenantId: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

