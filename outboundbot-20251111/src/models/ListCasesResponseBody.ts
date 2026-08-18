// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCasesResponseBodyDataListLabels extends $dara.Model {
  /**
   * @remarks
   * The candidate values of the label.
   */
  candidateValues?: string[];
  /**
   * @remarks
   * Indicates whether the item is collected.
   * 
   * @example
   * true
   */
  collected?: boolean;
  /**
   * @remarks
   * The description of the label.
   * 
   * @example
   * Description content
   */
  description?: string;
  /**
   * @remarks
   * The matched value of the label.
   * 
   * @example
   * 1
   */
  matchedValue?: string;
  /**
   * @remarks
   * The name of the label.
   * 
   * @example
   * 软包装企业打电话_20251022_165548
   */
  name?: string;
  /**
   * @remarks
   * The system label.
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

export class ListCasesResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The number of dial attempts.
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
   * 05923395478
   */
  callerNumber?: string;
  /**
   * @remarks
   * The outbound campaign ID.
   * 
   * @example
   * 7607dae1-91ad-47ea-ad76-3d81ac34f729
   */
  campaignId?: string;
  /**
   * @remarks
   * The name of the outbound campaign.
   * 
   * @example
   * e2d7a184-7d6c-45d4-ac24-34ab48f54600
   */
  campaignName?: string;
  /**
   * @remarks
   * The case ID.
   * 
   * @example
   * 00ed0dd9-c5a4-40e4-a8cd-822f0af859b9
   */
  caseId?: string;
  /**
   * @remarks
   * The time when the case was created.
   * 
   * @example
   * 2025-07-27T11:25:15+08:00
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
   * e2d7a184-7d6c-45d4-ac24-34ab48f54669
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of labels.
   */
  labels?: ListCasesResponseBodyDataListLabels[];
  /**
   * @remarks
   * The time of the last dial attempt.
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
   * The priority of the case.
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
   * 5055-16-199313
   */
  referenceId?: string;
  /**
   * @remarks
   * The ringing duration.
   * 
   * @example
   * 25
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
   * 8a988bd4-6c6e-45c6-b3a5-3def5ca3bc6f
   */
  scriptId?: string;
  /**
   * @remarks
   * The name of the script.
   * 
   * @example
   * Scenario Name
   */
  scriptName?: string;
  /**
   * @remarks
   * The session ID of the last call.
   * 
   * @example
   * SESSION_ID_312986372_7295954260941888
   */
  sessionId?: string;
  /**
   * @remarks
   * The case state.
   * 
   * @example
   * Executing
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
      labels: { 'type': 'array', 'itemType': ListCasesResponseBodyDataListLabels },
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

export class ListCasesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of cases.
   */
  list?: ListCasesResponseBodyDataList[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 30
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
      list: { 'type': 'array', 'itemType': ListCasesResponseBodyDataList },
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

export class ListCasesResponseBody extends $dara.Model {
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
   * The paged data.
   */
  data?: ListCasesResponseBodyData;
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
   * C377C5FF-4F94-1B23-89D0-50C560623EE4
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
      data: ListCasesResponseBodyData,
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

