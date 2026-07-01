// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBTenantApiKeysResponseBodyItems extends $dara.Model {
  /**
   * @example
   * ak-71304e39c7e841a1
   */
  apiKeyId?: string;
  /**
   * @example
   * pagc_key_cGFnYy1icDFhMmIz****
   */
  apiKeyMasked?: string;
  /**
   * @example
   * 2026-06-10T10:30:00Z
   */
  createTime?: string;
  /**
   * @example
   * MCP server token
   */
  description?: string;
  /**
   * @example
   * 2027-01-01T00:00:00Z
   */
  expireTime?: string;
  /**
   * @example
   * Active
   */
  status?: string;
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
  items?: DescribeAgenticDBTenantApiKeysResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * C3D4E5F6-A7B8-9012-CDEF-123456789012
   */
  requestId?: string;
  /**
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

