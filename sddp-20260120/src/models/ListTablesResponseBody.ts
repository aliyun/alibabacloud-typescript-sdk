// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesResponseBodyItemsRuleList extends $dara.Model {
  /**
   * @remarks
   * The number of hits for this detection rule.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The detection model or rule name.
   * 
   * @example
   * Phone number
   */
  name?: string;
  /**
   * @remarks
   * The sensitivity level ID.
   * 
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
   * @remarks
   * The comment of the data table.
   * 
   * @example
   * Customer contact information
   */
  comment?: string;
  /**
   * @remarks
   * The creation time of the data object. The value is a UNIX timestamp in milliseconds since 1970-01-01 00:00:00 UTC.
   * 
   * @example
   * 1788566400000
   */
  creationTime?: number;
  /**
   * @remarks
   * The cloud instance identity.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  dataAssetSourceId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * business_db
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The description of the database instance.
   * 
   * @example
   * Business database instance
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The data table name. Some engines return the name in the schema.table format.
   * 
   * @example
   * customer
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the data table owner.
   * 
   * @example
   * 123456789012****
   */
  owner?: string;
  /**
   * @remarks
   * The cloud product code.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The sensitivity level ID.
   * 
   * @example
   * 1
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The sensitivity level name.
   * 
   * @example
   * S2
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The list of detection models or rules.
   */
  ruleList?: ListTablesResponseBodyItemsRuleList[];
  /**
   * @remarks
   * Indicates whether the data is detected as sensitive data.
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The number of sensitive data entries within the current statistical scope.
   * 
   * @example
   * 20
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The proportion of sensitive data.
   * 
   * @example
   * 0.2
   */
  sensitiveRatio?: string;
  /**
   * @remarks
   * The tenant name to which the data asset belongs.
   * 
   * @example
   * Business tenant
   */
  tenantName?: string;
  /**
   * @remarks
   * The total number of entries that match the current statistical or query scope.
   * 
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
   * @remarks
   * The page number of the returned data.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of records returned by this query.
   */
  items?: ListTablesResponseBodyItems[];
  /**
   * @remarks
   * The pagination cursor used in this query.
   * 
   * @example
   * 0
   */
  marker?: string;
  /**
   * @remarks
   * The cursor used to query the next page.
   * 
   * @example
   * 1001
   */
  nextMarker?: string;
  /**
   * @remarks
   * The number of records per page in this query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID, which can be used to locate this API call.
   * 
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that match the current statistical or query scope.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * Indicates whether more pages are available. A value of true indicates that more data exists. A value of false indicates that no more data exists.
   * 
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

