// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryChatappPhoneNumbersResponseBodyPhoneNumbersCallingConfigureCallingCallHoursHolidaySchedule extends $dara.Model {
  /**
   * @remarks
   * The date in YYYY-MM-DD format.
   * 
   * @example
   * 2026-01-01
   */
  date?: string;
  /**
   * @remarks
   * The end time in HHmm format.
   * 
   * @example
   * 2359
   */
  endTime?: string;
  /**
   * @remarks
   * The start time in HHmm format.
   * 
   * @example
   * 0000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChatappPhoneNumbersResponseBodyPhoneNumbersCallingConfigureCallingCallHoursWeeklyOperatingHours extends $dara.Model {
  /**
   * @remarks
   * The closing time in HHmm format.
   * 
   * @example
   * 2359
   */
  closeTime?: string;
  /**
   * @remarks
   * The day of the week.
   * 
   * @example
   * 示例值示例值示例值
   */
  dayOfWeek?: string;
  /**
   * @remarks
   * The opening time in HHmm format.
   * 
   * @example
   * 0000
   */
  openTime?: string;
  static names(): { [key: string]: string } {
    return {
      closeTime: 'CloseTime',
      dayOfWeek: 'DayOfWeek',
      openTime: 'OpenTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      closeTime: 'string',
      dayOfWeek: 'string',
      openTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChatappPhoneNumbersResponseBodyPhoneNumbersCallingConfigureCallingCallHours extends $dara.Model {
  /**
   * @remarks
   * The visibility of the call icon.
   * 
   * @example
   * DEFAULT
   */
  callIconVisibility?: string;
  /**
   * @remarks
   * The callback permission status.
   * 
   * @example
   * ENABLED
   */
  callbackPermissionStatus?: string;
  /**
   * @remarks
   * The holiday call hours schedule.
   */
  holidaySchedule?: QueryChatappPhoneNumbersResponseBodyPhoneNumbersCallingConfigureCallingCallHoursHolidaySchedule[];
  /**
   * @remarks
   * The status of the call hours configuration.
   * 
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @remarks
   * The time zone ID, such as Asia/Shanghai.
   * 
   * @example
   * Asia/Shanghai
   */
  timezoneId?: string;
  /**
   * @remarks
   * The weekly operating hours schedule.
   */
  weeklyOperatingHours?: QueryChatappPhoneNumbersResponseBodyPhoneNumbersCallingConfigureCallingCallHoursWeeklyOperatingHours[];
  static names(): { [key: string]: string } {
    return {
      callIconVisibility: 'CallIconVisibility',
      callbackPermissionStatus: 'CallbackPermissionStatus',
      holidaySchedule: 'HolidaySchedule',
      status: 'Status',
      timezoneId: 'TimezoneId',
      weeklyOperatingHours: 'WeeklyOperatingHours',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callIconVisibility: 'string',
      callbackPermissionStatus: 'string',
      holidaySchedule: { 'type': 'array', 'itemType': QueryChatappPhoneNumbersResponseBodyPhoneNumbersCallingConfigureCallingCallHoursHolidaySchedule },
      status: 'string',
      timezoneId: 'string',
      weeklyOperatingHours: { 'type': 'array', 'itemType': QueryChatappPhoneNumbersResponseBodyPhoneNumbersCallingConfigureCallingCallHoursWeeklyOperatingHours },
    };
  }

  validate() {
    if(Array.isArray(this.holidaySchedule)) {
      $dara.Model.validateArray(this.holidaySchedule);
    }
    if(Array.isArray(this.weeklyOperatingHours)) {
      $dara.Model.validateArray(this.weeklyOperatingHours);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChatappPhoneNumbersResponseBodyPhoneNumbersCallingConfigureCalling extends $dara.Model {
  /**
   * @remarks
   * The call hours configuration.
   */
  callHours?: QueryChatappPhoneNumbersResponseBodyPhoneNumbersCallingConfigureCallingCallHours;
  /**
   * @remarks
   * The status of the calling feature.
   * 
   * @example
   * ENABLED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      callHours: 'CallHours',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callHours: QueryChatappPhoneNumbersResponseBodyPhoneNumbersCallingConfigureCallingCallHours,
      status: 'string',
    };
  }

  validate() {
    if(this.callHours && typeof (this.callHours as any).validate === 'function') {
      (this.callHours as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChatappPhoneNumbersResponseBodyPhoneNumbersCallingConfigure extends $dara.Model {
  /**
   * @remarks
   * The calling feature configuration.
   */
  calling?: QueryChatappPhoneNumbersResponseBodyPhoneNumbersCallingConfigureCalling;
  /**
   * @remarks
   * The callback URL for calls.
   * 
   * @example
   * https://aliyun.com
   */
  callingCallbackUrl?: string;
  /**
   * @remarks
   * The maximum call duration.
   * 
   * @example
   * 1000
   */
  maxTalkTime?: number;
  static names(): { [key: string]: string } {
    return {
      calling: 'Calling',
      callingCallbackUrl: 'CallingCallbackUrl',
      maxTalkTime: 'MaxTalkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calling: QueryChatappPhoneNumbersResponseBodyPhoneNumbersCallingConfigureCalling,
      callingCallbackUrl: 'string',
      maxTalkTime: 'number',
    };
  }

  validate() {
    if(this.calling && typeof (this.calling as any).validate === 'function') {
      (this.calling as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChatappPhoneNumbersResponseBodyPhoneNumbers extends $dara.Model {
  /**
   * @remarks
   * The calling configuration.
   */
  callingConfigure?: QueryChatappPhoneNumbersResponseBodyPhoneNumbersCallingConfigure;
  /**
   * @remarks
   * The verification status of the phone number.
   * 
   * @example
   * VERIFIED
   */
  codeVerificationStatus?: string;
  /**
   * @remarks
   * Indicates whether the phone number is verified.
   * 
   * @example
   * N
   */
  isOfficial?: string;
  /**
   * @remarks
   * The messaging volume limit tier of the phone number.
   * 
   * @example
   * TIER_10K
   */
  messagingLimitTier?: string;
  /**
   * @remarks
   * The name status.
   * 
   * @example
   * Approval
   */
  nameStatus?: string;
  /**
   * @remarks
   * The review status of the new name.
   * 
   * @example
   * Approval
   */
  newNameStatus?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 861380000****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The quality rating of the phone number.
   * 
   * @example
   * GREEN
   */
  qualityRating?: string;
  /**
   * @remarks
   * The phone number status.
   * 
   * @example
   * CONNECTED
   */
  status?: string;
  /**
   * @remarks
   * The URL for status report notifications.
   * 
   * @example
   * https://ali.com/status
   */
  statusCallbackUrl?: string;
  /**
   * @remarks
   * The queue for status report notifications.
   * 
   * @example
   * Alicom-Queue-****-ChatAppStatus
   */
  statusQueue?: string;
  /**
   * @remarks
   * The URL for inbound message notifications.
   * 
   * @example
   * https://ali.com/inbound
   */
  upCallbackUrl?: string;
  /**
   * @remarks
   * The queue for inbound message notifications.
   * 
   * @example
   * Alicom-Queue-****-ChatAppInbound
   */
  upQueue?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * Alibaba
   */
  verifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      callingConfigure: 'CallingConfigure',
      codeVerificationStatus: 'CodeVerificationStatus',
      isOfficial: 'IsOfficial',
      messagingLimitTier: 'MessagingLimitTier',
      nameStatus: 'NameStatus',
      newNameStatus: 'NewNameStatus',
      phoneNumber: 'PhoneNumber',
      qualityRating: 'QualityRating',
      status: 'Status',
      statusCallbackUrl: 'StatusCallbackUrl',
      statusQueue: 'StatusQueue',
      upCallbackUrl: 'UpCallbackUrl',
      upQueue: 'UpQueue',
      verifiedName: 'VerifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingConfigure: QueryChatappPhoneNumbersResponseBodyPhoneNumbersCallingConfigure,
      codeVerificationStatus: 'string',
      isOfficial: 'string',
      messagingLimitTier: 'string',
      nameStatus: 'string',
      newNameStatus: 'string',
      phoneNumber: 'string',
      qualityRating: 'string',
      status: 'string',
      statusCallbackUrl: 'string',
      statusQueue: 'string',
      upCallbackUrl: 'string',
      upQueue: 'string',
      verifiedName: 'string',
    };
  }

  validate() {
    if(this.callingConfigure && typeof (this.callingConfigure as any).validate === 'function') {
      (this.callingConfigure as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChatappPhoneNumbersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * - OK indicates that the request was successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * 示例值
   */
  data?: string;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The list of phone numbers.
   */
  phoneNumbers?: QueryChatappPhoneNumbersResponseBodyPhoneNumbers[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful:
   * - **true**: The call was successful.
   * - **false**: The call failed.
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
      phoneNumbers: 'PhoneNumbers',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'string',
      message: 'string',
      phoneNumbers: { 'type': 'array', 'itemType': QueryChatappPhoneNumbersResponseBodyPhoneNumbers },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.phoneNumbers)) {
      $dara.Model.validateArray(this.phoneNumbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

