// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotlineSessionQueryRequest extends $dara.Model {
  /**
   * @example
   * 7719786****
   */
  acid?: string;
  acidList?: string[];
  /**
   * @example
   * normal
   */
  callResult?: string;
  callResultList?: string[];
  /**
   * @example
   * 1
   */
  callType?: number;
  callTypeList?: number[];
  /**
   * @example
   * 135615****
   */
  calledNumber?: string;
  calledNumberList?: string[];
  /**
   * @example
   * 057177****
   */
  callingNumber?: string;
  callingNumberList?: string[];
  /**
   * @example
   * 123456
   */
  groupId?: number;
  groupIdList?: number[];
  groupName?: string;
  /**
   * @example
   * acc1c58dab4a4dd280e3813c66
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 7856****
   */
  memberId?: string;
  memberIdList?: string[];
  memberName?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * xxxx
   */
  params?: string;
  /**
   * @example
   * 161482972
   */
  queryEndTime?: number;
  /**
   * @example
   * 161482872
   */
  queryStartTime?: number;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * 555555
   */
  servicerId?: string;
  servicerIdList?: string[];
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

