// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListGpuClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code. Valid values: Success and Sysom.ACKClusterNotFound.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The list of clusters.
   * 
   * @example
   * ["cluster1", "cluster2"]
   */
  data?: any;
  /**
   * @remarks
   * The error message. If the code is not success, the message is the error information.
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
   * 1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

