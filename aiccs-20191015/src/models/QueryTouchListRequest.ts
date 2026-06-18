// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTouchListRequest extends $dara.Model {
  /**
   * @remarks
   * List of session IDs for term query.
   */
  channelId?: string[];
  /**
   * @remarks
   * Channel Type.
   */
  channelType?: number[];
  /**
   * @remarks
   * The right boundary of the time range for session end. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1614600500000
   */
  closeTimeEnd?: number;
  /**
   * @remarks
   * The left boundary of the time range for session end. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1614600400000
   */
  closeTimeStart?: number;
  /**
   * @remarks
   * Current page. The value must be greater than **0**. Default Value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Satisfaction level.
   */
  evaluationLevel?: number[];
  /**
   * @remarks
   * Satisfaction score.
   */
  evaluationScore?: number[];
  /**
   * @remarks
   * Evaluation status.
   */
  evaluationStatus?: number[];
  /**
   * @remarks
   * The right boundary of the time range for session start. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1614599400000
   */
  firstTimeEnd?: number;
  /**
   * @remarks
   * The left boundary of the time range for session start. UNIX timestamp format (unit: ms).
   * 
   * @example
   * 1614596400000
   */
  firstTimeStart?: number;
  /**
   * @remarks
   * Artificial Intelligence Cloud Call Service (AICCS) instance ID.  
   * You can obtain it from **Instance Management** in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * List of membership IDs to query.
   */
  memberId?: number[];
  /**
   * @remarks
   * A list of membership names to query.
   */
  memberName?: string[];
  /**
   * @remarks
   * Number of entries per page. The value must be greater than **0**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * List of inbound skill group IDs.
   */
  queueId?: number[];
  /**
   * @remarks
   * A list of service agent IDs to query.
   */
  servicerId?: number[];
  /**
   * @remarks
   * List of service agent names to query.
   */
  servicerName?: string[];
  /**
   * @remarks
   * List of touch IDs for term query.
   */
  touchId?: number[];
  /**
   * @remarks
   * Touch type.
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

