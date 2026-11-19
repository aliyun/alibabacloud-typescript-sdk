// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHybridMonitorTaskRequestAttachLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the metric label.
   * 
   * @example
   * app_service
   */
  name?: string;
  /**
   * @remarks
   * The value of the metric label.
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
   * The alias for the result of arithmetic operations on the extended fields of the SLS log statistics.
   * 
   * @example
   * SuccRate
   */
  alias?: string;
  /**
   * @remarks
   * The result of arithmetic operations on the extended fields of the SLS log statistics.
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
   * The filter method for parameter values in SLS logs. Valid values:
   * - `contain`: includes
   * - `notContain`: does not include
   * - `>`: greater than
   * - `<`: less than
   * - `=`: equal to
   * - `!=`: not equal to
   * - `>=`: greater than or equal to
   * - `<=`: less than or equal to
   * 
   * @example
   * =
   */
  operator?: string;
  /**
   * @remarks
   * The name of the parameter to be filtered in SLS logs.
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

export class ModifyHybridMonitorTaskRequestSLSProcessConfigFilter extends $dara.Model {
  /**
   * @remarks
   * None.
   */
  filters?: ModifyHybridMonitorTaskRequestSLSProcessConfigFilterFilters[];
  /**
   * @remarks
   * The relationship between multiple filter conditions for parameters. Valid values:
   * 
   * - and: logs are processed only when all filter conditions are met. This is the default value.
   * - or: logs are processed when any filter condition is met.
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
   * The alias for the SLS log statistics result.
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
   * The alias for the SLS log statistics result.
   * 
   * @example
   * level_count
   */
  alias?: string;
  /**
   * @remarks
   * The aggregation method used to process log data within the calculation period. Valid values:
   * - count: count
   * - sum: sum
   * - avg: average value
   * - max: maximum value
   * - min: minimum value
   * - value: sampling within the period
   * - countps: average count per second of the specified field within the statistical period
   * - sumps: average sum per second of the specified field within the statistical period
   * - distinct: count of occurrences of the specified field after deduplication within the statistical period
   * - distribution: count of occurrences of field values within a specified range
   * - percentile: percentile of field values, such as P50
   * 
   * @example
   * count
   */
  function?: string;
  /**
   * @remarks
   * The statistical value of SLS logs.
   * 
   * - If `Function` is set to `distribution`, this parameter specifies the lower limit of the statistical range. For example, to count the number of 2XX `HttpCode` status codes, enter 200.
   * 
   * - If `Function` is set to `percentile`, this parameter specifies the percentile of the statistical distribution. For example, 0.5 indicates P50.
   * 
   * @example
   * 200
   */
  parameter1?: string;
  /**
   * @remarks
   * The statistical value of SLS logs.
   * 
   * > This parameter is required only when `Function` is set to `distribution`. It specifies the upper limit of the statistical range. For example, to count the number of 2XX `HttpCode` status codes, enter 299.
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
   * The result of arithmetic operations on the extended fields of the SLS log statistics.
   */
  express?: ModifyHybridMonitorTaskRequestSLSProcessConfigExpress[];
  /**
   * @remarks
   * The filter conditions for parameters in SLS logs.
   */
  filter?: ModifyHybridMonitorTaskRequestSLSProcessConfigFilter;
  /**
   * @remarks
   * The spatial dimension for data aggregation, equivalent to the GROUP BY clause in SQL.
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
   * The labels of the metric.
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
   * SLS Log Monitoring data.
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
   * The ID of the monitoring task.
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
   * The name of the monitoring task.
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

