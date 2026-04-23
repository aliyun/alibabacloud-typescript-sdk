// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryClientDiscountLogsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @example
   * 0
   */
  deleteTag?: number;
  /**
   * @example
   * 0.5
   */
  discount?: number;
  /**
   * @example
   * 2025-09-01 00:00:00
   */
  effectiveTime?: string;
  /**
   * @example
   * 2025-09-10 00:00:00
   */
  expireTime?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      deleteTag: 'deleteTag',
      discount: 'discount',
      effectiveTime: 'effectiveTime',
      expireTime: 'expireTime',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'number',
      deleteTag: 'number',
      discount: 'number',
      effectiveTime: 'string',
      expireTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelRouterQueryClientDiscountLogsResponseBody extends $dara.Model {
  data?: ModelRouterQueryClientDiscountLogsResponseBodyData[];
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
   * @remarks
   * maxResults
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * nextToken
   * 
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
      data: { 'type': 'array', 'itemType': ModelRouterQueryClientDiscountLogsResponseBodyData },
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
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

