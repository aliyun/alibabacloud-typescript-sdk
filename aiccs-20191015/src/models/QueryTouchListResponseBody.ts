// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTouchListResponseBodyResultDataDataExtAttrs extends $dara.Model {
  /**
   * @remarks
   * The calling number for inbound calls.
   * 
   * @example
   * 187****0000
   */
  ani?: string;
  /**
   * @remarks
   * The called number for both outbound and inbound calls.
   * 
   * @example
   * 05712688****
   */
  dnis?: string;
  /**
   * @remarks
   * The satisfaction level. Valid values:
   * - **2**: 2-level satisfaction.
   * - **3**: 3-level satisfaction.
   * - **4**: 4-level satisfaction.
   * - **5**: 5-level satisfaction.
   * 
   * @example
   * 2
   */
  evaluationLevel?: number;
  /**
   * @remarks
   * The satisfaction score. Valid values:
   * - **1**: Very dissatisfied.
   * - **2**: Dissatisfied.
   * - **3**: Neutral.
   * - **4**: Satisfied.
   * - **5**: Very satisfied.
   * 
   * @example
   * 1
   */
  evaluationScore?: number;
  /**
   * @remarks
   * The evaluation Solutions.
   * 
   * @example
   * 0
   */
  evaluationSolution?: number;
  /**
   * @remarks
   * The evaluation status. Valid values:
   * - **-1**: Evaluation not initiated.
   * - **0**: Not evaluated.
   * - **1**: Evaluated.
   * 
   * @example
   * 1
   */
  evaluationStatus?: number;
  /**
   * @remarks
   * The first response duration, in seconds.
   * 
   * @example
   * 1
   */
  onlineJoinRespInterval?: number;
  /**
   * @remarks
   * The online session source.
   * 
   * @example
   * 0
   */
  onlineSessionSource?: number;
  /**
   * @remarks
   * The calling number for outbound calls.
   * 
   * @example
   * 05712688****
   */
  outCallRouteNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ani: 'Ani',
      dnis: 'Dnis',
      evaluationLevel: 'EvaluationLevel',
      evaluationScore: 'EvaluationScore',
      evaluationSolution: 'EvaluationSolution',
      evaluationStatus: 'EvaluationStatus',
      onlineJoinRespInterval: 'OnlineJoinRespInterval',
      onlineSessionSource: 'OnlineSessionSource',
      outCallRouteNumber: 'OutCallRouteNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ani: 'string',
      dnis: 'string',
      evaluationLevel: 'number',
      evaluationScore: 'number',
      evaluationSolution: 'number',
      evaluationStatus: 'number',
      onlineJoinRespInterval: 'number',
      onlineSessionSource: 'number',
      outCallRouteNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTouchListResponseBodyResultDataData extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 905
   */
  buId?: number;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 4f8807a9de024507a3090b5b66a8****
   */
  channelId?: string;
  /**
   * @remarks
   * The touch channel.
   * 
   * @example
   * 1
   */
  channelType?: number;
  /**
   * @remarks
   * The session end time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1611207976000
   */
  closeTime?: number;
  /**
   * @remarks
   * The skill group name.
   * 
   * @example
   * Test1
   */
  commonQueueName?: string;
  /**
   * @remarks
   * The department ID.
   * 
   * @example
   * 100
   */
  depId?: number;
  /**
   * @remarks
   * The extended fields.
   */
  extAttrs?: QueryTouchListResponseBodyResultDataDataExtAttrs;
  /**
   * @remarks
   * The large field.
   */
  extAttrsString?: { [key: string]: any };
  /**
   * @remarks
   * The feedback.
   * 
   * @example
   * xxxx
   */
  feedback?: string;
  /**
   * @remarks
   * The session pickup time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1611209971000
   */
  firstTime?: number;
  /**
   * @remarks
   * The session initiator.
   * 
   * @example
   * 6400665****
   */
  fromId?: number;
  /**
   * @remarks
   * The creation time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1611209971000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The update time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1611207979000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The member ID.
   * 
   * @example
   * 6400665****
   */
  memberId?: number;
  /**
   * @remarks
   * The member name.
   * 
   * @example
   * Visitor
   */
  memberName?: string;
  /**
   * @remarks
   * The parent touch ID.
   * 
   * @example
   * 0
   */
  parentTouchId?: number;
  /**
   * @remarks
   * The skill group ID.
   * 
   * @example
   * 111
   */
  queueId?: number;
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * 67****
   */
  servicerId?: number;
  /**
   * @remarks
   * The agent name.
   * 
   * @example
   * 1390000****
   */
  servicerName?: string;
  /**
   * @remarks
   * The touch status. Valid values:
   * - **1**: Queued.
   * - **2**: Agent connected.
   * - **3**: In call.
   * - **4**: Ended.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The transfer list.
   * 
   * @example
   * null
   */
  switchUser?: string;
  /**
   * @remarks
   * The session receiver.
   * 
   * @example
   * 67****
   */
  toId?: number;
  /**
   * @remarks
   * The session end reason. Valid values:
   * - **0**: Unknown.
   * - **1**: Touch unsuccessful.
   * - **2**: Customer terminated.
   * - **3**: Agent terminated.
   * - **4**: Call abnormally interrupted.
   * - **5**: Transfer terminated.
   * - **6**: System terminated.
   * 
   * @example
   * 1
   */
  touchContent?: string;
  /**
   * @remarks
   * The end reason.
   * 
   * @example
   * 2
   */
  touchEndReason?: number;
  /**
   * @remarks
   * The contact ID.
   * 
   * @example
   * 1386****
   */
  touchId?: string;
  /**
   * @remarks
   * The session duration, in seconds.
   * 
   * @example
   * 111
   */
  touchTime?: string;
  /**
   * @remarks
   * The touch type. Valid values:
   * - **1**: Active touch.
   * - **2**: Passive touch.
   * 
   * @example
   * 2
   */
  touchType?: number;
  /**
   * @remarks
   * The user touch ID.
   * 
   * @example
   * 1386****
   */
  userTouchId?: number;
  static names(): { [key: string]: string } {
    return {
      buId: 'BuId',
      channelId: 'ChannelId',
      channelType: 'ChannelType',
      closeTime: 'CloseTime',
      commonQueueName: 'CommonQueueName',
      depId: 'DepId',
      extAttrs: 'ExtAttrs',
      extAttrsString: 'ExtAttrsString',
      feedback: 'Feedback',
      firstTime: 'FirstTime',
      fromId: 'FromId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      memberId: 'MemberId',
      memberName: 'MemberName',
      parentTouchId: 'ParentTouchId',
      queueId: 'QueueId',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      status: 'Status',
      switchUser: 'SwitchUser',
      toId: 'ToId',
      touchContent: 'TouchContent',
      touchEndReason: 'TouchEndReason',
      touchId: 'TouchId',
      touchTime: 'TouchTime',
      touchType: 'TouchType',
      userTouchId: 'UserTouchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buId: 'number',
      channelId: 'string',
      channelType: 'number',
      closeTime: 'number',
      commonQueueName: 'string',
      depId: 'number',
      extAttrs: QueryTouchListResponseBodyResultDataDataExtAttrs,
      extAttrsString: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      feedback: 'string',
      firstTime: 'number',
      fromId: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      memberId: 'number',
      memberName: 'string',
      parentTouchId: 'number',
      queueId: 'number',
      servicerId: 'number',
      servicerName: 'string',
      status: 'number',
      switchUser: 'string',
      toId: 'number',
      touchContent: 'string',
      touchEndReason: 'number',
      touchId: 'string',
      touchTime: 'string',
      touchType: 'number',
      userTouchId: 'number',
    };
  }

  validate() {
    if(this.extAttrs && typeof (this.extAttrs as any).validate === 'function') {
      (this.extAttrs as any).validate();
    }
    if(this.extAttrsString) {
      $dara.Model.validateMap(this.extAttrsString);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTouchListResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data.
   */
  data?: QueryTouchListResponseBodyResultDataData[];
  /**
   * @remarks
   * Indicates whether the result is empty.
   * 
   * @example
   * false
   */
  empty?: boolean;
  /**
   * @remarks
   * The next page number.
   * 
   * @example
   * 2
   */
  nextPage?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 2
   */
  onePageSize?: number;
  /**
   * @remarks
   * The previous page number.
   * 
   * @example
   * 2
   */
  previousPage?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 4
   */
  totalPage?: number;
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 100
   */
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      empty: 'Empty',
      nextPage: 'NextPage',
      onePageSize: 'OnePageSize',
      previousPage: 'PreviousPage',
      totalPage: 'TotalPage',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': QueryTouchListResponseBodyResultDataData },
      empty: 'boolean',
      nextPage: 'number',
      onePageSize: 'number',
      previousPage: 'number',
      totalPage: 'number',
      totalResults: 'number',
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

export class QueryTouchListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 865658FD-80DE-5D49-ABEB-F3CC9863F4F1
   */
  requestId?: string;
  /**
   * @remarks
   * The data result.
   */
  resultData?: QueryTouchListResponseBodyResultData;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultData: 'ResultData',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultData: QueryTouchListResponseBodyResultData,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resultData && typeof (this.resultData as any).validate === 'function') {
      (this.resultData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

