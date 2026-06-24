// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColumnsV2ResponseBodyItemsModelTags extends $dara.Model {
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

export class DescribeColumnsV2ResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when the data in the column of the data asset table was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1536751124000
   */
  creationTime?: number;
  /**
   * @remarks
   * The data type of the data in the column of the data asset table.
   * 
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @remarks
   * The type of the database engine. Valid values:
   * 
   * - **MySQL**
   * 
   * - **MariaDB**
   * 
   * - **Oracle**
   * 
   * - **PostgreSQL**
   * 
   * - **SQLServer**
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
   * 111111
   */
  id?: string;
  /**
   * @remarks
   * The ID of the data asset instance to which the data in the column belongs.
   * 
   * @example
   * 1232122
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the data asset instance to which the data in the column belongs.
   * 
   * @example
   * rm-1234
   */
  instanceName?: string;
  /**
   * @remarks
   * The column encryption status. Valid values:
   * 
   * - **-1**: not encrypted
   * 
   * - **1**: encryption successful
   * 
   * - **2**: encryption failed
   * 
   * @example
   * -1
   */
  maskingStatus?: number;
  /**
   * @remarks
   * A list of data tags.
   */
  modelTags?: DescribeColumnsV2ResponseBodyItemsModelTags[];
  /**
   * @remarks
   * The name of the column in the data asset table.
   * 
   * @example
   * obj_id
   */
  name?: string;
  /**
   * @remarks
   * The name of the risk level for the data asset. Valid values:
   * 
   * - **N/A**: No sensitive data is detected.
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
   * S4
   */
  odpsRiskLevelName?: string;
  /**
   * @remarks
   * The code of the risk level for the data asset. Valid values:
   * 
   * - **1**: N/A
   * 
   * - **2**: S1
   * 
   * - **3**: S2
   * 
   * - **4**: S3
   * 
   * - **5**: S4
   * 
   * > A return value that is less than or equal to 1 indicates N/A.
   * 
   * @example
   * 3
   */
  odpsRiskLevelValue?: number;
  /**
   * @remarks
   * The name of the product to which the data in the column of the data asset table belongs. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the product to which the data asset belongs. Valid values:
   * 
   * - **1**: MaxCompute
   * 
   * - **2**: OSS
   * 
   * - **3**: ADS
   * 
   * - **4**: OTS
   * 
   * - **5**: RDS
   * 
   * - **6**: SELF_DB
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The region where the data asset resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the revision record.
   * 
   * @example
   * 12
   */
  revisionId?: number;
  /**
   * @remarks
   * The revision status. Valid values:
   * 
   * - 1: revised
   * 
   * - 0: not revised
   * 
   * @example
   * 1
   */
  revisionStatus?: number;
  /**
   * @remarks
   * The ID of the risk level for the data in the column of the data asset table. Valid values:
   * 
   * - **1**: N/A
   * 
   * - **2**: S1
   * 
   * - **3**: S2
   * 
   * - **4**: S3
   * 
   * - **5**: S4
   * 
   * > A return value that is less than or equal to 1 indicates N/A.
   * 
   * @example
   * 4
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the risk level for the data in the column of the data asset table. Valid values:
   * 
   * - **N/A**: No sensitive data is detected.
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
   * S1
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The ID of the sensitive data detection rule that is hit by the data in the column.
   * 
   * @example
   * 1004
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the sensitive data detection rule that is hit by the data in the column.
   * 
   * @example
   * name
   */
  ruleName?: string;
  /**
   * @remarks
   * The name of the sensitivity level. Valid values:
   * 
   * - **N/A**: No sensitive data is detected.
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
   * Indicates whether the data in the column of the data asset table is sensitive. Valid values:
   * 
   * - true: The data in the column is sensitive.
   * 
   * - false: The data in the column is not sensitive.
   * 
   * @example
   * true
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The ID of the data asset table to which the data in the column belongs.
   * 
   * @example
   * 123
   */
  tableId?: number;
  /**
   * @remarks
   * The name of the table that contains the revised target column.
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
      modelTags: { 'type': 'array', 'itemType': DescribeColumnsV2ResponseBodyItemsModelTags },
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

export class DescribeColumnsV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * A list of detection results for the columns in the data table.
   */
  items?: DescribeColumnsV2ResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of entries returned on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique ID generated by Alibaba Cloud for the request.
   * 
   * @example
   * B1F2BB1F-04EC-5D36-B136-B4DE17FD8DE0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
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
      items: { 'type': 'array', 'itemType': DescribeColumnsV2ResponseBodyItems },
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

