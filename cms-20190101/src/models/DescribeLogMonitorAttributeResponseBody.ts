// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogMonitorAttributeResponseBodyLogMonitorAggregates extends $dara.Model {
  /**
   * @remarks
   * The alias of the field.
   * 
   * @example
   * HostName
   */
  alias?: string;
  /**
   * @remarks
   * The name of the field in logs.
   * 
   * @example
   * hostName
   */
  fieldName?: string;
  /**
   * @remarks
   * The function that is used to aggregate the monitoring data of logs within a statistical period. Valid values:
   * 
   * *   count: counts the number
   * *   sum: calculates the total value
   * *   avg: calculates the average value
   * *   max: calculates the maximum value
   * *   min: calculates the minimum value
   * *   countps: calculates the number of values of the specified field divided by the total number of seconds within a statistical period
   * *   sumps: calculates the sum of the values of the specified field divided by the total number of seconds within a statistical period
   * *   distinct: calculates the number of unique values of the specified field within a statistical period
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
   * 10
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
   * The name of the log field used for matching in the filter condition.
   * 
   * @example
   * hostName
   */
  key?: string;
  /**
   * @remarks
   * The method that is used to match the field value. Valid values:
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
   * The field value to be matched in the filter condition.
   * 
   * @example
   * portal
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
   * The aggregation logic.
   */
  aggregates?: DescribeLogMonitorAttributeResponseBodyLogMonitorAggregates[];
  /**
   * @remarks
   * The time when the metric was created.
   * 
   * This value is a UNIX timestamp that represents the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1547431398000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 12345
   */
  groupId?: number;
  groupbys?: string[];
  /**
   * @remarks
   * The ID of the log.
   * 
   * @example
   * 1234
   */
  logId?: number;
  /**
   * @remarks
   * The extended field. The extended field allows you to perform basic operations on the aggregation results.
   * 
   * For example, if you have calculated TotalNumber and 5XXNumber by aggregating the data. TotalNumber indicates the total number of HTTP requests, and 5XXNumber indicates the number of HTTP requests whose status code is greater than 499. You can calculate the server error rate by adding the following formula to the extended field: 5XXNumber/TotalNumber\\*100.
   * 
   * @example
   * {"extend":{"errorPercent":"5XXNumber/TotalNumber*100"}}
   */
  metricExpress?: string;
  /**
   * @remarks
   * The metric name. For more information, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The name of the Simple Log Service Logstore.
   * 
   * @example
   * test-logstore
   */
  slsLogstore?: string;
  /**
   * @remarks
   * The name of the SLS project.
   * 
   * @example
   * test-project
   */
  slsProject?: string;
  /**
   * @remarks
   * The ID of the region where the Simple Log Service (SLS) Logstore resides.
   * 
   * @example
   * cn-hangzhou
   */
  slsRegionId?: string;
  tumblingwindows?: string[];
  /**
   * @remarks
   * The condition that is used to filter logs. The ValueFilter and ValueFilterRelation parameters are used in pair. The filter condition is equivalent to the WHERE clause in SQL statements.
   * 
   * If no filter condition is specified, all logs are processed. For example, logs contain the Level and Error fields. If you need to calculate the number of times that logs of the Error level appear every minute, you can set the filter condition to Level=Error and count the number of logs that meet this condition.
   */
  valueFilter?: DescribeLogMonitorAttributeResponseBodyLogMonitorValueFilter[];
  /**
   * @remarks
   * The logical operator that is used between log filter conditions. The ValueFilter and ValueFilterRelation parameters must be used in pair. Valid values:
   * 
   * *   and
   * *   or
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
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the log monitoring metric.
   */
  logMonitor?: DescribeLogMonitorAttributeResponseBodyLogMonitor;
  /**
   * @remarks
   * The returned message. If the request was successful, a success message is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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

