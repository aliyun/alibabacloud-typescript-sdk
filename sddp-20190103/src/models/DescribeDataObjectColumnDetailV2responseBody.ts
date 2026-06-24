// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataObjectColumnDetailV2ResponseBodyItemsModelTags extends $dara.Model {
  /**
   * @remarks
   * The ID of the data tag. Valid values:
   * 
   * - **101**: Personal sensitive information
   * 
   * - **102**: Personal information
   * 
   * - **107**: General information
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * The name of the data tag. Valid values:
   * 
   * - Personal sensitive information
   * 
   * - Personal information
   * 
   * - General information
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

export class DescribeDataObjectColumnDetailV2ResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The list of industry-specific categories for the sensitive data.
   */
  categories?: string[];
  /**
   * @remarks
   * The comments on the column.
   * 
   * @example
   * column comment
   */
  columnComment?: string;
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * hide14
   */
  columnName?: string;
  /**
   * @remarks
   * The data type of the column.
   * 
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @remarks
   * The engine type. Valid values:
   * 
   * - **MySQL**.
   * 
   * - **MariaDB**.
   * 
   * - **Oracle**.
   * 
   * - **PostgreSQL**.
   * 
   * - **SQLServer**.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The unique ID of the data object.
   * 
   * @example
   * 1392973973691383808
   */
  id?: string;
  /**
   * @remarks
   * The name of the instance for the data asset table.
   * 
   * @example
   * rm-bp17t1htja573l5i8****
   */
  instanceName?: string;
  /**
   * @remarks
   * The encryption status of the column. Valid values:
   * 
   * - **-1**: Not encrypted
   * 
   * - **1**: Encrypted
   * 
   * - **2**: Encryption failed
   * 
   * @example
   * -1
   */
  maskingStatus?: number;
  /**
   * @remarks
   * The list of data tags.
   */
  modelTags?: DescribeDataObjectColumnDetailV2ResponseBodyItemsModelTags[];
  /**
   * @remarks
   * Indicates whether the column is a primary key. Valid values:
   * 
   * - **true**: The column is a primary key.
   * 
   * - **false**: The column is not a primary key.
   * 
   * @example
   * true
   */
  primaryKey?: boolean;
  /**
   * @remarks
   * The ID of the product to which the data object belongs. Valid values:
   * 
   * - **1**: MaxCompute
   * 
   * - **2**: OSS
   * 
   * - **3**: ADB-MYSQL
   * 
   * - **4**: Tablestore
   * 
   * - **5**: RDS
   * 
   * - **6**: SELF_DB
   * 
   * - **7**: PolarDB-X
   * 
   * - **8**: PolarDB
   * 
   * - **9**: ADB-PG
   * 
   * - **10**: OceanBase
   * 
   * - **11**: MongoDB
   * 
   * - **25**: Redis
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The region where the asset resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the sensitivity level. Valid values:
   * 
   * - **1**: N/A: No sensitive data is detected.
   * 
   * - **2**: S1: level-1 sensitive data.
   * 
   * - **3**: S2: level-2 sensitive data.
   * 
   * - **4**: S3: level-3 sensitive data.
   * 
   * - **5**: S4: level-4 sensitive data.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the sensitivity level. Valid values:
   * 
   * - **N/A**: No sensitive data is detected.
   * 
   * - **S1**: level-1 sensitive data.
   * 
   * - **S2**: level-2 sensitive data.
   * 
   * - **S3**: level-3 sensitive data.
   * 
   * - **S4**: level-4 sensitive data.
   * 
   * @example
   * S1
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The ID of the hit detection model.
   * 
   * @example
   * 51
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the hit detection model.
   * 
   * @example
   * name
   */
  ruleName?: string;
  /**
   * @remarks
   * The name of the table.
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
      modelTags: { 'type': 'array', 'itemType': DescribeDataObjectColumnDetailV2ResponseBodyItemsModelTags },
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

export class DescribeDataObjectColumnDetailV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of detection results for the columns in the data table.
   */
  items?: DescribeDataObjectColumnDetailV2ResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 231
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
      items: { 'type': 'array', 'itemType': DescribeDataObjectColumnDetailV2ResponseBodyItems },
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

