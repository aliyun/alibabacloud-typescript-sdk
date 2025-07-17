// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAppTopologyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The status code 200 indicates that the request was successful. If another status code is returned, the request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned struct.
   * 
   * @example
   * "Data": {
   *     "nodes": [
   *       {
   *         "data": {
   *           "duration": 0.2254335260115607,
   *           "requests": 1211,
   *           "type": "MYSQL",
   *           "errors": 0
   *         },
   *         "id": "ggxw4lnjuz@c0507xxxx##MYSQL",
   *         "label": "mysql-pod:3306(cart_db)"
   *       }
   *     ],
   *     "edges": [
   *       {
   *         "data": {
   *           "duration": 0.03333333333333333,
   *           "requests": 600,
   *           "type": "UNKNOWN",
   *           "errors": 0
   *         },
   *         "id": "1974097372",
   *         "source": "ggxw4lnjuz@456xxxxx",
   *         "target": "ggxw4lnjuz@c0507xxxx"
   *       }
   *     ]
   *   }
   */
  data?: any;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Internal error. Please try again. Contact the DingTalk service account if the issue                              persists after multiple retries.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 78901766-3806-4E96-8E47-CFEF59E4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * *   true: The call was successful.
   * *   false: The call failed.
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
      data: 'any',
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

