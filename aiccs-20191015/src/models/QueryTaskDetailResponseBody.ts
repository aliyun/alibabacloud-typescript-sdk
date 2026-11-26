// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskDetailResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The caller number.
   * 
   * @example
   * 1367123xxxx
   */
  ani?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 0
   */
  buId?: number;
  /**
   * @remarks
   * The department ID of the skill group.
   * 
   * @example
   * 123
   */
  departmentId?: number;
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 0571456****
   */
  dnis?: string;
  /**
   * @remarks
   * The call end reasons.
   * 
   * @example
   * 110
   */
  endReason?: number;
  /**
   * @remarks
   * The extended attributes.
   * 
   * @example
   * {"Note":"Outbound call test"}
   */
  extAttrs?: string;
  /**
   * @remarks
   * The time when the task was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1615445263000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the task was updated. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1615478401000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 120001
   */
  id?: number;
  /**
   * @remarks
   * The ID of the member. The ID of an anonymous member is -1.
   * 
   * @example
   * -1
   */
  memberId?: number;
  /**
   * @remarks
   * The name of the member.
   * 
   * @example
   * Anonymous member
   */
  memberName?: string;
  /**
   * @remarks
   * The outbound call number.
   * 
   * @example
   * 130****0000
   */
  outboundNum?: number;
  /**
   * @remarks
   * The ID of the outbound task.
   * 
   * @example
   * 120001
   */
  outboundTaskId?: number;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The next retry time.
   * 
   * @example
   * 1
   */
  retryTime?: string;
  /**
   * @remarks
   * The ID of the customer service representative.
   * 
   * @example
   * 1212
   */
  servicerId?: number;
  /**
   * @remarks
   * The name of the customer service representative.
   * 
   * @example
   * John Doe
   */
  servicerName?: string;
  /**
   * @remarks
   * The ID of the skill group.
   * 
   * @example
   * 123456
   */
  skillGroup?: number;
  /**
   * @remarks
   * The outbound call status. Valid values:
   * 
   * - **1**: Inbound call ringing.
   * - **2**: Inbound call answered.
   * - **3**: Inbound call disconnected.
   * - **4**: Outbound call ringing.
   * - **5**: Outbound call answered.
   * - **6**: Outbound call disconnected.
   * 
   * @example
   * 3
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      ani: 'Ani',
      buId: 'BuId',
      departmentId: 'DepartmentId',
      dnis: 'Dnis',
      endReason: 'EndReason',
      extAttrs: 'ExtAttrs',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      memberId: 'MemberId',
      memberName: 'MemberName',
      outboundNum: 'OutboundNum',
      outboundTaskId: 'OutboundTaskId',
      priority: 'Priority',
      retryTime: 'RetryTime',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      skillGroup: 'SkillGroup',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ani: 'string',
      buId: 'number',
      departmentId: 'number',
      dnis: 'string',
      endReason: 'number',
      extAttrs: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      memberId: 'number',
      memberName: 'string',
      outboundNum: 'number',
      outboundTaskId: 'number',
      priority: 'number',
      retryTime: 'string',
      servicerId: 'number',
      servicerName: 'string',
      skillGroup: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The outbound task information.
   */
  list?: QueryTaskDetailResponseBodyDataList[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 34
   */
  totalResults?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      list: 'List',
      pageSize: 'PageSize',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      list: { 'type': 'array', 'itemType': QueryTaskDetailResponseBodyDataList },
      pageSize: 'string',
      totalResults: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The queried data.
   */
  data?: QueryTaskDetailResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryTaskDetailResponseBodyData,
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
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

