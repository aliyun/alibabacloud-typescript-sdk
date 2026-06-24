// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataObjectsResponseBodyItemsModelTags extends $dara.Model {
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
   * - **Personal sensitive information**
   * 
   * - **Personal information**
   * 
   * - **General information**
   * 
   * @example
   * Personal sensitive information
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

export class DescribeDataObjectsResponseBodyItemsRuleList extends $dara.Model {
  /**
   * @remarks
   * The ID of the risk level. Valid values:
   * 
   * - **1**: N/A - No sensitive data is detected
   * 
   * - **2**: S1 - Level-1 sensitive data
   * 
   * - **3**: S2 - Level-2 sensitive data
   * 
   * - **4**: S3 - Level-3 sensitive data
   * 
   * - **5**: S4 - Level-4 sensitive data
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the risk level. Valid values:
   * 
   * - **N/A**: No sensitive data is detected
   * 
   * - **S1**: Level-1 sensitive data
   * 
   * - **S2**: Level-2 sensitive data
   * 
   * - **S3**: Level-3 sensitive data
   * 
   * - **S4**: Level-4 sensitive data
   * 
   * @example
   * S1
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The hierarchical category of the rule, from the top-level to the leaf-level category in the template.
   * 
   * @example
   * Personal sensitive information-ID card
   */
  ruleCategoryNameList?: string;
  /**
   * @remarks
   * The number of matched detection models.
   * 
   * @example
   * 590
   */
  ruleCount?: number;
  /**
   * @remarks
   * The ID of the detection model.
   * 
   * @example
   * 1080
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the detection model.
   * 
   * @example
   * name
   */
  ruleName?: string;
  /**
   * @remarks
   * The sample data.
   * 
   * @example
   * ["Lucy"，"Tom"]
   */
  sampleList?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleCategoryNameList: 'RuleCategoryNameList',
      ruleCount: 'RuleCount',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sampleList: 'SampleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleCategoryNameList: 'string',
      ruleCount: 'number',
      ruleId: 'number',
      ruleName: 'string',
      sampleList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataObjectsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * An array of industry categories to which the sensitive data belongs.
   */
  categories?: string[];
  clusterType?: string;
  /**
   * @remarks
   * The comment on the column.
   * 
   * @example
   * comment
   */
  comment?: string;
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
   * The name of the database.
   * 
   * @example
   * DataBaseName
   */
  dbName?: string;
  /**
   * @remarks
   * The code for the file category.
   * 
   * @example
   * 1
   */
  fileCategoryCode?: number;
  /**
   * @remarks
   * The unique ID of the data object.
   * 
   * @example
   * 20000
   */
  id?: string;
  /**
   * @remarks
   * The description of the data asset instance.
   * 
   * @example
   * instance description
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The ID of the data asset instance.
   * 
   * @example
   * rm-12*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The revision status.
   * 
   * @example
   * -1
   */
  isRevision?: number;
  /**
   * @remarks
   * The last modification time of the file, in milliseconds.
   * 
   * @example
   * 1687676649830
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The timestamp of the last scan, in milliseconds.
   * 
   * @example
   * 1687676649830
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The name of the Logstore in SLS.
   * 
   * @example
   * logStore
   */
  logStore?: string;
  /**
   * @remarks
   * The column encryption status.
   * 
   * @example
   * -1
   */
  maskStatus?: number;
  /**
   * @remarks
   * The ID of the member account.
   * 
   * @example
   * **********8103
   */
  memberAccount?: number;
  /**
   * @remarks
   * A list of data tags.
   */
  modelTags?: DescribeDataObjectsResponseBodyItemsModelTags[];
  /**
   * @remarks
   * The name of the data object.
   * 
   * @example
   * t_sddp_selfmysql_pers0
   */
  name?: string;
  /**
   * @remarks
   * The name of the file category.
   * 
   * @example
   * text file
   */
  objectFileCategory?: string;
  /**
   * @remarks
   * The type of the data object.
   * 
   * @example
   * text type
   */
  objectType?: string;
  /**
   * @remarks
   * The path of the data object.
   * 
   * @example
   * rm-12**.db_***
   */
  path?: string;
  /**
   * @remarks
   * The name of the product to which the data object belongs. Valid values:
   * 
   * - **MaxCompute**
   * 
   * - **OSS**
   * 
   * - **ADB-MYSQL**
   * 
   * - **Table Store**
   * 
   * - **RDS**
   * 
   * - **SELF_DB**
   * 
   * - **PolarDB-X**
   * 
   * - **PolarDB**
   * 
   * - **ADB-PG**
   * 
   * - **OceanBase**
   * 
   * - **MongoDB**
   * 
   * - **Redis**
   * 
   * @example
   * RDS
   */
  productCode?: string;
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
   * - **4**: Table Store
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
   * The name of the Simple Log Service (SLS) project.
   * 
   * @example
   * project
   */
  project?: string;
  /**
   * @remarks
   * The ID of the region where the data object is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionName?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * 1
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The number of matched rules.
   * 
   * @example
   * 10
   */
  ruleCount?: number;
  /**
   * @remarks
   * A list of matched detection models.
   */
  ruleList?: DescribeDataObjectsResponseBodyItemsRuleList[];
  /**
   * @remarks
   * The number of sensitive data fields.
   * 
   * @example
   * 1
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The size of the file in bytes.
   * 
   * @example
   * 1000
   */
  size?: number;
  /**
   * @remarks
   * A comma-separated string that specifies the count of matched rules for each risk level. The string follows the format `S1,S2...S10`, where the value at each position represents the count for the corresponding risk level.
   * 
   * @example
   * 1,2,3,0,0,0,0,5,0,0
   */
  sx?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * tableName
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 1
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * test-task
   */
  taskName?: string;
  /**
   * @remarks
   * The task number.
   * 
   * @example
   * 1000
   */
  taskNumber?: number;
  /**
   * @remarks
   * The ID of the industry template.
   * 
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * test
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      clusterType: 'ClusterType',
      comment: 'Comment',
      dataType: 'DataType',
      dbName: 'DbName',
      fileCategoryCode: 'FileCategoryCode',
      id: 'Id',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      isRevision: 'IsRevision',
      lastModifiedTime: 'LastModifiedTime',
      lastScanTime: 'LastScanTime',
      logStore: 'LogStore',
      maskStatus: 'MaskStatus',
      memberAccount: 'MemberAccount',
      modelTags: 'ModelTags',
      name: 'Name',
      objectFileCategory: 'ObjectFileCategory',
      objectType: 'ObjectType',
      path: 'Path',
      productCode: 'ProductCode',
      productId: 'ProductId',
      project: 'Project',
      regionId: 'RegionId',
      regionName: 'RegionName',
      riskLevelId: 'RiskLevelId',
      ruleCount: 'RuleCount',
      ruleList: 'RuleList',
      sensitiveCount: 'SensitiveCount',
      size: 'Size',
      sx: 'Sx',
      tableName: 'TableName',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskNumber: 'TaskNumber',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      clusterType: 'string',
      comment: 'string',
      dataType: 'string',
      dbName: 'string',
      fileCategoryCode: 'number',
      id: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      isRevision: 'number',
      lastModifiedTime: 'number',
      lastScanTime: 'number',
      logStore: 'string',
      maskStatus: 'number',
      memberAccount: 'number',
      modelTags: { 'type': 'array', 'itemType': DescribeDataObjectsResponseBodyItemsModelTags },
      name: 'string',
      objectFileCategory: 'string',
      objectType: 'string',
      path: 'string',
      productCode: 'string',
      productId: 'number',
      project: 'string',
      regionId: 'string',
      regionName: 'string',
      riskLevelId: 'number',
      ruleCount: 'number',
      ruleList: { 'type': 'array', 'itemType': DescribeDataObjectsResponseBodyItemsRuleList },
      sensitiveCount: 'number',
      size: 'number',
      sx: 'string',
      tableName: 'string',
      taskId: 'number',
      taskName: 'string',
      taskNumber: 'number',
      templateId: 'number',
      templateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(Array.isArray(this.modelTags)) {
      $dara.Model.validateArray(this.modelTags);
    }
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataObjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * A list of data objects.
   */
  items?: DescribeDataObjectsResponseBodyItems[];
  /**
   * @remarks
   * The number of data asset instances to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique ID of the request. Alibaba Cloud generates this ID to help you troubleshoot issues.
   * 
   * @example
   * E6F6460E-4330-549A-BD89-C183FB17571E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that match the query.
   * 
   * @example
   * 21
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
      items: { 'type': 'array', 'itemType': DescribeDataObjectsResponseBodyItems },
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

