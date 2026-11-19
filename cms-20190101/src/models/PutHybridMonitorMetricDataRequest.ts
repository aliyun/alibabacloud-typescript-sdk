// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutHybridMonitorMetricDataRequestMetricListLabels extends $dara.Model {
  /**
   * @remarks
   * The label key of the metric.
   * 
   * Valid values of N: 1 to 100.
   * 
   * Format: The key can contain uppercase letters, lowercase letters, digits, and underscores (_). It must start with an uppercase letter, a lowercase letter, or an underscore.
   * 
   * > You must specify both Key and Value.
   * 
   * @example
   * IP
   */
  key?: string;
  /**
   * @remarks
   * The label value of the metric.
   * 
   * Valid values of N: 1 to 100.
   * 
   * > You must specify both Key and Value.
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
   * The list of labels for the metric.
   * 
   * Valid values of N: 1 to 100.
   * 
   * Identifiers such as app, ip, and hostName.
   * 
   * @example
   * [{"Key":"IP","Value":"192.168.XX.XX"}]
   */
  labels?: PutHybridMonitorMetricDataRequestMetricListLabels[];
  /**
   * @remarks
   * The name of the metric.
   * 
   * Valid values of N: 1 to 100.
   * 
   * Format: The name can contain uppercase letters, lowercase letters, digits, and underscores (_). It must start with an uppercase or lowercase letter.
   * 
   * This parameter is required.
   * 
   * @example
   * CPU_Usage
   */
  name?: string;
  /**
   * @remarks
   * The timestamp when the monitoring data is reported.
   * 
   * Valid values of N: 1 to 100.
   * 
   * Unit: milliseconds. Default value: the current time.
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
   * Format: integer or floating-point number.
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
   * The list of monitoring data.
   * 
   * Valid values of N: 1 to 100.
   * 
   * This parameter is required.
   */
  metricList?: PutHybridMonitorMetricDataRequestMetricList[];
  /**
   * @remarks
   * The name of the metric namespace.
   * 
   * For more information about how to obtain the name of a metric namespace, see [DescribeHybridMonitorNamespaceList](https://help.aliyun.com/document_detail/428880.html).
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

