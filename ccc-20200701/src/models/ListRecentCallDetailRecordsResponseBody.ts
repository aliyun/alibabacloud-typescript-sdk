// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecentCallDetailRecordsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * List of agent IDs. Multiple values are separated by commas.
   * 
   * @example
   * agent@ccc-test
   */
  agentIds?: string;
  /**
   * @remarks
   * Call duration in seconds.
   * 
   * @example
   * 16
   */
  callDuration?: string;
  /**
   * @remarks
   * Called number.
   * 
   * @example
   * 1332315****
   */
  calledNumber?: string;
  /**
   * @remarks
   * Calling number.
   * 
   * @example
   * 0533128****
   */
  callingNumber?: string;
  /**
   * @remarks
   * The reason the call ended.
   * 
   * @example
   * Success
   */
  contactDisposition?: string;
  /**
   * @remarks
   * Call ID.
   * 
   * @example
   * job-7660472242845****
   */
  contactId?: string;
  /**
   * @remarks
   * Call type.
   * 
   * @example
   * Outbound
   */
  contactType?: string;
  /**
   * @remarks
   * Call duration in seconds.
   * 
   * @example
   * 16
   */
  duration?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Skill groups to which the agent participating in the call belongs. Multiple skill groups are separated by commas.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupIds?: string;
  /**
   * @remarks
   * Call start time. For inbound calls, it starts when the call enters IVR. For outbound calls, it starts when the call is answered. The format is a Unix timestamp string in milliseconds.
   * 
   * @example
   * 1532448000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      callDuration: 'CallDuration',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      contactDisposition: 'ContactDisposition',
      contactId: 'ContactId',
      contactType: 'ContactType',
      duration: 'Duration',
      instanceId: 'InstanceId',
      skillGroupIds: 'SkillGroupIds',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: 'string',
      callDuration: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      contactDisposition: 'string',
      contactId: 'string',
      contactType: 'string',
      duration: 'number',
      instanceId: 'string',
      skillGroupIds: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentCallDetailRecordsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of call records.
   */
  list?: ListRecentCallDetailRecordsResponseBodyDataList[];
  /**
   * @remarks
   * Page number, ranging from 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count. The actual total is returned only when PageNumber is 1; otherwise, it is 0.
   * 
   * @example
   * 11
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListRecentCallDetailRecordsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
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

export class ListRecentCallDetailRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: ListRecentCallDetailRecordsResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EEEE671A-3E24-4A04-81E6-6C4F5B39DF75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListRecentCallDetailRecordsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
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

