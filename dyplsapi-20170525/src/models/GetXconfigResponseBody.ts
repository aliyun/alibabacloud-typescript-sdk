// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetXConfigResponseBodyDataReachJsons extends $dara.Model {
  /**
   * @remarks
   * The call direction. Valid values:
   * - 1: Employee B calls Customer A.
   * - 2: Customer A calls Employee B.
   * 
   * @example
   * 1
   */
  callDir?: string;
  /**
   * @remarks
   * The call status. Valid values:
   * - 1: Call ringing.
   * - 2: Before connection.
   * - 3: After connection.
   * - 4: Call ended.
   * - 5: Connected.
   * - 6: Not connected.
   * 
   * @example
   * 1
   */
  callStatus?: string;
  /**
   * @remarks
   * The receiving direction. Valid values:
   * - 1: Caller.
   * - 2: Called party.
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
   * Enterprise profile - SMS rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule type. Valid values:
   * - 1: Enterprise profile - SMS.
   * - 2: Enterprise profile - Flash message.
   * - 3: Enterprise profile - Video.
   * - 4: Enterprise profile - Audio.
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

export class GetXConfigResponseBodyDataSequenceCalls extends $dara.Model {
  /**
   * @remarks
   * The play ID of the prompt tone for sequence ringing. The format is the same as callNoPlayCode.
   * 
   * @example
   * Sample value sample value sample value
   */
  sequenceCallNoPlayCode?: string;
  /**
   * @remarks
   * The called number for sequence ringing.
   * 
   * @example
   * Sample value sample value sample value
   */
  sequenceCalledNo?: string;
  /**
   * @remarks
   * The play ID for the caller and called party after the call is connected. The format is the same as calledPlayCode.
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

export class GetXConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the call capability is enabled. Valid values:
   * - 0: Disabled.
   * - 1: Enabled.
   * 
   * @example
   * 0
   */
  callAbility?: string;
  /**
   * @remarks
   * Specifies whether to pass through the caller ID to display the real caller. Valid values:
   * - 00: Non-passthrough. The work number is displayed when calls are made to each other.
   * - 10: Passthrough. When Customer A is the caller, the caller ID displayed to Employee B is the number of Customer A. When Employee B is the caller, the caller ID displayed to Customer A is the work number.
   * Default value: 00.
   * 
   * @example
   * 00
   */
  GNFlag?: string;
  /**
   * @remarks
   * The control parameters for enterprise profile rules.
   */
  reachJsons?: GetXConfigResponseBodyDataReachJsons[];
  /**
   * @remarks
   * The control parameters for sequence ringing.
   */
  sequenceCalls?: GetXConfigResponseBodyDataSequenceCalls[];
  /**
   * @remarks
   * The end time of sequence ringing. Format: HH:mm:ss, such as 18:00:00.
   * 
   * @example
   * 09:00:00
   */
  sequenceEndTime?: string;
  /**
   * @remarks
   * The start time of sequence ringing. Format: HH:mm:ss, such as 09:00:00.
   * 
   * @example
   * 09:00:00
   */
  sequenceStartTime?: string;
  /**
   * @remarks
   * Specifies whether the SMS feature is enabled. Valid values:
   * - 0: Disabled.
   * - 1: Enabled.
   * 
   * @example
   * 0
   */
  smsAbility?: string;
  /**
   * @remarks
   * Specifies whether to pass through the caller ID to display the real caller. Valid values:
   * - 00: Non-passthrough. The work number is displayed when calls are made to each other.
   * - 10: Passthrough. When Customer A is the caller, the caller ID displayed to Employee B is the number of Customer A. When Employee B is the caller, the caller ID displayed to Customer A is the work number.
   * Default value: 00.
   * 
   * @example
   * 0
   */
  smsSignMode?: string;
  static names(): { [key: string]: string } {
    return {
      callAbility: 'CallAbility',
      GNFlag: 'GNFlag',
      reachJsons: 'ReachJsons',
      sequenceCalls: 'SequenceCalls',
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
      reachJsons: { 'type': 'array', 'itemType': GetXConfigResponseBodyDataReachJsons },
      sequenceCalls: { 'type': 'array', 'itemType': GetXConfigResponseBodyDataSequenceCalls },
      sequenceEndTime: 'string',
      sequenceStartTime: 'string',
      smsAbility: 'string',
      smsSignMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reachJsons)) {
      $dara.Model.validateArray(this.reachJsons);
    }
    if(Array.isArray(this.sequenceCalls)) {
      $dara.Model.validateArray(this.sequenceCalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetXConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
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
   * Other values indicate failure.
   * 
   * @example
   * 0000
   */
  code?: string;
  /**
   * @remarks
   * The configuration of the work number.
   * 
   * @example
   * {"CallAbility":"0","GNFlag":"00","SmsAbility":"0","SmsSignMode":"0"}
   */
  data?: GetXConfigResponseBodyData;
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
   * - true: Success.
   * 
   * - false: Failure.
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
      data: GetXConfigResponseBodyData,
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

