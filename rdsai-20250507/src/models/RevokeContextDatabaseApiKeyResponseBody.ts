// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeContextDatabaseApiKeyResponseBody extends $dara.Model {
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
   * The description of the API key.
   * 
   * @example
   * for nightly cron
   */
  description?: string;
  /**
   * @remarks
   * A reserved field. This field is currently empty.
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
   * 1024
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
   * The time when the API key was last used.
   * 
   * @example
   * 2026-06-01T08:30:12Z
   */
  lastUsedAt?: string;
  /**
   * @remarks
   * The name of the API key.
   * 
   * @example
   * my-key
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the API key was revoked.
   * 
   * @example
   * 2026-08-07T10:15:30Z
   */
  revokedAt?: string;
  /**
   * @remarks
   * The status of the API key. After revocation, the value is revoked.
   * 
   * @example
   * revoked
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
      requestId: 'RequestId',
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
      requestId: 'string',
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

