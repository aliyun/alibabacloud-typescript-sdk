// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerAPIKeyInput extends $dara.Model {
  /**
   * @remarks
   * A custom API key. If omitted, the service generates one automatically.
   * 
   * @example
   * sk-xxxxxxxxxxxxxxxxxxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * A description for the consumer API key.
   * 
   * @example
   * 用于生产环境的API密钥
   */
  description?: string;
  /**
   * @remarks
   * The identifier for the model connection.
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

