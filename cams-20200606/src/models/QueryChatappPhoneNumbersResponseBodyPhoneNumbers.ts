// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryChatappPhoneNumbersResponseBodyPhoneNumbers extends $dara.Model {
  /**
   * @remarks
   * The verification status of the phone number.
   * 
   * @example
   * VERIFIED
   */
  codeVerificationStatus?: string;
  /**
   * @example
   * N
   */
  isOfficial?: string;
  /**
   * @remarks
   * The number of phone numbers to which messages can be sent in a day.
   * 
   * Valid values:
   * 
   * *   TIER_100K: 100,000
   * *   TIER_UNLIMITED: unlimited
   * *   TIER_250: 250
   * *   TIER_1K: 1,000
   * *   TIER_50: 50
   * *   TIER_10K: 10,000
   * 
   * @example
   * TIER_10
   */
  messagingLimitTier?: string;
  /**
   * @remarks
   * The status of the business name.
   * 
   * @example
   * Approval
   */
  nameStatus?: string;
  /**
   * @remarks
   * The review status of the new business name.
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
   * 8613800000
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
   * *   UNKNOWN
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
   * CONNECTED
   */
  status?: string;
  /**
   * @remarks
   * The callback URL to which status reports are sent by using HTTP callbacks.
   * 
   * @example
   * https://ali.com/status
   */
  statusCallbackUrl?: string;
  /**
   * @remarks
   * The status report queue.
   * 
   * @example
   * Alicom-Queue-****-ChatAppStatus
   */
  statusQueue?: string;
  /**
   * @remarks
   * The callback URL to which MO messages are sent by using HTTP callbacks.
   * 
   * @example
   * https://ali.com/inbound
   */
  upCallbackUrl?: string;
  /**
   * @remarks
   * The mobile originated (MO) message notification queue.
   * 
   * @example
   * Alicom-Queue-****-ChatAppInbound
   */
  upQueue?: string;
  /**
   * @remarks
   * The name of the company with which the phone number is associated.
   * 
   * @example
   * Alibaba
   */
  verifiedName?: string;
  static names(): { [key: string]: string } {
    return {
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

