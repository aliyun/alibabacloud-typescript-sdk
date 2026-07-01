// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAgenticDBTenantApiKeyResponseBody extends $dara.Model {
  /**
   * @example
   * pagc_key_cGFnYy1icDFh...newSignature22ch
   */
  apiKey?: string;
  /**
   * @example
   * ak-71304e39c7e841a1
   */
  apiKeyId?: string;
  /**
   * @example
   * 2026-06-10T14:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * 2027-01-01T00:00:00Z
   */
  expireTime?: string;
  /**
   * @example
   * B2C3D4E5-F6A7-8901-BCDE-F12345678901
   */
  requestId?: string;
  /**
   * @example
   * t-4b83e0da66674951
   */
  tenantId?: string;
  /**
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

