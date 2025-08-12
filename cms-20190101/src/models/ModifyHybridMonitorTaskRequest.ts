// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHybridMonitorTaskRequestAttachLabels extends $dara.Model {
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

export class ModifyHybridMonitorTaskRequestSLSProcessConfigExpress extends $dara.Model {
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

export class ModifyHybridMonitorTaskRequestSLSProcessConfigFilterFilters extends $dara.Model {
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

export class ModifyHybridMonitorTaskRequestSLSProcessConfigFilter extends $dara.Model {
  /**
   * @remarks
   * None.
   */
  filters?: ModifyHybridMonitorTaskRequestSLSProcessConfigFilterFilters[];
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
      filters: { 'type': 'array', 'itemType': ModifyHybridMonitorTaskRequestSLSProcessConfigFilterFilters },
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

export class ModifyHybridMonitorTaskRequestSLSProcessConfigGroupBy extends $dara.Model {
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

export class ModifyHybridMonitorTaskRequestSLSProcessConfigStatistics extends $dara.Model {
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
   * *   countps: calculates the number of values of the specified field divided by the total number of seconds within the statistical period.
   * *   sumps: calculates the sum of the values of the specified field divided by the total number of seconds within the statistical period.
   * *   distinct: calculates the number of unique values of the specified field within the statistical period.
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

export class ModifyHybridMonitorTaskRequestSLSProcessConfig extends $dara.Model {
  /**
   * @remarks
   * The extended fields that specify the results of basic operations performed on aggregation results.
   */
  express?: ModifyHybridMonitorTaskRequestSLSProcessConfigExpress[];
  /**
   * @remarks
   * The conditions that are used to filter logs imported from Simple Log Service.
   */
  filter?: ModifyHybridMonitorTaskRequestSLSProcessConfigFilter;
  /**
   * @remarks
   * The dimension based on which data is aggregated. This parameter is equivalent to the GROUP BY clause in SQL.
   */
  groupBy?: ModifyHybridMonitorTaskRequestSLSProcessConfigGroupBy[];
  /**
   * @remarks
   * None.
   */
  statistics?: ModifyHybridMonitorTaskRequestSLSProcessConfigStatistics[];
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
      express: { 'type': 'array', 'itemType': ModifyHybridMonitorTaskRequestSLSProcessConfigExpress },
      filter: ModifyHybridMonitorTaskRequestSLSProcessConfigFilter,
      groupBy: { 'type': 'array', 'itemType': ModifyHybridMonitorTaskRequestSLSProcessConfigGroupBy },
      statistics: { 'type': 'array', 'itemType': ModifyHybridMonitorTaskRequestSLSProcessConfigStatistics },
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

export class ModifyHybridMonitorTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The tags of the metric.
   */
  attachLabels?: ModifyHybridMonitorTaskRequestAttachLabels[];
  /**
   * @remarks
   * The collection period of the metric. Valid values:
   * 
   * *   15
   * *   60
   * 
   * Unit: seconds.
   * 
   * @example
   * 15
   */
  collectInterval?: string;
  /**
   * @remarks
   * The description of the metric import task.
   */
  description?: string;
  regionId?: string;
  /**
   * @remarks
   * The configurations of the logs that are imported from Simple Log Service.
   */
  SLSProcessConfig?: ModifyHybridMonitorTaskRequestSLSProcessConfig;
  /**
   * @remarks
   * The ID of the metric import task.
   * 
   * For information about how to obtain the ID of a metric import task, see [DescribeHybridMonitorTaskList](https://help.aliyun.com/document_detail/428624.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 36****
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the metric import task.
   * 
   * For information about how to obtain the ID of a metric import task, see [DescribeHybridMonitorTaskList](https://help.aliyun.com/document_detail/428624.html).
   * 
   * @example
   * SLS_task
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      attachLabels: 'AttachLabels',
      collectInterval: 'CollectInterval',
      description: 'Description',
      regionId: 'RegionId',
      SLSProcessConfig: 'SLSProcessConfig',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachLabels: { 'type': 'array', 'itemType': ModifyHybridMonitorTaskRequestAttachLabels },
      collectInterval: 'string',
      description: 'string',
      regionId: 'string',
      SLSProcessConfig: ModifyHybridMonitorTaskRequestSLSProcessConfig,
      taskId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachLabels)) {
      $dara.Model.validateArray(this.attachLabels);
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

