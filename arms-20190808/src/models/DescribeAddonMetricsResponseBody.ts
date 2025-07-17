// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddonMetricsResponseBodyDataLabels extends $dara.Model {
  /**
   * @remarks
   * The description of the tag.
   * 
   * @example
   * The number of times a B-tree page of size PAGE_SIZE was successfully compressed.
   */
  description?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * page_size
   */
  key?: string;
  /**
   * @remarks
   * The source of the tag.
   * 
   * @example
   * db
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      key: 'Key',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonMetricsResponseBodyDataMetricsLabels extends $dara.Model {
  /**
   * @remarks
   * The description of the tag.
   * 
   * @example
   * PAGE_SIZE
   */
  description?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * page_size
   */
  key?: string;
  /**
   * @remarks
   * The source of the tag.
   * 
   * @example
   * db
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      key: 'Key',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonMetricsResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * The number of times a B-tree page of size PAGE_SIZE was successfully compressed.
   */
  description?: string;
  /**
   * @remarks
   * The tags.
   */
  labels?: DescribeAddonMetricsResponseBodyDataMetricsLabels[];
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * mysql_exporter_collector_duration_seconds
   */
  metric?: string;
  /**
   * @remarks
   * The type of the metric.
   * 
   * @example
   * GAUGE
   */
  type?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * bytes
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      labels: 'Labels',
      metric: 'Metric',
      type: 'Type',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      labels: { 'type': 'array', 'itemType': DescribeAddonMetricsResponseBodyDataMetricsLabels },
      metric: 'string',
      type: 'string',
      unit: 'string',
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

export class DescribeAddonMetricsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The metric group.
   * 
   * @example
   * Common
   */
  group?: string;
  /**
   * @remarks
   * The tags.
   */
  labels?: DescribeAddonMetricsResponseBodyDataLabels[];
  /**
   * @remarks
   * The metrics.
   */
  metrics?: DescribeAddonMetricsResponseBodyDataMetrics[];
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      labels: 'Labels',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      labels: { 'type': 'array', 'itemType': DescribeAddonMetricsResponseBodyDataLabels },
      metrics: { 'type': 'array', 'itemType': DescribeAddonMetricsResponseBodyDataMetrics },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The metric details.
   */
  data?: DescribeAddonMetricsResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B6A00968-82A8-4F14-9D1B-B53827DB****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAddonMetricsResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

