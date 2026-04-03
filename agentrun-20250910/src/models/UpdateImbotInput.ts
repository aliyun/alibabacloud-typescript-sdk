// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IMBotMetadata } from "./ImbotMetadata";


export class UpdateIMBotInput extends $dara.Model {
  botBizId?: string;
  /**
   * @remarks
   * 若提供则不可为空字符串
   */
  botBizSecret?: string;
  botBizType?: string;
  /**
   * @remarks
   * 不可与租户已固定的 deployment 模式冲突
   */
  botMode?: string;
  botName?: string;
  /**
   * @remarks
   * Bot 描述信息
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * **if can be null:**
   * true
   */
  metadata?: IMBotMetadata;
  /**
   * @remarks
   * ≥ 1，更新账号级 FC 最小实例
   * 
   * **if can be null:**
   * true
   */
  minInstances?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      botBizId: 'botBizId',
      botBizSecret: 'botBizSecret',
      botBizType: 'botBizType',
      botMode: 'botMode',
      botName: 'botName',
      description: 'description',
      metadata: 'metadata',
      minInstances: 'minInstances',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botBizId: 'string',
      botBizSecret: 'string',
      botBizType: 'string',
      botMode: 'string',
      botName: 'string',
      description: 'string',
      metadata: IMBotMetadata,
      minInstances: 'number',
      status: 'string',
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

