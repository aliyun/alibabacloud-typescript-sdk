// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerAPIKeyInput extends $dara.Model {
  /**
   * @remarks
   * 用户自定义的完整API密钥；为空时由服务自动生成
   * 
   * @example
   * sk-xxxxxxxxxxxxxxxxxxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * 消费者API密钥的描述信息，用于说明该密钥的用途
   * 
   * @example
   * 用于生产环境的API密钥
   */
  description?: string;
  /**
   * @remarks
   * 关联的模型连接标识符
   * 
   * This parameter is required.
   * 
   * @example
   * mc-1234567890abcdef
   */
  modelConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      description: 'description',
      modelConnectionId: 'modelConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      description: 'string',
      modelConnectionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

