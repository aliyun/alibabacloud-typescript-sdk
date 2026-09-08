// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesResponseBodyItemsRuleList extends $dara.Model {
  /**
   * @example
   * 10
   */
  count?: number;
  /**
   * @example
   * 手机号
   */
  name?: string;
  /**
   * @example
   * 1
   */
  riskLevelId?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      name: 'Name',
      riskLevelId: 'RiskLevelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      name: 'string',
      riskLevelId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 客户联系方式
   */
  comment?: string;
  /**
   * @example
   * 1788566400000
   */
  creationTime?: number;
  /**
   * @example
   * rm-2ze1abcdefgh****
   */
  dataAssetSourceId?: string;
  /**
   * @example
   * business_db
   */
  dataSourceName?: string;
  /**
   * @example
   * 业务数据库实例
   */
  instanceDescription?: string;
  /**
   * @example
   * customer
   */
  name?: string;
  /**
   * @example
   * 123456789012****
   */
  owner?: string;
  /**
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @example
   * 1
   */
  riskLevelId?: number;
  /**
   * @example
   * S2
   */
  riskLevelName?: string;
  ruleList?: ListTablesResponseBodyItemsRuleList[];
  sensitive?: boolean;
  /**
   * @example
   * 20
   */
  sensitiveCount?: number;
  /**
   * @example
   * 0.2
   */
  sensitiveRatio?: string;
  /**
   * @example
   * 业务租户
   */
  tenantName?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      creationTime: 'CreationTime',
      dataAssetSourceId: 'DataAssetSourceId',
      dataSourceName: 'DataSourceName',
      instanceDescription: 'InstanceDescription',
      name: 'Name',
      owner: 'Owner',
      productCode: 'ProductCode',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleList: 'RuleList',
      sensitive: 'Sensitive',
      sensitiveCount: 'SensitiveCount',
      sensitiveRatio: 'SensitiveRatio',
      tenantName: 'TenantName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      creationTime: 'number',
      dataAssetSourceId: 'string',
      dataSourceName: 'string',
      instanceDescription: 'string',
      name: 'string',
      owner: 'string',
      productCode: 'string',
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleList: { 'type': 'array', 'itemType': ListTablesResponseBodyItemsRuleList },
      sensitive: 'boolean',
      sensitiveCount: 'number',
      sensitiveRatio: 'string',
      tenantName: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: ListTablesResponseBodyItems[];
  /**
   * @example
   * 0
   */
  marker?: string;
  /**
   * @example
   * 1001
   */
  nextMarker?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @example
   * false
   */
  truncated?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      marker: 'Marker',
      nextMarker: 'NextMarker',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      truncated: 'Truncated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': ListTablesResponseBodyItems },
      marker: 'string',
      nextMarker: 'string',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      truncated: 'string',
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

