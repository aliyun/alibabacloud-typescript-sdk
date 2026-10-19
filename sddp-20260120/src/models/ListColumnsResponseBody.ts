// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListColumnsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The creation time of the data object. This value is a UNIX timestamp in milliseconds since 1970-01-01 00:00:00 UTC.
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
   * The data type of the database column.
   * 
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @remarks
   * The database engine type.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The cloud instance identity to which the column belongs. This is a compatible field.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceName?: string;
  /**
   * @remarks
   * The compatible field for column encryption status. To query column encryption results, call ListDataMaskingColumns.
   * 
   * @example
   * 0
   */
  maskingStatus?: number;
  /**
   * @remarks
   * The name of the data column.
   * 
   * @example
   * phone
   */
  name?: string;
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
   * The region ID of the asset.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the detection result revision record.
   * 
   * @example
   * 1001
   */
  revisionId?: number;
  /**
   * @remarks
   * The revision status of the detection result. Valid values:
   * - 0: not revised.
   * - 1: revised.
   * 
   * @example
   * 0
   */
  revisionStatus?: number;
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
   * The ID of the matched detection rule.
   * 
   * @example
   * 1001
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the matched detection rule.
   * 
   * @example
   * Phone number
   */
  ruleName?: string;
  /**
   * @remarks
   * The database schema name.
   * 
   * @example
   * public
   */
  schemaName?: string;
  /**
   * @remarks
   * Indicates whether the data is detected as sensitive data.
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The data table name.
   * 
   * @example
   * customer
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      dataAssetSourceId: 'DataAssetSourceId',
      dataSourceName: 'DataSourceName',
      dataType: 'DataType',
      engineType: 'EngineType',
      instanceName: 'InstanceName',
      maskingStatus: 'MaskingStatus',
      name: 'Name',
      productCode: 'ProductCode',
      regionId: 'RegionId',
      revisionId: 'RevisionId',
      revisionStatus: 'RevisionStatus',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      schemaName: 'SchemaName',
      sensitive: 'Sensitive',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      dataAssetSourceId: 'string',
      dataSourceName: 'string',
      dataType: 'string',
      engineType: 'string',
      instanceName: 'string',
      maskingStatus: 'number',
      name: 'string',
      productCode: 'string',
      regionId: 'string',
      revisionId: 'number',
      revisionStatus: 'number',
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleId: 'number',
      ruleName: 'string',
      schemaName: 'string',
      sensitive: 'boolean',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListColumnsResponseBody extends $dara.Model {
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
  items?: ListColumnsResponseBodyItems[];
  /**
   * @remarks
   * The number of records per page for this query.
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
   * The total number of records that match the current query scope.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': ListColumnsResponseBodyItems },
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

