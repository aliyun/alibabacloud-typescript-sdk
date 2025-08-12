// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutLogMonitorRequestAggregates extends $dara.Model {
  /**
   * @remarks
   * The alias of the aggregate function. Valid values of N: 1 to 10.
   * 
   * This parameter is required.
   * 
   * @example
   * Count
   */
  alias?: string;
  /**
   * @remarks
   * The name of the field to be aggregated. Valid values of N: 1 to 10.
   * 
   * This parameter is required.
   * 
   * @example
   * sourceCount
   */
  fieldName?: string;
  /**
   * @remarks
   * The function that is used to aggregate log data within a statistical period. Valid values of N: 1 to 10. Valid values:
   * 
   * *   count: counts the number.
   * *   sum: calculates the total value.
   * *   avg: calculates the average value.
   * *   max: calculates the maximum value.
   * *   min: calculates the minimum value.
   * *   countps: calculates the number of values of the specified field divided by the total number of seconds within a statistical period.
   * *   sumps: calculates the sum of the values of the specified field divided by the total number of seconds within a statistical period.
   * *   distinct: calculates the number of unique values of the specified field within a statistical period.
   * 
   * This parameter is required.
   * 
   * @example
   * count
   */
  function?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      fieldName: 'FieldName',
      function: 'Function',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      fieldName: 'string',
      function: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLogMonitorRequestGroupbys extends $dara.Model {
  /**
   * @remarks
   * The alias of the dimension based on which the data is grouped. Valid values of N: 1 to 10.
   * 
   * @example
   * CPUUtilization
   */
  alias?: string;
  /**
   * @remarks
   * The name of the field that is specified as the dimension. Valid values of N: 1 to 10.
   * 
   * @example
   * cpu
   */
  fieldName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      fieldName: 'FieldName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      fieldName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLogMonitorRequestValueFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the log field that is used for matching in the filter condition. Valid values of N: 1 to 10.
   * 
   * @example
   * lh_source
   */
  key?: string;
  /**
   * @remarks
   * The method that is used to match the field value. Valid values of N: 1 to 10. Valid values:
   * 
   * *   `contain`: contains
   * *   `notContain`: does not contain
   * *   `>`: greater than
   * *   `<`: less than
   * *   `>=`: greater than or equal to
   * *   `<=`: less than or equal to
   * 
   * @example
   * contain
   */
  operator?: string;
  /**
   * @remarks
   * The field value to be matched in the filter condition. Valid values of N: 1 to 10.
   * 
   * @example
   * test
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

export class PutLogMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The aggregation logic.
   * 
   * This parameter is required.
   */
  aggregates?: PutLogMonitorRequestAggregates[];
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 7301****
   */
  groupId?: string;
  /**
   * @remarks
   * The dimension based on which the data is grouped. This parameter is equivalent to the GROUP BY clause in SQL statements. If no dimension is specified, all data is aggregated based on the aggregate function.
   */
  groupbys?: PutLogMonitorRequestGroupbys[];
  /**
   * @remarks
   * The ID of the log monitoring metric.
   * 
   * @example
   * 16****
   */
  logId?: string;
  /**
   * @remarks
   * The extended field. The extended field allows you to perform basic operations on the aggregation results.
   * 
   * For example, you have calculated TotalNumber and 5XXNumber by aggregating the data. TotalNumber indicates the total number of HTTP requests, and 5XXNumber indicates the number of HTTP requests whose status code is greater than 499. You can calculate the server error rate by adding the following formula to the extended field: 5XXNumber/TotalNumber\\*100.
   * 
   * JSON format: {"extend":{"errorPercent":"5XXNumber/TotalNumber\\*100"}}. Description:
   * 
   * *   extend: required.
   * *   errorPercent: the alias of the field generated in the calculation result. You can specify the alias as needed.
   * *   5XXNumber/TotalNumber\\*100: the calculation expression.
   * 
   * @example
   * {"extend":{"errorPercent":"5XXNumber/TotalNumber*100"}}
   */
  metricExpress?: string;
  /**
   * @remarks
   * The metric name. For more information about the metrics for cloud services, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  regionId?: string;
  /**
   * @remarks
   * The name of the Simple Log Service Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  slsLogstore?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  slsProject?: string;
  /**
   * @remarks
   * The region in which the Simple Log Service project resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  slsRegionId?: string;
  /**
   * @remarks
   * The size of the tumbling window for calculation. Unit: seconds. CloudMonitor performs aggregation for each tumbling window.
   * 
   * @example
   * 60,300
   */
  tumblingwindows?: string;
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * Percent
   */
  unit?: string;
  /**
   * @remarks
   * The condition that is used to filter logs. The ValueFilter and ValueFilterRelation parameters are used in pair. The filter condition is equivalent to the WHERE clause in SQL statements. If no filter condition is specified, all logs are processed. For example, logs contain the Level and Error fields. If you need to calculate the number of times that logs of the Error level appear every minute, you can set the filter condition to Level=Error and count the number of logs that meet this condition.
   */
  valueFilter?: PutLogMonitorRequestValueFilter[];
  /**
   * @remarks
   * The logical operator that is used between log filter conditions. Valid values:
   * 
   * *   and
   * *   or
   * 
   * >  The ValueFilterRelation and `ValueFilter.N.Key` parameters must be used in pair.
   * 
   * This parameter is required.
   * 
   * @example
   * and
   */
  valueFilterRelation?: string;
  static names(): { [key: string]: string } {
    return {
      aggregates: 'Aggregates',
      groupId: 'GroupId',
      groupbys: 'Groupbys',
      logId: 'LogId',
      metricExpress: 'MetricExpress',
      metricName: 'MetricName',
      regionId: 'RegionId',
      slsLogstore: 'SlsLogstore',
      slsProject: 'SlsProject',
      slsRegionId: 'SlsRegionId',
      tumblingwindows: 'Tumblingwindows',
      unit: 'Unit',
      valueFilter: 'ValueFilter',
      valueFilterRelation: 'ValueFilterRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregates: { 'type': 'array', 'itemType': PutLogMonitorRequestAggregates },
      groupId: 'string',
      groupbys: { 'type': 'array', 'itemType': PutLogMonitorRequestGroupbys },
      logId: 'string',
      metricExpress: 'string',
      metricName: 'string',
      regionId: 'string',
      slsLogstore: 'string',
      slsProject: 'string',
      slsRegionId: 'string',
      tumblingwindows: 'string',
      unit: 'string',
      valueFilter: { 'type': 'array', 'itemType': PutLogMonitorRequestValueFilter },
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
    if(Array.isArray(this.valueFilter)) {
      $dara.Model.validateArray(this.valueFilter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

