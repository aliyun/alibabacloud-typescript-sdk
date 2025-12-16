// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadSchedulerxCalendarResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The authentication action.
   * 
   * @example
   * edas:ReadSchedulerxCalendar
   */
  authAction?: string;
  /**
   * @remarks
   * The principal name.
   * 
   * @example
   * 209312833131416xxx
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The account of the principal.
   * 
   * @example
   * 1827811800526xxx
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The principal type.
   * 
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The encoded diagnostic message.
   * 
   * @example
   * AQEAAAAAaDEssEE4MDg4NTQyLTVGMTYtNTFEQy1CODJCLUFFMDY4NUVDQ0ZBQQ==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The permission denial type.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * AccountLevelIdentityBasedPolicy
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadSchedulerxCalendarResponseBodyDataRecords extends $dara.Model {
  /**
   * @remarks
   * The calendar name.
   * 
   * @example
   * 2025workday
   */
  calendarName?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 1827811800526xxx
   */
  creator?: string;
  /**
   * @remarks
   * The months and days.
   * 
   * @example
   * [
   *   {"month":1,"days":[3,4,5,6,9,10,11,12,13,16,17,18,19,20,28,29,30,31]},
   *   {"month":2,"days":[1,2,3,6,7,8,9,10,13,14,15,16,17,20,21,22,23,24,27,28]},
   *   {"month":3,"days":[1,2,3,6,7,8,9,10,13,14,15,16,17,20,21,22,23,24,27,28,29,30,31]},
   *   {"month":4,"days":[3,4,6,7,10,11,12,13,14,17,18,19,20,21,23,24,25,26,27,28]},
   *   {"month":5,"days":[4,5,6,8,9,10,11,12,15,16,17,18,19,22,23,24,25,26,29,30,31]},
   *   {"month":6,"days":[1,2,5,6,7,8,9,12,13,14,15,16,19,20,21,25,26,27,28,29,30]},
   *   {"month":7,"days":[3,4,5,6,7,10,11,12,13,14,17,18,19,20,21,24,25,26,27,28,31]},
   *   {"month":8,"days":[1,2,3,4,7,8,9,10,11,14,15,16,17,18,21,22,23,24,25,28,29,30,31]},
   *   {"month":9,"days":[1,4,5,6,7,8,11,12,13,14,15,18,19,20,21,22,25,26,27,28]},
   *   {"month":10,"days":[7,8,9,10,11,12,13,16,17,18,19,20,23,24,25,26,27,30,31]},
   *   {"month":11,"days":[1,2,3,6,7,8,9,10,13,14,15,16,17,20,21,22,23,24,27,28,29,30]},
   *   {"month":12,"days":[1,4,5,6,7,8,11,12,13,14,15,18,19,20,21,22,25,26,27,28,29]}
   * ]
   */
  monthDaysContent?: string;
  /**
   * @remarks
   * Indicates whether it is a system calendar.
   * 
   * @example
   * false
   */
  systemCalendar?: boolean;
  /**
   * @remarks
   * The year.
   * 
   * @example
   * 2025
   */
  year?: number;
  static names(): { [key: string]: string } {
    return {
      calendarName: 'CalendarName',
      creator: 'Creator',
      monthDaysContent: 'MonthDaysContent',
      systemCalendar: 'SystemCalendar',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendarName: 'string',
      creator: 'string',
      monthDaysContent: 'string',
      systemCalendar: 'boolean',
      year: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadSchedulerxCalendarResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 15
   */
  maxResults?: number;
  /**
   * @remarks
   * When there is more data to retrieve, the server returns a nextToken. You can use this token in a subsequent request to continue reading from where you left off.
   * 
   * @example
   * O39nXKu5XafATl3/cJjSJw==
   */
  nextToken?: string;
  /**
   * @remarks
   * *
   */
  records?: ReadSchedulerxCalendarResponseBodyDataRecords[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      records: { 'type': 'array', 'itemType': ReadSchedulerxCalendarResponseBodyDataRecords },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadSchedulerxCalendarResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denial details.
   */
  accessDeniedDetail?: ReadSchedulerxCalendarResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * *
   */
  data?: ReadSchedulerxCalendarResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * unknown exception occurred
   */
  message?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * C8E5FB4A-6D8D-424D-9AAA-4FE06BB74FF9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: ReadSchedulerxCalendarResponseBodyAccessDeniedDetail,
      code: 'number',
      data: ReadSchedulerxCalendarResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

