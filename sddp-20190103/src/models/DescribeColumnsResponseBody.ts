// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColumnsResponseBodyItemsModelTags extends $dara.Model {
  /**
   * @remarks
   * The tag ID.
   * 
   * *   **101**: sensitive personal information
   * *   **102**: personal information
   * *   **103**: important information
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * The tag name.
   * 
   * *   Sensitive personal information
   * *   Personal information
   * *   Important information
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
   * The time when the data in the column of the table is created. Unit: milliseconds.
   * 
   * @example
   * 1536751124000
   */
  creationTime?: number;
  /**
   * @remarks
   * The type of data in the column of the table.
   * 
   * @example
   * String
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
   * The ID of the column of the table.
   * 
   * @example
   * 268
   */
  id?: string;
  /**
   * @remarks
   * The ID of the instance to which data in the column of the table belongs.
   * 
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the instance to which data in the column of the table belongs.
   * 
   * @example
   * rm-bp17t1htja573l5i8****
   */
  instanceName?: string;
  /**
   * @remarks
   * The column encryption status. Valid values:
   * 
   * *   **-1**: unencrypted
   * *   **1**: encrypted
   * *   **2**: encryption failed
   * 
   * @example
   * -1
   */
  maskingStatus?: number;
  /**
   * @remarks
   * A list of tags for data that hits the recognition model.
   */
  modelTags?: DescribeColumnsResponseBodyItemsModelTags[];
  /**
   * @remarks
   * The name of the column of the table.
   * 
   * @example
   * gxdata
   */
  name?: string;
  /**
   * @remarks
   * The name of the sensitivity level for asset. Valid values:
   * 
   * *   **N/A**: indicates that no sensitive data is detected.
   * *   **S1**: indicates the low sensitivity level.
   * *   **S2**: indicates the medium sensitivity level.
   * *   **S3**: indicates the high sensitivity level.
   * *   **S4**: indicates the highest sensitivity level.
   * 
   * @example
   * S3
   */
  odpsRiskLevelName?: string;
  /**
   * @remarks
   * The ID of the sensitivity level of the asset. Valid values:
   * 
   * *   **1**: N/A
   * *   **2**: S1
   * *   **3**: S2
   * *   **4**: S3
   * *   **5**: S4
   * 
   * @example
   * 3
   */
  odpsRiskLevelValue?: number;
  /**
   * @remarks
   * The name of the service to which data in the column of the table belongs. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the data object belongs. Valid values:
   * 
   * *   **1**: MaxCompute
   * *   **2**: Object Storage Service (OSS)
   * *   **3**: AnalyticDB for MySQL
   * *   **4**: Tablestore (OTS)
   * *   **5**: ApsaraDB RDS
   * *   **6**: self-managed database
   * *   **7**: PolarDB for Xscale (PolarDB-X)
   * *   **8**: PolarDB
   * *   **9**: AnalyticDB for PostgreSQL
   * *   **10**: ApsaraDB for OceanBase
   * *   **11**: ApsaraDB for MongoDB
   * *   **25**: ApsaraDB for Redis
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The region in which the asset resides.
   * 
   * @example
   * cn-***
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
   * Indicates whether the column is revised. Valid values:
   * 
   * *   1: yes
   * *   0: no
   * 
   * @example
   * 1
   */
  revisionStatus?: number;
  /**
   * @remarks
   * The ID of the sensitivity level of data in the column of the table. Valid values:
   * 
   * *   **1**: N/A
   * *   **2**: S1
   * *   **3**: S2
   * *   **4**: S3
   * *   **5**: S4
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the sensitivity level for data in the column of the table. Valid values:
   * 
   * *   **N/A**: indicates that no sensitive data is detected.
   * *   **S1**: indicates the low sensitivity level.
   * *   **S2**: indicates the medium sensitivity level.
   * *   **S3**: indicates the high sensitivity level.
   * *   **S4**: indicates the highest sensitivity level.
   * 
   * @example
   * S2
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The ID of the sensitive data detection rule that data in the column of the table hits.
   * 
   * @example
   * 1
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the sensitive data detection rule that data in the column of the table hits.
   * 
   * @example
   * \\*\\* rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The name of the sensitivity level. Valid values:
   * 
   * *   **N/A**: indicates that no sensitive data is detected.
   * *   **S1**: indicates the low sensitivity level.
   * *   **S2**: indicates the medium sensitivity level.
   * *   **S3**: indicates the high sensitivity level.
   * *   **S4**: indicates the highest sensitivity level.
   * 
   * @example
   * S2
   */
  sensLevelName?: string;
  /**
   * @remarks
   * Indicates whether the column contains sensitive data. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The ID of the table.
   * 
   * @example
   * 123
   */
  tableId?: number;
  /**
   * @remarks
   * The name of the table to which the revised column belongs.
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data in the columns of the table.
   */
  items?: DescribeColumnsResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page.
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
   * 769FB3C1-F4C9-4******
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

