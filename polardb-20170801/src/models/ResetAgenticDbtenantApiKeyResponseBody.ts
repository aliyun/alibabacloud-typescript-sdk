// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAgenticDBTenantApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The new API key in plaintext. This value is returned only in this response.
   * 
   * @example
   * pagc_key_cGFnYy1icDFh...newSignature22ch
   */
  apiKey?: string;
  /**
   * @remarks
   * The resource ID of the API key. This value remains unchanged after the reset.
   * 
   * @example
   * ak-71304e39c7e841a1
   */
  apiKeyId?: string;
  /**
   * @remarks
   * The reset time, which is the effective period of the new key.
   * 
   * The time is in ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2026-06-10T14:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * The time is in ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2027-01-01T00:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B2C3D4E5-F6A7-8901-BCDE-F12345678901
   */
  requestId?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * t-4b83e0da66674951
   */
  tenantId?: string;
  /**
   * @remarks
   * The tenant name.
   * 
   * @example
   * my-saas-app
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

