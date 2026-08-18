// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCallDetailRecordResponseBodyDataLabels extends $dara.Model {
  /**
   * @remarks
   * The set of preset values for the label.
   */
  candidateValues?: string[];
  /**
   * @remarks
   * Indicates whether the label has been collected.
   * 
   * @example
   * false
   */
  collected?: boolean;
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * batch_install_docker
   */
  description?: string;
  /**
   * @remarks
   * The matched value.
   * 
   * @example
   * 123
   */
  matchedValue?: string;
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * MemberCollection_20251215_161122_Copy
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the label is a system label.
   * 
   * @example
   * false
   */
  system?: boolean;
  static names(): { [key: string]: string } {
    return {
      candidateValues: 'CandidateValues',
      collected: 'Collected',
      description: 'Description',
      matchedValue: 'MatchedValue',
      name: 'Name',
      system: 'System',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateValues: { 'type': 'array', 'itemType': 'string' },
      collected: 'boolean',
      description: 'string',
      matchedValue: 'string',
      name: 'string',
      system: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.candidateValues)) {
      $dara.Model.validateArray(this.candidateValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDetailRecordResponseBodyDataTranscripts extends $dara.Model {
  /**
   * @remarks
   * The assistant answer.
   * 
   * @example
   * Sorry, I cannot find your phone bill
   */
  answer?: string;
  /**
   * @remarks
   * Indicates whether the transcript is a backchannel response.
   * 
   * @example
   * false
   */
  backchannels?: boolean;
  /**
   * @remarks
   * The begin time.
   * 
   * @example
   * 1760667651655
   */
  beginTime?: number;
  /**
   * @remarks
   * The list of control parameters.
   * 
   * @example
   * {"transferCode":"Transfer02","type":"Transfer"}]
   */
  controlParamsList?: string;
  /**
   * @remarks
   * The end time of the call.
   * 
   * @example
   * 1760667651655
   */
  endTime?: number;
  /**
   * @remarks
   * The event time.
   * 
   * @example
   * 1786960840667
   */
  eventTime?: number;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * {}
   */
  extras?: string;
  /**
   * @remarks
   * The number of input tokens.
   * 
   * @example
   * 0
   */
  inputTokens?: number;
  /**
   * @remarks
   * Indicates whether the response was interrupted.
   * 
   * @example
   * false
   */
  interrupted?: boolean;
  /**
   * @remarks
   * Indicates whether the transcript is from the legacy version.
   * 
   * @example
   * false
   */
  legacy?: boolean;
  /**
   * @remarks
   * The model.
   * 
   * @example
   * model1
   */
  model?: string;
  /**
   * @remarks
   * The number of output tokens.
   * 
   * @example
   * 0
   */
  outputTokens?: number;
  /**
   * @remarks
   * The played text.
   * 
   * @example
   * Sorry, check
   */
  playedWords?: string;
  /**
   * @remarks
   * The role.
   * 
   * @example
   * USER
   */
  role?: string;
  /**
   * @remarks
   * The call session ID.
   * 
   * @example
   * job-0b84bf6f-73dc-4462-bd8f-916e3a34c419
   */
  sessionId?: string;
  /**
   * @remarks
   * The stream ID.
   * 
   * @example
   * 1
   */
  streamId?: string;
  /**
   * @remarks
   * The total number of tokens.
   * 
   * @example
   * 0
   */
  totalTokens?: number;
  /**
   * @remarks
   * The user utterance.
   * 
   * @example
   * Can you check my phone bill?
   */
  utterance?: string;
  /**
   * @remarks
   * The vendor parameters.
   * 
   * @example
   * {}
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
      inputTokens: 'InputTokens',
      interrupted: 'Interrupted',
      legacy: 'Legacy',
      model: 'Model',
      outputTokens: 'OutputTokens',
      playedWords: 'PlayedWords',
      role: 'Role',
      sessionId: 'SessionId',
      streamId: 'StreamId',
      totalTokens: 'TotalTokens',
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
      eventTime: 'number',
      extras: 'string',
      inputTokens: 'number',
      interrupted: 'boolean',
      legacy: 'boolean',
      model: 'string',
      outputTokens: 'number',
      playedWords: 'string',
      role: 'string',
      sessionId: 'string',
      streamId: 'string',
      totalTokens: 'number',
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
   * The access channel ID.
   * 
   * @example
   * 2957188c-6cb3-42b4-beca-906fc0e752e5
   */
  accessChannelId?: string;
  /**
   * @remarks
   * The access channel type.
   * 
   * @example
   * Test
   */
  accessChannelType?: string;
  /**
   * @remarks
   * The callee number.
   * 
   * @example
   * 13612617599
   */
  callee?: string;
  /**
   * @remarks
   * The caller number.
   * 
   * @example
   * 02867871030
   */
  caller?: string;
  /**
   * @remarks
   * The case ID.
   * 
   * @example
   * 6fb3a6c4-c3e6-4722-8c71-e5fde4e2253e
   */
  caseId?: string;
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
   * Normal
   */
  dispositionReason?: string;
  /**
   * @remarks
   * Indicates whether this is a draft version.
   * 
   * @example
   * true
   */
  draftVersion?: boolean;
  /**
   * @remarks
   * The total duration.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The end time of the call.
   * 
   * @example
   * 1786960840667
   */
  endTime?: number;
  /**
   * @remarks
   * The list of labels.
   */
  labels?: GetCallDetailRecordResponseBodyDataLabels[];
  /**
   * @remarks
   * The party that initiated the hang-up.
   * 
   * @example
   * Customer
   */
  releaseInitiator?: string;
  /**
   * @remarks
   * The call session ID.
   * 
   * @example
   * job-0b84bf6f-73dc-4462-bd8f-916e3a34c419
   */
  sessionId?: string;
  /**
   * @remarks
   * The start time of the call.
   * 
   * @example
   * 1786960840667
   */
  startTime?: number;
  /**
   * @remarks
   * The talk time.
   * 
   * @example
   * 1
   */
  talkTime?: number;
  /**
   * @remarks
   * The number of conversation turns.
   * 
   * @example
   * 1
   */
  talkTurns?: number;
  /**
   * @remarks
   * Indicates whether the task was completed.
   * 
   * @example
   * false
   */
  taskCompleted?: boolean;
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
   * SkillGroup1
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
      accessChannelId: 'AccessChannelId',
      accessChannelType: 'AccessChannelType',
      callee: 'Callee',
      caller: 'Caller',
      caseId: 'CaseId',
      dispositionCode: 'DispositionCode',
      dispositionReason: 'DispositionReason',
      draftVersion: 'DraftVersion',
      duration: 'Duration',
      endTime: 'EndTime',
      labels: 'Labels',
      releaseInitiator: 'ReleaseInitiator',
      sessionId: 'SessionId',
      startTime: 'StartTime',
      talkTime: 'TalkTime',
      talkTurns: 'TalkTurns',
      taskCompleted: 'TaskCompleted',
      transcripts: 'Transcripts',
      transferTarget: 'TransferTarget',
      transferType: 'TransferType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelId: 'string',
      accessChannelType: 'string',
      callee: 'string',
      caller: 'string',
      caseId: 'string',
      dispositionCode: 'string',
      dispositionReason: 'string',
      draftVersion: 'boolean',
      duration: 'number',
      endTime: 'number',
      labels: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataLabels },
      releaseInitiator: 'string',
      sessionId: 'string',
      startTime: 'number',
      talkTime: 'number',
      talkTurns: 'number',
      taskCompleted: 'boolean',
      transcripts: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataTranscripts },
      transferTarget: 'string',
      transferType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
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
   * The error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The call detail data.
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
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The pass-through parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
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
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
      success: 'Success',
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
      success: 'boolean',
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

