// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyAgenticDBTenantApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The key ID. This parameter is empty if the API key is invalid.
   * 
   * @example
   * ak-71304e39c7e841a1
   */
  apiKeyId?: string;
  /**
   * @remarks
   * The ID of the associated AgenticDB cluster.
   * 
   * @example
   * pagc-bp1abcdef1234567
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The expiration time. This parameter is empty if the API key is permanently valid.
   * 
   * The time is in ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2027-01-01T00:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The reason for the validation failure. This parameter is empty if the API key is valid. Valid values:
   * 
   * - NotFound: The API key is not found.
   * - Expired: The API key has expired.
   * - Revoked: The API key has been revoked.
   * 
   * @example
   * NotFound
   */
  reason?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D4E5F6A7-B8C9-0123-DEFA-234567890123
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the API key belongs. This parameter is empty if the API key is invalid.
   * 
   * @example
   * t-4b83e0da66674951
   */
  tenantId?: string;
  /**
   * @remarks
   * The name of the tenant to which the API key belongs. This parameter is empty if the API key is invalid.
   * 
   * @example
   * my-saas-app
   */
  tenantName?: string;
  /**
   * @remarks
   * Indicates whether the API key is valid.
   * 
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

