// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataObjectColumnDetailV2ResponseBodyItemsModelTags extends $dara.Model {
  /**
   * @remarks
   * ID corresponding to the data tag name. Values:
   * - **101**: Personal Sensitive Information.
   * - **102**: Personal Information.
   * - **107**: General Information.
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * Data tag name. Values:
   * - Personal Sensitive Information.
   * - Personal Information.
   * - General Information.
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
   * List of industry categories for sensitive data.
   */
  categories?: string[];
  /**
   * @remarks
   * Comment for the column.
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
   * Engine type. Values:
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
   * Unique identifier ID of the data object.
   * 
   * @example
   * 1392973973691383808
   */
  id?: string;
  /**
   * @remarks
   * Instance name of the data asset table.
   * 
   * @example
   * rm-bp17t1htja573l5i8****
   */
  instanceName?: string;
  /**
   * @remarks
   * Column encryption status. Values:
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
  modelTags?: DescribeDataObjectColumnDetailV2ResponseBodyItemsModelTags[];
  /**
   * @remarks
   * Whether the column is a primary key. Value explanation:
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
   * ID corresponding to the product name of the data object. Values:
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
   * Risk level name. Values:
   * - **N/A**: No sensitive data was identified.
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
   * The ID of the matched recognition model.
   * 
   * @example
   * 51
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the matched recognition model.
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
   * Page number for paginated queries. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * List of recognition results for the columns in the data table.
   */
  items?: DescribeDataObjectColumnDetailV2ResponseBodyItems[];
  /**
   * @remarks
   * When performing a paginated query, set the maximum number of data asset instances to display per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of this call request, which is a unique identifier generated by Alibaba Cloud for the request, and can be used for troubleshooting and problem localization.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of data entries.
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

