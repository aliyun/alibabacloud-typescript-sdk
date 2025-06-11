// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatappSyncPhoneNumberResponseBodyPhoneNumbers extends $dara.Model {
  /**
   * @remarks
   * The verification status.
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
   * The quality rating of the phone number. Valid values: GREEN, YELLOW, and RED.
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
   * The callback URL to which MO messages are sent by using HTTP callbacks.
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

