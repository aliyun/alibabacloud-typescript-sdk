// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExporterRuleListResponseBodyDatapointsDatapointDstName extends $dara.Model {
  dstName?: string[];
  static names(): { [key: string]: string } {
    return {
      dstName: 'DstName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dstName)) {
      $dara.Model.validateArray(this.dstName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterRuleListResponseBodyDatapointsDatapoint extends $dara.Model {
  createTime?: number;
  describe?: string;
  dimension?: string;
  dstName?: DescribeExporterRuleListResponseBodyDatapointsDatapointDstName;
  enabled?: boolean;
  metricName?: string;
  namespace?: string;
  ruleName?: string;
  targetWindows?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      describe: 'Describe',
      dimension: 'Dimension',
      dstName: 'DstName',
      enabled: 'Enabled',
      metricName: 'MetricName',
      namespace: 'Namespace',
      ruleName: 'RuleName',
      targetWindows: 'TargetWindows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      describe: 'string',
      dimension: 'string',
      dstName: DescribeExporterRuleListResponseBodyDatapointsDatapointDstName,
      enabled: 'boolean',
      metricName: 'string',
      namespace: 'string',
      ruleName: 'string',
      targetWindows: 'string',
    };
  }

  validate() {
    if(this.dstName && typeof (this.dstName as any).validate === 'function') {
      (this.dstName as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterRuleListResponseBodyDatapoints extends $dara.Model {
  datapoint?: DescribeExporterRuleListResponseBodyDatapointsDatapoint[];
  static names(): { [key: string]: string } {
    return {
      datapoint: 'Datapoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datapoint: { 'type': 'array', 'itemType': DescribeExporterRuleListResponseBodyDatapointsDatapoint },
    };
  }

  validate() {
    if(Array.isArray(this.datapoint)) {
      $dara.Model.validateArray(this.datapoint);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterRuleListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * > The status code 200 indicates that the request was successful. Other status codes indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: string;
  datapoints?: DescribeExporterRuleListResponseBodyDatapoints;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * susscess
   */
  message?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6BA047CA-8BC6-40BC-BC8F-FBECF35F1993
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1000
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datapoints: DescribeExporterRuleListResponseBodyDatapoints,
      message: 'string',
      pageNumber: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.datapoints && typeof (this.datapoints as any).validate === 'function') {
      (this.datapoints as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

