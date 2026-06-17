// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogMonitorAttributeResponseBodyLogMonitorAggregates extends $dara.Model {
  /**
   * @remarks
   * The alias of the field.
   * 
   * @example
   * alias_******
   */
  alias?: string;
  /**
   * @remarks
   * The original name of the field in the log.
   * 
   * @example
   * field_******
   */
  fieldName?: string;
  /**
   * @remarks
   * The function that is used to aggregate log data in a statistical period. Valid values:
   * 
   * - count: Counts the number of logs.
   * 
   * - sum: Calculates the sum of values in a field.
   * 
   * - avg: Calculates the average of values in a field.
   * 
   * - max: Selects the maximum value in a field.
   * 
   * - min: Selects the minimum value in a field.
   * 
   * - countps: Calculates the average number of logs that are generated per second in a statistical period.
   * 
   * - sumps: Calculates the average sum of values in a field per second in a statistical period.
   * 
   * - distinct: Counts the number of unique values in a field in a statistical period.
   * 
   * @example
   * count
   */
  function?: string;
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 0
   */
  max?: string;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 0
   */
  min?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      fieldName: 'FieldName',
      function: 'Function',
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      fieldName: 'string',
      function: 'string',
      max: 'string',
      min: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorAttributeResponseBodyLogMonitorValueFilter extends $dara.Model {
  /**
   * @remarks
   * The key.
   * 
   * @example
   * key_******
   */
  key?: string;
  /**
   * @remarks
   * The operator that is used to match the field value. Valid values:
   * 
   * - `contain`: contains.
   * 
   * - `notContain`: does not contain.
   * 
   * - `>`: greater than.
   * 
   * - `<`: less than.
   * 
   * - `>=`: greater than or equal to.
   * 
   * - `<=`: less than or equal to.
   * 
   * @example
   * contain
   */
  operator?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * value_******
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class DescribeLogMonitorAttributeResponseBodyLogMonitor extends $dara.Model {
  /**
   * @remarks
   * The definitions of aggregations.
   */
  aggregates?: DescribeLogMonitorAttributeResponseBodyLogMonitorAggregates[];
  /**
   * @remarks
   * The time when the task was created.
   * 
   * This value is a UNIX timestamp that represents the number of milliseconds that have elapsed since January 1, 1970.
   * 
   * @example
   * 1678440033000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 123******
   */
  groupId?: number;
  /**
   * @remarks
   * The dimension based on which log data is aggregated. This parameter is equivalent to the \\`GROUP BY\\` clause in an SQL statement. You can specify a dimension to group monitoring data. If you do not specify this parameter, all monitoring data is aggregated based on the aggregation method.
   */
  groupbys?: string[];
  /**
   * @remarks
   * The ID of the Log Monitoring task.
   * 
   * @example
   * 123******
   */
  logId?: number;
  /**
   * @remarks
   * The metric expression.
   * 
   * @example
   * {}
   */
  metricExpress?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * cpu_total_******
   */
  metricName?: string;
  /**
   * @remarks
   * The name of the Simple Log Service Logstore.
   * 
   * @example
   * logstore_******
   */
  slsLogstore?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * project_******
   */
  slsProject?: string;
  /**
   * @remarks
   * The ID of the region where Simple Log Service resides.
   * 
   * @example
   * cn-hangzhou
   */
  slsRegionId?: string;
  /**
   * @remarks
   * The pre-aggregation window. Unit: seconds. Cloud Monitor aggregates data in the specified pre-aggregation window.
   */
  tumblingwindows?: string[];
  /**
   * @remarks
   * The filter conditions. This parameter is used with \\`ValueFilterRelation\\`. This parameter is equivalent to the \\`WHERE\\` clause in an SQL statement.
   * 
   * If you do not specify this parameter, all data is processed. For example, if a log contains a \\`Level\\` field and you want to count the number of logs where the value of \\`Level\\` is \\`Error\\`, you can set the aggregation function to \\`count\\` and specify a filter condition where \\`Level\\` equals \\`Error\\`.
   */
  valueFilter?: DescribeLogMonitorAttributeResponseBodyLogMonitorValueFilter[];
  /**
   * @remarks
   * The logical operator for the filter conditions. This parameter is used with \\`ValueFilter\\`. Valid values:
   * 
   * - and: The logical AND operator.
   * 
   * - or: The logical OR operator.
   * 
   * @example
   * and
   */
  valueFilterRelation?: string;
  static names(): { [key: string]: string } {
    return {
      aggregates: 'Aggregates',
      gmtCreate: 'GmtCreate',
      groupId: 'GroupId',
      groupbys: 'Groupbys',
      logId: 'LogId',
      metricExpress: 'MetricExpress',
      metricName: 'MetricName',
      slsLogstore: 'SlsLogstore',
      slsProject: 'SlsProject',
      slsRegionId: 'SlsRegionId',
      tumblingwindows: 'Tumblingwindows',
      valueFilter: 'ValueFilter',
      valueFilterRelation: 'ValueFilterRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregates: { 'type': 'array', 'itemType': DescribeLogMonitorAttributeResponseBodyLogMonitorAggregates },
      gmtCreate: 'number',
      groupId: 'number',
      groupbys: { 'type': 'array', 'itemType': 'string' },
      logId: 'number',
      metricExpress: 'string',
      metricName: 'string',
      slsLogstore: 'string',
      slsProject: 'string',
      slsRegionId: 'string',
      tumblingwindows: { 'type': 'array', 'itemType': 'string' },
      valueFilter: { 'type': 'array', 'itemType': DescribeLogMonitorAttributeResponseBodyLogMonitorValueFilter },
      valueFilterRelation: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aggregates)) {
      $dara.Model.validateArray(this.aggregates);
    }
    if(Array.isArray(this.groupbys)) {
      $dara.Model.validateArray(this.groupbys);
    }
    if(Array.isArray(this.tumblingwindows)) {
      $dara.Model.validateArray(this.tumblingwindows);
    }
    if(Array.isArray(this.valueFilter)) {
      $dara.Model.validateArray(this.valueFilter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > A status code of 200 indicates a successful request.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the Log Monitoring task.
   */
  logMonitor?: DescribeLogMonitorAttributeResponseBodyLogMonitor;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C6718537-E673-4A58-8EE1-24B8B38C7AAE
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * - true: The operation was successful.
   * 
   * - false: The operation failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logMonitor: 'LogMonitor',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logMonitor: DescribeLogMonitorAttributeResponseBodyLogMonitor,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.logMonitor && typeof (this.logMonitor as any).validate === 'function') {
      (this.logMonitor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

