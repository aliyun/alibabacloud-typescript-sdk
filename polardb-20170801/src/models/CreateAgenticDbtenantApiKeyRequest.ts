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
   * The description of the API key usage.
   * 
   * @example
   * Dedicated key for MCP Server
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
   * The tenant name. The name must be unique within the cluster and contain 2 to 64 characters.
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

