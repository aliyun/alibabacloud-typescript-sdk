// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAclGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the access denial. This parameter is returned only if a request is denied due to insufficient RAM permissions.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The data returned for the request.
   * 
   * @example
   * {\\"instanceId\\": \\"c-fa521a2393de4623\\", \\"orderId\\": \\"271129670950939\\"}
   */
  data?: boolean;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * [%60wget Nds0v6lx.popscan.xaliyun.com%60]
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The unique ID generated for the request. Use this ID for troubleshooting.
   * 
   * @example
   * BE7E95C4-10DE-5EA7-9D10-2D3E0FCCE68C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates if the request succeeded, where a value of `true` means success.
   * 
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

