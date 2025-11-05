// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupMetricDataResponseBodyMetricDataMetrics extends $dara.Model {
  /**
   * @example
   * 1761184929633
   */
  timestamp?: number;
  /**
   * @example
   * 1.0
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupMetricDataResponseBodyMetricData extends $dara.Model {
  /**
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  id?: string;
  /**
   * @example
   * CUSpec
   */
  metricName?: string;
  metrics?: ListResourceGroupMetricDataResponseBodyMetricDataMetrics[];
  /**
   * @example
   * tSBOXZcAmk+akxRkwRuXnGQEsIDODyd5ulPqgytNTbLp4bhb7fuvz13FXtm87Kfl
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      metricName: 'MetricName',
      metrics: 'Metrics',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      metricName: 'string',
      metrics: { 'type': 'array', 'itemType': ListResourceGroupMetricDataResponseBodyMetricDataMetrics },
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupMetricDataResponseBody extends $dara.Model {
  metricData?: ListResourceGroupMetricDataResponseBodyMetricData;
  /**
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      metricData: 'MetricData',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricData: ListResourceGroupMetricDataResponseBodyMetricData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.metricData && typeof (this.metricData as any).validate === 'function') {
      (this.metricData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

