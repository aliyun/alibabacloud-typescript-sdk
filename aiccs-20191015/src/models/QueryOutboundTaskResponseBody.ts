// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOutboundTaskResponseBodyDataList extends $dara.Model {
  buId?: number;
  callerNum?: string;
  creator?: string;
  departmentId?: number;
  description?: string;
  endDate?: string;
  endTime?: string;
  extAttrs?: string;
  gmtCreate?: number;
  gmtModified?: number;
  groupName?: string;
  id?: number;
  model?: number;
  modifier?: string;
  name?: string;
  retryInterval?: number;
  retryTime?: number;
  skillGroup?: number;
  startDate?: string;
  startTime?: string;
  status?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      buId: 'BuId',
      callerNum: 'CallerNum',
      creator: 'Creator',
      departmentId: 'DepartmentId',
      description: 'Description',
      endDate: 'EndDate',
      endTime: 'EndTime',
      extAttrs: 'ExtAttrs',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupName: 'GroupName',
      id: 'Id',
      model: 'Model',
      modifier: 'Modifier',
      name: 'Name',
      retryInterval: 'RetryInterval',
      retryTime: 'RetryTime',
      skillGroup: 'SkillGroup',
      startDate: 'StartDate',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buId: 'number',
      callerNum: 'string',
      creator: 'string',
      departmentId: 'number',
      description: 'string',
      endDate: 'string',
      endTime: 'string',
      extAttrs: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupName: 'string',
      id: 'number',
      model: 'number',
      modifier: 'string',
      name: 'string',
      retryInterval: 'number',
      retryTime: 'number',
      skillGroup: 'number',
      startDate: 'string',
      startTime: 'string',
      status: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOutboundTaskResponseBodyData extends $dara.Model {
  currentPage?: string;
  list?: QueryOutboundTaskResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': QueryOutboundTaskResponseBodyDataList },
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

export class QueryOutboundTaskResponseBody extends $dara.Model {
  code?: string;
  data?: QueryOutboundTaskResponseBodyData;
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
      data: QueryOutboundTaskResponseBodyData,
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

