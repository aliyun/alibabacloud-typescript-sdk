// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListColumnsResponseBodyItems extends $dara.Model {
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
   * The name of the database.
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
   * The type of the database engine.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The instance identity of the cloud instance to which the column belongs. This is a compatible field.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceName?: string;
  /**
   * @remarks
   * The compatibility field for the column encryption status. To query column encryption results, call ListDataMaskingColumns.
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
   * The code of the cloud service.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the region where the asset is located.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The identifier of the detection result correction record.
   * 
   * @example
   * 1001
   */
  revisionId?: number;
  /**
   * @remarks
   * The correction status of the detection result. Valid values: 0: Not corrected. 1: Corrected.
   * 
   * @example
   * 0
   */
  revisionStatus?: number;
  /**
   * @remarks
   * The identifier of the sensitivity level.
   * 
   * @example
   * 1
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the sensitivity level.
   * 
   * @example
   * S2
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The identifier of the matched detection rule.
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
   * The name of the database schema.
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
   * The name of the data table.
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
   * The list of records returned by the current query.
   */
  items?: ListColumnsResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page in the current query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID, which can be used to locate the current API call.
   * 
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that meet the current statistics or query scope.
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

