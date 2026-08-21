// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - `code == Success` indicates that the authorization is successful.
   * - Other status codes indicate that the authorization failed. Check the `message` field for the detailed error message when an authorization fault occurs.
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
   *             "uid": "uid-1",
   *             "name": "test-name",
   *             "strategy": {
   *                 "clusters": ["test-cluster-1","test-cluster-2"],
   *                 "items": ["test-item1","test-item2"]
   *             },
   *             "enabled": True,
   *           
   *         }
   */
  data?: any;
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * Failed to create the policy
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

