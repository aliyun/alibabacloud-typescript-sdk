// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLocalityRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * {
   *   "pageNumber":0,
   *   "namespaceId":"cn-hangzhou",
   *   "enable":false,
   *   "appId":"hkhon1po62@3aa3582********",
   *   "pageSize":0,
   *   "region":"cn-hangzhou",
   *   "routeRules":[
   *     {
   *       "threshold":0.2,
   *       "tags":[]
   *     }
   *   ]
   * }
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * D3971C60-3F07-58B0-8EA0-A194********
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

