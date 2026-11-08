// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHybridMonitorTaskRequestAttachLabels extends $dara.Model {
  /**
   * @remarks
   * The tag key of the metric.
   * 
   * @example
   * app_service
   */
  name?: string;
  /**
   * @remarks
   * The tag value of the metric.
   * 
   * @example
   * testValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class CreateHybridMonitorTaskRequestSLSProcessConfigExpress extends $dara.Model {
  /**
   * @remarks
   * The alias of the arithmetic operation result of the extended fields in the SLS log statistical result.
   * 
   * @example
   * SuccRate
   */
  alias?: string;
  /**
   * @remarks
   * The arithmetic operation result of the extended fields in the SLS log statistical result.
   * 
   * @example
   * success_count
   */
  express?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      express: 'Express',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      express: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorTaskRequestSLSProcessConfigFilterFilters extends $dara.Model {
  /**
   * @remarks
   * The filtering method for parameter values in SLS logs. Valid values:
   * - contain: includes
   * - notContain: does not include
   * - >: greater than
   * - <: less than
   * - =: equal to
   * - !=: not equal to
   * - >=: greater than or equal to
   * - <=: less than or equal to
   * 
   * @example
   * =
   */
  operator?: string;
  /**
   * @remarks
   * The name of the filtered parameter in SLS logs.
   * 
   * @example
   * code
   */
  SLSKeyName?: string;
  /**
   * @remarks
   * The filter value of the parameter in SLS logs.
   * 
   * @example
   * 200
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      SLSKeyName: 'SLSKeyName',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      SLSKeyName: 'string',
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

export class CreateHybridMonitorTaskRequestSLSProcessConfigFilter extends $dara.Model {
  /**
   * @remarks
   * The list of filter conditions for parameters in SLS logs.
   */
  filters?: CreateHybridMonitorTaskRequestSLSProcessConfigFilterFilters[];
  /**
   * @remarks
   * The relationship between multiple parameter filter conditions. Valid values:
   * 
   * - and (default): Logs are processed only when all filter conditions are met.
   * - or: Logs are processed when any filter condition is met.
   * 
   * @example
   * and
   */
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      relation: 'Relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': CreateHybridMonitorTaskRequestSLSProcessConfigFilterFilters },
      relation: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorTaskRequestSLSProcessConfigGroupBy extends $dara.Model {
  /**
   * @remarks
   * The alias of the SLS log statistical result.
   * 
   * @example
   * ApiResult
   */
  alias?: string;
  /**
   * @remarks
   * The name of the parameter for SLS log statistics.
   * 
   * @example
   * code
   */
  SLSKeyName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      SLSKeyName: 'SLSKeyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      SLSKeyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorTaskRequestSLSProcessConfigStatistics extends $dara.Model {
  /**
   * @remarks
   * The alias of the SLS log statistical result.
   * 
   * @example
   * level_count
   */
  alias?: string;
  /**
   * @remarks
   * The aggregation method used to process log data based on the selected statistical method within the calculation period. Valid values:
   * - count: count
   * - sum: sum
   * - avg: average value
   * - max: maximum value
   * - min: minimum value
   * - value: sampling within the period
   * - countps: average count per second of the specified field within the statistical period
   * - sumps: average sum per second of the specified field within the statistical period
   * - distinct: number of occurrences of the specified field within the statistical period after deduplication
   * - distribution: number of occurrences of the field value within a specified range
   * - percentile: percentile of the field value, such as P50
   * 
   * @example
   * count
   */
  function?: string;
  /**
   * @remarks
   * The statistical value of SLS logs.
   * 
   * - If Function is set to distribution, this parameter specifies the lower limit of the statistical range. For example, to count the number of 2XX HTTP status codes, enter 200.
   * 
   * - If Function is set to percentile, this parameter specifies the percentile of the statistical distribution. For example, 0.5 indicates P50.
   * 
   * @example
   * 200
   */
  parameter1?: string;
  /**
   * @remarks
   * The statistical value of SLS logs.
   * 
   * > This parameter is required only when Function is set to distribution. It specifies the upper limit of the statistical range. For example, to count the number of 2XX HTTP status codes, enter 299.
   * 
   * @example
   * 299
   */
  parameter2?: string;
  /**
   * @remarks
   * The name of the parameter for SLS log statistics.
   * 
   * @example
   * name
   */
  SLSKeyName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      function: 'Function',
      parameter1: 'Parameter1',
      parameter2: 'Parameter2',
      SLSKeyName: 'SLSKeyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      function: 'string',
      parameter1: 'string',
      parameter2: 'string',
      SLSKeyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorTaskRequestSLSProcessConfig extends $dara.Model {
  /**
   * @remarks
   * The arithmetic operation result of the extended fields in the SLS log statistical result.
   */
  express?: CreateHybridMonitorTaskRequestSLSProcessConfigExpress[];
  /**
   * @remarks
   * The filter conditions for parameters in SLS logs.
   */
  filter?: CreateHybridMonitorTaskRequestSLSProcessConfigFilter;
  /**
   * @remarks
   * Aggregates data by dimension, which is equivalent to GROUP BY in SQL.
   */
  groupBy?: CreateHybridMonitorTaskRequestSLSProcessConfigGroupBy[];
  /**
   * @remarks
   * The statistical method for SLS logs.
   */
  statistics?: CreateHybridMonitorTaskRequestSLSProcessConfigStatistics[];
  static names(): { [key: string]: string } {
    return {
      express: 'Express',
      filter: 'Filter',
      groupBy: 'GroupBy',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      express: { 'type': 'array', 'itemType': CreateHybridMonitorTaskRequestSLSProcessConfigExpress },
      filter: CreateHybridMonitorTaskRequestSLSProcessConfigFilter,
      groupBy: { 'type': 'array', 'itemType': CreateHybridMonitorTaskRequestSLSProcessConfigGroupBy },
      statistics: { 'type': 'array', 'itemType': CreateHybridMonitorTaskRequestSLSProcessConfigStatistics },
    };
  }

  validate() {
    if(Array.isArray(this.express)) {
      $dara.Model.validateArray(this.express);
    }
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    if(Array.isArray(this.groupBy)) {
      $dara.Model.validateArray(this.groupBy);
    }
    if(Array.isArray(this.statistics)) {
      $dara.Model.validateArray(this.statistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The tags of the metric.
   * 
   * > This parameter is required only when TaskType is set to aliyun_sls.
   */
  attachLabels?: CreateHybridMonitorTaskRequestAttachLabels[];
  /**
   * @remarks
   * The list of Alibaba Cloud account IDs used by other cloud providers to connect to CloudMonitor.
   */
  cloudAccessId?: string[];
  /**
   * @remarks
   * The collection period of the metric. Valid values:
   * 
   * - 15
   * - 60 (default)
   * 
   * Unit: seconds.
   * 
   * > This parameter is required only when TaskType is set to aliyun_sls.
   * 
   * @example
   * 60
   */
  collectInterval?: string;
  /**
   * @remarks
   * The type of the collection target for monitoring data.
   * - If TaskType is set to aliyun_fc, set this parameter to aliyun_fc.
   * - If TaskType is set to aliyun_sls, enter the name of the Logstore group for SLS logs.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun_fc
   */
  collectTargetType?: string;
  /**
   * @remarks
   * The description of the monitoring task.
   * 
   * @example
   * Alibaba Cloud service data import task
   */
  description?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * For information about how to obtain the ID of an application group, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/115032.html).
   * 
   * > This parameter is required only when TaskType is set to aliyun_sls.
   * 
   * @example
   * 3607****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the metric repository.
   * 
   * For information about how to obtain the name of a metric repository, see [DescribeHybridMonitorNamespaceList](https://help.aliyun.com/document_detail/428880.html).
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun
   */
  namespace?: string;
  regionId?: string;
  /**
   * @remarks
   * The configurations for SLS logs.
   * 
   * > This parameter is required only when TaskType is set to aliyun_sls.
   */
  SLSProcessConfig?: CreateHybridMonitorTaskRequestSLSProcessConfig;
  /**
   * @remarks
   * The ID of the member.
   * 
   * When you invoke this API by using a management account, you can use the cloud native mode to connect the Alibaba Cloud services of any member in the resource folder to Hybrid Cloud Monitoring (CloudMonitor). This allows you to monitor the target Alibaba Cloud services across accounts in an enterprise by using the resource folder.
   * 
   * > The Settings for this parameter are required only when TaskType is set to aliyun_fc.
   * 
   * @example
   * 120886317861****
   */
  targetUserId?: string;
  /**
   * @remarks
   * The IDs of the members. Separate multiple member IDs with commas (,).
   * 
   * > This parameter is required only when you call this operation by using a management account.
   * 
   * @example
   * 120886317861****
   */
  targetUserIdList?: string;
  /**
   * @remarks
   * The name of the monitoring task.
   * 
   * - If TaskType is set to aliyun_fc, enter the name of the data import task for the Alibaba Cloud service.
   * - If TaskType is set to aliyun_sls, enter the name of the metric for SLS logs.
   * 
   * @example
   * aliyun_task
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the monitoring task. Valid values:
   * 
   * - aliyun_fc: data import task for Alibaba Cloud services
   * - aliyun_sls: metric for SLS logs
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun_fc
   */
  taskType?: string;
  /**
   * @remarks
   * The configuration file for the Alibaba Cloud service that is connected to Hybrid Cloud Monitoring.
   * 
   * - namespace: the namespace of the Alibaba Cloud service. For information about how to query the namespace of an Alibaba Cloud service, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html).
   * - metric_list: the metrics of the Alibaba Cloud service. For information about how to query the metrics of an Alibaba Cloud service, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html).
   * 
   * Sample configuration file:
   * 
   * ```
   * products:
   * - namespace: acs_ecs_dashboard
   *   metric_info:
   *   - metric_list:
   *     - cpu_total
   *     - cpu_idle
   *     - diskusage_utilization
   *     - CPUUtilization
   *     - DiskReadBPS
   *     - InternetOut
   *     - IntranetOut
   *     - cpu_system
   * - namespace: acs_rds_dashboard
   *   metric_info:
   *   - metric_list:
   *     - MySQL_QPS
   *     - MySQL_TPS
   * ```
   * > This parameter is required when TaskType is set to aliyun_fc.
   * 
   * @example
   * products:- namespace: acs_ecs_dashboard  metric_info:  - metric_list:    - cpu_total
   */
  YARMConfig?: string;
  static names(): { [key: string]: string } {
    return {
      attachLabels: 'AttachLabels',
      cloudAccessId: 'CloudAccessId',
      collectInterval: 'CollectInterval',
      collectTargetType: 'CollectTargetType',
      description: 'Description',
      groupId: 'GroupId',
      namespace: 'Namespace',
      regionId: 'RegionId',
      SLSProcessConfig: 'SLSProcessConfig',
      targetUserId: 'TargetUserId',
      targetUserIdList: 'TargetUserIdList',
      taskName: 'TaskName',
      taskType: 'TaskType',
      YARMConfig: 'YARMConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachLabels: { 'type': 'array', 'itemType': CreateHybridMonitorTaskRequestAttachLabels },
      cloudAccessId: { 'type': 'array', 'itemType': 'string' },
      collectInterval: 'string',
      collectTargetType: 'string',
      description: 'string',
      groupId: 'string',
      namespace: 'string',
      regionId: 'string',
      SLSProcessConfig: CreateHybridMonitorTaskRequestSLSProcessConfig,
      targetUserId: 'string',
      targetUserIdList: 'string',
      taskName: 'string',
      taskType: 'string',
      YARMConfig: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachLabels)) {
      $dara.Model.validateArray(this.attachLabels);
    }
    if(Array.isArray(this.cloudAccessId)) {
      $dara.Model.validateArray(this.cloudAccessId);
    }
    if(this.SLSProcessConfig && typeof (this.SLSProcessConfig as any).validate === 'function') {
      (this.SLSProcessConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

