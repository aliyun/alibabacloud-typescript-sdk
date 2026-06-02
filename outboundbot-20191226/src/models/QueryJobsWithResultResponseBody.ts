// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobsWithResultResponseBodyJobsListLatestTaskContact extends $dara.Model {
  honorific?: string;
  /**
   * @example
   * 63860deb-6218-45df-b1e0-76f2b166e790
   */
  id?: string;
  /**
   * @example
   * cc231a1d-3c05-4739-8926-193ecf4097ba
   */
  jobUuid?: string;
  name?: string;
  /**
   * @example
   * 1882020****
   */
  phoneNumber?: string;
  /**
   * @example
   * 134123****
   */
  preferredPhoneNumber?: string;
  /**
   * @example
   * C01
   */
  referenceId?: string;
  role?: string;
  /**
   * @example
   * 151
   */
  round?: number;
  /**
   * @example
   * Available
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      honorific: 'Honorific',
      id: 'Id',
      jobUuid: 'JobUuid',
      name: 'Name',
      phoneNumber: 'PhoneNumber',
      preferredPhoneNumber: 'PreferredPhoneNumber',
      referenceId: 'ReferenceId',
      role: 'Role',
      round: 'Round',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      honorific: 'string',
      id: 'string',
      jobUuid: 'string',
      name: 'string',
      phoneNumber: 'string',
      preferredPhoneNumber: 'string',
      referenceId: 'string',
      role: 'string',
      round: 'number',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsWithResultResponseBodyJobsListLatestTaskDialExceptionCodes extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  hint?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hint: 'Hint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsWithResultResponseBodyJobsListLatestTaskExtras extends $dara.Model {
  /**
   * @remarks
   * Key
   */
  key?: string;
  /**
   * @remarks
   * Value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsWithResultResponseBodyJobsListLatestTaskTagHits extends $dara.Model {
  tagGroup?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagGroup: 'TagGroup',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagGroup: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsWithResultResponseBodyJobsListLatestTask extends $dara.Model {
  /**
   * @example
   * 40000
   */
  callDuration?: number;
  /**
   * @example
   * 40
   */
  callDurationDisplay?: string;
  /**
   * @example
   * 1615363297000
   */
  callTime?: number;
  contact?: QueryJobsWithResultResponseBodyJobsListLatestTaskContact;
  dialExceptionCodes?: QueryJobsWithResultResponseBodyJobsListLatestTaskDialExceptionCodes[];
  extras?: QueryJobsWithResultResponseBodyJobsListLatestTaskExtras[];
  /**
   * @example
   * 被叫用户
   */
  hangUpDirection?: string;
  /**
   * @example
   * true
   */
  hasAnswered?: boolean;
  /**
   * @example
   * false
   */
  hasHangUpByRejection?: boolean;
  /**
   * @example
   * true
   */
  hasLastPlaybackCompleted?: boolean;
  /**
   * @example
   * true
   */
  hasReachedEndOfFlow?: boolean;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  statusName?: string;
  tagHits?: QueryJobsWithResultResponseBodyJobsListLatestTaskTagHits[];
  /**
   * @example
   * FINISHED
   */
  taskEndReason?: string;
  static names(): { [key: string]: string } {
    return {
      callDuration: 'CallDuration',
      callDurationDisplay: 'CallDurationDisplay',
      callTime: 'CallTime',
      contact: 'Contact',
      dialExceptionCodes: 'DialExceptionCodes',
      extras: 'Extras',
      hangUpDirection: 'HangUpDirection',
      hasAnswered: 'HasAnswered',
      hasHangUpByRejection: 'HasHangUpByRejection',
      hasLastPlaybackCompleted: 'HasLastPlaybackCompleted',
      hasReachedEndOfFlow: 'HasReachedEndOfFlow',
      status: 'Status',
      statusName: 'StatusName',
      tagHits: 'TagHits',
      taskEndReason: 'TaskEndReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDuration: 'number',
      callDurationDisplay: 'string',
      callTime: 'number',
      contact: QueryJobsWithResultResponseBodyJobsListLatestTaskContact,
      dialExceptionCodes: { 'type': 'array', 'itemType': QueryJobsWithResultResponseBodyJobsListLatestTaskDialExceptionCodes },
      extras: { 'type': 'array', 'itemType': QueryJobsWithResultResponseBodyJobsListLatestTaskExtras },
      hangUpDirection: 'string',
      hasAnswered: 'boolean',
      hasHangUpByRejection: 'boolean',
      hasLastPlaybackCompleted: 'boolean',
      hasReachedEndOfFlow: 'boolean',
      status: 'string',
      statusName: 'string',
      tagHits: { 'type': 'array', 'itemType': QueryJobsWithResultResponseBodyJobsListLatestTaskTagHits },
      taskEndReason: 'string',
    };
  }

  validate() {
    if(this.contact && typeof (this.contact as any).validate === 'function') {
      (this.contact as any).validate();
    }
    if(Array.isArray(this.dialExceptionCodes)) {
      $dara.Model.validateArray(this.dialExceptionCodes);
    }
    if(Array.isArray(this.extras)) {
      $dara.Model.validateArray(this.extras);
    }
    if(Array.isArray(this.tagHits)) {
      $dara.Model.validateArray(this.tagHits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsWithResultResponseBodyJobsList extends $dara.Model {
  /**
   * @example
   * cc231a1d-3c05-4739-8926-193ecf4097ba
   */
  id?: string;
  jobFailureReason?: string;
  latestTask?: QueryJobsWithResultResponseBodyJobsListLatestTask;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  statusName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      jobFailureReason: 'JobFailureReason',
      latestTask: 'LatestTask',
      status: 'Status',
      statusName: 'StatusName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      jobFailureReason: 'string',
      latestTask: QueryJobsWithResultResponseBodyJobsListLatestTask,
      status: 'string',
      statusName: 'string',
    };
  }

  validate() {
    if(this.latestTask && typeof (this.latestTask as any).validate === 'function') {
      (this.latestTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsWithResultResponseBodyJobs extends $dara.Model {
  list?: QueryJobsWithResultResponseBodyJobsList[];
  /**
   * @example
   * 1
   */
  pageCount?: number;
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
   * 1
   */
  rowCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageCount: 'PageCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rowCount: 'RowCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryJobsWithResultResponseBodyJobsList },
      pageCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      rowCount: 'number',
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

export class QueryJobsWithResultResponseBodyLabels extends $dara.Model {
  name?: string;
  valueList?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      valueList: 'ValueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      valueList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.valueList)) {
      $dara.Model.validateArray(this.valueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsWithResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  jobs?: QueryJobsWithResultResponseBodyJobs;
  labels?: QueryJobsWithResultResponseBodyLabels[];
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 9bdaa1d1-a036-4451-ab11-ca0373679091
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  variableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobs: 'Jobs',
      labels: 'Labels',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      variableNames: 'VariableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobs: QueryJobsWithResultResponseBodyJobs,
      labels: { 'type': 'array', 'itemType': QueryJobsWithResultResponseBodyLabels },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      variableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.jobs && typeof (this.jobs as any).validate === 'function') {
      (this.jobs as any).validate();
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.variableNames)) {
      $dara.Model.validateArray(this.variableNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

