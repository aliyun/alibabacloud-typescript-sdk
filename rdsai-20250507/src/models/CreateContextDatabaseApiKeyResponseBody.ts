// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextDatabaseApiKeyResponseBodyKey extends $dara.Model {
  /**
   * @remarks
   * The time when the API key was created.
   * 
   * @example
   * 2026-05-28T17:59:55Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The API key description. This field is not used.
   * 
   * @example
   * 111
   */
  description?: string;
  /**
   * @remarks
   * This field is empty.
   * 
   * @example
   * (null)
   */
  expiresAt?: string;
  /**
   * @remarks
   * The suffix of the API key.
   * 
   * @example
   * 33631c
   */
  keyDisplaySuffix?: string;
  /**
   * @remarks
   * The key ID.
   * 
   * @example
   * 1
   */
  keyId?: number;
  /**
   * @remarks
   * The prefix of the API key.
   * 
   * @example
   * ctxdb-
   */
  keyPrefix?: string;
  /**
   * @remarks
   * This field is empty.
   * 
   * @example
   * (null)
   */
  lastUsedAt?: string;
  /**
   * @remarks
   * The API key name.
   * 
   * @example
   * my-key
   */
  name?: string;
  /**
   * @remarks
   * This field is empty.
   * 
   * @example
   * (null)
   */
  revokedAt?: string;
  /**
   * @remarks
   * The API key status.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      description: 'Description',
      expiresAt: 'ExpiresAt',
      keyDisplaySuffix: 'KeyDisplaySuffix',
      keyId: 'KeyId',
      keyPrefix: 'KeyPrefix',
      lastUsedAt: 'LastUsedAt',
      name: 'Name',
      revokedAt: 'RevokedAt',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      expiresAt: 'string',
      keyDisplaySuffix: 'string',
      keyId: 'number',
      keyPrefix: 'string',
      lastUsedAt: 'string',
      name: 'string',
      revokedAt: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContextDatabaseApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Api Key
   * 
   * @example
   * ctxdb-*****
   */
  apiKey?: string;
  /**
   * @remarks
   * The API key details.
   */
  key?: CreateContextDatabaseApiKeyResponseBodyKey;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      key: 'Key',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      key: CreateContextDatabaseApiKeyResponseBodyKey,
      requestId: 'string',
    };
  }

  validate() {
    if(this.key && typeof (this.key as any).validate === 'function') {
      (this.key as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

