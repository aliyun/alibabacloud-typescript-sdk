// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConsumerAPIKey extends $dara.Model {
  /**
   * @remarks
   * Specifies if the key is enabled (true) or disabled (false).
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The unique identifier of the consumer API key.
   * 
   * @example
   * 12345678-1234-1234-1234-123456789abc
   */
  consumerApiKeyId?: string;
  /**
   * @remarks
   * The creation time of the consumer API key, in ISO 8601 format.
   * 
   * @example
   * 2025-01-10T10:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * A user-defined description for the consumer API key.
   * 
   * @example
   * 用于生产环境的API密钥
   */
  description?: string;
  /**
   * @remarks
   * The last update time of the consumer API key, in ISO 8601 format.
   * 
   * @example
   * 2025-01-10T11:45:00Z
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * The masked API key, showing only the first and last few characters.
   * 
   * @example
   * sk-****1234
   */
  maskedKey?: string;
  /**
   * @remarks
   * The identifier of the associated model connection.
   * 
   * @example
   * mc-1234567890abcdef
   */
  modelConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      consumerApiKeyId: 'consumerApiKeyId',
      createdAt: 'createdAt',
      description: 'description',
      lastUpdatedAt: 'lastUpdatedAt',
      maskedKey: 'maskedKey',
      modelConnectionId: 'modelConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      consumerApiKeyId: 'string',
      createdAt: 'string',
      description: 'string',
      lastUpdatedAt: 'string',
      maskedKey: 'string',
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

