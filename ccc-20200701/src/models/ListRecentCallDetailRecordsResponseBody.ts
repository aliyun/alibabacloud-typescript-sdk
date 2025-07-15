// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecentCallDetailRecordsResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * agent@ccc-test
   */
  agentIds?: string;
  /**
   * @example
   * 16
   */
  callDuration?: string;
  /**
   * @example
   * 1332315****
   */
  calledNumber?: string;
  /**
   * @example
   * 0533128****
   */
  callingNumber?: string;
  /**
   * @example
   * Success
   */
  contactDisposition?: string;
  /**
   * @example
   * job-7660472242845****
   */
  contactId?: string;
  /**
   * @example
   * Outbound
   */
  contactType?: string;
  /**
   * @example
   * 16
   */
  duration?: number;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupIds?: string;
  /**
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
  list?: ListRecentCallDetailRecordsResponseBodyDataList[];
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
   * @example
   * OK
   */
  code?: string;
  data?: ListRecentCallDetailRecordsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
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

