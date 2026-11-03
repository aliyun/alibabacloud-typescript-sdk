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
   * The usage description.
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
   * Specifies the ID of an existing tenant. If you specify this parameter, an API key is created only for the existing tenant in the current cluster. If the tenant does not exist, an error is returned and no tenant is created. If TenantName is also specified, the name must match the name of the tenant.
   * 
   * @example
   * t-4b83e0da66674951
   */
  tenantId?: string;
  /**
   * @remarks
   * The name of the tenant. The name must be unique within the cluster and must be 2 to 64 characters in length.
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
      tenantId: 'TenantId',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      description: 'string',
      expireTime: 'string',
      regionId: 'string',
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

