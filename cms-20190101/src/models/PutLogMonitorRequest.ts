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
   * The name of the original field for aggregation. Valid values of N: 1 to 10.
   * 
   * This parameter is required.
   * 
   * @example
   * sourceCount
   */
  fieldName?: string;
  /**
   * @remarks
   * The statistical method used to aggregate log data within a statistical period. Valid values of N: 1 to 10. Valid values:
   * - count: counts the number of occurrences.
   * - sum: calculates the sum.
   * - avg: calculates the average.
   * - max: returns the maximum value.
   * - min: returns the minimum value.
   * - countps: calculates the average count per second for the specified field within the statistical period.
   * - sumps: calculates the average sum per second for the specified field within the statistical period.
   * - distinct: counts the number of occurrences of the specified field after deduplication within the statistical period.
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
   * The alias of the Group By field. Valid values of N: 1 to 10.
   * 
   * @example
   * CPUUtilization
   */
  alias?: string;
  /**
   * @remarks
   * The name of the Group By field. Valid values of N: 1 to 10.
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
   * The name of the log field to match. Valid values of N: 1 to 10.
   * 
   * @example
   * lh_source
   */
  key?: string;
  /**
   * @remarks
   * The matching method for the field value. Valid values of N: 1 to 10. Valid values:
   * - `contain`: contains.
   * - `notContain`: does not contain.
   * - `>`: greater than.
   * - `<`: less than.
   * - `>=`: greater than or equal to.
   * - `<=`: less than or equal to.
   * 
   * @example
   * contain
   */
  operator?: string;
  /**
   * @remarks
   * The value of the log field to match. Valid values of N: 1 to 10.
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
   * The aggregate function definitions.
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
   * The dimensions used for spatial aggregation. This is equivalent to the Group By clause in SQL, which groups monitoring data by specified dimensions. If no dimension is specified, all monitoring data is aggregated based on the aggregate function.
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
   * The extended field. The extended field provides arithmetic operations on the results of the statistical methods.
   * 
   * For example, if you configure the total number of HTTP status code requests (TotalNumber) and the number of requests with HTTP status codes greater than 499 (5xxNumber) in the statistical methods, you can use the extended field to calculate the server error rate: 5xxNumber/TotalNumber*100.
   * 
   * JSON format: {"extend":{"errorPercent":"5xxNumber/TotalNumber*100"}}. Field description:
   * 
   * - extend: required.
   * 
   * - errorPercent: the alias of the new field generated from the calculation result. You can specify a custom name. 
   * 
   * - errorPercent: the calculation expression for existing fields.
   * 
   * @example
   * {"extend":{"errorPercent":"5XXNumber/TotalNumber*100"}}
   */
  metricExpress?: string;
  /**
   * @remarks
   * The metric name. For information about the metrics supported by CloudMonitor for Alibaba Cloud services, see [Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * The name of the Log Service Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  slsLogstore?: string;
  /**
   * @remarks
   * The name of the Log Service project.
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  slsProject?: string;
  /**
   * @remarks
   * The region where the Log Service project resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  slsRegionId?: string;
  /**
   * @remarks
   * The tumbling window size for pre-aggregation. Unit: seconds. CloudMonitor performs an aggregation calculation on the data at the specified interval.
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
   * The filter rules, used together with ValueFilterRelation. This is equivalent to the Where clause in SQL. If this parameter is not specified, all data is processed. For example, if the log contains Level and Error fields and you want to count the number of Error occurrences per minute, you can define the statistical method to sum the Level field with the condition Level=Error.
   */
  valueFilter?: PutLogMonitorRequestValueFilter[];
  /**
   * @remarks
   * The logical operator used to combine log filter conditions. Valid values:
   * 
   * - and
   * 
   * - or
   * 
   * > This parameter must be used together with `ValueFilter.N.Key`.
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

