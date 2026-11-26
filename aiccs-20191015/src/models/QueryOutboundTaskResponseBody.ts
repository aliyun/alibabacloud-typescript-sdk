// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOutboundTaskResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 0
   */
  buId?: number;
  /**
   * @remarks
   * The caller number.
   * 
   * @example
   * 130****0000
   */
  callerNum?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * Zhang San
   */
  creator?: string;
  /**
   * @remarks
   * The department ID.
   * 
   * @example
   * 123
   */
  departmentId?: number;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The end date of task execution. The maximum time span between the start time and the end time is 7 days.
   * 
   * @example
   * 2020-08-09
   */
  endDate?: string;
  /**
   * @remarks
   * The end time of task execution.
   * 
   * @example
   * 23:00:00
   */
  endTime?: string;
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
   * The task creation time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1615445263000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The task update time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1615478401000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The skill group name.
   * 
   * @example
   * Test skill group
   */
  groupName?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 120001
   */
  id?: number;
  /**
   * @remarks
   * The model.
   * 
   * @example
   * 1
   */
  model?: number;
  /**
   * @remarks
   * The modifier.
   * 
   * @example
   * Zhang San
   */
  modifier?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Test task
   */
  name?: string;
  /**
   * @remarks
   * The retry interval. Unit: minutes.
   * 
   * @example
   * 10
   */
  retryInterval?: number;
  /**
   * @remarks
   * The next retry time.
   * 
   * @example
   * 1
   */
  retryTime?: number;
  /**
   * @remarks
   * The skill group ID.
   * 
   * @example
   * 19467
   */
  skillGroup?: number;
  /**
   * @remarks
   * The start date of task execution. The maximum time span between the start time and the end time is 7 days.
   * 
   * @example
   * 2020-08-08
   */
  startDate?: string;
  /**
   * @remarks
   * The start time of task execution.
   * 
   * @example
   * 09:09:09
   */
  startTime?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * 5
   */
  status?: number;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * 2
   */
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
   * The list of outbound call records.
   */
  list?: QueryOutboundTaskResponseBodyDataList[];
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
   * The total number of records.
   * 
   * @example
   * 194
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
   * The outbound call task information.
   */
  data?: QueryOutboundTaskResponseBodyData;
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
   * successful
   */
  message?: string;
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

