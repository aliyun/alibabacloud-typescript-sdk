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
   * The alias of the arithmetic operation result of the extended field in the SLS log statistics result.
   * 
   * @example
   * SuccRate
   */
  alias?: string;
  /**
   * @remarks
   * The arithmetic operation result of the extended field in the SLS log statistics result.
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
   * The method used to filter parameter values in the SLS log. Valid values:
   * - `contain`: contains.
   * - `notContain`: does not contain.
   * - `>`: greater than.
   * - `<`: less than.
   * - `=`: equal to.
   * - `!=`: not equal to.
   * - `>=`: greater than or equal to.
   * - `<=`: less than or equal to.
   * 
   * @example
   * =
   */
  operator?: string;
  /**
   * @remarks
   * The name of the parameter to filter in the SLS log.
   * 
   * @example
   * code
   */
  SLSKeyName?: string;
  /**
   * @remarks
   * The filter value of the parameter in the SLS log.
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
   * The alias of the SLS log statistics result.
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

export class ModifyHybridMonitorTaskRequestSLSProcessConfigStatistics extends $dara.Model {
  /**
   * @remarks
   * The alias of the SLS log statistics result.
   * 
   * @example
   * level_count
   */
  alias?: string;
  /**
   * @remarks
   * The statistical method used to aggregate log data within a statistical period. Valid values:
   * - count: counts the number of occurrences.
   * - sum: calculates the sum.
   * - avg: calculates the average.
   * - max: returns the maximum value.
   * - min: returns the minimum value.
   * - value: samples within the period.
   * - countps: calculates the per-second average of the count for the specified field within the statistical period.
   * - sumps: calculates the per-second average of the sum for the specified field within the statistical period.
   * - distinct: calculates the number of occurrences of the specified field after deduplication within the statistical period.
   * - distribution: calculates the number of occurrences of field values within a specified range.
   * - percentile: calculates the distribution value of field values, such as P50.
   * 
   * @example
   * count
   */
  function?: string;
  /**
   * @remarks
   * The statistical value of the SLS log.
   * 
   * - If `Function` is set to `distribution`, this parameter specifies the lower limit of the statistical range. For example, to count the number of 2XX HTTP status codes, set this parameter to 200.
   * 
   * - If `Function` is set to `percentile`, this parameter specifies the percentile of the statistical distribution. For example, 0.5 indicates P50.
   * 
   * @example
   * 200
   */
  parameter1?: string;
  /**
   * @remarks
   * The statistical value of the SLS log.
   * 
   * > This parameter is required only when `Function` is set to `distribution`. It specifies the upper limit of the statistical range. For example, to count the number of 2XX HTTP status codes, set this parameter to 299.
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

export class ModifyHybridMonitorTaskRequestSLSProcessConfig extends $dara.Model {
  /**
   * @remarks
   * The arithmetic operation result of the extended field in the SLS log statistics result.
   */
  express?: ModifyHybridMonitorTaskRequestSLSProcessConfigExpress[];
  /**
   * @remarks
   * The filter conditions for parameters in the SLS log.
   */
  filter?: ModifyHybridMonitorTaskRequestSLSProcessConfigFilter;
  /**
   * @remarks
   * Aggregates data by spatial dimension, which is equivalent to GROUP BY in SQL.
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
   * The collection interval of the metric. Valid values:
   * 
   * - 15
   * 
   * - 60
   * 
   * Unit: seconds.
   * 
   * @example
   * 15
   */
  collectInterval?: string;
  /**
   * @remarks
   * The description of the monitoring task.
   * 
   * @example
   * SLS log monitoring data.
   */
  description?: string;
  regionId?: string;
  /**
   * @remarks
   * The SLS log configuration.
   */
  SLSProcessConfig?: ModifyHybridMonitorTaskRequestSLSProcessConfig;
  /**
   * @remarks
   * The monitoring task ID.
   * 
   * For information about how to obtain the monitoring task ID, see [DescribeHybridMonitorTaskList](https://help.aliyun.com/document_detail/428624.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 36****
   */
  taskId?: string;
  /**
   * @remarks
   * The monitoring task name.
   * 
   * For information about how to obtain the monitoring task ID, see [DescribeHybridMonitorTaskList](https://help.aliyun.com/document_detail/428624.html).
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

