// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataObjectColumnDetailResponseBodyItemsModelTags extends $dara.Model {
  /**
   * @remarks
   * ID corresponding to the data tag name. Possible values:
   * - **101**: Personal sensitive information.
   * - **102**: Personal information.
   * - **107**: General information.
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * Data tag name. Possible values:
   * - **101**: Personal sensitive information.
   * - **102**: Personal information.
   * - **107**: General information.
   * 
   * @example
   * personal sensitive information
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataObjectColumnDetailResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * List of industry categories for the sensitive data.
   */
  categories?: string[];
  /**
   * @remarks
   * Comment on the column.
   * 
   * @example
   * column comment
   */
  columnComment?: string;
  /**
   * @remarks
   * Column name.
   * 
   * @example
   * hide14
   */
  columnName?: string;
  /**
   * @remarks
   * Data type of the column.
   * 
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @remarks
   * Engine type. Possible values:
   * - **MySQL**
   * - **MariaDB**
   * - **Oracle**
   * - **PostgreSQL**
   * - **SQLServer**
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * Unique identifier ID of the column object.
   * 
   * @example
   * 1509415150052786176
   */
  id?: string;
  /**
   * @remarks
   * Instance name of the data asset table.
   * 
   * @example
   * rm-1234
   */
  instanceName?: string;
  /**
   * @remarks
   * Column encryption status. Possible values:
   * 
   * - **-1**: Not encrypted
   * 
   * - **1**: Encryption successful
   * 
   * - **2**: Encryption failed
   * 
   * @example
   * -1
   */
  maskingStatus?: number;
  /**
   * @remarks
   * List of data tags.
   */
  modelTags?: DescribeDataObjectColumnDetailResponseBodyItemsModelTags[];
  /**
   * @remarks
   * Whether the column is a primary key. Values:
   * 
   * - **true**: Primary key.
   * - **false**: Not a primary key.
   * 
   * @example
   * true
   */
  primaryKey?: boolean;
  /**
   * @remarks
   * ID corresponding to the product name of the data object. Possible values:
   * - **1**: MaxCompute
   * - **2**: OSS
   * - **3**: ADB-MYSQL
   * - **4**: TableStore
   * - **5**: RDS
   * - **6**: SELF_DB
   * - **7**: PolarDB-X
   * - **8**: PolarDB
   * - **9**: ADB-PG
   * - **10**: OceanBase
   * - **11**: MongoDB
   * - **25**: Redis
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * Region where the asset is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Risk level ID. Values:
   * - **1**: N/A: No sensitive data detected.
   * - **2**: S1: Level 1 sensitive data.
   * - **3**: S2: Level 2 sensitive data.
   * - **4**: S3: Level 3 sensitive data.
   * - **5**: S4: Level 4 sensitive data.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * Risk level name. Possible values:
   * - **N/A**: No sensitive data detected.
   * - **S1**: Level 1 sensitive data.
   * - **S2**: Level 2 sensitive data.
   * - **S3**: Level 3 sensitive data.
   * - **S4**: Level 4 sensitive data.
   * 
   * @example
   * S1
   */
  riskLevelName?: string;
  /**
   * @remarks
   * ID of the matched identification model.
   * 
   * @example
   * 1004
   */
  ruleId?: number;
  /**
   * @remarks
   * Name of the matched identification model.
   * 
   * @example
   * name
   */
  ruleName?: string;
  /**
   * @remarks
   * Table name.
   * 
   * @example
   * it_table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      columnComment: 'ColumnComment',
      columnName: 'ColumnName',
      dataType: 'DataType',
      engineType: 'EngineType',
      id: 'Id',
      instanceName: 'InstanceName',
      maskingStatus: 'MaskingStatus',
      modelTags: 'ModelTags',
      primaryKey: 'PrimaryKey',
      productId: 'ProductId',
      regionId: 'RegionId',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      columnComment: 'string',
      columnName: 'string',
      dataType: 'string',
      engineType: 'string',
      id: 'string',
      instanceName: 'string',
      maskingStatus: 'number',
      modelTags: { 'type': 'array', 'itemType': DescribeDataObjectColumnDetailResponseBodyItemsModelTags },
      primaryKey: 'boolean',
      productId: 'number',
      regionId: 'string',
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleId: 'number',
      ruleName: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(Array.isArray(this.modelTags)) {
      $dara.Model.validateArray(this.modelTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataObjectColumnDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * When performing a paginated query, set the current page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * List of identified results for the columns of the data table.
   */
  items?: DescribeDataObjectColumnDetailResponseBodyItems[];
  /**
   * @remarks
   * When performing a paginated query, set the maximum number of data asset instances displayed per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of this request, which is a unique identifier generated by Alibaba Cloud for the request. It can be used for troubleshooting and problem localization.
   * 
   * @example
   * 8C8036CC-961D-514E-88E8-3088B5A50CA9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of data items in the result.
   * 
   * @example
   * 61
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
      items: { 'type': 'array', 'itemType': DescribeDataObjectColumnDetailResponseBodyItems },
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

