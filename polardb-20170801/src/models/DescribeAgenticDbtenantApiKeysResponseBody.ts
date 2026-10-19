// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBTenantApiKeysResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The resource ID of the API key.
   * 
   * @example
   * ak-71304e39c7e841a1
   */
  apiKeyId?: string;
  /**
   * @remarks
   * The masked API key value.
   * 
   * @example
   * pagc_key_cGFnYy1icDFhMmIz****
   */
  apiKeyMasked?: string;
  /**
   * @remarks
   * The time when the API key was created.
   * 
   * The time is in ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2026-06-10T10:30:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the API key.
   * 
   * @example
   * MCP server token
   */
  description?: string;
  /**
   * @remarks
   * The time when the API key expires.
   * 
   * The time is in ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2027-01-01T00:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The status of the API key.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant to which the API key belongs.
   * 
   * @example
   * t-4b83e0da66674951
   */
  tenantId?: string;
  /**
   * @remarks
   * The name of the tenant to which the API key belongs.
   * 
   * @example
   * my-saas-app
   */
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'ApiKeyId',
      apiKeyMasked: 'ApiKeyMasked',
      createTime: 'CreateTime',
      description: 'Description',
      expireTime: 'ExpireTime',
      status: 'Status',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'string',
      apiKeyMasked: 'string',
      createTime: 'string',
      description: 'string',
      expireTime: 'string',
      status: 'string',
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

export class DescribeAgenticDBTenantApiKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of API keys.
   */
  items?: DescribeAgenticDBTenantApiKeysResponseBodyItems[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C3D4E5F6-A7B8-9012-CDEF-123456789012
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeAgenticDBTenantApiKeysResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

