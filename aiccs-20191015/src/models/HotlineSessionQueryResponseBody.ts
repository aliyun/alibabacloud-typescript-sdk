// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotlineSessionQueryResponseBodyDataCallDetailRecord extends $dara.Model {
  /**
   * @remarks
   * The session ID. The acid in the websocket after an inbound call.
   * 
   * @example
   * 7719786
   */
  acid?: string;
  /**
   * @remarks
   * The agent ID.
   * > This value is Null in non-transfer scenarios.
   * 
   * @example
   * 12
   */
  activeTransferId?: string;
  /**
   * @remarks
   * The call duration. Unit: seconds.
   * 
   * > No call duration is available for unanswered calls.
   * 
   * @example
   * 37
   */
  callContinueTime?: number;
  /**
   * @remarks
   * The call result. Valid values:
   * 
   * - **normal**: The call ended normally.
   * - **touchRouteError**: The call was terminated in the queue.
   * - **touchInQueue**: The call was terminated in the queue.
   * - **touchInLoss**: The call was terminated in the queue.
   * - **userHangup**: The user hung up or the call was terminated in the IVR.
   * - **sysHangup**: The system hung up or the call was terminated in the IVR.
   * - **transferAgent**: The user hung up or the call was terminated in the IVR.
   * - **dailing**: The agent hung up or the call was terminated during ringing.
   * - **TouchRingCallLoss**: The call was terminated in the queue or during ringing.
   * 
   * @example
   * normal
   */
  callResult?: string;
  /**
   * @remarks
   * The call type. Valid values:
   * - **1**: outbound call
   * - **2**: inbound call
   * - **3**: transferred call
   * 
   * @example
   * 1
   */
  callType?: number;
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 135615*****
   */
  calledNumber?: string;
  /**
   * @remarks
   * The number of the caller. For example, a mobile phone number, an agent number, or a robot number.
   * 
   * @example
   * 0571773
   */
  callingNumber?: string;
  /**
   * @remarks
   * The time when the call was created.
   * 
   * > - For outbound calls, this is the time when the outbound call was initiated.
   * - For inbound calls, this is the time when the call entered the ACC system.
   * 
   * @example
   * 2020-10-02 22:32:55
   */
  createTime?: string;
  /**
   * @remarks
   * The satisfaction rating level. Valid values:
   * 
   * - **2**: level-2 satisfaction
   * - **3**: level-3 satisfaction
   * - **4**: level-4 satisfaction
   * - **5**: level-5 satisfaction
   * 
   * > No data is available for outbound calls or unanswered calls.
   * 
   * @example
   * 4
   */
  evaluationLevel?: number;
  /**
   * @remarks
   * The satisfaction score. Valid values:
   * - **1**: Very dissatisfied.
   * - **2**: Dissatisfied.
   * - **3**: Average.
   * - **4**: Satisfied.
   * - **5**: Very satisfied.
   * 
   * > No data is available for outbound calls or unanswered calls.
   * 
   * @example
   * 4
   */
  evaluationScore?: number;
  /**
   * @remarks
   * The skill group ID.
   * 
   * > When CallType is set to **1**, no skill group information is available for outbound calls.
   * 
   * @example
   * 123456
   */
  groupId?: number;
  /**
   * @remarks
   * The skill group name.
   * > When CallType is set to **1**, no skill group information is available for outbound calls.
   * 
   * @example
   * AutomationSkillGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The party that hung up. Valid values:
   * 
   * - **1**: System hung up.
   * - **2**: Customer hung up.
   * - **3**: Agent hung up.
   * - **null**: Unknown.
   * 
   * @example
   * 2
   */
  hangUpRole?: string;
  /**
   * @remarks
   * The hang-up time.
   * 
   * @example
   * 2020-10-02 22:33:46
   */
  hangUpTime?: string;
  /**
   * @remarks
   * The globally unique ID of the call details.
   * 
   * @example
   * acc1c58dab4a4dd280e3813c66
   */
  id?: string;
  /**
   * @remarks
   * The time when the call entered the queue for hotline assignment.
   * > No queue entry time is available for outbound calls.
   * 
   * @example
   * 2020-10-02 22:32:55
   */
  inQueueTime?: string;
  /**
   * @remarks
   * The member ID.
   * 
   * @example
   * 7856876
   */
  memberId?: string;
  /**
   * @remarks
   * The member name.
   * 
   * @example
   * AnonymousMember
   */
  memberName?: string;
  /**
   * @remarks
   * The time when the call left the queue for hotline assignment.
   * 
   * > No queue exit time is available for outbound calls.
   * 
   * @example
   * 2020-10-02 22:32:59
   */
  outQueueTime?: string;
  /**
   * @remarks
   * The agent ID or transferred phone number.
   * > This value is Null in non-transfer scenarios.
   * 
   * @example
   * 12
   */
  passiveTransferId?: string;
  /**
   * @remarks
   * The type of the party to which the session was transferred. Valid values:
   * - **1**: Agent ID.
   * - **2**: Transferred phone number.
   * 
   * > This value is Null in non-transfer scenarios.
   * 
   * @example
   * 1
   */
  passiveTransferIdType?: string;
  /**
   * @remarks
   * The time when the call was answered.
   * 
   * @example
   * 2020-10-02 22:33:09
   */
  pickUpTime?: string;
  /**
   * @remarks
   * The queue wait duration.
   * 
   * @example
   * 4
   */
  queueUpContinueTime?: number;
  /**
   * @remarks
   * The ringing duration. Unit: seconds.
   * 
   * > No ringing duration is available for outbound calls.
   * 
   * @example
   * 10
   */
  ringContinueTime?: number;
  /**
   * @remarks
   * The time when ringing ended.
   * 
   * > No ringing end time is available for outbound calls.
   * 
   * @example
   * 2020-10-02 22:33:09
   */
  ringEndTime?: string;
  /**
   * @remarks
   * The time when ringing started.
   * 
   * > No ringing start time is available for outbound calls.
   * 
   * @example
   * 2020-10-02 22:32:59
   */
  ringStartTime?: string;
  /**
   * @remarks
   * The agent ID.
   * > No agent information is available before an agent is assigned for inbound calls.
   * 
   * @example
   * 555555
   */
  servicerId?: string;
  /**
   * @remarks
   * The agent name.
   * > No agent information is available before an agent is assigned for inbound calls.
   * 
   * @example
   * TestAgent
   */
  servicerName?: string;
  /**
   * @remarks
   * The long-distance call.
   * 
   * @example
   * 1861111****
   */
  trunkCall?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      activeTransferId: 'ActiveTransferId',
      callContinueTime: 'CallContinueTime',
      callResult: 'CallResult',
      callType: 'CallType',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      createTime: 'CreateTime',
      evaluationLevel: 'EvaluationLevel',
      evaluationScore: 'EvaluationScore',
      groupId: 'GroupId',
      groupName: 'GroupName',
      hangUpRole: 'HangUpRole',
      hangUpTime: 'HangUpTime',
      id: 'Id',
      inQueueTime: 'InQueueTime',
      memberId: 'MemberId',
      memberName: 'MemberName',
      outQueueTime: 'OutQueueTime',
      passiveTransferId: 'PassiveTransferId',
      passiveTransferIdType: 'PassiveTransferIdType',
      pickUpTime: 'PickUpTime',
      queueUpContinueTime: 'QueueUpContinueTime',
      ringContinueTime: 'RingContinueTime',
      ringEndTime: 'RingEndTime',
      ringStartTime: 'RingStartTime',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      trunkCall: 'TrunkCall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      activeTransferId: 'string',
      callContinueTime: 'number',
      callResult: 'string',
      callType: 'number',
      calledNumber: 'string',
      callingNumber: 'string',
      createTime: 'string',
      evaluationLevel: 'number',
      evaluationScore: 'number',
      groupId: 'number',
      groupName: 'string',
      hangUpRole: 'string',
      hangUpTime: 'string',
      id: 'string',
      inQueueTime: 'string',
      memberId: 'string',
      memberName: 'string',
      outQueueTime: 'string',
      passiveTransferId: 'string',
      passiveTransferIdType: 'string',
      pickUpTime: 'string',
      queueUpContinueTime: 'number',
      ringContinueTime: 'number',
      ringEndTime: 'string',
      ringStartTime: 'string',
      servicerId: 'string',
      servicerName: 'string',
      trunkCall: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotlineSessionQueryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The call detail records.
   */
  callDetailRecord?: HotlineSessionQueryResponseBodyDataCallDetailRecord[];
  /**
   * @remarks
   * The current page number.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 26
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      callDetailRecord: 'CallDetailRecord',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDetailRecord: { 'type': 'array', 'itemType': HotlineSessionQueryResponseBodyDataCallDetailRecord },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.callDetailRecord)) {
      $dara.Model.validateArray(this.callDetailRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotlineSessionQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of Success indicates that the request was successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The call data.
   */
  data?: HotlineSessionQueryResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE339D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful.
   * 
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
      data: HotlineSessionQueryResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

