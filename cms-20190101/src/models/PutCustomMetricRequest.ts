// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutCustomMetricRequestMetricList extends $dara.Model {
  /**
   * @remarks
   * The dimension map, which is used to query monitoring data of a specified resource. Valid values of N: 1 to 21.
   * 
   * Format: a collection of key-value pairs. A commonly used key-value pair collection is: `{"Key":"Value"}`.
   * 
   * The length of Key and Value is 1 to 64 characters. Characters beyond the first 64 are truncated.
   * 
   * The values of Key and Value can contain letters, digits, periods (.), hyphens (-), underscores (_), forward slashes (/), and backslashes (\\).
   * 
   * > Dimensions must be passed in as a JSON string that represents the map object, and must be passed in order.
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
   * > If the metric does not belong to any application group, enter 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the metric. Valid values of N: 1 to 21. For more information, see [Metrics of cloud services](https://help.aliyun.com/document_detail/163515.html).
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
   * > If the type of the reported value is 1, you must set this parameter.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The time when the metric occurred. Valid values of N: 1 to 21. The following two types of values are supported:
   * - UTC time. Format: YYYY-MM-DDThh:mm:ssZ. For example: 20171012T132456.888+0800.
   * - A Long-type timestamp. For example: 1508136760000.
   * 
   * @example
   * 1508136760000
   */
  time?: string;
  /**
   * @remarks
   * The type of the reported value. Valid values of N: 1 to 21. Valid values:
   * 
   * - 0: raw data.
   * - 1: aggregate data.
   * 
   * > When you report aggregate data, we recommend that you report both data with a period of 60 seconds and data with a period of 300 seconds. Otherwise, monitoring data cannot be queried for a time span of more than 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: string;
  /**
   * @remarks
   * The collection of metric values. Valid values of N: 1 to 21.
   * 
   * > If the type of the reported value is 0, the raw values are reported. CloudMonitor aggregates raw values into multiple values, such as maximum, count, and sum, by period.
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

