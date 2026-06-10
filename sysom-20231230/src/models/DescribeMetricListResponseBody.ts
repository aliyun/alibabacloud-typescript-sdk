// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Metric labels
   * 
   * @example
   * {\\"taskExecName\\": \\"build-and-deploy\\", \\"pipelineName\\": \\"pipeline-run-1722909642357\\"}
   */
  labels?: string;
  /**
   * @remarks
   * Metric name
   * 
   * @example
   * sysom_cpu_usage_idle
   */
  metricName?: string;
  /**
   * @remarks
   * Metric data
   */
  values?: string[][];
  static names(): { [key: string]: string } {
    return {
      labels: 'labels',
      metricName: 'metricName',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: 'string',
      metricName: 'string',
      values: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code  
   * - `code == Success` indicates successful authorization;  
   * - Any other status code indicates authorization failure. When authorization fails, check the `message` field for detailed error information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: DescribeMetricListResponseBodyData[];
  /**
   * @remarks
   * Error message  
   * - If `code == Success`, this field is empty.  
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * 分析ID: 56dae746-ef55-4f77-8373-cb3594c41457
   * 机器i-bp164ns76pzirbwv0snt分析失败, 失败原因: Not get GPU trace data for \\"56dae746-ef55-4f77-8373-cb3594c41457\\" \\"[\\"93811\\"]\\"!
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeMetricListResponseBodyData },
      message: 'string',
      requestId: 'string',
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

