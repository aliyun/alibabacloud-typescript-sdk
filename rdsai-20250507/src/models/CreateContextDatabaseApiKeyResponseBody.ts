// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextDatabaseApiKeyResponseBodyKey extends $dara.Model {
  /**
   * @example
   * 2026-05-28T17:59:55Z
   */
  createdAt?: string;
  /**
   * @example
   * 111
   */
  description?: string;
  /**
   * @example
   * (null)
   */
  expiresAt?: string;
  /**
   * @example
   * 33631c
   */
  keyDisplaySuffix?: string;
  /**
   * @example
   * 1
   */
  keyId?: number;
  /**
   * @example
   * ctxdb-
   */
  keyPrefix?: string;
  /**
   * @example
   * (null)
   */
  lastUsedAt?: string;
  /**
   * @example
   * my-key
   */
  name?: string;
  /**
   * @example
   * (null)
   */
  revokedAt?: string;
  /**
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
   * @example
   * ctxdb-*****
   */
  apiKey?: string;
  key?: CreateContextDatabaseApiKeyResponseBodyKey;
  /**
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

