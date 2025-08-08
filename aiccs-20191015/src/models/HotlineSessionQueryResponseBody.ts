// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotlineSessionQueryResponseBodyDataCallDetailRecord extends $dara.Model {
  /**
   * @example
   * 7719786
   */
  acid?: string;
  /**
   * @example
   * 12
   */
  activeTransferId?: string;
  /**
   * @example
   * 37
   */
  callContinueTime?: number;
  /**
   * @example
   * normal
   */
  callResult?: string;
  /**
   * @example
   * 1
   */
  callType?: number;
  /**
   * @example
   * 135615*****
   */
  calledNumber?: string;
  /**
   * @example
   * 0571773
   */
  callingNumber?: string;
  /**
   * @example
   * 2020-10-02 22:32:55
   */
  createTime?: string;
  /**
   * @example
   * 4
   */
  evaluationLevel?: number;
  /**
   * @example
   * 4
   */
  evaluationScore?: number;
  /**
   * @example
   * 123456
   */
  groupId?: number;
  groupName?: string;
  /**
   * @example
   * 2
   */
  hangUpRole?: string;
  /**
   * @example
   * 2020-10-02 22:33:46
   */
  hangUpTime?: string;
  /**
   * @example
   * acc1c58dab4a4dd280e3813c66
   */
  id?: string;
  /**
   * @example
   * 2020-10-02 22:32:55
   */
  inQueueTime?: string;
  /**
   * @example
   * 7856876
   */
  memberId?: string;
  memberName?: string;
  /**
   * @example
   * 2020-10-02 22:32:59
   */
  outQueueTime?: string;
  /**
   * @example
   * 12
   */
  passiveTransferId?: string;
  /**
   * @example
   * 1
   */
  passiveTransferIdType?: string;
  /**
   * @example
   * 2020-10-02 22:33:09
   */
  pickUpTime?: string;
  /**
   * @example
   * 4
   */
  queueUpContinueTime?: number;
  /**
   * @example
   * 10
   */
  ringContinueTime?: number;
  /**
   * @example
   * 2020-10-02 22:33:09
   */
  ringEndTime?: string;
  /**
   * @example
   * 2020-10-02 22:32:59
   */
  ringStartTime?: string;
  /**
   * @example
   * 555555
   */
  servicerId?: string;
  servicerName?: string;
  /**
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
  callDetailRecord?: HotlineSessionQueryResponseBodyDataCallDetailRecord[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * @example
   * Success
   */
  code?: string;
  data?: HotlineSessionQueryResponseBodyData;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE339D98-9BD3-4413-B165
   */
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

