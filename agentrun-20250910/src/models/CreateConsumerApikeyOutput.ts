// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerAPIKeyOutput extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the consumer API key is active.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The complete plaintext API key. This key is returned only upon creation and cannot be retrieved again. Store it securely.
   * 
   * @example
   * sk-xxxxxxxxxxxxxxxxxxxx
   */
  apiKey?: string;
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
   * The creation time, in ISO 8601 format.
   * 
   * @example
   * 2025-01-10T10:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * A description of the consumer API key.
   * 
   * @example
   * 用于生产环境的API密钥
   */
  description?: string;
  /**
   * @remarks
   * The last update time, in ISO 8601 format.
   * 
   * @example
   * 2025-01-10T10:30:00Z
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * A masked version of the API key for display purposes.
   * 
   * @example
   * sk-****1234
   */
  maskedKey?: string;
  /**
   * @remarks
   * The associated model connection identifier.
   * 
   * @example
   * mc-1234567890abcdef
   */
  modelConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      apiKey: 'apiKey',
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
      apiKey: 'string',
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

