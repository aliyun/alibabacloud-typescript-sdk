// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridMonitorTaskListResponseBodyTaskListAttachLabels extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  name?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
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

export class DescribeHybridMonitorTaskListResponseBodyTaskListMatchExpress extends $dara.Model {
  /**
   * @remarks
   * The method that is used to match the instance name. Valid values:
   * 
   * *   startWith: starts with a prefix
   * *   endWith: ends with a suffix
   * *   all: matches all
   * *   equals: equals
   * *   contains: contains
   * *   notContains: does not contain
   * 
   * @example
   * all
   */
  function?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The keyword that corresponds to the instance name.
   * 
   * @example
   * ECS_instance1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
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

export class DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigExpress extends $dara.Model {
  /**
   * @remarks
   * The alias of the extended field that indicates the result of basic operations that are performed on aggregation results.
   * 
   * @example
   * SuccRate
   */
  alias?: string;
  /**
   * @remarks
   * The extended field that indicates the result of basic operations that are performed on aggregation results.
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

export class DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigFilterFilters extends $dara.Model {
  /**
   * @remarks
   * The method that is used to filter logs imported from Log Service. Valid values:
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
   * The name of the key that is used to filter logs imported from Log Service.
   * 
   * @example
   * host
   */
  SLSKeyName?: string;
  /**
   * @remarks
   * The value of the key that is used to filter logs imported from Log Service.
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

export class DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigFilter extends $dara.Model {
  /**
   * @remarks
   * The conditions that are used to filter logs imported from Log Service.
   */
  filters?: DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigFilterFilters[];
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
      filters: { 'type': 'array', 'itemType': DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigFilterFilters },
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

export class DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigGroupBy extends $dara.Model {
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
   * The name of the key that is used to aggregate logs imported from Log Service.
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

export class DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigStatistics extends $dara.Model {
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
   * The function that is used to aggregate log data within a statistical period. Valid values:
   * 
   * *   count: counts the number.
   * *   sum: calculates the total value.
   * *   avg: calculates the average value.
   * *   max: calculates the maximum value.
   * *   min: calculates the minimum value.
   * *   value: collects samples within the statistical period.
   * *   countps: calculates the average number of the specified field per second by using the following formula: Counted number of the specified field/Total number of seconds within the statistical period.
   * *   sumps: calculates the average number of the specified field per second by using the following formula: Total value of the specified field/Total number of seconds within the statistical period.
   * *   distinct: counts the number of logs where the specified field appears within the statistical period.
   * *   distribution: counts the number of logs that meet a specified condition within the statistical period.
   * *   percentile: sorts the values of the specified field in ascending order, and then returns the value that is at the specified percentile within the statistical period. Example: P50.
   * 
   * @example
   * count
   */
  function?: string;
  /**
   * @remarks
   * The value of the function that is used to aggregate logs imported from Log Service.
   * 
   * *   If the `Function` parameter is set to `distribution`, this parameter indicates the lower limit of the statistical interval. For example, 200 indicates that the number of HTTP requests whose status code is 2XX is calculated.
   * *   If the `Function` parameter is set to `percentile`, this parameter specifies the percentile at which the expected value is. For example, 0.5 specifies P50.
   * 
   * @example
   * 200
   */
  parameter1?: string;
  /**
   * @remarks
   * The value of the function that is used to aggregate logs imported from Log Service.
   * 
   * > This parameter is returned only if the `Function` parameter is set to `distribution`. This parameter indicates the upper limit of the statistical interval. For example, 299 indicates that the number of HTTP requests whose status code is 2XX is calculated.
   * 
   * @example
   * 299
   */
  parameter2?: string;
  /**
   * @remarks
   * The name of the key that is used to aggregate logs imported from Log Service.
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

export class DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfig extends $dara.Model {
  /**
   * @remarks
   * The extended fields that indicate the results of basic operations that are performed on aggregation results.
   */
  express?: DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigExpress[];
  /**
   * @remarks
   * The conditions that are used to filter logs imported from Log Service.
   */
  filter?: DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigFilter;
  /**
   * @remarks
   * The dimensions based on which data is aggregated. This parameter is equivalent to the GROUP BY clause in SQL.
   */
  groupBy?: DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigGroupBy[];
  /**
   * @remarks
   * The methods that are used to aggregate logs imported from Log Service.
   */
  statistics?: DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigStatistics[];
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
      express: { 'type': 'array', 'itemType': DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigExpress },
      filter: DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigFilter,
      groupBy: { 'type': 'array', 'itemType': DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigGroupBy },
      statistics: { 'type': 'array', 'itemType': DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigStatistics },
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

export class DescribeHybridMonitorTaskListResponseBodyTaskList extends $dara.Model {
  /**
   * @remarks
   * The tags of the metric import task.
   */
  attachLabels?: DescribeHybridMonitorTaskListResponseBodyTaskListAttachLabels[];
  /**
   * @remarks
   * The interval at which the CloudMonitor agent collects host monitoring data. Valid values:
   * 
   * *   15
   * *   30
   * *   60
   * 
   * Unit: seconds.
   * 
   * @example
   * 60
   */
  collectInterval?: number;
  /**
   * @remarks
   * The URL of the destination from which the CloudMonitor agent collects host monitoring data.
   * 
   * @example
   * http://localhost
   */
  collectTargetEndpoint?: string;
  /**
   * @remarks
   * The relative path from which the CloudMonitor agent collects monitoring data.
   * 
   * @example
   * /metrics
   */
  collectTargetPath?: string;
  /**
   * @remarks
   * The type of the monitoring data. Valid values: Spring, Tomcat, Nginx, Tengine, JVM, Redis, and MySQL.
   * 
   * @example
   * nginx
   */
  collectTargetType?: string;
  /**
   * @remarks
   * The timeout period during which the CloudMonitor agent collects host monitoring data. Valid values:
   * 
   * *   0
   * *   15
   * *   30
   * *   60
   * 
   * Unit: seconds.
   * 
   * @example
   * 15
   */
  collectTimout?: number;
  /**
   * @remarks
   * The timestamp when the metric import task was created.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1639382496000
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the metric import task.
   * 
   * @example
   * aliyun
   */
  description?: string;
  /**
   * @remarks
   * The additional information of the instance.
   * 
   * @example
   * test
   */
  extraInfo?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 3607****
   */
  groupId?: string;
  /**
   * @remarks
   * The instances where monitoring data is collected in batches.
   */
  instances?: string[];
  /**
   * @example
   * C:\\UserData\\log\\*.Log
   */
  logFilePath?: string;
  /**
   * @remarks
   * The method that is used to aggregate on-premises log data.
   * 
   * @example
   * [{"metric": "metric1","filters": [{"column": "filed2","type": "include","values": ["222222"]}],"groupBys": [{"column": "filed3","name": "filed3"}],"calculates": [{"column": "field1","name": "avg","type": "avg"}]},{"metric": "metric2","filters": [{"column": "field1","type": "include","values": ["11111"]}],"groupBys": [{"column": "filed2","name": "filed2"}],"calculates": [{"column": "field1","name": "avg","type": "avg"}]}]
   */
  logProcess?: string;
  /**
   * @remarks
   * The sample on-premises log.
   * 
   * @example
   * {"logContent":"100.116.134.26 1119 - [13/Aug/2019:16:55:46 +0800] POST metrichub-cn-hongkong.aliyun.com /agent/metrics/putLines 200 0 \\"-\\" \\"127.0.0.1:7001\\" \\"Go-http-client/1.1\\" \\"-\\" \\"-\\" \\"0a98a21a15656865460656276e\\"","addData":{"field1":["1119","1119"],"filed2":["POSTx","POST"],"filed3":["true","200"]}}
   */
  logSample?: string;
  /**
   * @remarks
   * The result that is returned after on-premises log data is split based on the specified matching mode.
   * 
   * > The matching modes of on-premises log data include full regex mode, delimiter mode, and JSON mode.
   * 
   * @example
   * {"type": "regex","regex": "\\\\d+\\\\.\\\\d+\\\\.\\\\d+\\\\.\\\\d+\\\\s+(\\\\d+)\\\\s+\\\\S+\\\\s+\[\\\\d+/\\\\S+/\\\\d+:\\\\d+:\\\\d+:\\\\d+\\\\s+\\\\+\\\\d+\\\\]\\\\s+(\\\\S+)\\\\s+\\\\S+\\\\s+/\\\\S+/\\\\S+/\\\\S+\\\\s+(\\\\d+)","columns": [{"name": "field1"},{"name": "filed2","translate": {"default": "-","mappings": [{"from": "(\\\\w+)","to": "$1x","type": "regex"}]}},{"name": "filed3","translate": {"default": "-","mappings": [{"from": "NumberRange(100,300)","to": "true","type": "function"}]}}]}
   */
  logSplit?: string;
  /**
   * @remarks
   * The conditions that are used to match the instances in the application group.
   */
  matchExpress?: DescribeHybridMonitorTaskListResponseBodyTaskListMatchExpress[];
  /**
   * @remarks
   * The relationship between the conditions that are used to filter metric import tasks. Valid values:
   * 
   * *   or
   * *   and
   * 
   * @example
   * or
   */
  matchExpressRelation?: string;
  /**
   * @remarks
   * The namespace to which the host belongs.
   * 
   * @example
   * aliyun
   */
  namespace?: string;
  /**
   * @remarks
   * The network type of the host. Valid values:
   * 
   * *   `vpc`
   * *   `Internet`
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The configurations of the logs that are imported from Log Service.
   * 
   * @example
   * {"express": [],"filter": {"filters": [{"key": "task_type","operator": "=","value": "1"}]},"groupby": [{"alias": "isp","key": "isp","sqlKey": "t.`isp`","valueKey": "isp"}],"interval": 60,"labels": [{"name": "__cms_app__","type": 0,"value": "sitemonitor"}],"statistics": [{"alias": "http_dns_time_avg","function": "avg","key": "http_dns_time"}]}
   */
  SLSProcess?: string;
  /**
   * @remarks
   * The configurations of the logs that are imported from Log Service.
   * 
   * > This parameter is returned only if the `TaskType` parameter is set to `aliyun_sls`.
   */
  SLSProcessConfig?: DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfig;
  /**
   * @remarks
   * The ID of the member account.
   * 
   * > This parameter is displayed only when you call this operation by using a management account.
   * 
   * @example
   * 120886317861****
   */
  targetUserId?: string;
  /**
   * @remarks
   * The ID of the metric import task.
   * 
   * @example
   * 36****
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the metric import task.
   * 
   * @example
   * aliyun_task
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the metric import task. Valid values:
   * 
   * *   aliyun_fc: metric import tasks for Alibaba Cloud services
   * *   aliyun_sls: metrics for logs imported from Log Service
   * 
   * @example
   * aliyun_sls
   */
  taskType?: string;
  /**
   * @remarks
   * The region where the host resides.
   * 
   * @example
   * cn-hangzhou
   */
  uploadRegion?: string;
  /**
   * @remarks
   * The configuration file of the Alibaba Cloud service that you want to monitor by using Hybrid Cloud Monitoring.
   * 
   * *   namespace: the namespace of the Alibaba Cloud service.
   * *   metric_list: the metrics of the Alibaba Cloud service.
   * 
   * @example
   * products:- namespace: acs_ecs_dashboard metric_info: - metric_list: - cpu_total
   */
  YARMConfig?: string;
  static names(): { [key: string]: string } {
    return {
      attachLabels: 'AttachLabels',
      collectInterval: 'CollectInterval',
      collectTargetEndpoint: 'CollectTargetEndpoint',
      collectTargetPath: 'CollectTargetPath',
      collectTargetType: 'CollectTargetType',
      collectTimout: 'CollectTimout',
      createTime: 'CreateTime',
      description: 'Description',
      extraInfo: 'ExtraInfo',
      groupId: 'GroupId',
      instances: 'Instances',
      logFilePath: 'LogFilePath',
      logProcess: 'LogProcess',
      logSample: 'LogSample',
      logSplit: 'LogSplit',
      matchExpress: 'MatchExpress',
      matchExpressRelation: 'MatchExpressRelation',
      namespace: 'Namespace',
      networkType: 'NetworkType',
      SLSProcess: 'SLSProcess',
      SLSProcessConfig: 'SLSProcessConfig',
      targetUserId: 'TargetUserId',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
      uploadRegion: 'UploadRegion',
      YARMConfig: 'YARMConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachLabels: { 'type': 'array', 'itemType': DescribeHybridMonitorTaskListResponseBodyTaskListAttachLabels },
      collectInterval: 'number',
      collectTargetEndpoint: 'string',
      collectTargetPath: 'string',
      collectTargetType: 'string',
      collectTimout: 'number',
      createTime: 'string',
      description: 'string',
      extraInfo: 'string',
      groupId: 'string',
      instances: { 'type': 'array', 'itemType': 'string' },
      logFilePath: 'string',
      logProcess: 'string',
      logSample: 'string',
      logSplit: 'string',
      matchExpress: { 'type': 'array', 'itemType': DescribeHybridMonitorTaskListResponseBodyTaskListMatchExpress },
      matchExpressRelation: 'string',
      namespace: 'string',
      networkType: 'string',
      SLSProcess: 'string',
      SLSProcessConfig: DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfig,
      targetUserId: 'string',
      taskId: 'string',
      taskName: 'string',
      taskType: 'string',
      uploadRegion: 'string',
      YARMConfig: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachLabels)) {
      $dara.Model.validateArray(this.attachLabels);
    }
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    if(Array.isArray(this.matchExpress)) {
      $dara.Model.validateArray(this.matchExpress);
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

export class DescribeHybridMonitorTaskListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * *   If the request was successful, the value `successful` is returned.
   * *   If the request failed, an error message is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * 11145B76-566A-5D80-A8A3-FAD98D310079
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The metric import tasks.
   */
  taskList?: DescribeHybridMonitorTaskListResponseBodyTaskList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      taskList: 'TaskList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'string',
      taskList: { 'type': 'array', 'itemType': DescribeHybridMonitorTaskListResponseBodyTaskList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.taskList)) {
      $dara.Model.validateArray(this.taskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

