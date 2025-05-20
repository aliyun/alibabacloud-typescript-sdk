// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeadLockHistoryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
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
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
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

