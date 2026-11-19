// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutCustomMetricRequestMetricList extends $dara.Model {
  /**
   * @remarks
   * The dimension map used to query the monitoring data of a specified resource. Valid values of N: 1 to 21.
   * 
   * Format: a set of key-value pairs. A common key-value pair is `{"Key":"Value"}`.
   * 
   * The key and value must be 1 to 64 characters in length. If the length exceeds 64 characters, the string is truncated to 64 characters.
   * 
   * The key and value can contain letters, digits, periods (.), hyphens (-), underscores (_), forward slashes (/), and backslashes (\\).
   * 
   * > You must specify the Dimensions parameter as a JSON string to represent the map object. The key-value pairs must be specified in order.
   * 
   * This parameter is required.
   * 
   * @example
   * {"sampleName1":"value1","sampleName2":"value2"}
   */
  dimensions?: string;
  /**
   * @remarks
   * The ID of the application group. Valid values of N: 1 to 21.
   * 
   * > If the metric does not belong to an application group, set this parameter to 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the metric. Valid values of N: 1 to 21. For more information, see [Cloud service metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The aggregation period. Valid values of N: 1 to 21. Unit: seconds. Valid values: 60 and 300.
   * 
   * > If the type of the reported value is 1, you must specify this parameter.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The time when the metric was generated. Valid values of N: 1 to 21. Supported formats:
   * - UTC time. Format: YYYY-MM-DDThh:mm:ssZ. Example: 20171012T132456.888+0800.
   * - Long timestamp. Example: 1508136760000.
   * 
   * @example
   * 1508136760000
   */
  time?: string;
  /**
   * @remarks
   * The type of the reported value. Valid values of N: 1 to 21. Valid values:
   * 
   * - 0: Raw data.
   * - 1: Aggregate data.
   * 
   * > When reporting aggregate data, report data for both the 60-second and 300-second periods. Otherwise, you cannot query monitoring data that spans more than 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: string;
  /**
   * @remarks
   * The set of metric values. Valid values of N: 1 to 21.
   * 
   * > If the type of the reported value is 0, the reported values are raw values. CloudMonitor aggregates the raw values into multiple values such as maximum, count, and sum based on the period.
   * 
   * This parameter is required.
   * 
   * @example
   * {"value":10.5}
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      groupId: 'GroupId',
      metricName: 'MetricName',
      period: 'Period',
      time: 'Time',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      groupId: 'string',
      metricName: 'string',
      period: 'string',
      time: 'string',
      type: 'string',
      values: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The list of monitoring data.
   * 
   * This parameter is required.
   */
  metricList?: PutCustomMetricRequestMetricList[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      metricList: 'MetricList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricList: { 'type': 'array', 'itemType': PutCustomMetricRequestMetricList },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metricList)) {
      $dara.Model.validateArray(this.metricList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

