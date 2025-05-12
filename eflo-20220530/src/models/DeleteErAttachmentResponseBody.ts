// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteErAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * 访问被拒绝的详细原因。
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response content. If a resource has dependent resources, the existing dependent resources are returned.
   * 
   * @example
   * {
   *     "ER_RMAP": [
   *         {
   *             "erId": "er-opy1wrfv",
   *             "destinationCidrBlock": "0.0.0.0/0",
   *             "regionId": "cn-wulanchabu",
   *             "routeMapNum": 3000,
   *             "erRouteMapId": "er-rmap-v5lfhmvm",
   *             "action": "permit",
   *             "status": "Available"
   *         },
   *         {
   *             "erId": "er-opy1wrfv",
   *             "destinationCidrBlock": "0.0.0.0/0",
   *             "regionId": "cn-wulanchabu",
   *             "routeMapNum": 3000,
   *             "erRouteMapId": "er-rmap-of3r0ndh",
   *             "action": "permit",
   *             "status": "Available"
   *         }
   *     ]
   * }
   */
  content?: any;
  /**
   * @remarks
   * response message, if the success request is
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * A88DFED5-24B7-5A3E-87DE-380BF06F3C90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: 'any',
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

