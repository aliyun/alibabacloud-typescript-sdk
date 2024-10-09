// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddSumRecordFlowPopRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4546
   */
  activityId?: string;
  /**
   * @example
   * 4546-100000
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 会议名称
   */
  conferenceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Z10
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 入口名称
   */
  entryName?: string;
  /**
   * @example
   * 429005111100000
   */
  idcard?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-09-25 14:11
   */
  signTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      code: 'Code',
      conferenceName: 'ConferenceName',
      deviceId: 'DeviceId',
      entryName: 'EntryName',
      idcard: 'Idcard',
      signTime: 'SignTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      code: 'string',
      conferenceName: 'string',
      deviceId: 'string',
      entryName: 'string',
      idcard: 'string',
      signTime: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSumRecordFlowPopResponseBody extends $tea.Model {
  /**
   * @example
   * deny
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * data
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  errCode?: string;
  /**
   * @example
   * error
   */
  errMessage?: string;
  /**
   * @example
   * 403
   */
  httpStatusCode?: number;
  /**
   * @example
   * 1skladklasmda
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSumRecordFlowPopResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddSumRecordFlowPopResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddSumRecordFlowPopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindExhibitorRfidPopRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4546
   */
  activityId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Z10
   */
  deviceId?: string;
  /**
   * @example
   * 2024-09-25 14:11
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-09-25 14:11
   */
  gmtModified?: string;
  /**
   * @example
   * 451246
   */
  guestTicketRecordId?: number;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * asdojzopf
   */
  rfid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4546-100000
   */
  ticketCode?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      deviceId: 'DeviceId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      guestTicketRecordId: 'GuestTicketRecordId',
      id: 'Id',
      rfid: 'Rfid',
      ticketCode: 'TicketCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      deviceId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      guestTicketRecordId: 'number',
      id: 'number',
      rfid: 'string',
      ticketCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindExhibitorRfidPopResponseBody extends $tea.Model {
  /**
   * @example
   * deny
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * data
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  errCode?: string;
  /**
   * @example
   * error
   */
  errMessage?: string;
  /**
   * @example
   * 403
   */
  httpStatusCode?: number;
  /**
   * @example
   * 1skladklasmda
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindExhibitorRfidPopResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindExhibitorRfidPopResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindExhibitorRfidPopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindGuestRfidPopRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4546
   */
  activityId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Z10
   */
  deviceId?: string;
  /**
   * @example
   * 2024-09-25 14:11
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-09-25 14:11
   */
  gmtModified?: string;
  /**
   * @example
   * 451246
   */
  guestTicketRecordId?: number;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * asdojzopf
   */
  rfid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4546-100000
   */
  ticketCode?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      deviceId: 'DeviceId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      guestTicketRecordId: 'GuestTicketRecordId',
      id: 'Id',
      rfid: 'Rfid',
      ticketCode: 'TicketCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      deviceId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      guestTicketRecordId: 'number',
      id: 'number',
      rfid: 'string',
      ticketCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindGuestRfidPopResponseBody extends $tea.Model {
  /**
   * @example
   * deny
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * data
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  errCode?: string;
  /**
   * @example
   * error
   */
  errMessage?: string;
  /**
   * @example
   * 403
   */
  httpStatusCode?: number;
  /**
   * @example
   * 1skladklasmda
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindGuestRfidPopResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindGuestRfidPopResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindGuestRfidPopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckNFCBindPopRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4546
   */
  activityId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * asdojzopf
   */
  nfcId?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      nfcId: 'NfcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      nfcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckNFCBindPopResponseBody extends $tea.Model {
  /**
   * @example
   * deny
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * data
   */
  data?: CheckNFCBindPopResponseBodyData;
  /**
   * @example
   * 200
   */
  errCode?: string;
  /**
   * @example
   * error
   */
  errMessage?: string;
  /**
   * @example
   * 403
   */
  httpStatusCode?: number;
  /**
   * @example
   * 1skladklasmda
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: CheckNFCBindPopResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckNFCBindPopResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckNFCBindPopResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckNFCBindPopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestCredentialsRecordRequest extends $tea.Model {
  /**
   * @example
   * 34429
   */
  activityId?: string;
  /**
   * @example
   * 2023-08-07 12:00:00
   */
  dateTimeString?: string;
  endDateTime?: string;
  startDateTime?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      dateTimeString: 'DateTimeString',
      endDateTime: 'EndDateTime',
      startDateTime: 'StartDateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      dateTimeString: 'string',
      endDateTime: 'string',
      startDateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestCredentialsRecordResponseBody extends $tea.Model {
  data?: FindGuestCredentialsRecordResponseBodyData[];
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * error
   */
  errMessage?: string;
  /**
   * @example
   * 25294484-D133-5BDC-8952-243AD90CDF66
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': FindGuestCredentialsRecordResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestCredentialsRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FindGuestCredentialsRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FindGuestCredentialsRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestTicketRecordRequest extends $tea.Model {
  /**
   * @example
   * 34434
   */
  activityId?: string;
  /**
   * @example
   * 2023-09-04 15:14:00
   */
  dateTimeString?: string;
  endDateTime?: string;
  startDateTime?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      dateTimeString: 'DateTimeString',
      endDateTime: 'EndDateTime',
      startDateTime: 'StartDateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      dateTimeString: 'string',
      endDateTime: 'string',
      startDateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestTicketRecordResponseBody extends $tea.Model {
  data?: FindGuestTicketRecordResponseBodyData[];
  /**
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @example
   * error
   */
  errMessage?: string;
  /**
   * @example
   * 8D190CE8-7D76-5781-8055-0990BBD2249F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': FindGuestTicketRecordResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestTicketRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FindGuestTicketRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FindGuestTicketRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllActivityInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  activityId?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllActivityInfoResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: QueryAllActivityInfoResponseBodyData[];
  /**
   * @example
   * null
   */
  message?: string;
  requestId?: string;
  /**
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
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryAllActivityInfoResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllActivityInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAllActivityInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryAllActivityInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderSessionListPopRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4546
   */
  activityId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * asdojzopf
   */
  nfcId?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      nfcId: 'NfcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      nfcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderSessionListPopResponseBody extends $tea.Model {
  /**
   * @example
   * deny
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * data
   */
  data?: QueryOrderSessionListPopResponseBodyData[];
  /**
   * @example
   * 200
   */
  errCode?: string;
  /**
   * @example
   * error
   */
  errMessage?: string;
  /**
   * @example
   * 403
   */
  httpStatusCode?: number;
  /**
   * @example
   * 1skladklasmda
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: { 'type': 'array', 'itemType': QueryOrderSessionListPopResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderSessionListPopResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryOrderSessionListPopResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryOrderSessionListPopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionByActivityIdPopRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4546
   */
  activityId?: number;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionByActivityIdPopResponseBody extends $tea.Model {
  /**
   * @example
   * deny
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * data
   */
  data?: QuerySessionByActivityIdPopResponseBodyData[];
  /**
   * @example
   * 200
   */
  errCode?: string;
  /**
   * @example
   * error
   */
  errMessage?: string;
  /**
   * @example
   * 403
   */
  httpStatusCode?: number;
  /**
   * @example
   * 1skladklasmda
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: { 'type': 'array', 'itemType': QuerySessionByActivityIdPopResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionByActivityIdPopResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySessionByActivityIdPopResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySessionByActivityIdPopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionListPopRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4546
   */
  activityId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * asdojzopf
   */
  nfcId?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      nfcId: 'NfcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      nfcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionListPopResponseBody extends $tea.Model {
  /**
   * @example
   * deny
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * data
   */
  data?: QuerySessionListPopResponseBodyData[];
  /**
   * @example
   * 200
   */
  errCode?: string;
  /**
   * @example
   * error
   */
  errMessage?: string;
  /**
   * @example
   * 403
   */
  httpStatusCode?: number;
  /**
   * @example
   * 1skladklasmda
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: { 'type': 'array', 'itemType': QuerySessionListPopResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionListPopResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySessionListPopResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySessionListPopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySignInRecordPopRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4546
   */
  activityId?: number;
  /**
   * @example
   * 2024-09-25 14:11
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 2024-09-25 14:11
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      endTime: 'EndTime',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      endTime: 'string',
      pageNum: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySignInRecordPopResponseBody extends $tea.Model {
  /**
   * @example
   * deny
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * data
   */
  data?: QuerySignInRecordPopResponseBodyData[];
  /**
   * @example
   * 200
   */
  errCode?: string;
  /**
   * @example
   * error
   */
  errMessage?: string;
  /**
   * @example
   * 403
   */
  httpStatusCode?: number;
  /**
   * @example
   * 1skladklasmda
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: { 'type': 'array', 'itemType': QuerySignInRecordPopResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySignInRecordPopResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySignInRecordPopResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySignInRecordPopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleActivityInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  activityId?: string;
  companyName?: string;
  customerName?: string;
  /**
   * @example
   * 12233445
   */
  mobile?: string;
  QRCode?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      companyName: 'CompanyName',
      customerName: 'CustomerName',
      mobile: 'Mobile',
      QRCode: 'QRCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      companyName: 'string',
      customerName: 'string',
      mobile: 'string',
      QRCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleActivityInfoResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: QuerySingleActivityInfoResponseBodyData[];
  /**
   * @example
   * null
   */
  message?: string;
  requestId?: string;
  /**
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
      code: 'string',
      data: { 'type': 'array', 'itemType': QuerySingleActivityInfoResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleActivityInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySingleActivityInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySingleActivityInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSignInInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  activityId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  QRCode?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      QRCode: 'QRCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      QRCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSignInInfoResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  message?: string;
  requestId?: string;
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
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSignInInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncSignInInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SyncSignInInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketOrCredentialsSignInPopRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4546
   */
  activityId?: string;
  /**
   * @example
   * 4546-100000
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 会议名称
   */
  conferenceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Z10
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 入口名称
   */
  entryName?: string;
  /**
   * @example
   * 429005111100000
   */
  idcard?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-09-25 14:11
   */
  signTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      code: 'Code',
      conferenceName: 'ConferenceName',
      deviceId: 'DeviceId',
      entryName: 'EntryName',
      idcard: 'Idcard',
      signTime: 'SignTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      code: 'string',
      conferenceName: 'string',
      deviceId: 'string',
      entryName: 'string',
      idcard: 'string',
      signTime: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketOrCredentialsSignInPopResponseBody extends $tea.Model {
  /**
   * @example
   * deny
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * data
   */
  data?: any;
  /**
   * @example
   * 200
   */
  errCode?: string;
  /**
   * @example
   * error
   */
  errMessage?: string;
  /**
   * @example
   * 403
   */
  httpStatusCode?: number;
  /**
   * @example
   * 1skladklasmda
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: 'any',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketOrCredentialsSignInPopResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TicketOrCredentialsSignInPopResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TicketOrCredentialsSignInPopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCredentialsStatusPopRequest extends $tea.Model {
  /**
   * @example
   * 4546-100000
   */
  code?: string;
  /**
   * @example
   * 张三
   */
  proxyRecipientName?: string;
  /**
   * @example
   * 14787627188
   */
  proxyRecipientPhoneNumber?: string;
  /**
   * @example
   * Z30
   */
  receiptLocation?: string;
  /**
   * @example
   * 429005111100000
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      proxyRecipientName: 'ProxyRecipientName',
      proxyRecipientPhoneNumber: 'ProxyRecipientPhoneNumber',
      receiptLocation: 'ReceiptLocation',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      proxyRecipientName: 'string',
      proxyRecipientPhoneNumber: 'string',
      receiptLocation: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCredentialsStatusPopResponseBody extends $tea.Model {
  /**
   * @example
   * deny
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * data
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  errCode?: string;
  /**
   * @example
   * error
   */
  errMessage?: string;
  /**
   * @example
   * 403
   */
  httpStatusCode?: number;
  /**
   * @example
   * 1skladklasmda
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCredentialsStatusPopResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCredentialsStatusPopResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCredentialsStatusPopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTicketRecordByticketCodePopRequest extends $tea.Model {
  /**
   * @example
   * 3402
   */
  agendaId?: string;
  /**
   * @example
   * 4546-100000
   */
  code?: string;
  /**
   * @example
   * boarding
   */
  event?: string;
  /**
   * @example
   * 12345
   */
  sceneId?: string;
  /**
   * @example
   * 2024-09-25 14:11
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      agendaId: 'AgendaId',
      code: 'Code',
      event: 'Event',
      sceneId: 'SceneId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agendaId: 'string',
      code: 'string',
      event: 'string',
      sceneId: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTicketRecordByticketCodePopResponseBody extends $tea.Model {
  /**
   * @example
   * deny
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * data
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  errCode?: string;
  /**
   * @example
   * error
   */
  errMessage?: string;
  /**
   * @example
   * 403
   */
  httpStatusCode?: number;
  /**
   * @example
   * 1skladklasmda
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTicketRecordByticketCodePopResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTicketRecordByticketCodePopResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTicketRecordByticketCodePopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckNFCBindPopResponseBodyData extends $tea.Model {
  /**
   * @example
   * 0
   */
  isGlobal?: number;
  /**
   * @example
   * true
   */
  isSign?: boolean;
  static names(): { [key: string]: string } {
    return {
      isGlobal: 'IsGlobal',
      isSign: 'IsSign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isGlobal: 'number',
      isSign: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestCredentialsRecordResponseBodyDataChannelLevelInfoLevelOneOwner extends $tea.Model {
  /**
   * @example
   * hBCycGELqJd6LEqSWKiLCQ==
   */
  ownerEmpIdOrTelephone?: string;
  /**
   * @example
   * buc_396545
   */
  ownerName?: string;
  /**
   * @example
   * hBCycGELqJd6LEqSWKiLCQ==
   */
  ownerNickName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerEmpIdOrTelephone: 'OwnerEmpIdOrTelephone',
      ownerName: 'OwnerName',
      ownerNickName: 'OwnerNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerEmpIdOrTelephone: 'string',
      ownerName: 'string',
      ownerNickName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestCredentialsRecordResponseBodyDataChannelLevelInfoLevelThreeOwner extends $tea.Model {
  /**
   * @example
   * hBCycGELqJd6LEqSWKiLCQ==
   */
  ownerEmpIdOrTelephone?: string;
  /**
   * @example
   * buc_160953
   */
  ownerName?: string;
  /**
   * @example
   * hBCycGELqJd6LEqSWKiLCQ==
   */
  ownerNickName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerEmpIdOrTelephone: 'OwnerEmpIdOrTelephone',
      ownerName: 'OwnerName',
      ownerNickName: 'OwnerNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerEmpIdOrTelephone: 'string',
      ownerName: 'string',
      ownerNickName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestCredentialsRecordResponseBodyDataChannelLevelInfoLevelTwoOwner extends $tea.Model {
  /**
   * @example
   * hBCycGELqJd6LEqSWKiLCQ==
   */
  ownerEmpIdOrTelephone?: string;
  /**
   * @example
   * buc_87239
   */
  ownerName?: string;
  /**
   * @example
   * hBCycGELqJd6LEqSWKiLCQ==
   */
  ownerNickName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerEmpIdOrTelephone: 'OwnerEmpIdOrTelephone',
      ownerName: 'OwnerName',
      ownerNickName: 'OwnerNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerEmpIdOrTelephone: 'string',
      ownerName: 'string',
      ownerNickName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestCredentialsRecordResponseBodyDataChannelLevelInfo extends $tea.Model {
  /**
   * @example
   * 1401
   */
  channelId?: number;
  channelName?: string;
  levelOneChannelName?: string;
  levelOneOwner?: FindGuestCredentialsRecordResponseBodyDataChannelLevelInfoLevelOneOwner[];
  levelThreeChannelName?: string;
  levelThreeOwner?: FindGuestCredentialsRecordResponseBodyDataChannelLevelInfoLevelThreeOwner[];
  levelTwoChannelName?: string;
  levelTwoOwner?: FindGuestCredentialsRecordResponseBodyDataChannelLevelInfoLevelTwoOwner[];
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      channelName: 'ChannelName',
      levelOneChannelName: 'LevelOneChannelName',
      levelOneOwner: 'LevelOneOwner',
      levelThreeChannelName: 'LevelThreeChannelName',
      levelThreeOwner: 'LevelThreeOwner',
      levelTwoChannelName: 'LevelTwoChannelName',
      levelTwoOwner: 'LevelTwoOwner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'number',
      channelName: 'string',
      levelOneChannelName: 'string',
      levelOneOwner: { 'type': 'array', 'itemType': FindGuestCredentialsRecordResponseBodyDataChannelLevelInfoLevelOneOwner },
      levelThreeChannelName: 'string',
      levelThreeOwner: { 'type': 'array', 'itemType': FindGuestCredentialsRecordResponseBodyDataChannelLevelInfoLevelThreeOwner },
      levelTwoChannelName: 'string',
      levelTwoOwner: { 'type': 'array', 'itemType': FindGuestCredentialsRecordResponseBodyDataChannelLevelInfoLevelTwoOwner },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestCredentialsRecordResponseBodyData extends $tea.Model {
  /**
   * @example
   * {}
   */
  admin?: { [key: string]: any };
  /**
   * @example
   * 1401
   */
  channelId?: number;
  channelLevelInfo?: FindGuestCredentialsRecordResponseBodyDataChannelLevelInfo;
  companyName?: string;
  /**
   * @example
   * 3602-10010215
   */
  credentialsCode?: string;
  credentialsName?: string;
  /**
   * @example
   * IjEqZpp8Wn29+sqOr3hxXuOqn6CyKYNSQ5dmMA0txiM=
   */
  idNumber?: string;
  idType?: string;
  name?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      admin: 'Admin',
      channelId: 'ChannelId',
      channelLevelInfo: 'ChannelLevelInfo',
      companyName: 'CompanyName',
      credentialsCode: 'CredentialsCode',
      credentialsName: 'CredentialsName',
      idNumber: 'IdNumber',
      idType: 'IdType',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      admin: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      channelId: 'number',
      channelLevelInfo: FindGuestCredentialsRecordResponseBodyDataChannelLevelInfo,
      companyName: 'string',
      credentialsCode: 'string',
      credentialsName: 'string',
      idNumber: 'string',
      idType: 'string',
      name: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestTicketRecordResponseBodyDataChannelLevelInfoLevelOneOwner extends $tea.Model {
  /**
   * @example
   * IjEqZpp8Wn29+sqOr3hxXuOqn6CyKYNSQ5dmMA0txiM=
   */
  ownerEmpIdOrTelephone?: string;
  ownerName?: string;
  /**
   * @example
   * dUffKUpLXP5LFGeJa+Rs8Q==
   */
  ownerNickName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerEmpIdOrTelephone: 'OwnerEmpIdOrTelephone',
      ownerName: 'OwnerName',
      ownerNickName: 'OwnerNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerEmpIdOrTelephone: 'string',
      ownerName: 'string',
      ownerNickName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestTicketRecordResponseBodyDataChannelLevelInfoLevelThreeOwner extends $tea.Model {
  /**
   * @example
   * IjEqZpp8Wn29+sqOr3hxXuOqn6CyKYNSQ5dmMA0txiM=
   */
  ownerEmpIdOrTelephone?: string;
  ownerName?: string;
  /**
   * @example
   * dUffKUpLXP5LFGeJa+Rs8Q==
   */
  ownerNickName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerEmpIdOrTelephone: 'OwnerEmpIdOrTelephone',
      ownerName: 'OwnerName',
      ownerNickName: 'OwnerNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerEmpIdOrTelephone: 'string',
      ownerName: 'string',
      ownerNickName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestTicketRecordResponseBodyDataChannelLevelInfoLevelTwoOwner extends $tea.Model {
  /**
   * @example
   * IjEqZpp8Wn29+sqOr3hxXuOqn6CyKYNSQ5dmMA0txiM=
   */
  ownerEmpIdOrTelephone?: string;
  ownerName?: string;
  /**
   * @example
   * dUffKUpLXP5LFGeJa+Rs8Q==
   */
  ownerNickName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerEmpIdOrTelephone: 'OwnerEmpIdOrTelephone',
      ownerName: 'OwnerName',
      ownerNickName: 'OwnerNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerEmpIdOrTelephone: 'string',
      ownerName: 'string',
      ownerNickName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestTicketRecordResponseBodyDataChannelLevelInfo extends $tea.Model {
  /**
   * @example
   * 1401
   */
  channelId?: number;
  /**
   * @example
   * VIP
   */
  channelName?: string;
  /**
   * @example
   * VIP
   */
  levelOneChannelName?: string;
  levelOneOwner?: FindGuestTicketRecordResponseBodyDataChannelLevelInfoLevelOneOwner[];
  /**
   * @example
   * VIP
   */
  levelThreeChannelName?: string;
  levelThreeOwner?: FindGuestTicketRecordResponseBodyDataChannelLevelInfoLevelThreeOwner[];
  /**
   * @example
   * VIP
   */
  levelTwoChannelName?: string;
  levelTwoOwner?: FindGuestTicketRecordResponseBodyDataChannelLevelInfoLevelTwoOwner[];
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      channelName: 'ChannelName',
      levelOneChannelName: 'LevelOneChannelName',
      levelOneOwner: 'LevelOneOwner',
      levelThreeChannelName: 'LevelThreeChannelName',
      levelThreeOwner: 'LevelThreeOwner',
      levelTwoChannelName: 'LevelTwoChannelName',
      levelTwoOwner: 'LevelTwoOwner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'number',
      channelName: 'string',
      levelOneChannelName: 'string',
      levelOneOwner: { 'type': 'array', 'itemType': FindGuestTicketRecordResponseBodyDataChannelLevelInfoLevelOneOwner },
      levelThreeChannelName: 'string',
      levelThreeOwner: { 'type': 'array', 'itemType': FindGuestTicketRecordResponseBodyDataChannelLevelInfoLevelThreeOwner },
      levelTwoChannelName: 'string',
      levelTwoOwner: { 'type': 'array', 'itemType': FindGuestTicketRecordResponseBodyDataChannelLevelInfoLevelTwoOwner },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindGuestTicketRecordResponseBodyData extends $tea.Model {
  channelLevelInfo?: FindGuestTicketRecordResponseBodyDataChannelLevelInfo;
  companyName?: string;
  /**
   * @example
   * 2023-10-31,2023-11-02
   */
  equityDates?: string;
  /**
   * @example
   * -1
   */
  healthCommitmentStatus?: number;
  /**
   * @example
   * IjEqZpp8Wn29+sqOr3hxXuOqn6CyKYNSQ5dmMA0txiM=
   */
  idNumber?: string;
  idType?: string;
  name?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 3702-10240842
   */
  ticketCode?: string;
  ticketName?: string;
  /**
   * @example
   * 1
   */
  ticketType?: string;
  static names(): { [key: string]: string } {
    return {
      channelLevelInfo: 'ChannelLevelInfo',
      companyName: 'CompanyName',
      equityDates: 'EquityDates',
      healthCommitmentStatus: 'HealthCommitmentStatus',
      idNumber: 'IdNumber',
      idType: 'IdType',
      name: 'Name',
      status: 'Status',
      ticketCode: 'TicketCode',
      ticketName: 'TicketName',
      ticketType: 'TicketType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelLevelInfo: FindGuestTicketRecordResponseBodyDataChannelLevelInfo,
      companyName: 'string',
      equityDates: 'string',
      healthCommitmentStatus: 'number',
      idNumber: 'string',
      idType: 'string',
      name: 'string',
      status: 'number',
      ticketCode: 'string',
      ticketName: 'string',
      ticketType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllActivityInfoResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1234
   */
  activityId?: number;
  /**
   * @example
   * vip
   */
  channelName?: string;
  companyName?: string;
  /**
   * @example
   * test
   */
  customerName?: string;
  /**
   * @example
   * xx@aliyun.com
   */
  email?: string;
  id?: number;
  /**
   * @example
   * true
   */
  isVipCustomer?: string;
  /**
   * @example
   * 12123455
   */
  mobile?: string;
  QRCode?: string;
  /**
   * @example
   * {}
   */
  reportFields?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      channelName: 'ChannelName',
      companyName: 'CompanyName',
      customerName: 'CustomerName',
      email: 'Email',
      id: 'Id',
      isVipCustomer: 'IsVipCustomer',
      mobile: 'Mobile',
      QRCode: 'QRCode',
      reportFields: 'ReportFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      channelName: 'string',
      companyName: 'string',
      customerName: 'string',
      email: 'string',
      id: 'number',
      isVipCustomer: 'string',
      mobile: 'string',
      QRCode: 'string',
      reportFields: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderSessionListPopResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  sessionId?: number;
  /**
   * @example
   * 2024-09-25 14:11
   */
  signInDate?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      signInDate: 'SignInDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'number',
      signInDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionByActivityIdPopResponseBodyData extends $tea.Model {
  /**
   * @example
   * 描述
   */
  description?: string;
  /**
   * @example
   * description
   */
  descriptionEn?: string;
  /**
   * @example
   * 2024-09-25 14:11
   */
  endDateTime?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 地点
   */
  location?: string;
  /**
   * @example
   * 1234
   */
  name?: string;
  /**
   * @example
   * name
   */
  nameEn?: string;
  /**
   * @example
   * 2024-09-25 14:11
   */
  startDateTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      descriptionEn: 'DescriptionEn',
      endDateTime: 'EndDateTime',
      id: 'Id',
      location: 'Location',
      name: 'Name',
      nameEn: 'NameEn',
      startDateTime: 'StartDateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      descriptionEn: 'string',
      endDateTime: 'string',
      id: 'number',
      location: 'string',
      name: 'string',
      nameEn: 'string',
      startDateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionListPopResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * code
   */
  code?: string;
  /**
   * @example
   * 2024-09-25 14:11
   */
  endTime?: string;
  /**
   * @remarks
   * id
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * location
   * 
   * @example
   * location
   */
  location?: string;
  /**
   * @remarks
   * name
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @example
   * 2024-09-25 14:11
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endTime: 'EndTime',
      id: 'Id',
      location: 'Location',
      name: 'Name',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      endTime: 'string',
      id: 'number',
      location: 'string',
      name: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySignInRecordPopResponseBodyData extends $tea.Model {
  /**
   * @example
   * boarding
   */
  event?: string;
  /**
   * @remarks
   * nfcid
   * 
   * @example
   * cshdsaodhoashd
   */
  rfid?: string;
  /**
   * @remarks
   * sessionId
   * 
   * @example
   * 2001
   */
  sessionId?: number;
  /**
   * @example
   * 2024-09-25 14:11
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      rfid: 'Rfid',
      sessionId: 'SessionId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      rfid: 'string',
      sessionId: 'number',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySingleActivityInfoResponseBodyData extends $tea.Model {
  /**
   * @example
   * 123
   */
  activityId?: number;
  /**
   * @example
   * vip
   */
  channelName?: string;
  /**
   * @example
   * aliyun
   */
  companyName?: string;
  /**
   * @example
   * xxx
   */
  customerName?: string;
  /**
   * @example
   * xx@aliyun.com
   */
  email?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * true
   */
  isVipCustomer?: string;
  /**
   * @example
   * 234355**
   */
  mobile?: string;
  /**
   * @example
   * http://xxx.com?a=xx
   */
  QRCode?: string;
  /**
   * @example
   * {}
   */
  reportFields?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      channelName: 'ChannelName',
      companyName: 'CompanyName',
      customerName: 'CustomerName',
      email: 'Email',
      id: 'Id',
      isVipCustomer: 'IsVipCustomer',
      mobile: 'Mobile',
      QRCode: 'QRCode',
      reportFields: 'ReportFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      channelName: 'string',
      companyName: 'string',
      customerName: 'string',
      email: 'string',
      id: 'number',
      isVipCustomer: 'string',
      mobile: 'string',
      QRCode: 'string',
      reportFields: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("marketing_event", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @param request - AddSumRecordFlowPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSumRecordFlowPopResponse
   */
  async addSumRecordFlowPopWithOptions(request: AddSumRecordFlowPopRequest, runtime: $Util.RuntimeOptions): Promise<AddSumRecordFlowPopResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.conferenceName)) {
      query["ConferenceName"] = request.conferenceName;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.entryName)) {
      query["EntryName"] = request.entryName;
    }

    if (!Util.isUnset(request.idcard)) {
      query["Idcard"] = request.idcard;
    }

    if (!Util.isUnset(request.signTime)) {
      query["SignTime"] = request.signTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddSumRecordFlowPop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddSumRecordFlowPopResponse>(await this.callApi(params, req, runtime), new AddSumRecordFlowPopResponse({}));
  }

  /**
   * @param request - AddSumRecordFlowPopRequest
   * @returns AddSumRecordFlowPopResponse
   */
  async addSumRecordFlowPop(request: AddSumRecordFlowPopRequest): Promise<AddSumRecordFlowPopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSumRecordFlowPopWithOptions(request, runtime);
  }

  /**
   * @param request - BindExhibitorRfidPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindExhibitorRfidPopResponse
   */
  async bindExhibitorRfidPopWithOptions(request: BindExhibitorRfidPopRequest, runtime: $Util.RuntimeOptions): Promise<BindExhibitorRfidPopResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.gmtCreate)) {
      query["GmtCreate"] = request.gmtCreate;
    }

    if (!Util.isUnset(request.gmtModified)) {
      query["GmtModified"] = request.gmtModified;
    }

    if (!Util.isUnset(request.guestTicketRecordId)) {
      query["GuestTicketRecordId"] = request.guestTicketRecordId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.rfid)) {
      query["Rfid"] = request.rfid;
    }

    if (!Util.isUnset(request.ticketCode)) {
      query["TicketCode"] = request.ticketCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindExhibitorRfidPop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindExhibitorRfidPopResponse>(await this.callApi(params, req, runtime), new BindExhibitorRfidPopResponse({}));
  }

  /**
   * @param request - BindExhibitorRfidPopRequest
   * @returns BindExhibitorRfidPopResponse
   */
  async bindExhibitorRfidPop(request: BindExhibitorRfidPopRequest): Promise<BindExhibitorRfidPopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindExhibitorRfidPopWithOptions(request, runtime);
  }

  /**
   * @param request - BindGuestRfidPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindGuestRfidPopResponse
   */
  async bindGuestRfidPopWithOptions(request: BindGuestRfidPopRequest, runtime: $Util.RuntimeOptions): Promise<BindGuestRfidPopResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.gmtCreate)) {
      query["GmtCreate"] = request.gmtCreate;
    }

    if (!Util.isUnset(request.gmtModified)) {
      query["GmtModified"] = request.gmtModified;
    }

    if (!Util.isUnset(request.guestTicketRecordId)) {
      query["GuestTicketRecordId"] = request.guestTicketRecordId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.rfid)) {
      query["Rfid"] = request.rfid;
    }

    if (!Util.isUnset(request.ticketCode)) {
      query["TicketCode"] = request.ticketCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindGuestRfidPop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindGuestRfidPopResponse>(await this.callApi(params, req, runtime), new BindGuestRfidPopResponse({}));
  }

  /**
   * @param request - BindGuestRfidPopRequest
   * @returns BindGuestRfidPopResponse
   */
  async bindGuestRfidPop(request: BindGuestRfidPopRequest): Promise<BindGuestRfidPopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindGuestRfidPopWithOptions(request, runtime);
  }

  /**
   * @param request - CheckNFCBindPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckNFCBindPopResponse
   */
  async checkNFCBindPopWithOptions(request: CheckNFCBindPopRequest, runtime: $Util.RuntimeOptions): Promise<CheckNFCBindPopResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!Util.isUnset(request.nfcId)) {
      query["NfcId"] = request.nfcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckNFCBindPop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckNFCBindPopResponse>(await this.callApi(params, req, runtime), new CheckNFCBindPopResponse({}));
  }

  /**
   * @param request - CheckNFCBindPopRequest
   * @returns CheckNFCBindPopResponse
   */
  async checkNFCBindPop(request: CheckNFCBindPopRequest): Promise<CheckNFCBindPopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkNFCBindPopWithOptions(request, runtime);
  }

  /**
   * 拉取领证人员记录
   * 
   * @param request - FindGuestCredentialsRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FindGuestCredentialsRecordResponse
   */
  async findGuestCredentialsRecordWithOptions(request: FindGuestCredentialsRecordRequest, runtime: $Util.RuntimeOptions): Promise<FindGuestCredentialsRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!Util.isUnset(request.dateTimeString)) {
      query["DateTimeString"] = request.dateTimeString;
    }

    if (!Util.isUnset(request.endDateTime)) {
      query["EndDateTime"] = request.endDateTime;
    }

    if (!Util.isUnset(request.startDateTime)) {
      query["StartDateTime"] = request.startDateTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FindGuestCredentialsRecord",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FindGuestCredentialsRecordResponse>(await this.callApi(params, req, runtime), new FindGuestCredentialsRecordResponse({}));
  }

  /**
   * 拉取领证人员记录
   * 
   * @param request - FindGuestCredentialsRecordRequest
   * @returns FindGuestCredentialsRecordResponse
   */
  async findGuestCredentialsRecord(request: FindGuestCredentialsRecordRequest): Promise<FindGuestCredentialsRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findGuestCredentialsRecordWithOptions(request, runtime);
  }

  /**
   * 云栖大会获取取票人信息list接口
   * 
   * @param request - FindGuestTicketRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FindGuestTicketRecordResponse
   */
  async findGuestTicketRecordWithOptions(request: FindGuestTicketRecordRequest, runtime: $Util.RuntimeOptions): Promise<FindGuestTicketRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!Util.isUnset(request.dateTimeString)) {
      query["DateTimeString"] = request.dateTimeString;
    }

    if (!Util.isUnset(request.endDateTime)) {
      query["EndDateTime"] = request.endDateTime;
    }

    if (!Util.isUnset(request.startDateTime)) {
      query["StartDateTime"] = request.startDateTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FindGuestTicketRecord",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FindGuestTicketRecordResponse>(await this.callApi(params, req, runtime), new FindGuestTicketRecordResponse({}));
  }

  /**
   * 云栖大会获取取票人信息list接口
   * 
   * @param request - FindGuestTicketRecordRequest
   * @returns FindGuestTicketRecordResponse
   */
  async findGuestTicketRecord(request: FindGuestTicketRecordRequest): Promise<FindGuestTicketRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findGuestTicketRecordWithOptions(request, runtime);
  }

  /**
   * @param request - QueryAllActivityInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAllActivityInfoResponse
   */
  async queryAllActivityInfoWithOptions(request: QueryAllActivityInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryAllActivityInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAllActivityInfo",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAllActivityInfoResponse>(await this.callApi(params, req, runtime), new QueryAllActivityInfoResponse({}));
  }

  /**
   * @param request - QueryAllActivityInfoRequest
   * @returns QueryAllActivityInfoResponse
   */
  async queryAllActivityInfo(request: QueryAllActivityInfoRequest): Promise<QueryAllActivityInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAllActivityInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryOrderSessionListPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOrderSessionListPopResponse
   */
  async queryOrderSessionListPopWithOptions(request: QueryOrderSessionListPopRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderSessionListPopResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!Util.isUnset(request.nfcId)) {
      query["NfcId"] = request.nfcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrderSessionListPop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOrderSessionListPopResponse>(await this.callApi(params, req, runtime), new QueryOrderSessionListPopResponse({}));
  }

  /**
   * @param request - QueryOrderSessionListPopRequest
   * @returns QueryOrderSessionListPopResponse
   */
  async queryOrderSessionListPop(request: QueryOrderSessionListPopRequest): Promise<QueryOrderSessionListPopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderSessionListPopWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySessionByActivityIdPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySessionByActivityIdPopResponse
   */
  async querySessionByActivityIdPopWithOptions(request: QuerySessionByActivityIdPopRequest, runtime: $Util.RuntimeOptions): Promise<QuerySessionByActivityIdPopResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySessionByActivityIdPop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySessionByActivityIdPopResponse>(await this.callApi(params, req, runtime), new QuerySessionByActivityIdPopResponse({}));
  }

  /**
   * @param request - QuerySessionByActivityIdPopRequest
   * @returns QuerySessionByActivityIdPopResponse
   */
  async querySessionByActivityIdPop(request: QuerySessionByActivityIdPopRequest): Promise<QuerySessionByActivityIdPopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySessionByActivityIdPopWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySessionListPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySessionListPopResponse
   */
  async querySessionListPopWithOptions(request: QuerySessionListPopRequest, runtime: $Util.RuntimeOptions): Promise<QuerySessionListPopResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!Util.isUnset(request.nfcId)) {
      query["NfcId"] = request.nfcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySessionListPop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySessionListPopResponse>(await this.callApi(params, req, runtime), new QuerySessionListPopResponse({}));
  }

  /**
   * @param request - QuerySessionListPopRequest
   * @returns QuerySessionListPopResponse
   */
  async querySessionListPop(request: QuerySessionListPopRequest): Promise<QuerySessionListPopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySessionListPopWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySignInRecordPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySignInRecordPopResponse
   */
  async querySignInRecordPopWithOptions(request: QuerySignInRecordPopRequest, runtime: $Util.RuntimeOptions): Promise<QuerySignInRecordPopResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySignInRecordPop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySignInRecordPopResponse>(await this.callApi(params, req, runtime), new QuerySignInRecordPopResponse({}));
  }

  /**
   * @param request - QuerySignInRecordPopRequest
   * @returns QuerySignInRecordPopResponse
   */
  async querySignInRecordPop(request: QuerySignInRecordPopRequest): Promise<QuerySignInRecordPopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySignInRecordPopWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySingleActivityInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySingleActivityInfoResponse
   */
  async querySingleActivityInfoWithOptions(request: QuerySingleActivityInfoRequest, runtime: $Util.RuntimeOptions): Promise<QuerySingleActivityInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySingleActivityInfo",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySingleActivityInfoResponse>(await this.callApi(params, req, runtime), new QuerySingleActivityInfoResponse({}));
  }

  /**
   * @param request - QuerySingleActivityInfoRequest
   * @returns QuerySingleActivityInfoResponse
   */
  async querySingleActivityInfo(request: QuerySingleActivityInfoRequest): Promise<QuerySingleActivityInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySingleActivityInfoWithOptions(request, runtime);
  }

  /**
   * @param request - SyncSignInInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncSignInInfoResponse
   */
  async syncSignInInfoWithOptions(request: SyncSignInInfoRequest, runtime: $Util.RuntimeOptions): Promise<SyncSignInInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SyncSignInInfo",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncSignInInfoResponse>(await this.callApi(params, req, runtime), new SyncSignInInfoResponse({}));
  }

  /**
   * @param request - SyncSignInInfoRequest
   * @returns SyncSignInInfoResponse
   */
  async syncSignInInfo(request: SyncSignInInfoRequest): Promise<SyncSignInInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncSignInInfoWithOptions(request, runtime);
  }

  /**
   * @param request - TicketOrCredentialsSignInPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TicketOrCredentialsSignInPopResponse
   */
  async ticketOrCredentialsSignInPopWithOptions(request: TicketOrCredentialsSignInPopRequest, runtime: $Util.RuntimeOptions): Promise<TicketOrCredentialsSignInPopResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.conferenceName)) {
      query["ConferenceName"] = request.conferenceName;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.entryName)) {
      query["EntryName"] = request.entryName;
    }

    if (!Util.isUnset(request.idcard)) {
      query["Idcard"] = request.idcard;
    }

    if (!Util.isUnset(request.signTime)) {
      query["SignTime"] = request.signTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TicketOrCredentialsSignInPop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TicketOrCredentialsSignInPopResponse>(await this.callApi(params, req, runtime), new TicketOrCredentialsSignInPopResponse({}));
  }

  /**
   * @param request - TicketOrCredentialsSignInPopRequest
   * @returns TicketOrCredentialsSignInPopResponse
   */
  async ticketOrCredentialsSignInPop(request: TicketOrCredentialsSignInPopRequest): Promise<TicketOrCredentialsSignInPopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ticketOrCredentialsSignInPopWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateCredentialsStatusPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCredentialsStatusPopResponse
   */
  async updateCredentialsStatusPopWithOptions(request: UpdateCredentialsStatusPopRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCredentialsStatusPopResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.proxyRecipientName)) {
      query["ProxyRecipientName"] = request.proxyRecipientName;
    }

    if (!Util.isUnset(request.proxyRecipientPhoneNumber)) {
      query["ProxyRecipientPhoneNumber"] = request.proxyRecipientPhoneNumber;
    }

    if (!Util.isUnset(request.receiptLocation)) {
      query["ReceiptLocation"] = request.receiptLocation;
    }

    if (!Util.isUnset(request.time)) {
      query["Time"] = request.time;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCredentialsStatusPop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCredentialsStatusPopResponse>(await this.callApi(params, req, runtime), new UpdateCredentialsStatusPopResponse({}));
  }

  /**
   * @param request - UpdateCredentialsStatusPopRequest
   * @returns UpdateCredentialsStatusPopResponse
   */
  async updateCredentialsStatusPop(request: UpdateCredentialsStatusPopRequest): Promise<UpdateCredentialsStatusPopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCredentialsStatusPopWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateTicketRecordByticketCodePopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTicketRecordByticketCodePopResponse
   */
  async updateTicketRecordByticketCodePopWithOptions(request: UpdateTicketRecordByticketCodePopRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTicketRecordByticketCodePopResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agendaId)) {
      query["AgendaId"] = request.agendaId;
    }

    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.event)) {
      query["Event"] = request.event;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.time)) {
      query["Time"] = request.time;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTicketRecordByticketCodePop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTicketRecordByticketCodePopResponse>(await this.callApi(params, req, runtime), new UpdateTicketRecordByticketCodePopResponse({}));
  }

  /**
   * @param request - UpdateTicketRecordByticketCodePopRequest
   * @returns UpdateTicketRecordByticketCodePopResponse
   */
  async updateTicketRecordByticketCodePop(request: UpdateTicketRecordByticketCodePopRequest): Promise<UpdateTicketRecordByticketCodePopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTicketRecordByticketCodePopWithOptions(request, runtime);
  }

}
