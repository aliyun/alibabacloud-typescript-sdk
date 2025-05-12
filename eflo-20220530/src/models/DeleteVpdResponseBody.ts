// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVpdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why the access was denied.
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
   * The response parameters. (If a dependent resource exists, the existing dependent resource is returned.)
   * 
   * @example
   * {
   *       "subnet": [
   *             {
   *                   "tenantId": "1620939556166277",
   *                   "regionId": "cn-wulanchabu",
   *                   "zoneId": "cn",
   *                   "type": null,
   *                   "subnetId": "subnet-zqebaxa0",
   *                   "name": "lql_testVPD"
   *             }
   *       ],
   *       "nc": [
   *             {}
   *       ]
   * }
   */
  content?: any;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BDBCC783-84CA-5733-8EEA-645C88B9009C
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

