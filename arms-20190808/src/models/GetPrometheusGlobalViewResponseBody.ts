// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrometheusGlobalViewResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. 200 is success, other status codes are exceptions.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The struct returned.
   * 
   * @example
   * { "clusterId":"The ID of the global aggregation instance.", "groupName":"The name of the global aggregation instance.", "dataSources":[ { "sourceName":"The name of the data source.- ArmsPrometheus No.1", "sourceType":"AlibabaPrometheus", "userId":"UserID", "clusterId":"ClusterId" }, // more datasources ] }
   */
  data?: string;
  /**
   * @remarks
   * Returns a hint message for the result.
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
   * 743AD493-D006-53BD-AAEC-DDCE7FB68EA7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

