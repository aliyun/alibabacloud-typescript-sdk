// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataObjectsResponseBodyItemsModelTags extends $dara.Model {
  /**
   * @remarks
   * Data tag ID. Values:
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
   * Data tag name. Values:
   * - **Personal sensitive information.**
   * - **Personal information.**
   * - **General information.**
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
   * Risk level ID for sensitive data identification rules. Values:
   * - **1**: N/A: No sensitive data identified.
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
   * Risk level name for the data asset table. Values:
   * - **N/A**: No sensitive data identified.
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
   * @example
   * “个人信息”-“身份证”
   */
  ruleCategoryNameList?: string;
  /**
   * @remarks
   * Number of matched identification models.
   * 
   * @example
   * 590
   */
  ruleCount?: number;
  /**
   * @remarks
   * Identification model ID.
   * 
   * @example
   * 1080
   */
  ruleId?: number;
  /**
   * @remarks
   * Identification model name.
   * 
   * @example
   * name
   */
  ruleName?: string;
  /**
   * @example
   * ["张三"，"李四"]
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
   * List of industry categories for the sensitive data.
   */
  categories?: string[];
  /**
   * @example
   * 备注
   */
  comment?: string;
  /**
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @example
   * DataBaseName
   */
  dbName?: string;
  /**
   * @example
   * 1
   */
  fileCategoryCode?: number;
  /**
   * @remarks
   * The unique identifier ID of the data object.
   * 
   * @example
   * 20000
   */
  id?: string;
  /**
   * @remarks
   * The instance description of the data object.
   * 
   * @example
   * instance description
   */
  instanceDescription?: string;
  /**
   * @remarks
   * Data asset instance ID.
   * 
   * @example
   * rm-12*****
   */
  instanceId?: string;
  /**
   * @example
   * -1
   */
  isRevision?: number;
  /**
   * @remarks
   * Latest file modification time, in milliseconds.
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
   * @example
   * logStore
   */
  logStore?: string;
  /**
   * @example
   * -1
   */
  maskStatus?: number;
  /**
   * @remarks
   * Member account ID.
   * 
   * @example
   * **********8103
   */
  memberAccount?: number;
  /**
   * @remarks
   * List of data tags.
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
   * File category name.
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
   * The product name that the data object belongs to. Values:
   * - **MaxCompute**
   * - **OSS**
   * - **ADB-MYSQL**
   * - **TableStore**
   * - **RDS**
   * - **SELF_DB**
   * - **PolarDB-X**
   * - **PolarDB**
   * - **ADB-PG**
   * - **OceanBase**
   * - **MongoDB**
   * - **Redis**
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID corresponding to the product name that the data object belongs to. Values:
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
   * @example
   * project
   */
  project?: string;
  /**
   * @remarks
   * The region ID to which the OSS storage object belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Region name.
   * 
   * @example
   * cn-hangzhou
   */
  regionName?: string;
  /**
   * @example
   * 1
   */
  riskLevelId?: number;
  /**
   * @example
   * 10
   */
  ruleCount?: number;
  /**
   * @remarks
   * List of matched identification models.
   */
  ruleList?: DescribeDataObjectsResponseBodyItemsRuleList[];
  /**
   * @remarks
   * Number of sensitive data items.
   * 
   * @example
   * 1
   */
  sensitiveCount?: number;
  /**
   * @example
   * 1000
   */
  size?: number;
  /**
   * @example
   * 1,2,3
   */
  sx?: string;
  /**
   * @example
   * tableName
   */
  tableName?: string;
  /**
   * @example
   * 1
   */
  taskId?: number;
  /**
   * @example
   * 任务名
   */
  taskName?: string;
  /**
   * @example
   * 1000
   */
  taskNumber?: number;
  /**
   * @remarks
   * Industry template ID
   * 
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @example
   * 模板名
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
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
   * When performing a paginated query, set the current page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * List of data objects.
   */
  items?: DescribeDataObjectsResponseBodyItems[];
  /**
   * @remarks
   * When performing a paginated query, this sets the maximum number of data asset instances to display per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of this call request is a unique identifier generated by Alibaba Cloud for the request, which can be used to troubleshoot and locate issues.
   * 
   * @example
   * E6F6460E-4330-549A-BD89-C183FB17571E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of query results.
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

