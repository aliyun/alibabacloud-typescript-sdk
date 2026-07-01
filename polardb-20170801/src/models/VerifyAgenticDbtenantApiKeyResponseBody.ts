// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyAgenticDBTenantApiKeyResponseBody extends $dara.Model {
  /**
   * @example
   * ak-71304e39c7e841a1
   */
  apiKeyId?: string;
  /**
   * @example
   * pagc-bp1abcdef1234567
   */
  DBClusterId?: string;
  /**
   * @example
   * 2027-01-01T00:00:00Z
   */
  expireTime?: string;
  reason?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * D4E5F6A7-B8C9-0123-DEFA-234567890123
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
  /**
   * @example
   * true
   */
  valid?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'ApiKeyId',
      DBClusterId: 'DBClusterId',
      expireTime: 'ExpireTime',
      reason: 'Reason',
      regionId: 'RegionId',
      requestId: 'RequestId',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'string',
      DBClusterId: 'string',
      expireTime: 'string',
      reason: 'string',
      regionId: 'string',
      requestId: 'string',
      tenantId: 'string',
      tenantName: 'string',
      valid: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

