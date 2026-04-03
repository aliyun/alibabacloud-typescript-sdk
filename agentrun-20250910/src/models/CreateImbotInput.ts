// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IMBotMetadata } from "./ImbotMetadata";


export class CreateIMBotInput extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  botBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  botBizSecret?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  botBizType?: string;
  /**
   * @remarks
   * standard、custom；不传时可能继承租户已有部署模式
   * 
   * **if can be null:**
   * true
   */
  botMode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
   * @remarks
   * botMode 为 standard 时条件必填；custom 模式不进行标准运行时绑定校验
   * 
   * **if can be null:**
   * true
   */
  metadata?: IMBotMetadata;
  /**
   * @remarks
   * FC 最小实例数，≥ 1；与租户账号级配置相关
   * 
   * **if can be null:**
   * true
   */
  minInstances?: number;
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

