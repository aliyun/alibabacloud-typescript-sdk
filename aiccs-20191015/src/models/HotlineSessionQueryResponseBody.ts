// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotlineSessionQueryResponseBodyDataCallDetailRecord extends $dara.Model {
  /**
   * @remarks
   * Session ID. The acid in WebSocket after an incoming call.
   * 
   * @example
   * 7719786
   */
  acid?: string;
  /**
   * @remarks
   * Agent ID.  
   * 
   * > This field is null in non–change owner scenarios.
   * 
   * @example
   * 12
   */
  activeTransferId?: string;
  /**
   * @remarks
   * Call duration, in seconds.  
   * 
   * > Unconnected calls do not include call duration.
   * 
   * @example
   * 37
   */
  callContinueTime?: number;
  /**
   * @remarks
   * Call result. Valid values:
   * 
   * - **normal**: Normal hang-up.
   * - **touchRouteError**: Queue hang-up.
   * - **touchInQueue**: Queue hang-up.
   * - **touchInLoss**: Queue hang-up.
   * - **userHangup**: User hang-up or IVR hang-up.
   * - **sysHangup**: System hang-up or IVR hang-up.
   * - **transferAgent**: User hang-up or IVR hang-up.
   * - **dailing**: Agent hang-up or ring-off hang-up.
   * - **TouchRingCallLoss**: Queue hang-up or ring-off hang-up.
   * 
   * @example
   * normal
   */
  callResult?: string;
  /**
   * @remarks
   * Call type. Valid values:
   * - **1**: Outbound call
   * - **2**: Inbound call
   * - **3**: Change owner
   * 
   * @example
   * 1
   */
  callType?: number;
  /**
   * @remarks
   * Called number.
   * 
   * @example
   * 135615*****
   */
  calledNumber?: string;
  /**
   * @remarks
   * Calling party number, such as a user\\"s phone number, agent number, or machine number.
   * 
   * @example
   * 0571773
   */
  callingNumber?: string;
  /**
   * @remarks
   * Call creation time.
   * 
   * > - In outbound scenarios, this is the time when the outbound call was initiated.
   * > - In inbound scenarios, this is the time when the call entered the ACC system.
   * 
   * @example
   * 2020-10-02 22:32:55
   */
  createTime?: string;
  /**
   * @remarks
   * Satisfaction rating, indicated by star level. Valid values:
   * 
   * - **2**: Two-star satisfaction
   * - **3**: Three-star satisfaction
   * - **4**: Four-star satisfaction
   * - **5**: Five-star satisfaction
   * 
   * > This field has no data in outbound scenarios or scenarios where the call was not answered.
   * 
   * @example
   * 4
   */
  evaluationLevel?: number;
  /**
   * @remarks
   * Satisfaction score. Valid values:
   * - **1**: Very dissatisfied
   * - **2**: Dissatisfied
   * - **3**: Neutral
   * - **4**: Satisfied
   * - **5**: Very satisfied
   * 
   * > This field has no data in outbound scenarios or scenarios where the call was not answered.
   * 
   * @example
   * 4
   */
  evaluationScore?: number;
  /**
   * @remarks
   * Skill group ID.  
   * 
   * > When CallType is **1**, outbound call scenarios do not include skill group information.
   * 
   * @example
   * 123456
   */
  groupId?: number;
  /**
   * @remarks
   * Skill group name.  
   * > When CallType is **1**, outbound call scenarios do not include skill group information.
   * 
   * @example
   * 自动化技能组
   */
  groupName?: string;
  /**
   * @remarks
   * Party that hung up. Valid values:  
   * 
   * - **1**: System hung up  
   * - **2**: Customer hung up  
   * - **3**: Agent hung up  
   * - **null**: Unknown
   * 
   * @example
   * 2
   */
  hangUpRole?: string;
  /**
   * @remarks
   * Hang-up time.
   * 
   * @example
   * 2020-10-02 22:33:46
   */
  hangUpTime?: string;
  /**
   * @remarks
   * The GUID of the call detail record.
   * 
   * @example
   * acc1c58dab4a4dd280e3813c66
   */
  id?: string;
  /**
   * @remarks
   * Time when the call entered the queue for assignment.  
   * 
   * > Outbound call scenarios do not include queue entry time.
   * 
   * @example
   * 2020-10-02 22:32:55
   */
  inQueueTime?: string;
  /**
   * @remarks
   * Membership ID.
   * 
   * @example
   * 7856876
   */
  memberId?: string;
  /**
   * @remarks
   * Membership name.
   * 
   * @example
   * 匿名会员
   */
  memberName?: string;
  /**
   * @remarks
   * The time when the hotline call is assigned and dequeued.
   * 
   * > Outbound scenarios do not have a dequeue time.
   * 
   * @example
   * 2020-10-02 22:32:59
   */
  outQueueTime?: string;
  /**
   * @remarks
   * Agent ID. The phone number to which the call is transferred.
   * > This field is null in non-transfer scenarios.
   * 
   * @example
   * 12
   */
  passiveTransferId?: string;
  /**
   * @remarks
   * The recipient of the transferred session. Valid values:
   * - **1**: Agent ID.
   * - **2**: Transferred phone number.
   * 
   * > This field is null in non-transfer scenarios.
   * 
   * @example
   * 1
   */
  passiveTransferIdType?: string;
  /**
   * @remarks
   * The time when the call is answered.
   * 
   * @example
   * 2020-10-02 22:33:09
   */
  pickUpTime?: string;
  /**
   * @remarks
   * Queue duration.
   * 
   * @example
   * 4
   */
  queueUpContinueTime?: number;
  /**
   * @remarks
   * Ringing duration, in seconds.
   * 
   * > Outbound scenarios do not have ringing duration.
   * 
   * @example
   * 10
   */
  ringContinueTime?: number;
  /**
   * @remarks
   * The time when ringing ends.
   * 
   * > Outbound scenarios do not have a ring end time.
   * 
   * @example
   * 2020-10-02 22:33:09
   */
  ringEndTime?: string;
  /**
   * @remarks
   * Ringing start time.  
   * 
   * > Outbound call scenarios do not include ringing start time.
   * 
   * @example
   * 2020-10-02 22:32:59
   */
  ringStartTime?: string;
  /**
   * @remarks
   * Agent ID.  
   * > In inbound scenarios, agent information is unavailable until the call is assigned to an agent.
   * 
   * @example
   * 555555
   */
  servicerId?: string;
  /**
   * @remarks
   * Agent name.
   * > Agent information is unavailable before the call is assigned to an agent in inbound scenarios.
   * 
   * @example
   * 刘测试
   */
  servicerName?: string;
  /**
   * @remarks
   * Long-distance call.
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
   * Call detail records.
   */
  callDetailRecord?: HotlineSessionQueryResponseBodyDataCallDetailRecord[];
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of records.
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
   * Status code. A value of "Success" indicates that the request succeeded.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Call data.
   */
  data?: HotlineSessionQueryResponseBodyData;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EE339D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded.
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

