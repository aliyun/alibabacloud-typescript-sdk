// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetMessagesRequest extends $tea.Model {
  paramsJson?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'ParamsJson',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessagesResponseBody extends $tea.Model {
  bizMessages?: GetMessagesResponseBodyBizMessages[];
  errorCode?: string;
  logsId?: string;
  msg?: string;
  requestId?: string;
  subCode?: string;
  subMsg?: string;
  static names(): { [key: string]: string } {
    return {
      bizMessages: 'BizMessages',
      errorCode: 'ErrorCode',
      logsId: 'LogsId',
      msg: 'Msg',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMsg: 'SubMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizMessages: { 'type': 'array', 'itemType': GetMessagesResponseBodyBizMessages },
      errorCode: 'string',
      logsId: 'string',
      msg: 'string',
      requestId: 'string',
      subCode: 'string',
      subMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMessagesResponseBody;
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
      body: GetMessagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessagesRequest extends $tea.Model {
  msgIds?: { [key: string]: any };
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      msgIds: 'MsgIds',
      paramsJson: 'ParamsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessagesShrinkRequest extends $tea.Model {
  msgIdsShrink?: string;
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      msgIdsShrink: 'MsgIds',
      paramsJson: 'ParamsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgIdsShrink: 'string',
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessagesResponseBody extends $tea.Model {
  errorCode?: string;
  logsId?: string;
  msg?: string;
  requestId?: string;
  returnCode?: string;
  returnMessage?: string;
  returnValue?: string;
  subCode?: string;
  subMsg?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      logsId: 'LogsId',
      msg: 'Msg',
      requestId: 'RequestId',
      returnCode: 'ReturnCode',
      returnMessage: 'ReturnMessage',
      returnValue: 'ReturnValue',
      subCode: 'SubCode',
      subMsg: 'SubMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      logsId: 'string',
      msg: 'string',
      requestId: 'string',
      returnCode: 'string',
      returnMessage: 'string',
      returnValue: 'string',
      subCode: 'string',
      subMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveMessagesResponseBody;
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
      body: RemoveMessagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetCinemasRequest extends $tea.Model {
  pageIndex?: number;
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      paramsJson: 'ParamsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetCinemasResponseBody extends $tea.Model {
  cinemas?: TaobaoFilmGetCinemasResponseBodyCinemas[];
  errorCode?: string;
  logsId?: string;
  msg?: string;
  requestId?: string;
  subCode?: string;
  subMsg?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cinemas: 'Cinemas',
      errorCode: 'ErrorCode',
      logsId: 'LogsId',
      msg: 'Msg',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMsg: 'SubMsg',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cinemas: { 'type': 'array', 'itemType': TaobaoFilmGetCinemasResponseBodyCinemas },
      errorCode: 'string',
      logsId: 'string',
      msg: 'string',
      requestId: 'string',
      subCode: 'string',
      subMsg: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetCinemasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TaobaoFilmGetCinemasResponseBody;
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
      body: TaobaoFilmGetCinemasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetHotShowsRequest extends $tea.Model {
  cityCode?: number;
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      paramsJson: 'ParamsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'number',
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetHotShowsResponseBody extends $tea.Model {
  errorCode?: string;
  logsId?: string;
  msg?: string;
  requestId?: string;
  shows?: TaobaoFilmGetHotShowsResponseBodyShows[];
  subCode?: string;
  subMsg?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      logsId: 'LogsId',
      msg: 'Msg',
      requestId: 'RequestId',
      shows: 'Shows',
      subCode: 'SubCode',
      subMsg: 'SubMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      logsId: 'string',
      msg: 'string',
      requestId: 'string',
      shows: { 'type': 'array', 'itemType': TaobaoFilmGetHotShowsResponseBodyShows },
      subCode: 'string',
      subMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetHotShowsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TaobaoFilmGetHotShowsResponseBody;
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
      body: TaobaoFilmGetHotShowsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetRegionListRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'ParamsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetRegionListResponseBody extends $tea.Model {
  errorCode?: string;
  logsId?: string;
  msg?: string;
  regions?: TaobaoFilmGetRegionListResponseBodyRegions[];
  requestId?: string;
  subCode?: string;
  subMsg?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      logsId: 'LogsId',
      msg: 'Msg',
      regions: 'Regions',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMsg: 'SubMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      logsId: 'string',
      msg: 'string',
      regions: { 'type': 'array', 'itemType': TaobaoFilmGetRegionListResponseBodyRegions },
      requestId: 'string',
      subCode: 'string',
      subMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetRegionListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TaobaoFilmGetRegionListResponseBody;
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
      body: TaobaoFilmGetRegionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetSchedulesRequest extends $tea.Model {
  cinemaId?: number;
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      cinemaId: 'CinemaId',
      paramsJson: 'ParamsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cinemaId: 'number',
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetSchedulesResponseBody extends $tea.Model {
  errorCode?: string;
  logsId?: string;
  msg?: string;
  requestId?: string;
  schedules?: TaobaoFilmGetSchedulesResponseBodySchedules[];
  subCode?: string;
  subMsg?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      logsId: 'LogsId',
      msg: 'Msg',
      requestId: 'RequestId',
      schedules: 'Schedules',
      subCode: 'SubCode',
      subMsg: 'SubMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      logsId: 'string',
      msg: 'string',
      requestId: 'string',
      schedules: { 'type': 'array', 'itemType': TaobaoFilmGetSchedulesResponseBodySchedules },
      subCode: 'string',
      subMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetSchedulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TaobaoFilmGetSchedulesResponseBody;
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
      body: TaobaoFilmGetSchedulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetSeatsRequest extends $tea.Model {
  paramsJson?: string;
  scheduleId?: number;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'ParamsJson',
      scheduleId: 'ScheduleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
      scheduleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetSeatsResponseBody extends $tea.Model {
  errorCode?: string;
  logsId?: string;
  msg?: string;
  requestId?: string;
  seatMap?: TaobaoFilmGetSeatsResponseBodySeatMap;
  subCode?: string;
  subMsg?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      logsId: 'LogsId',
      msg: 'Msg',
      requestId: 'RequestId',
      seatMap: 'SeatMap',
      subCode: 'SubCode',
      subMsg: 'SubMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      logsId: 'string',
      msg: 'string',
      requestId: 'string',
      seatMap: TaobaoFilmGetSeatsResponseBodySeatMap,
      subCode: 'string',
      subMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetSeatsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TaobaoFilmGetSeatsResponseBody;
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
      body: TaobaoFilmGetSeatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetShowCommentsRequest extends $tea.Model {
  pageIndex?: number;
  paramsJson?: string;
  showId?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      paramsJson: 'ParamsJson',
      showId: 'ShowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      paramsJson: 'string',
      showId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetShowCommentsResponseBody extends $tea.Model {
  commentList?: TaobaoFilmGetShowCommentsResponseBodyCommentList[];
  count?: number;
  errorCode?: string;
  logsId?: string;
  msg?: string;
  requestId?: string;
  subCode?: string;
  subMsg?: string;
  static names(): { [key: string]: string } {
    return {
      commentList: 'CommentList',
      count: 'Count',
      errorCode: 'ErrorCode',
      logsId: 'LogsId',
      msg: 'Msg',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMsg: 'SubMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commentList: { 'type': 'array', 'itemType': TaobaoFilmGetShowCommentsResponseBodyCommentList },
      count: 'number',
      errorCode: 'string',
      logsId: 'string',
      msg: 'string',
      requestId: 'string',
      subCode: 'string',
      subMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetShowCommentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TaobaoFilmGetShowCommentsResponseBody;
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
      body: TaobaoFilmGetShowCommentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetSoonShowsRequest extends $tea.Model {
  cityCode?: number;
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      paramsJson: 'ParamsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'number',
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetSoonShowsResponseBody extends $tea.Model {
  errorCode?: string;
  logsId?: string;
  msg?: string;
  requestId?: string;
  shows?: TaobaoFilmGetSoonShowsResponseBodyShows[];
  subCode?: string;
  subMsg?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      logsId: 'LogsId',
      msg: 'Msg',
      requestId: 'RequestId',
      shows: 'Shows',
      subCode: 'SubCode',
      subMsg: 'SubMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      logsId: 'string',
      msg: 'string',
      requestId: 'string',
      shows: { 'type': 'array', 'itemType': TaobaoFilmGetSoonShowsResponseBodyShows },
      subCode: 'string',
      subMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetSoonShowsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TaobaoFilmGetSoonShowsResponseBody;
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
      body: TaobaoFilmGetSoonShowsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmIssueOrderRequest extends $tea.Model {
  extOrderId?: string;
  extUserId?: string;
  lockSeatApplyKey?: string;
  paramsJson?: string;
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      extOrderId: 'ExtOrderId',
      extUserId: 'ExtUserId',
      lockSeatApplyKey: 'LockSeatApplyKey',
      paramsJson: 'ParamsJson',
      totalPrice: 'TotalPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extOrderId: 'string',
      extUserId: 'string',
      lockSeatApplyKey: 'string',
      paramsJson: 'string',
      totalPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmIssueOrderResponseBody extends $tea.Model {
  errorCode?: string;
  logsId?: string;
  message?: string;
  msg?: string;
  requestId?: string;
  status?: string;
  subCode?: string;
  subMsg?: string;
  tbOrderId?: string;
  ticketContents?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      logsId: 'LogsId',
      message: 'Message',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
      subCode: 'SubCode',
      subMsg: 'SubMsg',
      tbOrderId: 'TbOrderId',
      ticketContents: 'TicketContents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      logsId: 'string',
      message: 'string',
      msg: 'string',
      requestId: 'string',
      status: 'string',
      subCode: 'string',
      subMsg: 'string',
      tbOrderId: 'string',
      ticketContents: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmIssueOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TaobaoFilmIssueOrderResponseBody;
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
      body: TaobaoFilmIssueOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmLockSeatRequest extends $tea.Model {
  extUserId?: string;
  mobile?: string;
  paramsJson?: string;
  scheduleId?: number;
  seatIds?: string;
  seatNames?: string;
  static names(): { [key: string]: string } {
    return {
      extUserId: 'ExtUserId',
      mobile: 'Mobile',
      paramsJson: 'ParamsJson',
      scheduleId: 'ScheduleId',
      seatIds: 'SeatIds',
      seatNames: 'SeatNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extUserId: 'string',
      mobile: 'string',
      paramsJson: 'string',
      scheduleId: 'number',
      seatIds: 'string',
      seatNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmLockSeatResponseBody extends $tea.Model {
  errorCode?: string;
  logsId?: string;
  msg?: string;
  requestId?: string;
  seatLocked?: TaobaoFilmLockSeatResponseBodySeatLocked;
  subCode?: string;
  subMsg?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      logsId: 'LogsId',
      msg: 'Msg',
      requestId: 'RequestId',
      seatLocked: 'SeatLocked',
      subCode: 'SubCode',
      subMsg: 'SubMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      logsId: 'string',
      msg: 'string',
      requestId: 'string',
      seatLocked: TaobaoFilmLockSeatResponseBodySeatLocked,
      subCode: 'string',
      subMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmLockSeatResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TaobaoFilmLockSeatResponseBody;
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
      body: TaobaoFilmLockSeatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmUnLockSeatRequest extends $tea.Model {
  extUserId?: string;
  lockSeatApplyKey?: string;
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      extUserId: 'ExtUserId',
      lockSeatApplyKey: 'LockSeatApplyKey',
      paramsJson: 'ParamsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extUserId: 'string',
      lockSeatApplyKey: 'string',
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmUnLockSeatResponseBody extends $tea.Model {
  errorCode?: string;
  logsId?: string;
  msg?: string;
  requestId?: string;
  returnCode?: string;
  returnMessage?: string;
  returnValue?: boolean;
  subCode?: string;
  subMsg?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      logsId: 'LogsId',
      msg: 'Msg',
      requestId: 'RequestId',
      returnCode: 'ReturnCode',
      returnMessage: 'ReturnMessage',
      returnValue: 'ReturnValue',
      subCode: 'SubCode',
      subMsg: 'SubMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      logsId: 'string',
      msg: 'string',
      requestId: 'string',
      returnCode: 'string',
      returnMessage: 'string',
      returnValue: 'boolean',
      subCode: 'string',
      subMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmUnLockSeatResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TaobaoFilmUnLockSeatResponseBody;
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
      body: TaobaoFilmUnLockSeatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessagesResponseBodyBizMessages extends $tea.Model {
  contentMapJson?: string;
  dataId?: number;
  pubTime?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      contentMapJson: 'ContentMapJson',
      dataId: 'DataId',
      pubTime: 'PubTime',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentMapJson: 'string',
      dataId: 'number',
      pubTime: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetCinemasResponseBodyCinemas extends $tea.Model {
  address?: string;
  cinemaName?: string;
  cityId?: number;
  id?: number;
  latitude?: string;
  longitude?: string;
  phone?: string;
  regionName?: string;
  scheduleCloseTime?: number;
  standardId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      cinemaName: 'CinemaName',
      cityId: 'CityId',
      id: 'Id',
      latitude: 'Latitude',
      longitude: 'Longitude',
      phone: 'Phone',
      regionName: 'RegionName',
      scheduleCloseTime: 'ScheduleCloseTime',
      standardId: 'StandardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      cinemaName: 'string',
      cityId: 'number',
      id: 'number',
      latitude: 'string',
      longitude: 'string',
      phone: 'string',
      regionName: 'string',
      scheduleCloseTime: 'number',
      standardId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetHotShowsResponseBodyShows extends $tea.Model {
  backgroundPicture?: string;
  country?: string;
  description?: string;
  director?: string;
  duration?: number;
  highlight?: string;
  id?: number;
  language?: string;
  leadingRole?: string;
  openDay?: string;
  openTime?: string;
  poster?: string;
  remark?: string;
  showMark?: string;
  showName?: string;
  showNameEn?: string;
  showVersionList?: string[];
  trailerList?: string[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      backgroundPicture: 'BackgroundPicture',
      country: 'Country',
      description: 'Description',
      director: 'Director',
      duration: 'Duration',
      highlight: 'Highlight',
      id: 'Id',
      language: 'Language',
      leadingRole: 'LeadingRole',
      openDay: 'OpenDay',
      openTime: 'OpenTime',
      poster: 'Poster',
      remark: 'Remark',
      showMark: 'ShowMark',
      showName: 'ShowName',
      showNameEn: 'ShowNameEn',
      showVersionList: 'ShowVersionList',
      trailerList: 'TrailerList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundPicture: 'string',
      country: 'string',
      description: 'string',
      director: 'string',
      duration: 'number',
      highlight: 'string',
      id: 'number',
      language: 'string',
      leadingRole: 'string',
      openDay: 'string',
      openTime: 'string',
      poster: 'string',
      remark: 'string',
      showMark: 'string',
      showName: 'string',
      showNameEn: 'string',
      showVersionList: { 'type': 'array', 'itemType': 'string' },
      trailerList: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetRegionListResponseBodyRegions extends $tea.Model {
  cityCode?: number;
  id?: number;
  parentId?: number;
  pinYin?: string;
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      id: 'Id',
      parentId: 'ParentId',
      pinYin: 'PinYin',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'number',
      id: 'number',
      parentId: 'number',
      pinYin: 'string',
      regionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetSchedulesResponseBodySchedules extends $tea.Model {
  cinemaId?: number;
  closeTime?: string;
  hallId?: string;
  hallName?: string;
  id?: number;
  isExpired?: boolean;
  maxCanBuy?: number;
  price?: number;
  scheduleArea?: string;
  sectionId?: string;
  serviceFee?: number;
  showDate?: string;
  showId?: number;
  showTime?: string;
  showVersion?: string;
  static names(): { [key: string]: string } {
    return {
      cinemaId: 'CinemaId',
      closeTime: 'CloseTime',
      hallId: 'HallId',
      hallName: 'HallName',
      id: 'Id',
      isExpired: 'IsExpired',
      maxCanBuy: 'MaxCanBuy',
      price: 'Price',
      scheduleArea: 'ScheduleArea',
      sectionId: 'SectionId',
      serviceFee: 'ServiceFee',
      showDate: 'ShowDate',
      showId: 'ShowId',
      showTime: 'ShowTime',
      showVersion: 'ShowVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cinemaId: 'number',
      closeTime: 'string',
      hallId: 'string',
      hallName: 'string',
      id: 'number',
      isExpired: 'boolean',
      maxCanBuy: 'number',
      price: 'number',
      scheduleArea: 'string',
      sectionId: 'string',
      serviceFee: 'number',
      showDate: 'string',
      showId: 'number',
      showTime: 'string',
      showVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetSeatsResponseBodySeatMapSeats extends $tea.Model {
  area?: string;
  column?: number;
  extId?: string;
  flag?: number;
  leftPx?: number;
  name?: string;
  row?: number;
  rowName?: string;
  status?: number;
  topPx?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      column: 'Column',
      extId: 'ExtId',
      flag: 'Flag',
      leftPx: 'LeftPx',
      name: 'Name',
      row: 'Row',
      rowName: 'RowName',
      status: 'Status',
      topPx: 'TopPx',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      column: 'number',
      extId: 'string',
      flag: 'number',
      leftPx: 'number',
      name: 'string',
      row: 'number',
      rowName: 'string',
      status: 'number',
      topPx: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetSeatsResponseBodySeatMap extends $tea.Model {
  maxCanBuy?: number;
  maxColumn?: number;
  maxLeftPx?: number;
  maxRow?: number;
  maxTopPx?: number;
  minColumn?: number;
  minLeftPx?: number;
  minRow?: number;
  minTopPx?: number;
  notice?: string;
  regular?: boolean;
  seatCount?: number;
  seats?: TaobaoFilmGetSeatsResponseBodySeatMapSeats[];
  soldCount?: number;
  tipMessage?: string;
  static names(): { [key: string]: string } {
    return {
      maxCanBuy: 'MaxCanBuy',
      maxColumn: 'MaxColumn',
      maxLeftPx: 'MaxLeftPx',
      maxRow: 'MaxRow',
      maxTopPx: 'MaxTopPx',
      minColumn: 'MinColumn',
      minLeftPx: 'MinLeftPx',
      minRow: 'MinRow',
      minTopPx: 'MinTopPx',
      notice: 'Notice',
      regular: 'Regular',
      seatCount: 'SeatCount',
      seats: 'Seats',
      soldCount: 'SoldCount',
      tipMessage: 'TipMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCanBuy: 'number',
      maxColumn: 'number',
      maxLeftPx: 'number',
      maxRow: 'number',
      maxTopPx: 'number',
      minColumn: 'number',
      minLeftPx: 'number',
      minRow: 'number',
      minTopPx: 'number',
      notice: 'string',
      regular: 'boolean',
      seatCount: 'number',
      seats: { 'type': 'array', 'itemType': TaobaoFilmGetSeatsResponseBodySeatMapSeats },
      soldCount: 'number',
      tipMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetShowCommentsResponseBodyCommentList extends $tea.Model {
  commentTime?: string;
  content?: string;
  favorCount?: number;
  id?: number;
  nickName?: string;
  remark?: number;
  showId?: number;
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      commentTime: 'CommentTime',
      content: 'Content',
      favorCount: 'FavorCount',
      id: 'Id',
      nickName: 'NickName',
      remark: 'Remark',
      showId: 'ShowId',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commentTime: 'string',
      content: 'string',
      favorCount: 'number',
      id: 'number',
      nickName: 'string',
      remark: 'number',
      showId: 'number',
      subject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmGetSoonShowsResponseBodyShows extends $tea.Model {
  backgroundPicture?: string;
  country?: string;
  description?: string;
  director?: string;
  duration?: number;
  highlight?: string;
  id?: number;
  language?: string;
  leadingRole?: string;
  openDay?: string;
  openTime?: string;
  poster?: string;
  remark?: string;
  showMark?: string;
  showName?: string;
  showNameEn?: string;
  showVersionList?: string[];
  trailerList?: string[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      backgroundPicture: 'BackgroundPicture',
      country: 'Country',
      description: 'Description',
      director: 'Director',
      duration: 'Duration',
      highlight: 'Highlight',
      id: 'Id',
      language: 'Language',
      leadingRole: 'LeadingRole',
      openDay: 'OpenDay',
      openTime: 'OpenTime',
      poster: 'Poster',
      remark: 'Remark',
      showMark: 'ShowMark',
      showName: 'ShowName',
      showNameEn: 'ShowNameEn',
      showVersionList: 'ShowVersionList',
      trailerList: 'TrailerList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundPicture: 'string',
      country: 'string',
      description: 'string',
      director: 'string',
      duration: 'number',
      highlight: 'string',
      id: 'number',
      language: 'string',
      leadingRole: 'string',
      openDay: 'string',
      openTime: 'string',
      poster: 'string',
      remark: 'string',
      showMark: 'string',
      showName: 'string',
      showNameEn: 'string',
      showVersionList: { 'type': 'array', 'itemType': 'string' },
      trailerList: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaobaoFilmLockSeatResponseBodySeatLocked extends $tea.Model {
  applyKey?: string;
  defaultLockSecond?: number;
  lockTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applyKey: 'ApplyKey',
      defaultLockSecond: 'DefaultLockSecond',
      lockTime: 'LockTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyKey: 'string',
      defaultLockSecond: 'number',
      lockTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "appms.aliyuncs.com",
      'ap-northeast-2-pop': "appms.aliyuncs.com",
      'ap-south-1': "appms.aliyuncs.com",
      'ap-southeast-1': "appms.aliyuncs.com",
      'ap-southeast-2': "appms.aliyuncs.com",
      'ap-southeast-3': "appms.aliyuncs.com",
      'ap-southeast-5': "appms.aliyuncs.com",
      'cn-beijing': "appms.aliyuncs.com",
      'cn-beijing-finance-1': "appms.aliyuncs.com",
      'cn-beijing-finance-pop': "appms.aliyuncs.com",
      'cn-beijing-gov-1': "appms.aliyuncs.com",
      'cn-beijing-nu16-b01': "appms.aliyuncs.com",
      'cn-chengdu': "appms.aliyuncs.com",
      'cn-edge-1': "appms.aliyuncs.com",
      'cn-fujian': "appms.aliyuncs.com",
      'cn-haidian-cm12-c01': "appms.aliyuncs.com",
      'cn-hangzhou': "appms.aliyuncs.com",
      'cn-hangzhou-bj-b01': "appms.aliyuncs.com",
      'cn-hangzhou-finance': "appms.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "appms.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "appms.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "appms.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "appms.aliyuncs.com",
      'cn-hangzhou-test-306': "appms.aliyuncs.com",
      'cn-hongkong': "appms.aliyuncs.com",
      'cn-hongkong-finance-pop': "appms.aliyuncs.com",
      'cn-huhehaote': "appms.aliyuncs.com",
      'cn-north-2-gov-1': "appms.aliyuncs.com",
      'cn-qingdao': "appms.aliyuncs.com",
      'cn-qingdao-nebula': "appms.aliyuncs.com",
      'cn-shanghai': "appms.aliyuncs.com",
      'cn-shanghai-et15-b01': "appms.aliyuncs.com",
      'cn-shanghai-et2-b01': "appms.aliyuncs.com",
      'cn-shanghai-finance-1': "appms.aliyuncs.com",
      'cn-shanghai-inner': "appms.aliyuncs.com",
      'cn-shanghai-internal-test-1': "appms.aliyuncs.com",
      'cn-shenzhen': "appms.aliyuncs.com",
      'cn-shenzhen-finance-1': "appms.aliyuncs.com",
      'cn-shenzhen-inner': "appms.aliyuncs.com",
      'cn-shenzhen-st4-d01': "appms.aliyuncs.com",
      'cn-shenzhen-su18-b01': "appms.aliyuncs.com",
      'cn-wuhan': "appms.aliyuncs.com",
      'cn-yushanfang': "appms.aliyuncs.com",
      'cn-zhangbei-na61-b01': "appms.aliyuncs.com",
      'cn-zhangjiakou': "appms.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "appms.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "appms.aliyuncs.com",
      'eu-central-1': "appms.aliyuncs.com",
      'eu-west-1': "appms.aliyuncs.com",
      'eu-west-1-oxs': "appms.aliyuncs.com",
      'me-east-1': "appms.aliyuncs.com",
      'rus-west-1-pop': "appms.aliyuncs.com",
      'us-east-1': "appms.aliyuncs.com",
      'us-west-1': "appms.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("appmallsservice", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getMessagesWithOptions(request: GetMessagesRequest, runtime: $Util.RuntimeOptions): Promise<GetMessagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.paramsJson)) {
      query["ParamsJson"] = request.paramsJson;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMessages",
      version: "2018-02-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMessagesResponse>(await this.callApi(params, req, runtime), new GetMessagesResponse({}));
  }

  async getMessages(request: GetMessagesRequest): Promise<GetMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMessagesWithOptions(request, runtime);
  }

  async removeMessagesWithOptions(tmpReq: RemoveMessagesRequest, runtime: $Util.RuntimeOptions): Promise<RemoveMessagesResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveMessagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.msgIds)) {
      request.msgIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.msgIds, "MsgIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.msgIdsShrink)) {
      query["MsgIds"] = request.msgIdsShrink;
    }

    if (!Util.isUnset(request.paramsJson)) {
      query["ParamsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveMessages",
      version: "2018-02-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveMessagesResponse>(await this.callApi(params, req, runtime), new RemoveMessagesResponse({}));
  }

  async removeMessages(request: RemoveMessagesRequest): Promise<RemoveMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeMessagesWithOptions(request, runtime);
  }

  async taobaoFilmGetCinemasWithOptions(request: TaobaoFilmGetCinemasRequest, runtime: $Util.RuntimeOptions): Promise<TaobaoFilmGetCinemasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.paramsJson)) {
      query["ParamsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TaobaoFilmGetCinemas",
      version: "2018-02-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TaobaoFilmGetCinemasResponse>(await this.callApi(params, req, runtime), new TaobaoFilmGetCinemasResponse({}));
  }

  async taobaoFilmGetCinemas(request: TaobaoFilmGetCinemasRequest): Promise<TaobaoFilmGetCinemasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taobaoFilmGetCinemasWithOptions(request, runtime);
  }

  async taobaoFilmGetHotShowsWithOptions(request: TaobaoFilmGetHotShowsRequest, runtime: $Util.RuntimeOptions): Promise<TaobaoFilmGetHotShowsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cityCode)) {
      query["CityCode"] = request.cityCode;
    }

    if (!Util.isUnset(request.paramsJson)) {
      query["ParamsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TaobaoFilmGetHotShows",
      version: "2018-02-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TaobaoFilmGetHotShowsResponse>(await this.callApi(params, req, runtime), new TaobaoFilmGetHotShowsResponse({}));
  }

  async taobaoFilmGetHotShows(request: TaobaoFilmGetHotShowsRequest): Promise<TaobaoFilmGetHotShowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taobaoFilmGetHotShowsWithOptions(request, runtime);
  }

  async taobaoFilmGetRegionListWithOptions(request: TaobaoFilmGetRegionListRequest, runtime: $Util.RuntimeOptions): Promise<TaobaoFilmGetRegionListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.paramsJson)) {
      query["ParamsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TaobaoFilmGetRegionList",
      version: "2018-02-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TaobaoFilmGetRegionListResponse>(await this.callApi(params, req, runtime), new TaobaoFilmGetRegionListResponse({}));
  }

  async taobaoFilmGetRegionList(request: TaobaoFilmGetRegionListRequest): Promise<TaobaoFilmGetRegionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taobaoFilmGetRegionListWithOptions(request, runtime);
  }

  async taobaoFilmGetSchedulesWithOptions(request: TaobaoFilmGetSchedulesRequest, runtime: $Util.RuntimeOptions): Promise<TaobaoFilmGetSchedulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cinemaId)) {
      query["CinemaId"] = request.cinemaId;
    }

    if (!Util.isUnset(request.paramsJson)) {
      query["ParamsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TaobaoFilmGetSchedules",
      version: "2018-02-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TaobaoFilmGetSchedulesResponse>(await this.callApi(params, req, runtime), new TaobaoFilmGetSchedulesResponse({}));
  }

  async taobaoFilmGetSchedules(request: TaobaoFilmGetSchedulesRequest): Promise<TaobaoFilmGetSchedulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taobaoFilmGetSchedulesWithOptions(request, runtime);
  }

  async taobaoFilmGetSeatsWithOptions(request: TaobaoFilmGetSeatsRequest, runtime: $Util.RuntimeOptions): Promise<TaobaoFilmGetSeatsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.paramsJson)) {
      query["ParamsJson"] = request.paramsJson;
    }

    if (!Util.isUnset(request.scheduleId)) {
      query["ScheduleId"] = request.scheduleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TaobaoFilmGetSeats",
      version: "2018-02-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TaobaoFilmGetSeatsResponse>(await this.callApi(params, req, runtime), new TaobaoFilmGetSeatsResponse({}));
  }

  async taobaoFilmGetSeats(request: TaobaoFilmGetSeatsRequest): Promise<TaobaoFilmGetSeatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taobaoFilmGetSeatsWithOptions(request, runtime);
  }

  async taobaoFilmGetShowCommentsWithOptions(request: TaobaoFilmGetShowCommentsRequest, runtime: $Util.RuntimeOptions): Promise<TaobaoFilmGetShowCommentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.paramsJson)) {
      query["ParamsJson"] = request.paramsJson;
    }

    if (!Util.isUnset(request.showId)) {
      query["ShowId"] = request.showId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TaobaoFilmGetShowComments",
      version: "2018-02-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TaobaoFilmGetShowCommentsResponse>(await this.callApi(params, req, runtime), new TaobaoFilmGetShowCommentsResponse({}));
  }

  async taobaoFilmGetShowComments(request: TaobaoFilmGetShowCommentsRequest): Promise<TaobaoFilmGetShowCommentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taobaoFilmGetShowCommentsWithOptions(request, runtime);
  }

  async taobaoFilmGetSoonShowsWithOptions(request: TaobaoFilmGetSoonShowsRequest, runtime: $Util.RuntimeOptions): Promise<TaobaoFilmGetSoonShowsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cityCode)) {
      query["CityCode"] = request.cityCode;
    }

    if (!Util.isUnset(request.paramsJson)) {
      query["ParamsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TaobaoFilmGetSoonShows",
      version: "2018-02-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TaobaoFilmGetSoonShowsResponse>(await this.callApi(params, req, runtime), new TaobaoFilmGetSoonShowsResponse({}));
  }

  async taobaoFilmGetSoonShows(request: TaobaoFilmGetSoonShowsRequest): Promise<TaobaoFilmGetSoonShowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taobaoFilmGetSoonShowsWithOptions(request, runtime);
  }

  async taobaoFilmIssueOrderWithOptions(request: TaobaoFilmIssueOrderRequest, runtime: $Util.RuntimeOptions): Promise<TaobaoFilmIssueOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.extOrderId)) {
      query["ExtOrderId"] = request.extOrderId;
    }

    if (!Util.isUnset(request.extUserId)) {
      query["ExtUserId"] = request.extUserId;
    }

    if (!Util.isUnset(request.lockSeatApplyKey)) {
      query["LockSeatApplyKey"] = request.lockSeatApplyKey;
    }

    if (!Util.isUnset(request.paramsJson)) {
      query["ParamsJson"] = request.paramsJson;
    }

    if (!Util.isUnset(request.totalPrice)) {
      query["TotalPrice"] = request.totalPrice;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TaobaoFilmIssueOrder",
      version: "2018-02-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TaobaoFilmIssueOrderResponse>(await this.callApi(params, req, runtime), new TaobaoFilmIssueOrderResponse({}));
  }

  async taobaoFilmIssueOrder(request: TaobaoFilmIssueOrderRequest): Promise<TaobaoFilmIssueOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taobaoFilmIssueOrderWithOptions(request, runtime);
  }

  async taobaoFilmLockSeatWithOptions(request: TaobaoFilmLockSeatRequest, runtime: $Util.RuntimeOptions): Promise<TaobaoFilmLockSeatResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.extUserId)) {
      query["ExtUserId"] = request.extUserId;
    }

    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.paramsJson)) {
      query["ParamsJson"] = request.paramsJson;
    }

    if (!Util.isUnset(request.scheduleId)) {
      query["ScheduleId"] = request.scheduleId;
    }

    if (!Util.isUnset(request.seatIds)) {
      query["SeatIds"] = request.seatIds;
    }

    if (!Util.isUnset(request.seatNames)) {
      query["SeatNames"] = request.seatNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TaobaoFilmLockSeat",
      version: "2018-02-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TaobaoFilmLockSeatResponse>(await this.callApi(params, req, runtime), new TaobaoFilmLockSeatResponse({}));
  }

  async taobaoFilmLockSeat(request: TaobaoFilmLockSeatRequest): Promise<TaobaoFilmLockSeatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taobaoFilmLockSeatWithOptions(request, runtime);
  }

  async taobaoFilmUnLockSeatWithOptions(request: TaobaoFilmUnLockSeatRequest, runtime: $Util.RuntimeOptions): Promise<TaobaoFilmUnLockSeatResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.extUserId)) {
      query["ExtUserId"] = request.extUserId;
    }

    if (!Util.isUnset(request.lockSeatApplyKey)) {
      query["LockSeatApplyKey"] = request.lockSeatApplyKey;
    }

    if (!Util.isUnset(request.paramsJson)) {
      query["ParamsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TaobaoFilmUnLockSeat",
      version: "2018-02-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TaobaoFilmUnLockSeatResponse>(await this.callApi(params, req, runtime), new TaobaoFilmUnLockSeatResponse({}));
  }

  async taobaoFilmUnLockSeat(request: TaobaoFilmUnLockSeatRequest): Promise<TaobaoFilmUnLockSeatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taobaoFilmUnLockSeatWithOptions(request, runtime);
  }

}
