// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTouchListResponseBodyResultDataDataExtAttrs extends $dara.Model {
  /**
   * @remarks
   * Inbound call caller number.
   * 
   * @example
   * 187****0000
   */
  ani?: string;
  /**
   * @remarks
   * For outbound calls, this is the called number. For inbound calls, this is also the called number.
   * 
   * @example
   * 05712688****
   */
  dnis?: string;
  /**
   * @remarks
   * Satisfaction Level. Valid values:  
   * - **2**: Level 2 satisfaction.  
   * - **3**: Level 3 satisfaction.  
   * - **4**: Level 4 satisfaction.  
   * - **5**: Level 5 satisfaction.
   * 
   * @example
   * 2
   */
  evaluationLevel?: number;
  /**
   * @remarks
   * Satisfaction rating. Valid values:
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
   * Evaluation solution.
   * 
   * @example
   * 0
   */
  evaluationSolution?: number;
  /**
   * @remarks
   * Evaluation status. Valid values:
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
   * Duration until first response (unit: seconds).
   * 
   * @example
   * 1
   */
  onlineJoinRespInterval?: number;
  /**
   * @remarks
   * Online session source.
   * 
   * @example
   * 0
   */
  onlineSessionSource?: number;
  /**
   * @remarks
   * Outbound call caller number.
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
   * Tenant ID.
   * 
   * @example
   * 905
   */
  buId?: number;
  /**
   * @remarks
   * Session ID.
   * 
   * @example
   * 4f8807a9de024507a3090b5b66a8****
   */
  channelId?: string;
  /**
   * @remarks
   * Contact channel.
   * 
   * @example
   * 1
   */
  channelType?: number;
  /**
   * @remarks
   * Session end time. UNIX timestamp format (unit: milliseconds).
   * 
   * @example
   * 1611207976000
   */
  closeTime?: number;
  /**
   * @remarks
   * Skill group name.
   * 
   * @example
   * 测试1
   */
  commonQueueName?: string;
  /**
   * @remarks
   * Department ID.
   * 
   * @example
   * 100
   */
  depId?: number;
  /**
   * @remarks
   * Extension fields.
   */
  extAttrs?: QueryTouchListResponseBodyResultDataDataExtAttrs;
  /**
   * @remarks
   * Large object.
   */
  extAttrsString?: { [key: string]: any };
  /**
   * @remarks
   * Feedback.
   * 
   * @example
   * xxxx
   */
  feedback?: string;
  /**
   * @remarks
   * Conversation pickup time, in UNIX timestamp format (unit: milliseconds).
   * 
   * @example
   * 1611209971000
   */
  firstTime?: number;
  /**
   * @remarks
   * Conversation initiator.
   * 
   * @example
   * 6400665****
   */
  fromId?: number;
  /**
   * @remarks
   * Creation Time, in UNIX timestamp format (unit: milliseconds).
   * 
   * @example
   * 1611209971000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Update Time. UNIX timestamp format (unit: milliseconds).
   * 
   * @example
   * 1611207979000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Membership ID.
   * 
   * @example
   * 6400665****
   */
  memberId?: number;
  /**
   * @remarks
   * Membership name.
   * 
   * @example
   * 访客
   */
  memberName?: string;
  /**
   * @remarks
   * Parent contact ID.
   * 
   * @example
   * 0
   */
  parentTouchId?: number;
  /**
   * @remarks
   * Skill group ID.
   * 
   * @example
   * 111
   */
  queueId?: number;
  /**
   * @remarks
   * Service agent ID.
   * 
   * @example
   * 67****
   */
  servicerId?: number;
  /**
   * @remarks
   * Service agent name.
   * 
   * @example
   * 1390000****
   */
  servicerName?: string;
  /**
   * @remarks
   * Contact status. Valid values:  
   * - **1**: Incoming call received.  
   * - **2**: Agent has joined.  
   * - **3**: In conversation.  
   * - **4**: Ended.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Change owner list.
   * 
   * @example
   * null
   */
  switchUser?: string;
  /**
   * @remarks
   * Conversation recipient.
   * 
   * @example
   * 67****
   */
  toId?: number;
  /**
   * @remarks
   * The reason why the session ended. Valid values:  
   * - **0**: Unknown.  
   * - **1**: Contact failed.  
   * - **2**: Terminated by customer.  
   * - **3**: Terminated by agent.  
   * - **4**: Call abnormally interrupted.  
   * - **5**: Terminated due to change owner.  
   * - **6**: Terminated by system.
   * 
   * @example
   * 1
   */
  touchContent?: string;
  /**
   * @remarks
   * End reason.
   * 
   * @example
   * 2
   */
  touchEndReason?: number;
  /**
   * @remarks
   * Touch ID.
   * 
   * @example
   * 1386****
   */
  touchId?: string;
  /**
   * @remarks
   * Conversation duration (unit: seconds).
   * 
   * @example
   * 111
   */
  touchTime?: string;
  /**
   * @remarks
   * Touch type. Valid values:
   * - **1**: Active touch.
   * - **2**: Passive touch.
   * 
   * @example
   * 2
   */
  touchType?: number;
  /**
   * @remarks
   * User touch ID.
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
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Data.
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
   * The page number of the next page.
   * 
   * @example
   * 2
   */
  nextPage?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 2
   */
  onePageSize?: number;
  /**
   * @remarks
   * Previous page number.
   * 
   * @example
   * 2
   */
  previousPage?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 4
   */
  totalPage?: number;
  /**
   * @remarks
   * Total number of query results.
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
   * Status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 865658FD-80DE-5D49-ABEB-F3CC9863F4F1
   */
  requestId?: string;
  /**
   * @remarks
   * Data result.
   */
  resultData?: QueryTouchListResponseBodyResultData;
  /**
   * @remarks
   * Indicates whether the API call succeeded. Valid values:  
   * - **true**: Succeeded.  
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

