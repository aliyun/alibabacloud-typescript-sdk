// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColumnsResponseBodyItemsModelTags extends $dara.Model {
  /**
   * @remarks
   * The data tag ID of the detection model. Valid values:
   * - **101**: Personal sensitive information.
   * - **102**: Personal information.
   * - **103**: Important data.
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * The data tag name of the detection model. Valid values:
   * - Personal sensitive information.
   * - Personal information.
   * - Important data.
   * 
   * @example
   * personal sensitive data
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

export class DescribeColumnsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The creation time of the column data in the data asset table. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1536751124000
   */
  creationTime?: number;
  /**
   * @remarks
   * The data type of the column data in the data asset table.
   * 
   * @example
   * String
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
   * The unique ID of the column in the data asset table.
   * 
   * @example
   * 268
   */
  id?: string;
  /**
   * @remarks
   * The instance ID of the asset to which the column data in the data asset table belongs.
   * 
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the asset instance to which the column data in the data asset table belongs.
   * 
   * @example
   * rm-bp17t1htja573l5i8****
   */
  instanceName?: string;
  /**
   * @remarks
   * The encryption status of the column. Valid values:
   * 
   * - **-1**: Not encrypted.
   * 
   * - **1**: Encryption succeeded.
   * 
   * - **2**: Encryption failed.
   * 
   * @example
   * -1
   */
  maskingStatus?: number;
  /**
   * @remarks
   * The list of data tags for the matched detection model.
   */
  modelTags?: DescribeColumnsResponseBodyItemsModelTags[];
  /**
   * @remarks
   * The name of the column in the data asset table.
   * 
   * @example
   * gxdata
   */
  name?: string;
  /**
   * @remarks
   * The risk level name of the asset. Valid values:
   * - **N/A**: No sensitive data is detected.
   * - **S1**: Level-1 sensitive data.
   * - **S2**: Level-2 sensitive data.
   * - **S3**: Level-3 sensitive data.
   * - **S4**: Level-4 sensitive data.
   * 
   * @example
   * S3
   */
  odpsRiskLevelName?: string;
  /**
   * @remarks
   * The risk level code of the asset. Valid values:
   * 
   * - **1**: N/A.
   * - **2**: S1.
   * - **3**: S2.
   * - **4**: S3.
   * - **5**: S4.
   * 
   * @example
   * 3
   */
  odpsRiskLevelValue?: number;
  /**
   * @remarks
   * The name of the product to which the column data in the data asset table belongs. Valid values: **MaxCompute, OSS, ADS, OTS, RDS**, and others.
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The ID that corresponds to the product name to which the data object belongs. Valid values:
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
   * The region where the asset resides.
   * 
   * @example
   * cn-***
   */
  regionId?: string;
  /**
   * @remarks
   * The revision record ID.
   * 
   * @example
   * 12
   */
  revisionId?: number;
  /**
   * @remarks
   * The revision status. Valid values:
   * - 1: Revised.
   * - 0: Not revised.
   * 
   * @example
   * 1
   */
  revisionStatus?: number;
  /**
   * @remarks
   * The risk level ID of the column data in the data asset table. Valid values:
   * - **1**: N/A.
   * - **2**: S1.
   * - **3**: S2.
   * - **4**: S3.
   * - **5**: S4.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The risk level name of the column data in the data asset table. Valid values:
   * - **N/A**: No sensitive data is detected.
   * - **S1**: Level-1 sensitive data.
   * - **S2**: Level-2 sensitive data.
   * - **S3**: Level-3 sensitive data.
   * - **S4**: Level-4 sensitive data.
   * 
   * @example
   * S2
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The ID of the sensitive data detection rule that the column data in the data asset table matches.
   * 
   * @example
   * 1
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the sensitive data detection rule that the column data in the data asset table matches.
   * 
   * @example
   * name
   */
  ruleName?: string;
  /**
   * @remarks
   * The sensitivity level name. Valid values:
   * - **N/A**: No sensitive data is detected.
   * - **S1**: Level-1 sensitive data.
   * - **S2**: Level-2 sensitive data.
   * - **S3**: Level-3 sensitive data.
   * - **S4**: Level-4 sensitive data.
   * 
   * @example
   * S2
   */
  sensLevelName?: string;
  /**
   * @remarks
   * Indicates whether the column data in the data asset table contains sensitive data. Valid values:
   * 
   * - true: The column data contains sensitive data.
   * - false: The column data does not contain sensitive data.
   * 
   * @example
   * false
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The ID of the data asset table to which the column data belongs.
   * 
   * @example
   * 123
   */
  tableId?: number;
  /**
   * @remarks
   * The name of the table to which the revised target column belongs.
   * 
   * @example
   * it_table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      dataType: 'DataType',
      engineType: 'EngineType',
      id: 'Id',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      maskingStatus: 'MaskingStatus',
      modelTags: 'ModelTags',
      name: 'Name',
      odpsRiskLevelName: 'OdpsRiskLevelName',
      odpsRiskLevelValue: 'OdpsRiskLevelValue',
      productCode: 'ProductCode',
      productId: 'ProductId',
      regionId: 'RegionId',
      revisionId: 'RevisionId',
      revisionStatus: 'RevisionStatus',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sensLevelName: 'SensLevelName',
      sensitive: 'Sensitive',
      tableId: 'TableId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      dataType: 'string',
      engineType: 'string',
      id: 'string',
      instanceId: 'number',
      instanceName: 'string',
      maskingStatus: 'number',
      modelTags: { 'type': 'array', 'itemType': DescribeColumnsResponseBodyItemsModelTags },
      name: 'string',
      odpsRiskLevelName: 'string',
      odpsRiskLevelValue: 'number',
      productCode: 'string',
      productId: 'number',
      regionId: 'string',
      revisionId: 'number',
      revisionStatus: 'number',
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleId: 'number',
      ruleName: 'string',
      sensLevelName: 'string',
      sensitive: 'boolean',
      tableId: 'number',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modelTags)) {
      $dara.Model.validateArray(this.modelTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in the results.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The column data in the data asset tables.
   */
  items?: DescribeColumnsResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page in the results.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 769FB3C1-F4C9-4******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the results.
   * 
   * @example
   * 12
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
      items: { 'type': 'array', 'itemType': DescribeColumnsResponseBodyItems },
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

