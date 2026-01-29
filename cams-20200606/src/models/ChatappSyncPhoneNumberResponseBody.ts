// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatappSyncPhoneNumberResponseBodyPhoneNumbersCallingConfigureCallingCallHoursHolidaySchedule extends $dara.Model {
  /**
   * @example
   * 2026-01-01
   */
  date?: string;
  /**
   * @example
   * 2359
   */
  endTime?: string;
  /**
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
   * @example
   * 2359
   */
  closeTime?: string;
  /**
   * @example
   * MONDAY
   */
  dayOfWeek?: string;
  /**
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
  holidaySchedule?: ChatappSyncPhoneNumberResponseBodyPhoneNumbersCallingConfigureCallingCallHoursHolidaySchedule[];
  /**
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timezoneId?: string;
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
  callHours?: ChatappSyncPhoneNumberResponseBodyPhoneNumbersCallingConfigureCallingCallHours;
  /**
   * @example
   * DEFAULT
   */
  callIconVisibility?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  callbackPermissionStatus?: string;
  /**
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
  calling?: ChatappSyncPhoneNumberResponseBodyPhoneNumbersCallingConfigureCalling;
  /**
   * @example
   * http://aliyun.com
   */
  callingCallbackUrl?: string;
  /**
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
  callingConfigure?: ChatappSyncPhoneNumberResponseBodyPhoneNumbersCallingConfigure;
  /**
   * @remarks
   * The verification state of the phone number.
   * 
   * Valid values:
   * 
   * *   REVOKED: The review application is revoked.
   * *   MORE_INFORMATION_REQUESTED: More information needs to be provided.
   * *   VERIFIED: The phone number passes the verification.
   * *   REJECTED: The phone number fails to pass the verification.
   * 
   * @example
   * VERIFIED
   */
  codeVerificationStatus?: string;
  /**
   * @remarks
   * Indicates whether it is a WhatsApp Official Business Account (OBA).
   * 
   * @example
   * N
   */
  isOfficial?: string;
  /**
   * @remarks
   * The number of phone numbers to which messages can be sent in a day.
   * 
   * @example
   * TIER_10
   */
  messagingLimitTier?: string;
  /**
   * @remarks
   * The review status of the business display name.
   * 
   * @example
   * Approval
   */
  nameStatus?: string;
  /**
   * @remarks
   * The review status of the new business display name.
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
   * 8613800001234
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The quality rating of the phone number.
   * 
   * Valid values:
   * 
   * *   RED
   * *   YELLOW
   * *   GREEN
   * 
   * @example
   * GREEN
   */
  qualityRating?: string;
  /**
   * @remarks
   * The state of the phone number.
   * 
   * Valid values:
   * 
   * *   MIGRATED
   * *   FLAGGED
   * *   DISCONNECTED
   * *   UNVERIFIED
   * *   BANNED
   * *   RATE_LIMITED
   * *   PENDING
   * *   CONNECTED
   * *   UNKNOWN
   * *   DELETED
   * *   RESTRICTED
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * The callback URL to which status reports are sent by using HTTP callbacks.
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
   * alicom-09399200-queue
   */
  statusQueue?: string;
  /**
   * @remarks
   * The URL that receives the MO messages.
   * 
   * @example
   * https://www.alibaba.com/inbound
   */
  upCallbackUrl?: string;
  /**
   * @remarks
   * The mobile originated (MO) message queue.
   * 
   * @example
   * alicom-09399200-queue
   */
  upQueue?: string;
  /**
   * @remarks
   * The display name of the business to which the phone number belongs.
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
   * The HTTP status code returned.
   * 
   * *   A value of OK indicates that the call is successful.
   * *   Other values indicate that the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * None.
   */
  message?: string;
  /**
   * @remarks
   * The phone numbers.
   */
  phoneNumbers?: ChatappSyncPhoneNumberResponseBodyPhoneNumbers[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * *   **true**: The call was successful.
   * *   **false**: The call failed.
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

