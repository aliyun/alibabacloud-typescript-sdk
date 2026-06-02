// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTaskResponseBodyLabels extends $dara.Model {
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

export class SearchTaskResponseBodySearchTaskInfoListLabels extends $dara.Model {
  k?: string;
  v?: string;
  static names(): { [key: string]: string } {
    return {
      k: 'K',
      v: 'V',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k: 'string',
      v: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTaskResponseBodySearchTaskInfoList extends $dara.Model {
  /**
   * @example
   * 1643436089677
   */
  actualTime?: number;
  /**
   * @example
   * 1646792941
   */
  callDuration?: number;
  /**
   * @example
   * ActualTime
   */
  callDurationDisplay?: string;
  /**
   * @example
   * 15205879599
   */
  calledNumber?: string;
  callingNumber?: string;
  /**
   * @example
   * [{"code":"OutboundCallError.SipCodeError", "params":[{"key":"SipCode","value":"500"}]}]
   */
  dialException?: string;
  dialExceptionCodes?: string[];
  /**
   * @example
   * ["OutboundCallError.SipTrunkError"]
   */
  dialExceptionOld?: string;
  /**
   * @example
   * true
   */
  hasAnswered?: boolean;
  /**
   * @example
   * true
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
   * 73df6283-26b2-402d-bad0-ffa489923ea1
   */
  instanceId?: string;
  /**
   * @example
   * 37db3113-ad34-4ba3-b930-468f016bbf95
   */
  jobGroupId?: string;
  jobGroupName?: string;
  /**
   * @example
   * 6203248e-e652-4ef8-a1eb-586ed7b54dc2
   */
  jobId?: string;
  /**
   * @example
   * Succeeded
   */
  jobStatus?: number;
  /**
   * @example
   * xxx
   */
  jobStatusName?: string;
  /**
   * @example
   * Scheduling
   */
  jobStatusString?: string;
  labels?: SearchTaskResponseBodySearchTaskInfoListLabels[];
  /**
   * @example
   * 10
   */
  recordingDuration?: number;
  scriptName?: string;
  /**
   * @example
   * 1646792941
   */
  taskCreateTime?: number;
  /**
   * @example
   * OutOfService
   */
  taskEndReason?: number;
  /**
   * @example
   * 479aea04-3a92-4ac3-935d-c8798c667850
   */
  taskId?: string;
  /**
   * @example
   * Success
   */
  taskStatus?: number;
  /**
   * @example
   * xxxx
   */
  taskStatusName?: string;
  /**
   * @example
   * Executing
   */
  taskStatusString?: string;
  /**
   * @example
   * 12334134
   */
  userId?: string;
  /**
   * @example
   * xxx
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      actualTime: 'ActualTime',
      callDuration: 'CallDuration',
      callDurationDisplay: 'CallDurationDisplay',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      dialException: 'DialException',
      dialExceptionCodes: 'DialExceptionCodes',
      dialExceptionOld: 'DialExceptionOld',
      hasAnswered: 'HasAnswered',
      hasHangUpByRejection: 'HasHangUpByRejection',
      hasLastPlaybackCompleted: 'HasLastPlaybackCompleted',
      hasReachedEndOfFlow: 'HasReachedEndOfFlow',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobGroupName: 'JobGroupName',
      jobId: 'JobId',
      jobStatus: 'JobStatus',
      jobStatusName: 'JobStatusName',
      jobStatusString: 'JobStatusString',
      labels: 'Labels',
      recordingDuration: 'RecordingDuration',
      scriptName: 'ScriptName',
      taskCreateTime: 'TaskCreateTime',
      taskEndReason: 'TaskEndReason',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      taskStatusName: 'TaskStatusName',
      taskStatusString: 'TaskStatusString',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'number',
      callDuration: 'number',
      callDurationDisplay: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      dialException: 'string',
      dialExceptionCodes: { 'type': 'array', 'itemType': 'string' },
      dialExceptionOld: 'string',
      hasAnswered: 'boolean',
      hasHangUpByRejection: 'boolean',
      hasLastPlaybackCompleted: 'boolean',
      hasReachedEndOfFlow: 'boolean',
      instanceId: 'string',
      jobGroupId: 'string',
      jobGroupName: 'string',
      jobId: 'string',
      jobStatus: 'number',
      jobStatusName: 'string',
      jobStatusString: 'string',
      labels: { 'type': 'array', 'itemType': SearchTaskResponseBodySearchTaskInfoListLabels },
      recordingDuration: 'number',
      scriptName: 'string',
      taskCreateTime: 'number',
      taskEndReason: 'number',
      taskId: 'string',
      taskStatus: 'number',
      taskStatusName: 'string',
      taskStatusString: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dialExceptionCodes)) {
      $dara.Model.validateArray(this.dialExceptionCodes);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTaskResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  labels?: SearchTaskResponseBodyLabels[];
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 0
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @example
   * []
   */
  searchTaskInfoList?: SearchTaskResponseBodySearchTaskInfoList[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2
   */
  total?: number;
  variableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      labels: 'Labels',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      searchTaskInfoList: 'SearchTaskInfoList',
      success: 'Success',
      total: 'Total',
      variableNames: 'VariableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      labels: { 'type': 'array', 'itemType': SearchTaskResponseBodyLabels },
      message: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      searchTaskInfoList: { 'type': 'array', 'itemType': SearchTaskResponseBodySearchTaskInfoList },
      success: 'boolean',
      total: 'number',
      variableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.searchTaskInfoList)) {
      $dara.Model.validateArray(this.searchTaskInfoList);
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

