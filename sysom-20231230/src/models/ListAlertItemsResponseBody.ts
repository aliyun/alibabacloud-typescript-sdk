// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - If `code == Success`, the authorization is successful.
   * - Other status codes indicate authorization failure. If authorization fails, check the `message` field for detailed error messages.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {
   *     "NODE": {
   *       "Saturation": [
   *         "Node CPU utilization detection",
   *         "Node kernel-mode CPU utilization detection",
   *         "Node softirq CPU utilization detection",
   *         "Node memory usage detection",
   *         "Node kernel memory usage detection",
   *         "Node file descriptor usage detection",
   *         "Node root file system usage detection",
   *         "Node cgroup leak detection",
   *         "Node socket usage detection",
   *         "Node TCP memory usage detection"
   *       ],
   *       "Latency": [
   *         "Node scheduling latency detection",
   *         "Node network latency detection",
   *         "Node disk write latency detection",
   *         "Node disk read latency detection"
   *       ],
   *       "Load": [
   *         "Node disk I/O traffic detection",
   *         "Node load average detection"
   *       ],
   *       "Errors": [
   *         "Node network packet loss detection",
   *         "Node OOM stall prediction and detection"
   *       ]
   *     },
   *     "POD": {
   *       "Saturation": [
   *         "Pod memory usage detection",
   *         "Pod CPU utilization detection"
   *       ],
   *       "Errors": [
   *         "Pod CPU throttling detection",
   *         "Pod OOM event detection"
   *       ]
   *     }
   * }
   */
  data?: any;
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error message.
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
      data: 'any',
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

