// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelConnectionConsumerAPIKey extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for the consumer API key.
   * 
   * @example
   * 12345678-1234-1234-1234-123456789abc
   */
  apiKeyId?: string;
  /**
   * @remarks
   * The value of the consumer API key.
   */
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

