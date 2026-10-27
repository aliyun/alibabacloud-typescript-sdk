// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCallDetailRecordResponseBodyDataTranscripts extends $dara.Model {
  /**
   * @remarks
   * The bot\\"s response. This parameter is valid when `Role` is `ASSISTANT`.
   * 
   * @example
   * 不好意思，
   */
  answer?: string;
  /**
   * @remarks
   * Indicates whether the user\\"s utterance is a backchannel (for example, "uh-huh" or "okay"). This parameter is valid when `Role` is `USER`.
   * 
   * @example
   * false
   */
  backchannels?: boolean;
  /**
   * @remarks
   * The start timestamp of the turn, in milliseconds since the Unix epoch.
   * 
   * @example
   * 1748945414222
   */
  beginTime?: number;
  /**
   * @remarks
   * A list of control parameters. This parameter is valid when `Role` is `ASSISTANT`.
   * 
   * @example
   * [{"endSilenceTimeout":500,"interruptible":false,"silenceDetectionTimeout":5,"type":"Voice"}]
   */
  controlParamsList?: string;
  /**
   * @remarks
   * The end timestamp of the turn, in milliseconds since the Unix epoch.
   * 
   * @example
   * 1767315903531
   */
  endTime?: number;
  /**
   * @remarks
   * The event timestamp, in milliseconds since the Unix epoch.
   * 
   * @example
   * 1774859592165
   */
  eventTime?: string;
  /**
   * @remarks
   * Additional input from the user other than speech. This parameter is valid when `Role` is `USER`.
   * 
   * @example
   * [{"dataType":"Silence"}]
   */
  extras?: string;
  /**
   * @remarks
   * Indicates whether the turn was interrupted.
   * 
   * @example
   * false
   */
  interrupted?: boolean;
  /**
   * @remarks
   * Indicates whether the bot\\"s response is obsolete. This parameter is valid when `Role` is `ASSISTANT`.
   * 
   * @example
   * false
   */
  legacy?: boolean;
  /**
   * @example
   * INTERRUPTED
   */
  playbackStatus?: string;
  /**
   * @example
   * 好的
   */
  playedAnswer?: string;
  /**
   * @remarks
   * The number of words played from the bot\\"s response. This parameter is valid when `Role` is `USER`.
   * 
   * @example
   * 10
   */
  playedWords?: number;
  /**
   * @remarks
   * The role of the speaker.
   * 
   * @example
   * USER
   */
  role?: string;
  /**
   * @remarks
   * Indicates if this is the final part of a streamed response.
   * 
   * @example
   * true
   */
  streamEnd?: boolean;
  /**
   * @remarks
   * The ID of the conversation turn.
   * 
   * @example
   * 1
   */
  streamId?: string;
  /**
   * @remarks
   * The user\\"s utterance. This parameter is valid when `Role` is `USER`.
   * 
   * @example
   * 你要说你快点说不说，我挂了哈。
   */
  utterance?: string;
  /**
   * @remarks
   * Vendor-specific data sent from the client. This parameter is valid when `Role` is `USER`.
   * 
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
      playbackStatus: 'PlaybackStatus',
      playedAnswer: 'PlayedAnswer',
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
      playbackStatus: 'string',
      playedAnswer: 'string',
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
   * @remarks
   * The phone number of the callee.
   * 
   * @example
   * 15100000001
   */
  callee?: string;
  /**
   * @remarks
   * The phone number of the caller.
   * 
   * @example
   * 15929990193
   */
  caller?: string;
  /**
   * @remarks
   * The disposition code for the call.
   * 
   * @example
   * Answered
   */
  dispositionCode?: string;
  /**
   * @remarks
   * The reason for the call\\"s disposition.
   * 
   * @example
   * ConcurrentLimitExceeded
   */
  dispositionReason?: string;
  /**
   * @remarks
   * The session duration, in seconds.
   * 
   * @example
   * 160
   */
  duration?: number;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1752283603978
   */
  endTime?: number;
  /**
   * @remarks
   * Indicates whether the user\\"s issue was resolved.
   * 
   * @example
   * false
   */
  issueResolved?: boolean;
  /**
   * @remarks
   * The party that ended the call.
   * 
   * @example
   * Customer
   */
  releaseInitiator?: string;
  /**
   * @remarks
   * The basis for the resolution judgment.
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
   * 07d72ea0-6e38-48d4-8371-14deaaba996f
   */
  sessionId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1774858849987
   */
  startTime?: number;
  /**
   * @remarks
   * The talk time, in seconds.
   * 
   * @example
   * 100
   */
  talkTime?: number;
  /**
   * @remarks
   * The number of conversation turns.
   * 
   * @example
   * 5
   */
  talkTurns?: number;
  /**
   * @remarks
   * The conversation transcripts.
   */
  transcripts?: GetCallDetailRecordResponseBodyDataTranscripts[];
  /**
   * @remarks
   * The transfer target.
   * 
   * @example
   * default@testInstance1
   */
  transferTarget?: string;
  /**
   * @remarks
   * The transfer type.
   * 
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
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The call detail record.
   */
  data?: GetCallDetailRecordResponseBodyData;
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
   * The error message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * A list of parameters related to the error.
   */
  params?: string[];
  /**
   * @remarks
   * The ID of the request.
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

