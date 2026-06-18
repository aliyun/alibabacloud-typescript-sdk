// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotlineSessionQueryRequest extends $dara.Model {
  /**
   * @remarks
   * Session ID. The acid received via WebSocket after an inbound call.
   * 
   * @example
   * 7719786****
   */
  acid?: string;
  /**
   * @remarks
   * Session ID List.
   */
  acidList?: string[];
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
   * - **dailing**: Agent hang-up during ringing.  
   * - **TouchRingCallLoss**: Queue hang-up during ringing.
   * 
   * @example
   * normal
   */
  callResult?: string;
  /**
   * @remarks
   * List of call results.
   */
  callResultList?: string[];
  /**
   * @remarks
   * Call Type. Valid values:
   * - **1**: Outbound call.
   * - **2**: Inbound call.
   * - **3**: Change owner.
   * 
   * @example
   * 1
   */
  callType?: number;
  /**
   * @remarks
   * Call Type List.
   */
  callTypeList?: number[];
  /**
   * @remarks
   * Calling party number, such as a user\\"s phone number, agent number, or machine number.
   * 
   * @example
   * 135615****
   */
  calledNumber?: string;
  /**
   * @remarks
   * List of called numbers.
   */
  calledNumberList?: string[];
  /**
   * @remarks
   * Calling party number, such as a user\\"s phone number, customer service agent number, or machine number.
   * 
   * @example
   * 057177****
   */
  callingNumber?: string;
  /**
   * @remarks
   * List of calling numbers.
   */
  callingNumberList?: string[];
  /**
   * @remarks
   * Skill group ID.
   * 
   * @example
   * 123456
   */
  groupId?: number;
  /**
   * @remarks
   * List of skill group IDs.
   */
  groupIdList?: number[];
  /**
   * @remarks
   * Skill group name.
   * 
   * @example
   * 自动化技能组
   */
  groupName?: string;
  /**
   * @remarks
   * Global unique ID (GUID) of the call detail.
   * 
   * @example
   * acc1c58dab4a4****0e3813c66
   */
  id?: string;
  /**
   * @remarks
   * AICCS instance ID.  
   * You can obtain it in the **Instance Management** section of the left-side navigation pane in the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * Membership ID.
   * 
   * @example
   * 7856****
   */
  memberId?: string;
  /**
   * @remarks
   * Membership List.
   */
  memberIdList?: string[];
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
   * Current page number. The value must be greater than **0**. Default Value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Page size. The value must be greater than **0**. Default value: **20**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Extension parameters.
   * 
   * @example
   * xxxx
   */
  params?: string;
  /**
   * @remarks
   * End UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1614829721
   */
  queryEndTime?: number;
  /**
   * @remarks
   * Start UNIX timestamp. Unit: ms.
   * 
   * @example
   * 1614828721
   */
  queryStartTime?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Agent ID.
   * 
   * @example
   * 555555
   */
  servicerId?: string;
  /**
   * @remarks
   * List of agent IDs.
   */
  servicerIdList?: string[];
  /**
   * @remarks
   * Agent Name.
   * 
   * @example
   * 刘测试
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

