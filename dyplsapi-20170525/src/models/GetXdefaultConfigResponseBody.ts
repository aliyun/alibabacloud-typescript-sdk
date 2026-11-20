// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetXDefaultConfigResponseBodyDataReachJson extends $dara.Model {
  /**
   * @remarks
   * The call direction. Valid values: 1: Employee B calls Customer A. 2: Customer A calls Employee B.
   * 
   * @example
   * 1
   */
  callDir?: string;
  /**
   * @remarks
   * The call status. Valid values: 1: ringing. 2: before connection. 3: after connection. 4: call ended. 5: connected. 6: not connected.
   * 
   * @example
   * 1
   */
  callStatus?: string;
  /**
   * @remarks
   * The receive direction. Valid values: 1: caller. 2: callee.
   * 
   * @example
   * 1
   */
  receiveDir?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 345
   */
  ruleId?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * Enterprise business card - SMS rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule type. Valid values: 1: enterprise business card - SMS. 2: enterprise business card - flash SMS. 3: enterprise business card - video. 4: enterprise business card - audio.
   * 
   * @example
   * 1
   */
  ruleType?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 12345
   */
  tempId?: string;
  static names(): { [key: string]: string } {
    return {
      callDir: 'CallDir',
      callStatus: 'CallStatus',
      receiveDir: 'ReceiveDir',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      tempId: 'TempId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDir: 'string',
      callStatus: 'string',
      receiveDir: 'string',
      ruleId: 'string',
      ruleName: 'string',
      ruleType: 'string',
      tempId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetXDefaultConfigResponseBodyDataSequenceCall extends $dara.Model {
  /**
   * @remarks
   * The play code for the sequential ringing prompt tone. The format is the same as callNoPlayCode.
   * 
   * @example
   * Sample value
   */
  sequenceCallNoPlayCode?: string;
  /**
   * @remarks
   * The callee number for sequential ringing.
   * 
   * @example
   * Sample value sample value sample value
   */
  sequenceCalledNo?: string;
  /**
   * @remarks
   * The play code for the caller and callee after the call is connected. The format is the same as calledPlayCode.
   * 
   * @example
   * Sample value sample value sample value
   */
  sequenceCalledPlayCode?: string;
  static names(): { [key: string]: string } {
    return {
      sequenceCallNoPlayCode: 'SequenceCallNoPlayCode',
      sequenceCalledNo: 'SequenceCalledNo',
      sequenceCalledPlayCode: 'SequenceCalledPlayCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sequenceCallNoPlayCode: 'string',
      sequenceCalledNo: 'string',
      sequenceCalledPlayCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetXDefaultConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The status of the call capability. Valid values: 0: disabled. 1: enabled.
   * 
   * @example
   * 0
   */
  callAbility?: string;
  /**
   * @remarks
   * Specifies whether to pass through the caller ID to display the real caller. Valid values: 00: non-passthrough. The work number is displayed when calls are made to each other. 10: passthrough. When Customer A is the caller, the caller ID displayed to Employee B is the number of Customer A. When Employee B is the caller, the caller ID displayed to Customer A is the work number. Default value: 00.
   * 
   * @example
   * 00
   */
  GNFlag?: string;
  /**
   * @remarks
   * The enterprise business card rule control parameters.
   */
  reachJson?: GetXDefaultConfigResponseBodyDataReachJson[];
  /**
   * @remarks
   * The sequential ringing control parameters.
   */
  sequenceCall?: GetXDefaultConfigResponseBodyDataSequenceCall[];
  /**
   * @remarks
   * The end time of sequential ringing. Format: HH:mm:ss, such as 18:00:00.
   * 
   * @example
   * 09:00:00
   */
  sequenceEndTime?: string;
  /**
   * @remarks
   * The start time of sequential ringing. Format: HH:mm:ss, such as 09:00:00.
   * 
   * @example
   * 09:00:00
   */
  sequenceStartTime?: string;
  /**
   * @remarks
   * The status of the SMS feature. Valid values: 0: disabled. 1: enabled.
   * 
   * @example
   * 0
   */
  smsAbility?: string;
  /**
   * @remarks
   * Specifies whether to pass through the caller ID to display the real caller. Valid values: 00: non-passthrough. The work number is displayed when calls are made to each other. 10: passthrough. When Customer A is the caller, the caller ID displayed to Employee B is the number of Customer A. When Employee B is the caller, the caller ID displayed to Customer A is the work number. Default value: 00.
   * 
   * @example
   * 0
   */
  smsSignMode?: string;
  static names(): { [key: string]: string } {
    return {
      callAbility: 'CallAbility',
      GNFlag: 'GNFlag',
      reachJson: 'ReachJson',
      sequenceCall: 'SequenceCall',
      sequenceEndTime: 'SequenceEndTime',
      sequenceStartTime: 'SequenceStartTime',
      smsAbility: 'SmsAbility',
      smsSignMode: 'SmsSignMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callAbility: 'string',
      GNFlag: 'string',
      reachJson: { 'type': 'array', 'itemType': GetXDefaultConfigResponseBodyDataReachJson },
      sequenceCall: { 'type': 'array', 'itemType': GetXDefaultConfigResponseBodyDataSequenceCall },
      sequenceEndTime: 'string',
      sequenceStartTime: 'string',
      smsAbility: 'string',
      smsSignMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reachJson)) {
      $dara.Model.validateArray(this.reachJson);
    }
    if(Array.isArray(this.sequenceCall)) {
      $dara.Model.validateArray(this.sequenceCall);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetXDefaultConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code. Valid values:
   * 
   * - 0000: Success.
   * 
   * - Other values: Failure.
   * 
   * @example
   * 0000
   */
  code?: string;
  /**
   * @remarks
   * The default configurations of the work number.
   * 
   * @example
   * {"CallAbility":"0","GNFlag":"00","SmsAbility":"0","SmsSignMode":"0"}
   */
  data?: GetXDefaultConfigResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * 
   * - false: The request fails.
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
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetXDefaultConfigResponseBodyData,
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

