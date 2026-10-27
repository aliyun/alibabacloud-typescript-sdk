// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallDetailRecordsResponseBodyDataCallDetailRecords extends $dara.Model {
  /**
   * @remarks
   * The callee\\"s phone number.
   * 
   * @example
   * 15100000001
   */
  callee?: string;
  /**
   * @remarks
   * The caller\\"s phone number.
   * 
   * @example
   * 4001027277
   */
  caller?: string;
  /**
   * @remarks
   * The disposition code.
   * 
   * @example
   * Answered
   */
  dispositionCode?: string;
  /**
   * @remarks
   * The disposition reason.
   * 
   * @example
   * ConcurrentLimitExceeded
   */
  dispositionReason?: string;
  /**
   * @remarks
   * The total duration of the call, in seconds.
   * 
   * @example
   * 265
   */
  duration?: number;
  /**
   * @remarks
   * The end time of the session, as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1767315903531
   */
  endTime?: number;
  /**
   * @remarks
   * Indicates whether the customer\\"s issue was resolved.
   * 
   * @example
   * false
   */
  issueResolved?: boolean;
  /**
   * @remarks
   * The party who released the call.
   * 
   * @example
   * Customer
   */
  releaseInitiator?: string;
  /**
   * @remarks
   * The evidence for the `IssueResolved` status.
   * 
   * @example
   * unknown
   */
  resolutionEvidence?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 99eebcba-7f8a-4a54-b0da-603ada79d8e2
   */
  sessionId?: string;
  /**
   * @remarks
   * The start time of the session, as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1767315903531
   */
  startTime?: number;
  /**
   * @remarks
   * The talk time, in seconds.
   * 
   * @example
   * 245
   */
  talkTime?: number;
  /**
   * @remarks
   * The number of talk turns.
   * 
   * @example
   * 1
   */
  talkTurns?: number;
  /**
   * @remarks
   * The transfer target.
   * 
   * @example
   * default@testinstance1
   */
  transferTarget?: string;
  /**
   * @remarks
   * The transfer type.
   * 
   * @example
   * Agent
   */
  transferType?: string;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
      dispositionCode: 'DispositionCode',
      dispositionReason: 'DispositionReason',
      duration: 'Duration',
      endTime: 'EndTime',
      issueResolved: 'IssueResolved',
      releaseInitiator: 'ReleaseInitiator',
      resolutionEvidence: 'ResolutionEvidence',
      sessionId: 'SessionId',
      startTime: 'StartTime',
      talkTime: 'TalkTime',
      talkTurns: 'TalkTurns',
      transferTarget: 'TransferTarget',
      transferType: 'TransferType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      caller: 'string',
      dispositionCode: 'string',
      dispositionReason: 'string',
      duration: 'number',
      endTime: 'number',
      issueResolved: 'boolean',
      releaseInitiator: 'string',
      resolutionEvidence: 'string',
      sessionId: 'string',
      startTime: 'number',
      talkTime: 'number',
      talkTurns: 'number',
      transferTarget: 'string',
      transferType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of call detail records.
   */
  callDetailRecords?: ListCallDetailRecordsResponseBodyDataCallDetailRecords[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries that match the query.
   * 
   * @example
   * 362
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      callDetailRecords: 'CallDetailRecords',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDetailRecords: { 'type': 'array', 'itemType': ListCallDetailRecordsResponseBodyDataCallDetailRecords },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.callDetailRecords)) {
      $dara.Model.validateArray(this.callDetailRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * An object containing the returned call records.
   */
  data?: ListCallDetailRecordsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * A list of invalid parameters in the request.
   */
  params?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A8AED3C8-F57B-5D71-9A34-4A170287533F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListCallDetailRecordsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

