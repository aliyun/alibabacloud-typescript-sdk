// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOutboundCallRestrictionsResponseBodyDataOutboundCallRestrictions extends $dara.Model {
  /**
   * @remarks
   * The creation time, in millisecond-level timestamp.
   * 
   * @example
   * 1735660800000
   */
  createdTime?: number;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * test
   */
  creator?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 134*****
   */
  number?: string;
  /**
   * @remarks
   * The policy. Valid values:
   * 0: blacklist.
   * 1: whitelist.
   * 
   * @example
   * 0
   */
  policy?: number;
  /**
   * @remarks
   * The remark.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The outbound call restriction ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  restrictionId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      creator: 'Creator',
      number: 'Number',
      policy: 'Policy',
      remark: 'Remark',
      restrictionId: 'RestrictionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      creator: 'string',
      number: 'string',
      policy: 'number',
      remark: 'string',
      restrictionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundCallRestrictionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data list.
   */
  outboundCallRestrictions?: ListOutboundCallRestrictionsResponseBodyDataOutboundCallRestrictions[];
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records that match the conditions.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      outboundCallRestrictions: 'OutboundCallRestrictions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outboundCallRestrictions: { 'type': 'array', 'itemType': ListOutboundCallRestrictionsResponseBodyDataOutboundCallRestrictions },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.outboundCallRestrictions)) {
      $dara.Model.validateArray(this.outboundCallRestrictions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundCallRestrictionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListOutboundCallRestrictionsResponseBodyData;
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
   * The error message.
   * 
   * @example
   * Instance does not exist. Instance=392db13c-8901-4a25-b566-91d0d8114cec
   */
  message?: string;
  /**
   * @remarks
   * The list of variable values in the error message.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListOutboundCallRestrictionsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

