// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatappSyncPhoneNumberResponseBodyPhoneNumbersCallingConfigureCallingCallHoursHolidaySchedule extends $dara.Model {
  /**
   * @remarks
   * The date in the YYYY-MM-DD format.
   * 
   * @example
   * 2026-01-01
   */
  date?: string;
  /**
   * @remarks
   * The end time in the HHmm format.
   * 
   * @example
   * 2359
   */
  endTime?: string;
  /**
   * @remarks
   * The start time in the HHmm format.
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

export class ChatappSyncPhoneNumberResponseBodyPhoneNumbersCallingConfigureCallingCallHoursWeeklyOperatingHours extends $dara.Model {
  /**
   * @remarks
   * The closing time in the HHmm format.
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
   * MONDAY
   */
  dayOfWeek?: string;
  /**
   * @remarks
   * The opening time in the HHmm format.
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

export class ChatappSyncPhoneNumberResponseBodyPhoneNumbersCallingConfigureCallingCallHours extends $dara.Model {
  /**
   * @remarks
   * The calling schedule for holidays.
   */
  holidaySchedule?: ChatappSyncPhoneNumberResponseBodyPhoneNumbersCallingConfigureCallingCallHoursHolidaySchedule[];
  /**
   * @remarks
   * The status of the calling hours configuration.
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
  weeklyOperatingHours?: ChatappSyncPhoneNumberResponseBodyPhoneNumbersCallingConfigureCallingCallHoursWeeklyOperatingHours[];
  static names(): { [key: string]: string } {
    return {
      holidaySchedule: 'HolidaySchedule',
      status: 'Status',
      timezoneId: 'TimezoneId',
      weeklyOperatingHours: 'WeeklyOperatingHours',
    };
  }

  static types(): { [key: string]: any } {
    return {
      holidaySchedule: { 'type': 'array', 'itemType': ChatappSyncPhoneNumberResponseBodyPhoneNumbersCallingConfigureCallingCallHoursHolidaySchedule },
      status: 'string',
      timezoneId: 'string',
      weeklyOperatingHours: { 'type': 'array', 'itemType': ChatappSyncPhoneNumberResponseBodyPhoneNumbersCallingConfigureCallingCallHoursWeeklyOperatingHours },
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

export class ChatappSyncPhoneNumberResponseBodyPhoneNumbersCallingConfigureCalling extends $dara.Model {
  /**
   * @remarks
   * The calling hours configuration.
   */
  callHours?: ChatappSyncPhoneNumberResponseBodyPhoneNumbersCallingConfigureCallingCallHours;
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
   * Sample value sample value sample value
   */
  callbackPermissionStatus?: string;
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
      callIconVisibility: 'CallIconVisibility',
      callbackPermissionStatus: 'CallbackPermissionStatus',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callHours: ChatappSyncPhoneNumberResponseBodyPhoneNumbersCallingConfigureCallingCallHours,
      callIconVisibility: 'string',
      callbackPermissionStatus: 'string',
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

export class ChatappSyncPhoneNumberResponseBodyPhoneNumbersCallingConfigure extends $dara.Model {
  /**
   * @remarks
   * The calling feature configuration.
   */
  calling?: ChatappSyncPhoneNumberResponseBodyPhoneNumbersCallingConfigureCalling;
  /**
   * @remarks
   * The calling callback URL.
   * 
   * @example
   * http://aliyun.com
   */
  callingCallbackUrl?: string;
  /**
   * @remarks
   * The maximum talk time.
   * 
   * @example
   * 100
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
      calling: ChatappSyncPhoneNumberResponseBodyPhoneNumbersCallingConfigureCalling,
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

export class ChatappSyncPhoneNumberResponseBodyPhoneNumbers extends $dara.Model {
  /**
   * @remarks
   * The calling configuration.
   */
  callingConfigure?: ChatappSyncPhoneNumberResponseBodyPhoneNumbersCallingConfigure;
  /**
   * @remarks
   * The verification status.
   * 
   * @example
   * VERIFIED
   */
  codeVerificationStatus?: string;
  /**
   * @remarks
   * Specifies whether the phone number is OBA certified.
   * 
   * @example
   * N
   */
  isOfficial?: string;
  /**
   * @remarks
   * The messaging limit tier of the phone number.
   * 
   * @example
   * TIER_10K
   */
  messagingLimitTier?: string;
  /**
   * @remarks
   * The review status of the name.
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
   * The status of the phone number.
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * The URL for status report notifications.
   * 
   * @example
   * https://www.alibaba.com/status
   */
  statusCallbackUrl?: string;
  /**
   * @remarks
   * The status report queue.
   * 
   * @example
   * alicom-0939****-queue
   */
  statusQueue?: string;
  /**
   * @remarks
   * The URL for upstream message notifications.
   * 
   * @example
   * https://www.alibaba.com/inbound
   */
  upCallbackUrl?: string;
  /**
   * @remarks
   * The upstream MSMQ.
   * 
   * @example
   * alicom-0939****-queue
   */
  upQueue?: string;
  /**
   * @remarks
   * The verified name of the phone number.
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
      callingConfigure: ChatappSyncPhoneNumberResponseBodyPhoneNumbersCallingConfigure,
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

export class ChatappSyncPhoneNumberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * - A value of OK indicates that the request is successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The list of phone numbers.
   */
  phoneNumbers?: ChatappSyncPhoneNumberResponseBodyPhoneNumbers[];
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
   * Specifies whether the call is successful.
   * - **true**: The call is successful.
   * - **false**: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
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
      message: 'string',
      phoneNumbers: { 'type': 'array', 'itemType': ChatappSyncPhoneNumberResponseBodyPhoneNumbers },
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

