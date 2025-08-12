// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutCustomMetricRequestMetricList extends $dara.Model {
  /**
   * @remarks
   * The dimensions based on which the resources are queried. Valid values of N: 1 to 21.
   * 
   * Set this parameter to a collection of key-value pairs. Format: `{"Key":"Value"}`.
   * 
   * The key or value must be 1 to 64 bytes in length. Excessive characters are truncated.
   * 
   * The key or value can contain letters, digits, periods (.), hyphens (-), underscores (_), forward slashes (/), and backslashes (\\\\).
   * 
   * >  Dimensions must be formatted as a JSON string in a specified order.
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
   * >  If the metric does not belong to any application group, enter 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  groupId?: string;
  /**
   * @remarks
   * The metric name. Valid values of N: 1 to 21. For more information, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * >  If the Type parameter is set to 1, the Period parameter is required.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The timestamp when the metric data is generated. Valid values of N: 1 to 21. The timestamp can be in one of the following formats:
   * 
   * *   A UTC timestamp in the YYYY-MM-DDThh:mm:ssZ format. Example: 20171012T132456.888+0800.
   * *   A UNIX timestamp of the LONG type. Example: 1508136760000.
   * 
   * @example
   * 1508136760000
   */
  time?: string;
  /**
   * @remarks
   * The type of the monitoring data. Valid values of N: 1 to 21. Valid values:
   * 
   * *   0: raw data
   * *   1: aggregate data
   * 
   * >  We recommend that you report aggregate data in both the aggregation periods of 60 seconds and 300 seconds. Otherwise, you cannot query monitoring data in a time span that is more than seven days.
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
   * >  If the Type parameter is set to 0, the keys in this parameter must be set to the specified value. CloudMonitor aggregates raw data in each aggregation period to generate multiple statistical values, such as the maximum value, the count, and the total value.
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
   * The monitoring data.
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

