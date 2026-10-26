// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgenticDBTenantApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The AgenticDB cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pagc-bp1abcdef1234567
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The description of the purpose.
   * 
   * @example
   * Dedicated key for MCP server
   */
  description?: string;
  /**
   * @remarks
   * The expiration time in ISO 8601 format. If this parameter is not specified, the API key never expires.
   * 
   * @example
   * 2027-01-01T00:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the tenant. The name must be unique within the same cluster and be 2 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * my-tenant
   */
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      description: 'Description',
      expireTime: 'ExpireTime',
      regionId: 'RegionId',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      description: 'string',
      expireTime: 'string',
      regionId: 'string',
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

