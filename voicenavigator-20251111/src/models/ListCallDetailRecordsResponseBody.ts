// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallDetailRecordsResponseBodyDataCallDetailRecords extends $dara.Model {
  /**
   * @example
   * 15100000001
   */
  callee?: string;
  /**
   * @example
   * 4001027277
   */
  caller?: string;
  /**
   * @example
   * Answered
   */
  dispositionCode?: string;
  /**
   * @example
   * ConcurrentLimitExceeded
   */
  dispositionReason?: string;
  /**
   * @example
   * 265
   */
  duration?: number;
  /**
   * @example
   * 1767315903531
   */
  endTime?: number;
  /**
   * @example
   * false
   */
  issueResolved?: boolean;
  /**
   * @example
   * Customer
   */
  releaseInitiator?: string;
  /**
   * @example
   * unknown
   */
  resolutionEvidence?: string;
  /**
   * @example
   * 99eebcba-7f8a-4a54-b0da-603ada79d8e2
   */
  sessionId?: string;
  /**
   * @example
   * 1767315903531
   */
  startTime?: number;
  /**
   * @example
   * 245
   */
  talkTime?: number;
  /**
   * @example
   * 1
   */
  talkTurns?: number;
  /**
   * @example
   * default@testinstance1
   */
  transferTarget?: string;
  /**
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
  callDetailRecords?: ListCallDetailRecordsResponseBodyDataCallDetailRecords[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: ListCallDetailRecordsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  params?: string[];
  /**
   * @remarks
   * Id of the request
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

