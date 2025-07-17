// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterAllUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. 200 means success, other status codes are exceptions.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response parameters in the JSON format.
   * 
   * @example
   * {
   *   "RequestId": "41877338-646B-5DD6-BFBE-F89F1E7245AD",
   *   "Data": "{\\"clusterType\\":\\"ManagedKubernetes\\",\\"remoteWriteUrl\\":\\"http:/" }
   */
  data?: string;
  /**
   * @remarks
   * The prompt information of the returned result.
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
   * 40B10E04-81E8-4643-970D-F1B38F2E****
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the query is successful:
   * - true: success
   * - false: failure
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

