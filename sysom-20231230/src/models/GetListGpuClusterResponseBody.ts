// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListGpuClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values: Success and Sysom.ACKClusterNotFound.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The list of clusters returned.
   * 
   * @example
   * ["cluster1", "cluster2"]
   */
  data?: any;
  /**
   * @remarks
   * The error message returned when the code is not Success.
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
   * The number of clusters returned.
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

