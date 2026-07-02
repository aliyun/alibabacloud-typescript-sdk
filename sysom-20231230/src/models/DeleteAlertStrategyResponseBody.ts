// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - If `code == Success`, the authorization is successful.
   * - Other status codes indicate authorization failed. Check the `message` field for the detailed error message.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * {
   *     "uid": "1808078950770264",
   *     "name": "test",
   *     "strategy": {
   *       "items": [
   *         "节点CPU使用率检测"
   *       ],
   *       "clusters": [
   *         "1"
   *       ]
   *     },
   *     "enabled": false,
   *     "id": 1,
   *     "created_at": 1753170771,
   *     "updated_at": 1753170811
   *   }
   */
  data?: any;
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error information.
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

