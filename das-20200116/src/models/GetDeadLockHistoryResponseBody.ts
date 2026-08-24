// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeadLockHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned as a JSON string.
   * 
   * - total: The total number of deadlocks.
   * 
   * - list: The list of deadlocks.
   * 
   *   - accountId: The user ID.
   * 
   *   - textId: The text ID of the deadlock.
   * 
   *   - gmtModified: The time when the diagnostics were generated.
   * 
   *   - lockTime: The time when the deadlock occurred.
   * 
   *   - gmtCreate: The time when the diagnostics were created.
   * 
   *   - nodeId: The node ID.
   * 
   *   - uuid: The instance ID.
   * 
   * @example
   * {
   *     "total": 2,
   *     "list": [
   *         {
   *             "accountId": "108************",
   *             "textId": "35303d12d52d29ba73bb85fa2d5b****",
   *             "gmtModified": 1732712680000,
   *             "lockTime": 1732687047000,
   *             "gmtCreate": 1732712680000,
   *             "nodeId": "pi-8****************",
   *             "uuid": "pc-8v**************"
   *         },
   *         {
   *             "accountId": "108************",
   *             "textId": "50a24bdcc5fe7e03f92a55ae7574****",
   *             "gmtModified": 1732626448000,
   *             "lockTime": 1722500305000,
   *             "gmtCreate": 1732626448000,
   *             "nodeId": "pi-8****************",
   *             "uuid": "pc-8v**************"
   *         }
   *     ]
   * }
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * > If the request is successful, **Successful** is returned. If the request fails, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  synchro?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      synchro: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

