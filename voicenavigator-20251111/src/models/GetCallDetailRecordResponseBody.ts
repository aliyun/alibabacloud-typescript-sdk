// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCallDetailRecordResponseBodyDataTranscripts extends $dara.Model {
  answer?: string;
  /**
   * @example
   * false
   */
  backchannels?: boolean;
  /**
   * @example
   * 1748945414222
   */
  beginTime?: number;
  /**
   * @example
   * [{"endSilenceTimeout":500,"interruptible":false,"silenceDetectionTimeout":5,"type":"Voice"}]
   */
  controlParamsList?: string;
  /**
   * @example
   * 1767315903531
   */
  endTime?: number;
  /**
   * @example
   * 1774859592165
   */
  eventTime?: string;
  /**
   * @example
   * [{"dataType":"Silence"}]
   */
  extras?: string;
  /**
   * @example
   * false
   */
  interrupted?: boolean;
  /**
   * @example
   * false
   */
  legacy?: boolean;
  /**
   * @example
   * 10
   */
  playedWords?: number;
  /**
   * @example
   * USER
   */
  role?: string;
  /**
   * @example
   * true
   */
  streamEnd?: boolean;
  /**
   * @example
   * 1
   */
  streamId?: string;
  utterance?: string;
  /**
   * @example
   * {"test1":"1234"}
   */
  vendorParams?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      backchannels: 'Backchannels',
      beginTime: 'BeginTime',
      controlParamsList: 'ControlParamsList',
      endTime: 'EndTime',
      eventTime: 'EventTime',
      extras: 'Extras',
      interrupted: 'Interrupted',
      legacy: 'Legacy',
      playedWords: 'PlayedWords',
      role: 'Role',
      streamEnd: 'StreamEnd',
      streamId: 'StreamId',
      utterance: 'Utterance',
      vendorParams: 'VendorParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      backchannels: 'boolean',
      beginTime: 'number',
      controlParamsList: 'string',
      endTime: 'number',
      eventTime: 'string',
      extras: 'string',
      interrupted: 'boolean',
      legacy: 'boolean',
      playedWords: 'number',
      role: 'string',
      streamEnd: 'boolean',
      streamId: 'string',
      utterance: 'string',
      vendorParams: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyData extends $dara.Model {
  /**
   * @example
   * 15100000001
   */
  callee?: string;
  /**
   * @example
   * 15929990193
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
   * 160
   */
  duration?: number;
  /**
   * @example
   * 1752283603978
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
  resolutionEvidence?: string;
  /**
   * @example
   * 07d72ea0-6e38-48d4-8371-14deaaba996f
   */
  sessionId?: string;
  /**
   * @example
   * 1774858849987
   */
  startTime?: number;
  /**
   * @example
   * 100
   */
  talkTime?: number;
  /**
   * @example
   * 5
   */
  talkTurns?: number;
  transcripts?: GetCallDetailRecordResponseBodyDataTranscripts[];
  /**
   * @example
   * default@testInstance1
   */
  transferTarget?: string;
  /**
   * @example
   * SkillGroup
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
      transcripts: 'Transcripts',
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
      transcripts: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataTranscripts },
      transferTarget: 'string',
      transferType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.transcripts)) {
      $dara.Model.validateArray(this.transcripts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetCallDetailRecordResponseBodyData;
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
   * a2c26e67-5984-4935-984e-bcee52971993
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
      data: GetCallDetailRecordResponseBodyData,
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

