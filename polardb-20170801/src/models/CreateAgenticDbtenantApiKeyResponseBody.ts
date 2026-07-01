// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgenticDBTenantApiKeyResponseBody extends $dara.Model {
  /**
   * @example
   * pagc_key_xxxx.yyyy
   */
  apiKey?: string;
  /**
   * @example
   * ak-xxxxxxxxxxxx
   */
  apiKeyId?: string;
  /**
   * @example
   * 2026-06-10T08:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * 2027-01-01T00:00:00Z
   */
  expireTime?: string;
  /**
   * @example
   * F45FFACC-1B2C-3D4E-5F6A-7B8C9D0E1F2A
   */
  requestId?: string;
  /**
   * @example
   * t-aaaa111122223333
   */
  tenantId?: string;
  /**
   * @example
   * my-tenant
   */
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      apiKeyId: 'ApiKeyId',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      requestId: 'RequestId',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      apiKeyId: 'string',
      createTime: 'string',
      expireTime: 'string',
      requestId: 'string',
      tenantId: 'string',
      tenantName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

