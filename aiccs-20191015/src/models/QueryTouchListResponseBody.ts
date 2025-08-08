// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTouchListResponseBodyResultDataDataExtAttrs extends $dara.Model {
  /**
   * @example
   * 187****0000
   */
  ani?: string;
  /**
   * @example
   * 05712688****
   */
  dnis?: string;
  /**
   * @example
   * 2
   */
  evaluationLevel?: number;
  /**
   * @example
   * 1
   */
  evaluationScore?: number;
  /**
   * @example
   * 0
   */
  evaluationSolution?: number;
  /**
   * @example
   * 1
   */
  evaluationStatus?: number;
  /**
   * @example
   * 1
   */
  onlineJoinRespInterval?: number;
  /**
   * @example
   * 0
   */
  onlineSessionSource?: number;
  /**
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
   * @example
   * 905
   */
  buId?: number;
  /**
   * @example
   * 4f8807a9de024507a3090b5b66a8****
   */
  channelId?: string;
  /**
   * @example
   * 1
   */
  channelType?: number;
  /**
   * @example
   * 1611207976000
   */
  closeTime?: number;
  commonQueueName?: string;
  /**
   * @example
   * 100
   */
  depId?: number;
  extAttrs?: QueryTouchListResponseBodyResultDataDataExtAttrs;
  extAttrsString?: { [key: string]: any };
  /**
   * @example
   * xxxx
   */
  feedback?: string;
  /**
   * @example
   * 1611209971000
   */
  firstTime?: number;
  /**
   * @example
   * 6400665****
   */
  fromId?: number;
  /**
   * @example
   * 1611209971000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1611207979000
   */
  gmtModified?: number;
  /**
   * @example
   * 6400665****
   */
  memberId?: number;
  memberName?: string;
  /**
   * @example
   * 0
   */
  parentTouchId?: number;
  /**
   * @example
   * 111
   */
  queueId?: number;
  /**
   * @example
   * 67****
   */
  servicerId?: number;
  /**
   * @example
   * 13900001234
   */
  servicerName?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * null
   */
  switchUser?: string;
  /**
   * @example
   * 678026
   */
  toId?: number;
  /**
   * @example
   * 1
   */
  touchContent?: string;
  /**
   * @example
   * 2
   */
  touchEndReason?: number;
  /**
   * @example
   * 1386****
   */
  touchId?: string;
  /**
   * @example
   * 111
   */
  touchTime?: string;
  /**
   * @example
   * 2
   */
  touchType?: number;
  /**
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
   * @example
   * 1
   */
  currentPage?: number;
  data?: QueryTouchListResponseBodyResultDataData[];
  /**
   * @example
   * false
   */
  empty?: boolean;
  /**
   * @example
   * 2
   */
  nextPage?: number;
  /**
   * @example
   * 2
   */
  onePageSize?: number;
  /**
   * @example
   * 2
   */
  previousPage?: number;
  /**
   * @example
   * 4
   */
  totalPage?: number;
  /**
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
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 865658FD-80DE-5D49-ABEB-F3CC9863F4F1
   */
  requestId?: string;
  resultData?: QueryTouchListResponseBodyResultData;
  /**
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

