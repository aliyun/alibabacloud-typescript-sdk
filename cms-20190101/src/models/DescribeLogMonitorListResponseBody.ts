// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogMonitorListResponseBodyLogMonitorListValueFilter extends $dara.Model {
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
   * *   contain: contains
   * *   notContain: does not contain
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

export class DescribeLogMonitorListResponseBodyLogMonitorList extends $dara.Model {
  /**
   * @remarks
   * The time when the log monitoring metric was created.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1577766395000
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
  /**
   * @remarks
   * The ID of the log monitoring metric.
   * 
   * @example
   * 12345
   */
  logId?: number;
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
   * The name of the Simple Log Service (SLS) Logstore.
   * 
   * @example
   * testSlS****
   */
  slsLogstore?: string;
  /**
   * @remarks
   * The name of the SLS project.
   * 
   * @example
   * sls-project-test****
   */
  slsProject?: string;
  /**
   * @remarks
   * The ID of the region where the SLS Logstore resides.
   * 
   * @example
   * cn-hangzhou
   */
  slsRegionId?: string;
  /**
   * @remarks
   * The condition that is used to filter logs. The ValueFilter and ValueFilterRelation parameters are used in pair. The filter condition is equivalent to the WHERE clause in SQL statements. If no filter condition is specified, all logs are processed. For example, logs contain the Level and Error fields. If you need to calculate the number of times that logs of the Error level appear every minute, you can set the filter condition to Level=Error and count the number of logs that meet this condition.
   */
  valueFilter?: DescribeLogMonitorListResponseBodyLogMonitorListValueFilter[];
  /**
   * @remarks
   * The logical operator that is used between log filter conditions. The ValueFilter and ValueFilterRelation parameters are used in pair. Valid values:
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
      gmtCreate: 'GmtCreate',
      groupId: 'GroupId',
      logId: 'LogId',
      metricName: 'MetricName',
      slsLogstore: 'SlsLogstore',
      slsProject: 'SlsProject',
      slsRegionId: 'SlsRegionId',
      valueFilter: 'ValueFilter',
      valueFilterRelation: 'ValueFilterRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      groupId: 'number',
      logId: 'number',
      metricName: 'string',
      slsLogstore: 'string',
      slsProject: 'string',
      slsRegionId: 'string',
      valueFilter: { 'type': 'array', 'itemType': DescribeLogMonitorListResponseBodyLogMonitorListValueFilter },
      valueFilterRelation: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.valueFilter)) {
      $dara.Model.validateArray(this.valueFilter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorListResponseBody extends $dara.Model {
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
   * The log monitoring metrics.
   */
  logMonitorList?: DescribeLogMonitorListResponseBodyLogMonitorList[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
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
   * 01E90080-4300-4FAA-B9AE-161956BC350D
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
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logMonitorList: 'LogMonitorList',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logMonitorList: { 'type': 'array', 'itemType': DescribeLogMonitorListResponseBodyLogMonitorList },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logMonitorList)) {
      $dara.Model.validateArray(this.logMonitorList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

