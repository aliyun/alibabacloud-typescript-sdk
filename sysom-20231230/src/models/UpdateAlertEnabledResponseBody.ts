// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlertEnabledResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code  
   * - If `code == Success`, authorization succeeded.  
   * - Other status codes indicate authorization failed. When authorization fails, view the `message` field to obtain detailed error message.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Returned data
   * 
   * @example
   * {
   *     "uid": "1808078950770264",
   *     "name": "test-name",
   *     "strategy": {
   *       "items": [
   *         "节点CPU使用率检测"
   *       ],
   *       "clusters": [
   *         "cluster1"
   *       ]
   *     },
   *     "enabled": true,
   *     "id": 1,
   *     "created_at": 1753172727,
   *     "updated_at": 1753172727
   *   }
   */
  data?: any;
  /**
   * @remarks
   * Error message  
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

