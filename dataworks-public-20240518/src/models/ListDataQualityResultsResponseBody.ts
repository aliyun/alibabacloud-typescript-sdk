// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsDetails extends $dara.Model {
  /**
   * @remarks
   * 最终用来与阈值比较的值。
   * 
   * @example
   * 100.0
   */
  checkedValue?: string;
  /**
   * @remarks
   * 使用引用的样本，用来参与CheckedValue计算的基准值。
   * 
   * @example
   * 0.0
   */
  referencedValue?: string;
  /**
   * @remarks
   * 最终的比较结果状态：
   * - Error
   * - Passed
   * - Warned
   * - Critical
   * 
   * @example
   * Passed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkedValue: 'CheckedValue',
      referencedValue: 'ReferencedValue',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkedValue: 'string',
      referencedValue: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsCritical extends $dara.Model {
  /**
   * @remarks
   * 阈值表达式。
   * 
   * 波动率类型规则必须使用表达式方式表示波动阈值。如：
   * 
   * - 波动上升大于0.01： $checkValue > 0.01 
   * - 波动下降大于0.01：$checkValue < -0.01 
   * - 波动率绝对值：abs($checkValue) > 0.01
   * 
   * 固定值类型规则也可以使用表达式方式配置阈值，如果同时配置，表达式优先级高于Operator和Value。
   * 
   * @example
   * $checkValue > 0.01
   */
  expression?: string;
  /**
   * @remarks
   * 比较符：
   * - \\>
   * - \\>=
   * - \\<
   * - \\<=
   * - !=
   * - =
   * 
   * @example
   * >
   */
  operator?: string;
  /**
   * @remarks
   * 阈值数值。
   * 
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsExpected extends $dara.Model {
  /**
   * @remarks
   * 阈值表达式。
   * 
   * 波动率类型规则必须使用表达式方式表示波动阈值。如：
   * 
   * - 波动上升大于0.01： $checkValue > 0.01 
   * - 波动下降大于0.01：$checkValue < -0.01 
   * - 波动率绝对值：abs($checkValue) > 0.01
   * 
   * 固定值类型规则也可以使用表达式方式配置阈值，如果同时配置，表达式优先级高于Operator和Value。
   * 
   * @example
   * $checkValue > 0.01
   */
  expression?: string;
  /**
   * @remarks
   * 比较符：
   * - \\>
   * - \\>=
   * - \\<
   * - \\<=
   * - !=
   * - =
   * 
   * @example
   * >
   */
  operator?: string;
  /**
   * @remarks
   * 阈值数值。
   * 
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsWarned extends $dara.Model {
  /**
   * @remarks
   * 阈值表达式。
   * 
   * 波动率类型规则必须使用表达式方式表示波动阈值。如：
   * 
   * - 波动上升大于0.01： $checkValue > 0.01 
   * - 波动下降大于0.01：$checkValue < -0.01 
   * - 波动率绝对值：abs($checkValue) > 0.01
   * 
   * 固定值类型规则也可以使用表达式方式配置阈值，如果同时配置，表达式优先级高于Operator和Value。
   * 
   * @example
   * $checkValue > 0.01
   */
  expression?: string;
  /**
   * @remarks
   * 比较符：
   * - \\>
   * - \\>=
   * - \\<
   * - \\<=
   * - !=
   * - =
   * 
   * @example
   * >
   */
  operator?: string;
  /**
   * @remarks
   * 阈值数值。
   * 
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholds extends $dara.Model {
  /**
   * @remarks
   * 严重警告的阈值设置。
   */
  critical?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsCritical;
  /**
   * @remarks
   * 期望的阈值设置。
   */
  expected?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsExpected;
  /**
   * @remarks
   * 普通警告的阈值设置。
   */
  warned?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsCritical,
      expected: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsExpected,
      warned: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsWarned,
    };
  }

  validate() {
    if(this.critical && typeof (this.critical as any).validate === 'function') {
      (this.critical as any).validate();
    }
    if(this.expected && typeof (this.expected as any).validate === 'function') {
      (this.expected as any).validate();
    }
    if(this.warned && typeof (this.warned as any).validate === 'function') {
      (this.warned as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfig extends $dara.Model {
  /**
   * @remarks
   * 有些类型的阈值需要查询出一些参考样本，然后对参考样本的值进行汇总得出进行比较的阈值，这里使用一个表达式来表示参考样本的查询方式。
   * 
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  /**
   * @remarks
   * 阈值设置。
   */
  thresholds?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholds;
  /**
   * @remarks
   * 阈值计算方式：
   * - Fixed
   * - Fluctation
   * - FluctationDiscreate
   * - Auto
   * - Average
   * - Variance
   * 
   * @example
   * Fixed
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      referencedSamplesFilter: 'ReferencedSamplesFilter',
      thresholds: 'Thresholds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referencedSamplesFilter: 'string',
      thresholds: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholds,
      type: 'string',
    };
  }

  validate() {
    if(this.thresholds && typeof (this.thresholds as any).validate === 'function') {
      (this.thresholds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleErrorHandlers extends $dara.Model {
  /**
   * @remarks
   * 如果是自定义SQL规则，需要用户指定SQL来过滤问题数据。
   * 
   * @example
   * SELECT * FROM tb_api_log WHERE id IS NULL
   */
  errorDataFilter?: string;
  /**
   * @remarks
   * 处理器类型。
   * - SaveErrorData
   * 
   * @example
   * SaveErrorData
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      errorDataFilter: 'ErrorDataFilter',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDataFilter: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleSamplingConfig extends $dara.Model {
  /**
   * @remarks
   * 采样的指标名称：
   * - Count：表行数
   * - Min：字段最小值
   * - Max：字段最大值
   * - Avg：字段均值
   * - DistinctCount：字段唯一值个数
   * - DistinctPercent：字段唯一值个数与数据行数占比
   * - DuplicatedCount：字段重复值个数
   * - DuplicatedPercent：字段重复值个数与数据行数占比
   * - TableSize：表大小
   * - NullValueCount：字段为空的行数
   * - NullValuePercent：字段为空的比例
   * - GroupCount：按字段值聚合后每个值与对应的数据行数
   * - CountNotIn：枚举值不匹配行数
   * - CountDistinctNotIn：枚举值不匹配唯一值个数
   * - UserDefinedSql：通过自定义SQL做样本采集
   * 
   * @example
   * Count
   */
  metric?: string;
  /**
   * @remarks
   * 样本采集时，所需的参数。
   * 
   * @example
   * { "columns": [ "id", "name" ] }
   */
  metricParameters?: string;
  /**
   * @remarks
   * 采样时，对不关注的数据进行二次过滤的条件，最多16777215个字符。
   * 
   * @example
   * id IS NULL
   */
  samplingFilter?: string;
  /**
   * @remarks
   * 具体执行采样语句前，插入执行的一些运行时参数设置语句，最长1000个字符。目前只支持MaxCompute。
   * 
   * @example
   * SET odps.sql.udf.timeout=600s;
   */
  settingConfig?: string;
  static names(): { [key: string]: string } {
    return {
      metric: 'Metric',
      metricParameters: 'MetricParameters',
      samplingFilter: 'SamplingFilter',
      settingConfig: 'SettingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metric: 'string',
      metricParameters: 'string',
      samplingFilter: 'string',
      settingConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleTarget extends $dara.Model {
  /**
   * @remarks
   * 表类型的数据集，表所属的数据库类型：
   * - maxcompute
   * - emr
   * - cdh
   * - hologres
   * - analyticdb_for_postgresql
   * - analyticdb_for_mysql
   * - starrocks
   * 
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @remarks
   * 表在数据地图中的唯一ID。
   * 
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
   * @remarks
   * 监控对象类型：
   * - Table
   * 
   * @example
   * Table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      databaseType: 'DatabaseType',
      tableGuid: 'TableGuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseType: 'string',
      tableGuid: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRule extends $dara.Model {
  /**
   * @remarks
   * 样本校验设置。
   */
  checkingConfig?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfig;
  /**
   * @remarks
   * 规则描述信息，最长500个字符。
   * 
   * @example
   * this is a odps _sql task
   */
  description?: string;
  /**
   * @remarks
   * 规则是否启用。
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * 质量规则校验问题处理器。
   */
  errorHandlers?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleErrorHandlers[];
  /**
   * @remarks
   * 规则ID。
   * 
   * @example
   * 100001
   */
  id?: number;
  /**
   * @remarks
   * 规则名称，数字、英文字母、汉字、半角全角标点符号组合，最长255个字符。
   * 
   * @example
   * The table cannot be empty.
   */
  name?: string;
  /**
   * @remarks
   * DataWorks项目空间ID。
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * 样本采集所需的设置。
   */
  samplingConfig?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleSamplingConfig;
  /**
   * @remarks
   * 规则对于业务的等级（对应页面上的强弱规则）：
   * - High
   * - Normal
   * 
   * @example
   * Normal
   */
  severity?: string;
  /**
   * @remarks
   * 规则所监控的对象。
   */
  target?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleTarget;
  /**
   * @remarks
   * 创建规则时所引用的规则模板Code。
   * 
   * @example
   * SYSTEM:user_defined_sql
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      checkingConfig: 'CheckingConfig',
      description: 'Description',
      enabled: 'Enabled',
      errorHandlers: 'ErrorHandlers',
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
      samplingConfig: 'SamplingConfig',
      severity: 'Severity',
      target: 'Target',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleErrorHandlers },
      id: 'number',
      name: 'string',
      projectId: 'number',
      samplingConfig: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleSamplingConfig,
      severity: 'string',
      target: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleTarget,
      templateCode: 'string',
    };
  }

  validate() {
    if(this.checkingConfig && typeof (this.checkingConfig as any).validate === 'function') {
      (this.checkingConfig as any).validate();
    }
    if(Array.isArray(this.errorHandlers)) {
      $dara.Model.validateArray(this.errorHandlers);
    }
    if(this.samplingConfig && typeof (this.samplingConfig as any).validate === 'function') {
      (this.samplingConfig as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResults extends $dara.Model {
  /**
   * @remarks
   * 校验结果生成时间。
   * 
   * @example
   * 1708284916414
   */
  createTime?: number;
  /**
   * @remarks
   * 本次校验的详情。
   */
  details?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsDetails[];
  /**
   * @remarks
   * 校验结果ID。
   * 
   * @example
   * 16033
   */
  id?: number;
  /**
   * @remarks
   * 校验开始时，规则配置快照。
   */
  rule?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRule;
  /**
   * @remarks
   * 本次校验所使用的样本值。
   * 
   * @example
   * [
   *   {
   *     "gender": "male",
   *     "_count": 100
   *   }, {
   *     "gender": "female",
   *     "_count": 100
   *   }
   * ]
   */
  sample?: string;
  /**
   * @remarks
   * 校验结果状态：
   * - Running
   * - Error
   * - Passed
   * - Warned
   * - Critical
   * 
   * @example
   * Passed
   */
  status?: string;
  /**
   * @remarks
   * 校验任务实例ID。
   * 
   * @example
   * 200001
   */
  taskInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      details: 'Details',
      id: 'Id',
      rule: 'Rule',
      sample: 'Sample',
      status: 'Status',
      taskInstanceId: 'TaskInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      details: { 'type': 'array', 'itemType': ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsDetails },
      id: 'number',
      rule: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRule,
      sample: 'string',
      status: 'string',
      taskInstanceId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    if(this.rule && typeof (this.rule as any).validate === 'function') {
      (this.rule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * 质量校验结果列表。
   */
  dataQualityResults?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResults[];
  /**
   * @remarks
   * 页码。
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 页大小。
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * 总条数。
   * 
   * @example
   * 219
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataQualityResults: 'DataQualityResults',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityResults: { 'type': 'array', 'itemType': ListDataQualityResultsResponseBodyPagingInfoDataQualityResults },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataQualityResults)) {
      $dara.Model.validateArray(this.dataQualityResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * 数据质量校验结果分页查询结果。
   */
  pagingInfo?: ListDataQualityResultsResponseBodyPagingInfo;
  /**
   * @remarks
   * API请求ID。
   * 
   * @example
   * 691CA452-D37A-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDataQualityResultsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

