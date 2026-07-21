// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryClientDiscountLogsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * A flag that indicates whether the record is deleted. A value of 0 means the record is active.
   * 
   * @example
   * 0
   */
  deleteTag?: number;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 0.5
   */
  discount?: number;
  /**
   * @remarks
   * The time when the discount took effect.
   * 
   * @example
   * 2025-09-01 00:00:00
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The time when the discount expires.
   * 
   * @example
   * 2025-09-10 00:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the record was created.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the record was last modified.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The record ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The remark.
   * 
   * @example
   * 备注
   */
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
  /**
   * @remarks
   * The list of discount modification logs.
   */
  data?: ModelRouterQueryClientDiscountLogsResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 未知错误
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
   * The maximum number of results returned on the current page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to use in a subsequent request to retrieve the next page of results. If this parameter is not returned, all results have been retrieved.
   * 
   * @example
   * xxxx-xxx-xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates if the request succeeded.
   * 
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

