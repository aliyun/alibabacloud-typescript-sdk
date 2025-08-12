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
   * The alias of the extended field that specifies the result of basic operations performed on aggregation results.
   * 
   * @example
   * SuccRate
   */
  alias?: string;
  /**
   * @remarks
   * The extended field that specifies the result of basic operations performed on aggregation results.
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
   * The method that is used to filter logs imported from Simple Log Service. Valid values:
   * 
   * *   `contain`: contains
   * *   `notContain`: does not contain
   * *   `>`: greater than
   * *   `<`: less than
   * *   `=`: equal to
   * *   `! =`: not equal to
   * *   `>=`: greater than or equal to
   * *   `<=`: less than or equal to
   * 
   * @example
   * =
   */
  operator?: string;
  /**
   * @remarks
   * The name of the key that is used to filter logs imported from Simple Log Service.
   * 
   * @example
   * code
   */
  SLSKeyName?: string;
  /**
   * @remarks
   * The value of the key that is used to filter logs imported from Simple Log Service.
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
   * The conditions that are used to filter logs imported from Simple Log Service.
   */
  filters?: CreateHybridMonitorTaskRequestSLSProcessConfigFilterFilters[];
  /**
   * @remarks
   * The relationship between multiple filter conditions. Valid values:
   * 
   * *   and (default): Logs are processed only if all filter conditions are met.
   * *   or: Logs are processed if one of the filter conditions is met.
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
   * The alias of the aggregation result.
   * 
   * @example
   * ApiResult
   */
  alias?: string;
  /**
   * @remarks
   * The name of the key that is used to aggregate logs imported from Simple Log Service.
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
   * The alias of the aggregation result.
   * 
   * @example
   * level_count
   */
  alias?: string;
  /**
   * @remarks
   * The function that is used to aggregate the log data of a statistical period. Valid values:
   * 
   * *   count: counts the number.
   * *   sum: calculates the total value.
   * *   avg: calculates the average value.
   * *   max: calculates the maximum value.
   * *   min: calculates the minimum value.
   * *   value: collects samples within the statistical period.
   * *   countps: calculates the number of values of the specified field divided by the total number of seconds within a statistical period.
   * *   sumps: calculates the sum of the values of the specified field divided by the total number of seconds within a statistical period.
   * *   distinct: calculates the number of unique values of the specified field within a statistical period.
   * *   distribution: calculates the number of logs that meet a specified condition within the statistical period.
   * *   percentile: sorts the values of the specified field in ascending order, and then returns the value that is at the specified percentile within the statistical period. Example: P50.
   * 
   * @example
   * count
   */
  function?: string;
  /**
   * @remarks
   * The value of the function that is used to aggregate logs imported from Simple Log Service.
   * 
   * *   If the `Function` parameter is set to `distribution`, this parameter specifies the lower limit of the statistical interval. For example, if you want to calculate the number of HTTP requests whose status code is 2XX, set this parameter to 200.
   * *   If the `Function` parameter is set to `percentile`, this parameter specifies the percentile at which the expected value is. For example, 0.5 specifies P50.
   * 
   * @example
   * 200
   */
  parameter1?: string;
  /**
   * @remarks
   * The value of the function that is used to aggregate logs imported from Simple Log Service.
   * 
   * >  This parameter is required only if the `Function` parameter is set to `distribution`. This parameter specifies the upper limit of the statistical interval. For example, if you want to calculate the number of HTTP requests whose status code is 2XX, set this parameter to 299.
   * 
   * @example
   * 299
   */
  parameter2?: string;
  /**
   * @remarks
   * The name of the key that is used to aggregate logs imported from Simple Log Service.
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
   * The extended fields that specify the results of basic operations performed on aggregation results.
   */
  express?: CreateHybridMonitorTaskRequestSLSProcessConfigExpress[];
  /**
   * @remarks
   * The conditions that are used to filter logs imported from Simple Log Service.
   */
  filter?: CreateHybridMonitorTaskRequestSLSProcessConfigFilter;
  /**
   * @remarks
   * The dimension based on which data is aggregated. This parameter is equivalent to the GROUP BY clause in SQL.
   */
  groupBy?: CreateHybridMonitorTaskRequestSLSProcessConfigGroupBy[];
  /**
   * @remarks
   * The method that is used to aggregate logs imported from Simple Log Service.
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
   * >  This parameter is required only if the `TaskType` parameter is set to `aliyun_sls`.
   */
  attachLabels?: CreateHybridMonitorTaskRequestAttachLabels[];
  cloudAccessId?: string[];
  /**
   * @remarks
   * The collection period of the metric. Valid values:
   * 
   * *   15
   * *   60 (default)
   * 
   * Unit: seconds.
   * 
   * >  This parameter is required only if the `TaskType` parameter is set to `aliyun_sls`.
   * 
   * @example
   * 60
   */
  collectInterval?: string;
  /**
   * @remarks
   * The type of the collection target.
   * 
   * *   If the `TaskType` parameter is set to `aliyun_fc`, enter `aliyun_fc`.
   * *   If the `TaskType` parameter is set to `aliyun_sls`, enter the name of the Logstore group.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun_fc
   */
  collectTargetType?: string;
  /**
   * @remarks
   * The description of the metric import task.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * For information about how to obtain the ID of an application group, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/115032.html).
   * 
   * >  This parameter is required only if the `TaskType` parameter is set to `aliyun_sls`.
   * 
   * @example
   * 3607****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * For information about how to obtain the name of a namespace, see [DescribeHybridMonitorNamespaceList](https://help.aliyun.com/document_detail/428880.html).
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
   * The configurations of the logs that are imported from Simple Log Service.
   * 
   * >  This parameter is required only if the `TaskType` parameter is set to `aliyun_sls`.
   */
  SLSProcessConfig?: CreateHybridMonitorTaskRequestSLSProcessConfig;
  /**
   * @remarks
   * The ID of the member account.
   * 
   * If you call this operation by using the management account of a resource directory, you can connect the Alibaba Cloud services that are activated for all members in the resource directory to Hybrid Cloud Monitoring. You can use the resource directory to monitor Alibaba Cloud services across enterprise accounts.
   * 
   * >  This parameter is required only if the `TaskType` parameter is set to `aliyun_fc`.
   * 
   * @example
   * 120886317861****
   */
  targetUserId?: string;
  /**
   * @remarks
   * The IDs of the member accounts. Separate multiple member account IDs with commas (,).
   * 
   * >  This parameter is required only if you call this operation by using the management account.
   * 
   * @example
   * 120886317861****
   */
  targetUserIdList?: string;
  /**
   * @remarks
   * The name of the metric import task.
   * 
   * *   If the `TaskType` parameter is set to `aliyun_fc`, enter the name of the metric import task.
   * *   If the `TaskType` parameter is set to `aliyun_sls`, enter the name of the metric for logs imported from Simple Log Service.
   * 
   * @example
   * aliyun_task
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the metric import task. Valid values:
   * 
   * *   aliyun_fc: metric import tasks for Alibaba Cloud services.
   * *   aliyun_sls: metrics for logs imported from Simple Log Service.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun_fc
   */
  taskType?: string;
  /**
   * @remarks
   * The configuration file of the Alibaba Cloud service that you want to monitor by using Hybrid Cloud Monitoring.
   * 
   * *   namespace: the namespace of the Alibaba Cloud service. For information about how to query the namespace of an Alibaba Cloud service, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html).
   * *   metric_list: the metrics of the Alibaba Cloud service. For information about how to query the metrics of an Alibaba Cloud service, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html).
   * 
   * The following code shows a sample configuration file:
   * 
   *     products:
   *     - namespace: acs_ecs_dashboard
   *       metric_info:
   *       - metric_list:
   *         - cpu_total
   *         - cpu_idle
   *         - diskusage_utilization
   *         - CPUUtilization
   *         - DiskReadBPS
   *         - InternetOut
   *         - IntranetOut
   *         - cpu_system
   *     - namespace: acs_rds_dashboard
   *       metric_info:
   *       - metric_list:
   *         - MySQL_QPS
   *         - MySQL_TPS
   * 
   * >  This parameter is required only if the `TaskType` parameter is set to `aliyun_fc`.
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

