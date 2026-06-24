// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColumnsResponseBodyItemsModelTags extends $dara.Model {
  /**
   * @remarks
   * The data tag ID of the detection model.
   * 
   * - **101**: Personal sensitive information.
   * 
   * - **102**: Personal information.
   * 
   * - **103**: Important data.
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * The data tag name of the detection model.
   * 
   * - Personal sensitive information.
   * 
   * - Personal information.
   * 
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
   * The creation time of the column data in the data asset table, in milliseconds.
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
   * Database engine type.
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
   * The ID of the asset instance to which the column data in the data asset table belongs.
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
   * Column encryption status. Valid values:
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
   * The list of data tags hit by the detection model.
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
   * 
   * - **N/A**: No sensitive data detected.
   * 
   * - **S1**: Level 1 sensitive data.
   * 
   * - **S2**: Level 2 sensitive data.
   * 
   * - **S3**: Level 3 sensitive data.
   * 
   * - **S4**: Level 4 sensitive data.
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
   * 
   * - **2**: S1.
   * 
   * - **3**: S2.
   * 
   * - **4**: S3.
   * 
   * - **5**: S4.
   * 
   * @example
   * 3
   */
  odpsRiskLevelValue?: number;
  /**
   * @remarks
   * The product name to which the column data in the data asset table belongs. Valid values: **MaxCompute, OSS, ADS, OTS, RDS**, and others.
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The ID corresponding to the product name to which the data object belongs. Valid values:
   * 
   * - **1**: MaxCompute
   * 
   * - **2**: OSS
   * 
   * - **3**: ADB-MYSQL
   * 
   * - **4**: TableStore
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
   * The region where the asset is located.
   * 
   * @example
   * cn-***
   */
  regionId?: string;
  /**
   * @remarks
   * Correction record ID.
   * 
   * @example
   * 12
   */
  revisionId?: number;
  /**
   * @remarks
   * Correction status. Valid values:
   * 
   * - 1: Corrected.
   * 
   * - 0: Not corrected.
   * 
   * @example
   * 1
   */
  revisionStatus?: number;
  /**
   * @remarks
   * The risk level ID of the column data in the data asset table. Valid values:
   * 
   * - **1**: N/A.
   * 
   * - **2**: S1.
   * 
   * - **3**: S2.
   * 
   * - **4**: S3.
   * 
   * - **5**: S4.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The risk level name of the column data in the data asset table. Valid values:
   * 
   * - **N/A**: No sensitive data detected.
   * 
   * - **S1**: Level 1 sensitive data.
   * 
   * - **S2**: Level 2 sensitive data.
   * 
   * - **S3**: Level 3 sensitive data.
   * 
   * - **S4**: Level 4 sensitive data.
   * 
   * @example
   * S2
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The ID of the sensitive data detection rule hit by the column data in the data asset table.
   * 
   * @example
   * 1
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the sensitive data detection rule hit by the column data in the data asset table.
   * 
   * @example
   * name
   */
  ruleName?: string;
  /**
   * @remarks
   * Sensitivity level name. Valid values:
   * 
   * - **N/A**: No sensitive data detected.
   * 
   * - **S1**: Level 1 sensitive data.
   * 
   * - **S2**: Level 2 sensitive data.
   * 
   * - **S3**: Level 3 sensitive data.
   * 
   * - **S4**: Level 4 sensitive data.
   * 
   * @example
   * S2
   */
  sensLevelName?: string;
  /**
   * @remarks
   * Indicates whether the column data in the data asset table contains sensitive data. Valid values:
   * 
   * - true: The column data in the data asset table contains sensitive data.
   * 
   * - false: The column data in the data asset table does not contain sensitive data.
   * 
   * @example
   * false
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The ID of the asset table to which the column data in the data asset table belongs.
   * 
   * @example
   * 123
   */
  tableId?: number;
  /**
   * @remarks
   * The name of the table to which the target column for correction belongs.
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
   * The page number of the current page displayed in the results.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Column data in the data asset table.
   */
  items?: DescribeColumnsResponseBodyItems[];
  /**
   * @remarks
   * The number of data entries displayed per page in the results.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID of the result.
   * 
   * @example
   * 769FB3C1-F4C9-4******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of data entries in the results.
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

