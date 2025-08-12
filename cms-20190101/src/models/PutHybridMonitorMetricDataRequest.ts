// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutHybridMonitorMetricDataRequestMetricListLabels extends $dara.Model {
  /**
   * @remarks
   * The tag key of the metric.
   * 
   * Valid values of N: 1 to 100.
   * 
   * The key can contain letters, digits, and underscores (_). The key must start with a letter or an underscore (_).
   * 
   * >  You must specify both the Key and Value parameters.
   * 
   * @example
   * IP
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the metric.
   * 
   * Valid values of N: 1 to 100.
   * 
   * >  You must specify both the Key and Value parameters.
   * 
   * @example
   * 192.168.XX.XX
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class PutHybridMonitorMetricDataRequestMetricList extends $dara.Model {
  /**
   * @remarks
   * The tags of the metric.
   * 
   * Valid values of N: 1 to 100.
   * 
   * @example
   * app、ip、hostName等标识信息
   */
  labels?: PutHybridMonitorMetricDataRequestMetricListLabels[];
  /**
   * @remarks
   * The metric name.
   * 
   * Valid values of N: 1 to 100.
   * 
   * The name can contain letters, digits, and underscores (_). The name must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * CPU_Usage
   */
  name?: string;
  /**
   * @remarks
   * The time when the monitoring data is imported. The value is a timestamp.
   * 
   * Valid values of N: 1 to 100.
   * 
   * Unit: milliseconds. By default, the current time is used.
   * 
   * @example
   * 1640776119473
   */
  TS?: number;
  /**
   * @remarks
   * The value of the metric.
   * 
   * Valid values of N: 1 to 100.
   * 
   * The value must be an integer or a floating-point number.
   * 
   * This parameter is required.
   * 
   * @example
   * 90
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      name: 'Name',
      TS: 'TS',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': PutHybridMonitorMetricDataRequestMetricListLabels },
      name: 'string',
      TS: 'number',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutHybridMonitorMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * The monitoring data.
   * 
   * Valid values of N: 1 to 100.
   * 
   * This parameter is required.
   */
  metricList?: PutHybridMonitorMetricDataRequestMetricList[];
  /**
   * @remarks
   * The name of the namespace.
   * 
   * For information about how to obtain the name of a namespace, see [DescribeHybridMonitorNamespaceList](https://help.aliyun.com/document_detail/428880.html).
   * 
   * This parameter is required.
   * 
   * @example
   * default-aliyun
   */
  namespace?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      metricList: 'MetricList',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricList: { 'type': 'array', 'itemType': PutHybridMonitorMetricDataRequestMetricList },
      namespace: 'string',
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

