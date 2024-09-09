// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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

}
