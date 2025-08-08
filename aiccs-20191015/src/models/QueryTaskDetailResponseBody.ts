// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskDetailResponseBodyDataList extends $dara.Model {
  ani?: string;
  buId?: number;
  departmentId?: number;
  dnis?: string;
  endReason?: number;
  extAttrs?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  memberId?: number;
  memberName?: string;
  outboundNum?: number;
  outboundTaskId?: number;
  priority?: number;
  retryTime?: string;
  servicerId?: number;
  servicerName?: string;
  skillGroup?: number;
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
  currentPage?: string;
  list?: QueryTaskDetailResponseBodyDataList[];
  pageSize?: string;
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
  code?: string;
  data?: QueryTaskDetailResponseBodyData;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
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

