// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColumnsV2ResponseBodyItemsModelTags extends $dara.Model {
  /**
   * @remarks
   * The data tag ID. Valid values:
   * - **101**: personal sensitive information
   * - **102**: personal information
   * - **107**: general information
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * The data tag name. Valid values:
   * - 个人敏感信息
   * - 个人信息
   * - 通用信息
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
   * varchar
   */
  dataType?: string;
  /**
   * @remarks
   * The engine type. Valid values:
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
   * The unique ID of the column in the data asset table.
   * 
   * @example
   * 111111
   */
  id?: string;
  /**
   * @remarks
   * The instance ID of the asset to which the column data in the data asset table belongs.
   * 
   * @example
   * 1232122
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the asset instance to which the column data in the data asset table belongs.
   * 
   * @example
   * rm-1234
   */
  instanceName?: string;
  /**
   * @remarks
   * The column encryption status. Valid values:
   * 
   * - **-1**: not encrypted.
   * 
   * - **1**: encryption succeeded.
   * 
   * - **2**: encryption failed.
   * 
   * @example
   * -1
   */
  maskingStatus?: number;
  /**
   * @remarks
   * The list of data tags.
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
   * The risk level name of the asset. Valid values:
   * - **N/A**: no sensitive data detected.
   * - **S1**: Level 1 sensitive data.
   * - **S2**: Level 2 sensitive data.
   * - **S3**: Level 3 sensitive data.
   * - **S4**: Level 4 sensitive data.
   * 
   * @example
   * S4
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
   * > A return value less than or equal to 1 indicates N/A.
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
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID that corresponds to the product name of the data asset. Valid values:
   * - **1**: MaxCompute.
   * - **2**: OSS.
   * - **3**: ADS.
   * - **4**: OTS.
   * - **5**: ApsaraDB RDS.
   * - **6**: SELF_DB.
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
   * The ID of the revision record.
   * 
   * @example
   * 12
   */
  revisionId?: number;
  /**
   * @remarks
   * The revision status. Valid values:
   * - 1: revised.
   * - 0: not revised.
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
   * > A return value less than or equal to 1 indicates N/A.
   * 
   * @example
   * 4
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The risk level name of the column data in the data asset table. Valid values:
   * - **N/A**: no sensitive data detected.
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
   * The ID of the sensitive data detection rule that the column data in the data asset table matches.
   * 
   * @example
   * 1004
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
   * - **N/A**: no sensitive data detected.
   * - **S1**: Level 1 sensitive data.
   * - **S2**: Level 2 sensitive data.
   * - **S3**: Level 3 sensitive data.
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
   * - true: The column data contains sensitive data.
   * - false: The column data does not contain sensitive data.
   * 
   * @example
   * true
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
   * The page number in a paged query. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of column detection results in the data asset table.
   */
  items?: DescribeColumnsV2ResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. Default value: **10**.
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

