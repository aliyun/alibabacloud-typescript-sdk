// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchConsumerResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the key is active.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The full API key. Returned only in this response.
   * 
   * @example
   * xxxxxxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The MD5 hash of the API key.
   * 
   * @example
   * 0769a11c2d474f96fbb527f8e273d3de
   */
  apiKeyMd5?: string;
  /**
   * @remarks
   * The status of the API key. Default value: Active.
   * 
   * @example
   * Active
   */
  apiKeyStatus?: string;
  /**
   * @remarks
   * The API key status. Default value: Active.
   * 
   * @example
   * Active
   */
  apiStatus?: string;
  /**
   * @remarks
   * The budget limit, which equals the number of credits per package.
   * 
   * @example
   * 3000
   */
  budgetLimit?: number;
  /**
   * @remarks
   * The budget policy ID. Each key has an independent budget policy.
   * 
   * @example
   * 023aacc1effc4b56bb154bfbec6ba9**
   */
  budgetPolicyId?: string;
  /**
   * @remarks
   * The used quota.
   * 
   * @example
   * 0
   */
  budgetUsed?: number;
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * cg-xxxxxx
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * c-mqveroemc***
   */
  consumerId?: string;
  /**
   * @remarks
   * The consumer tag.
   * 
   * @example
   * test
   */
  consumerTag?: string;
  /**
   * @remarks
   * The application description or remarks.
   * 
   * @example
   * myapp
   */
  description?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2025-06-25T09:37:10Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the key is expired.
   * 
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-10-16 16:46:20
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2026-01-04T16:09:29+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * pg-xxxxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The consumer status. Default value: Enabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      apiKey: 'ApiKey',
      apiKeyMd5: 'ApiKeyMd5',
      apiKeyStatus: 'ApiKeyStatus',
      apiStatus: 'ApiStatus',
      budgetLimit: 'BudgetLimit',
      budgetPolicyId: 'BudgetPolicyId',
      budgetUsed: 'BudgetUsed',
      consumerGroupId: 'ConsumerGroupId',
      consumerId: 'ConsumerId',
      consumerTag: 'ConsumerTag',
      description: 'Description',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      gwClusterId: 'GwClusterId',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      apiKey: 'string',
      apiKeyMd5: 'string',
      apiKeyStatus: 'string',
      apiStatus: 'string',
      budgetLimit: 'number',
      budgetPolicyId: 'string',
      budgetUsed: 'number',
      consumerGroupId: 'string',
      consumerId: 'string',
      consumerTag: 'string',
      description: 'string',
      expireTime: 'string',
      expired: 'boolean',
      gmtCreated: 'string',
      gmtModified: 'string',
      gwClusterId: 'string',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchConsumerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of consumer objects.
   */
  items?: CreateBatchConsumerResponseBodyItems[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on the current page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The number of records per page. Valid values:
   * * **30**
   * * **50**
   * * **100**
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A7E6A8FD-C50B-46B2-BA85-D8B8D3******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalPages: 'TotalPages',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': CreateBatchConsumerResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalPages: 'number',
      totalRecordCount: 'number',
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

