// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCaseDetailResponseBodyDataCallDetailRecords extends $dara.Model {
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
   * The called number.
   * 
   * @example
   * 13510595079
   */
  callee?: string;
  /**
   * @remarks
   * The caller number.
   * 
   * @example
   * 02162300961
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
   * Normal
   */
  dispositionReason?: string;
  /**
   * @remarks
   * Indicates whether the version is a draft version.
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
   * 20
   */
  duration?: number;
  /**
   * @remarks
   * The time when the call ended.
   * 
   * @example
   * 1786960840667
   */
  endTime?: number;
  /**
   * @remarks
   * The party that initiated the hangup.
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
   * job-893f8715-3658-4488-8cf0-6a8546124f96
   */
  sessionId?: string;
  /**
   * @remarks
   * The time when the call started.
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
   * 10
   */
  talkTime?: number;
  /**
   * @remarks
   * The number of conversation turns.
   * 
   * @example
   * 2
   */
  talkTurns?: number;
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
      dispositionCode: 'DispositionCode',
      dispositionReason: 'DispositionReason',
      draftVersion: 'DraftVersion',
      duration: 'Duration',
      endTime: 'EndTime',
      releaseInitiator: 'ReleaseInitiator',
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
      accessChannelId: 'string',
      accessChannelType: 'string',
      callee: 'string',
      caller: 'string',
      dispositionCode: 'string',
      dispositionReason: 'string',
      draftVersion: 'boolean',
      duration: 'number',
      endTime: 'number',
      releaseInitiator: 'string',
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

export class GetCaseDetailResponseBodyDataCaseLabels extends $dara.Model {
  /**
   * @remarks
   * The set of candidate values for the label.
   */
  candidateValues?: string[];
  /**
   * @remarks
   * Indicates whether the label was collected.
   * 
   * @example
   * true
   */
  collected?: boolean;
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * 123
   */
  description?: string;
  /**
   * @remarks
   * The matched value of the label.
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
   * Contact customer to register acquaintance
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

export class GetCaseDetailResponseBodyDataCase extends $dara.Model {
  /**
   * @remarks
   * The number of call attempts.
   * 
   * @example
   * 1
   */
  attemptedCount?: number;
  /**
   * @remarks
   * The caller number.
   * 
   * @example
   * 0571000018766
   */
  callerNumber?: string;
  /**
   * @remarks
   * The ID of the outbound campaign.
   * 
   * @example
   * 5b5c7b4a-978e-4937-a192-02f4621bf67e
   */
  campaignId?: string;
  /**
   * @remarks
   * The name of the outbound campaign.
   * 
   * @example
   * Test campaign
   */
  campaignName?: string;
  /**
   * @remarks
   * The case ID.
   * 
   * @example
   * 893f8715-3658-4488-8cf0-6a8546124f00
   */
  caseId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-04-13T06:05:54Z
   */
  createdTime?: number;
  /**
   * @remarks
   * The custom variables in JSON string format.
   * 
   * @example
   * {}
   */
  customVariables?: string;
  /**
   * @remarks
   * The dialing time.
   * 
   * @example
   * 1786960840667
   */
  dialingTime?: number;
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
   * The instance ID.
   * 
   * @example
   * 893f8715-3658-4488-8cf0-6a8546124f96
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of labels.
   */
  labels?: GetCaseDetailResponseBodyDataCaseLabels[];
  /**
   * @remarks
   * The time of the last call attempt.
   * 
   * @example
   * 1786960840667
   */
  lastAttemptedTime?: number;
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 18512345678
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * Daily
   */
  priority?: number;
  /**
   * @remarks
   * The reference ID.
   * 
   * @example
   * 1529431297649278976
   */
  referenceId?: string;
  /**
   * @remarks
   * The ringing duration.
   * 
   * @example
   * 30
   */
  ringingDuration?: number;
  /**
   * @remarks
   * The ringing time.
   * 
   * @example
   * 1786960840667
   */
  ringingTime?: number;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 64241e64-190c-45d1-af66-06f51c07b090
   */
  scriptId?: string;
  /**
   * @remarks
   * The script name.
   * 
   * @example
   * XiaoHuan
   */
  scriptName?: string;
  /**
   * @remarks
   * The session ID of the last call.
   * 
   * @example
   * job-893f8715-3658-4488-8cf0-6a8546124f96
   */
  sessionId?: string;
  /**
   * @remarks
   * The case state.
   * 
   * @example
   * Pending
   */
  state?: string;
  /**
   * @remarks
   * The talk time.
   * 
   * @example
   * 10
   */
  talkTime?: number;
  static names(): { [key: string]: string } {
    return {
      attemptedCount: 'AttemptedCount',
      callerNumber: 'CallerNumber',
      campaignId: 'CampaignId',
      campaignName: 'CampaignName',
      caseId: 'CaseId',
      createdTime: 'CreatedTime',
      customVariables: 'CustomVariables',
      dialingTime: 'DialingTime',
      dispositionCode: 'DispositionCode',
      dispositionReason: 'DispositionReason',
      instanceId: 'InstanceId',
      labels: 'Labels',
      lastAttemptedTime: 'LastAttemptedTime',
      phoneNumber: 'PhoneNumber',
      priority: 'Priority',
      referenceId: 'ReferenceId',
      ringingDuration: 'RingingDuration',
      ringingTime: 'RingingTime',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      sessionId: 'SessionId',
      state: 'State',
      talkTime: 'TalkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attemptedCount: 'number',
      callerNumber: 'string',
      campaignId: 'string',
      campaignName: 'string',
      caseId: 'string',
      createdTime: 'number',
      customVariables: 'string',
      dialingTime: 'number',
      dispositionCode: 'string',
      dispositionReason: 'string',
      instanceId: 'string',
      labels: { 'type': 'array', 'itemType': GetCaseDetailResponseBodyDataCaseLabels },
      lastAttemptedTime: 'number',
      phoneNumber: 'string',
      priority: 'number',
      referenceId: 'string',
      ringingDuration: 'number',
      ringingTime: 'number',
      scriptId: 'string',
      scriptName: 'string',
      sessionId: 'string',
      state: 'string',
      talkTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCaseDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of associated call detail records.
   */
  callDetailRecords?: GetCaseDetailResponseBodyDataCallDetailRecords[];
  /**
   * @remarks
   * The case information.
   */
  case?: GetCaseDetailResponseBodyDataCase;
  static names(): { [key: string]: string } {
    return {
      callDetailRecords: 'CallDetailRecords',
      case: 'Case',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDetailRecords: { 'type': 'array', 'itemType': GetCaseDetailResponseBodyDataCallDetailRecords },
      case: GetCaseDetailResponseBodyDataCase,
    };
  }

  validate() {
    if(Array.isArray(this.callDetailRecords)) {
      $dara.Model.validateArray(this.callDetailRecords);
    }
    if(this.case && typeof (this.case as any).validate === 'function') {
      (this.case as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCaseDetailResponseBody extends $dara.Model {
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
   * The case details data.
   */
  data?: GetCaseDetailResponseBodyData;
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
   * 91102861-AEB9-56C5-8F3A-A023A0E8B5F3
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
      data: GetCaseDetailResponseBodyData,
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

