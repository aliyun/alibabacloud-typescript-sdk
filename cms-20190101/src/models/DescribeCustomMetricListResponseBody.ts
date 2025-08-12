// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomMetricListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The responses code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
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
   * The request ID.
   * 
   * @example
   * 1AF425E4-1DEA-54F2-910A-8117C9686140
   */
  requestId?: string;
  /**
   * @remarks
   * The reported custom metrics that are found in the query.
   * 
   * @example
   * {\\"all\\":0,\\"size\\":10,\\"param\\":{\\"metric\\":\\"{\\\\\\"metricName\\\\\\":\\\\\\"cpu_total\\\\\\",\\\\\\"groupId\\\\\\":7378****,\\\\\\"project\\\\\\":\\\\\\"acs_customMetric_120886317861****\\\\\\",\\\\\\"dimension\\\\\\":\\\\\\"sampleName1=value1&sampleName2=value2\\\\\\",\\\\\\"status\\\\\\":1}\\",\\"service\\":\\"metric-center.aliyun-inc.com\\"},\\"page\\":1,\\"list\\":[]}
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

