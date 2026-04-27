// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UsageBreakdownRespDTO } from "./UsageBreakdownRespDto";


export class ModelRouterQueryUsageBreakdownResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  data?: UsageBreakdownRespDTO;
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * xxxx-xxx-xxxxx
   */
  nextToken?: string;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UsageBreakdownRespDTO,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

