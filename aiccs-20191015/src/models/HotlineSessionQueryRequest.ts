// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotlineSessionQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The session ID. The acid in the websocket after an inbound call.
   * 
   * @example
   * 7719786****
   */
  acid?: string;
  /**
   * @remarks
   * The list of session IDs.
   */
  acidList?: string[];
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
   * The list of call results.
   */
  callResultList?: string[];
  /**
   * @remarks
   * The call type. Valid values:
   * - **1**: outbound call.
   * - **2**: inbound call.
   * - **3**: transferred call.
   * 
   * @example
   * 1
   */
  callType?: number;
  /**
   * @remarks
   * The list of call types.
   */
  callTypeList?: number[];
  /**
   * @remarks
   * The number of the caller. For example, a mobile phone number, an agent number, or a robot number.
   * 
   * @example
   * 135615****
   */
  calledNumber?: string;
  /**
   * @remarks
   * The list of called numbers.
   */
  calledNumberList?: string[];
  /**
   * @remarks
   * The number of the callee. For example, a mobile phone number, an agent number, or a robot number.
   * 
   * @example
   * 057177****
   */
  callingNumber?: string;
  /**
   * @remarks
   * The list of calling numbers.
   */
  callingNumberList?: string[];
  /**
   * @remarks
   * The ID of the skill group.
   * 
   * @example
   * 123456
   */
  groupId?: number;
  /**
   * @remarks
   * The list of skill group IDs.
   */
  groupIdList?: number[];
  /**
   * @remarks
   * The name of the skill group.
   * 
   * @example
   * AutomationSkillGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The globally unique ID of the call details.
   * 
   * @example
   * acc1c58dab4a4****0e3813c66
   */
  id?: string;
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
   * The member ID.
   * 
   * @example
   * 7856****
   */
  memberId?: string;
  /**
   * @remarks
   * The list of member IDs.
   */
  memberIdList?: string[];
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
   * The current page number. The value must be greater than **0**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. The value must be greater than **0**. Default value: **20**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The extended parameters.
   * 
   * @example
   * xxxx
   */
  params?: string;
  /**
   * @remarks
   * The end timestamp. Unit: milliseconds.
   * 
   * @example
   * 1614829721
   */
  queryEndTime?: number;
  /**
   * @remarks
   * The start timestamp. Unit: milliseconds.
   * 
   * @example
   * 1614828721
   */
  queryStartTime?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * 555555
   */
  servicerId?: string;
  /**
   * @remarks
   * The list of agent IDs.
   */
  servicerIdList?: string[];
  /**
   * @remarks
   * The agent name.
   * 
   * @example
   * TestAgent
   */
  servicerName?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      acidList: 'AcidList',
      callResult: 'CallResult',
      callResultList: 'CallResultList',
      callType: 'CallType',
      callTypeList: 'CallTypeList',
      calledNumber: 'CalledNumber',
      calledNumberList: 'CalledNumberList',
      callingNumber: 'CallingNumber',
      callingNumberList: 'CallingNumberList',
      groupId: 'GroupId',
      groupIdList: 'GroupIdList',
      groupName: 'GroupName',
      id: 'Id',
      instanceId: 'InstanceId',
      memberId: 'MemberId',
      memberIdList: 'MemberIdList',
      memberName: 'MemberName',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      params: 'Params',
      queryEndTime: 'QueryEndTime',
      queryStartTime: 'QueryStartTime',
      requestId: 'RequestId',
      servicerId: 'ServicerId',
      servicerIdList: 'ServicerIdList',
      servicerName: 'ServicerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      acidList: { 'type': 'array', 'itemType': 'string' },
      callResult: 'string',
      callResultList: { 'type': 'array', 'itemType': 'string' },
      callType: 'number',
      callTypeList: { 'type': 'array', 'itemType': 'number' },
      calledNumber: 'string',
      calledNumberList: { 'type': 'array', 'itemType': 'string' },
      callingNumber: 'string',
      callingNumberList: { 'type': 'array', 'itemType': 'string' },
      groupId: 'number',
      groupIdList: { 'type': 'array', 'itemType': 'number' },
      groupName: 'string',
      id: 'string',
      instanceId: 'string',
      memberId: 'string',
      memberIdList: { 'type': 'array', 'itemType': 'string' },
      memberName: 'string',
      pageNo: 'number',
      pageSize: 'number',
      params: 'string',
      queryEndTime: 'number',
      queryStartTime: 'number',
      requestId: 'string',
      servicerId: 'string',
      servicerIdList: { 'type': 'array', 'itemType': 'string' },
      servicerName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.acidList)) {
      $dara.Model.validateArray(this.acidList);
    }
    if(Array.isArray(this.callResultList)) {
      $dara.Model.validateArray(this.callResultList);
    }
    if(Array.isArray(this.callTypeList)) {
      $dara.Model.validateArray(this.callTypeList);
    }
    if(Array.isArray(this.calledNumberList)) {
      $dara.Model.validateArray(this.calledNumberList);
    }
    if(Array.isArray(this.callingNumberList)) {
      $dara.Model.validateArray(this.callingNumberList);
    }
    if(Array.isArray(this.groupIdList)) {
      $dara.Model.validateArray(this.groupIdList);
    }
    if(Array.isArray(this.memberIdList)) {
      $dara.Model.validateArray(this.memberIdList);
    }
    if(Array.isArray(this.servicerIdList)) {
      $dara.Model.validateArray(this.servicerIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

