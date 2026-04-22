// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAclGroupResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * {\\"instanceId\\": \\"c-fa521a2393de4623\\", \\"orderId\\": \\"271129670950939\\"}
   */
  data?: boolean;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * [%60wget Nds0v6lx.popscan.xaliyun.com%60]
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * BE7E95C4-10DE-5EA7-9D10-2D3E0FCCE68C
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
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

