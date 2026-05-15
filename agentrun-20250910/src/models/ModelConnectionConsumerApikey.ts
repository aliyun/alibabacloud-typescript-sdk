// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelConnectionConsumerAPIKey extends $dara.Model {
  /**
   * @remarks
   * 消费者API密钥记录的唯一标识
   * 
   * @example
   * 12345678-1234-1234-1234-123456789abc
   */
  apiKeyId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

