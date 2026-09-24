// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTouchListRequest extends $dara.Model {
  /**
   * @remarks
   * The list of session IDs to query exactly.
   */
  channelId?: string[];
  /**
   * @remarks
   * The channel type.
   */
  channelType?: number[];
  /**
   * @remarks
   * The end of the time range for session end time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1614600500000
   */
  closeTimeEnd?: number;
  /**
   * @remarks
   * The start of the time range for session end time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1614600400000
   */
  closeTimeStart?: number;
  /**
   * @remarks
   * The current page number. The value must be greater than **0**. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The satisfaction level.
   */
  evaluationLevel?: number[];
  /**
   * @remarks
   * The satisfaction score.
   */
  evaluationScore?: number[];
  /**
   * @remarks
   * The evaluation status.
   */
  evaluationStatus?: number[];
  /**
   * @remarks
   * The end of the time range for session start time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1614599400000
   */
  firstTimeEnd?: number;
  /**
   * @remarks
   * The start of the time range for session start time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1614596400000
   */
  firstTimeStart?: number;
  /**
   * @remarks
   * The ID of the Artificial Intelligence Cloud Call Service (AICCS) instance.
   * You can obtain the instance ID from **Instance Management** in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of member IDs to query.
   */
  memberId?: number[];
  /**
   * @remarks
   * The list of member names to query.
   */
  memberName?: string[];
  /**
   * @remarks
   * The number of entries per page. The value must be greater than **0**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of inbound skill group IDs.
   */
  queueId?: number[];
  /**
   * @remarks
   * The list of agent IDs to query.
   */
  servicerId?: number[];
  /**
   * @remarks
   * The list of agent names to query.
   */
  servicerName?: string[];
  /**
   * @remarks
   * The list of contact IDs to query exactly.
   */
  touchId?: number[];
  /**
   * @remarks
   * The contact type.
   */
  touchType?: number[];
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      channelType: 'ChannelType',
      closeTimeEnd: 'CloseTimeEnd',
      closeTimeStart: 'CloseTimeStart',
      currentPage: 'CurrentPage',
      evaluationLevel: 'EvaluationLevel',
      evaluationScore: 'EvaluationScore',
      evaluationStatus: 'EvaluationStatus',
      firstTimeEnd: 'FirstTimeEnd',
      firstTimeStart: 'FirstTimeStart',
      instanceId: 'InstanceId',
      memberId: 'MemberId',
      memberName: 'MemberName',
      pageSize: 'PageSize',
      queueId: 'QueueId',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      touchId: 'TouchId',
      touchType: 'TouchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: { 'type': 'array', 'itemType': 'string' },
      channelType: { 'type': 'array', 'itemType': 'number' },
      closeTimeEnd: 'number',
      closeTimeStart: 'number',
      currentPage: 'number',
      evaluationLevel: { 'type': 'array', 'itemType': 'number' },
      evaluationScore: { 'type': 'array', 'itemType': 'number' },
      evaluationStatus: { 'type': 'array', 'itemType': 'number' },
      firstTimeEnd: 'number',
      firstTimeStart: 'number',
      instanceId: 'string',
      memberId: { 'type': 'array', 'itemType': 'number' },
      memberName: { 'type': 'array', 'itemType': 'string' },
      pageSize: 'number',
      queueId: { 'type': 'array', 'itemType': 'number' },
      servicerId: { 'type': 'array', 'itemType': 'number' },
      servicerName: { 'type': 'array', 'itemType': 'string' },
      touchId: { 'type': 'array', 'itemType': 'number' },
      touchType: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.channelId)) {
      $dara.Model.validateArray(this.channelId);
    }
    if(Array.isArray(this.channelType)) {
      $dara.Model.validateArray(this.channelType);
    }
    if(Array.isArray(this.evaluationLevel)) {
      $dara.Model.validateArray(this.evaluationLevel);
    }
    if(Array.isArray(this.evaluationScore)) {
      $dara.Model.validateArray(this.evaluationScore);
    }
    if(Array.isArray(this.evaluationStatus)) {
      $dara.Model.validateArray(this.evaluationStatus);
    }
    if(Array.isArray(this.memberId)) {
      $dara.Model.validateArray(this.memberId);
    }
    if(Array.isArray(this.memberName)) {
      $dara.Model.validateArray(this.memberName);
    }
    if(Array.isArray(this.queueId)) {
      $dara.Model.validateArray(this.queueId);
    }
    if(Array.isArray(this.servicerId)) {
      $dara.Model.validateArray(this.servicerId);
    }
    if(Array.isArray(this.servicerName)) {
      $dara.Model.validateArray(this.servicerName);
    }
    if(Array.isArray(this.touchId)) {
      $dara.Model.validateArray(this.touchId);
    }
    if(Array.isArray(this.touchType)) {
      $dara.Model.validateArray(this.touchType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

