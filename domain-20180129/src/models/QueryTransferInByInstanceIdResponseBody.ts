// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTransferInByInstanceIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * Domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Mailbox to which the domain name transfer-in confirmation email was sent.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The expiration time of the domain name transfer-in.
   * 
   * @example
   * 2018-03-28 00:41:42
   */
  expirationDate?: string;
  /**
   * @remarks
   * The UNIX timestamp indicating when the transfer-in expires.
   * 
   * @example
   * 1514428524669
   */
  expirationDateLong?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * S20181T0WLI85212
   */
  instanceId?: string;
  /**
   * @remarks
   * The update time of the transfer-in information.
   * 
   * @example
   * 2018-03-28 00:41:42
   */
  modificationDate?: string;
  /**
   * @remarks
   * The UNIX timestamp indicating when the transfer-in information was updated.
   * 
   * @example
   * 1514428524669
   */
  modificationDateLong?: number;
  /**
   * @remarks
   * Indicates whether email verification is required.
   * 
   * @example
   * true
   */
  needMailCheck?: boolean;
  /**
   * @remarks
   * Progress bar chart type for the transfer procedure. Valid values:  
   * - **0**: Both email verification and naming review are required;  
   * - **1**: Email verification is required, but naming review is not;  
   * - **2**: Naming review is required, but email verification is not;  
   * - **3**: Neither email verification nor naming review is required.
   * 
   * @example
   * 0
   */
  progressBarType?: number;
  /**
   * @remarks
   * Unique request access token.
   * 
   * @example
   * AF7D4DCE-0776-47F2-A9B2-6FB85A87AA60
   */
  requestId?: string;
  /**
   * @remarks
   * The error code indicating the reason for transfer failure. Valid values:
   * - **clientCancelled**: You canceled the domain transfer-in.
   * - **clientRejected**: The original registrar rejected the domain transfer-in (or you performed a rejection operation through the original registrar).
   * - **serverCancelled**: The domain name registry canceled the transfer.
   * - **transferProhibited**: The domain is in a transfer-prohibited status.
   * - **transferExpired**: You did not complete the required transfer confirmation within the validity period.
   * - **nameVerificationFailed**: The domain naming review did not pass.
   * - **transferSubmitted**: Another user has already submitted a transfer request for this domain.
   * 
   * @example
   * clientCancelled
   */
  resultCode?: string;
  /**
   * @remarks
   * The time when the transfer succeeded or failed.
   * 
   * @example
   * 2018-03-28 00:41:42
   */
  resultDate?: string;
  /**
   * @remarks
   * The UNIX timestamp indicating when the transfer succeeded or failed.
   * 
   * @example
   * 1514428524669
   */
  resultDateLong?: number;
  /**
   * @remarks
   * Description of the failure reason when the transfer failed.
   * 
   * @example
   * 您取消了此次域名转入
   */
  resultMsg?: string;
  /**
   * @remarks
   * Transfer status. Valid values:  
   * - **INIT**: Transfer-in submitted;  
   * - **AUTHORIZATION**: Authorization for transfer-in (email verification);  
   * - **NAME_VERIFICATION**: Naming review;  
   * - **PASSWORD_VERIFICATION**: Transfer password verification;  
   * - **PENDING**: Transfer-in in progress;  
   * - **SUCCESS**: Transfer-in succeeded;  
   * - **FAIL**: Transfer-in failed.
   * 
   * @example
   * SUCCESS
   */
  simpleTransferInStatus?: string;
  /**
   * @remarks
   * Detailed domain name transfer-in status. Valid values:  
   * - **10**: Initial status;  
   * - **11**: Email verification token link has been sent;  
   * - **19**: Token link has been successfully verified;  
   * - **20**: Naming review has been submitted;  
   * - **21**: Naming review failed;  
   * - **29**: Naming review succeeded;  
   * - **31**: Transfer password is incorrect;  
   * - **39**: Transfer-in submission succeeded;  
   * - **50**: Customer canceled the transfer-in;  
   * - **51**: Transfer-in failed;  
   * - **52**: Transfer-in expired;  
   * - **59**: Transfer-in succeeded.
   * 
   * @example
   * 11
   */
  status?: number;
  /**
   * @remarks
   * Transfer request submission time.
   * 
   * @example
   * 2018-03-28 00:41:42
   */
  submissionDate?: string;
  /**
   * @remarks
   * UNIX timestamp of the transfer request submission time.
   * 
   * @example
   * 1514428524669
   */
  submissionDateLong?: number;
  /**
   * @remarks
   * Time when the transfer password was successfully submitted.
   * 
   * @example
   * 2018-03-28 00:41:42
   */
  transferAuthorizationCodeSubmissionDate?: string;
  /**
   * @remarks
   * UNIX timestamp of the time when the transfer password was successfully submitted.
   * 
   * @example
   * 1514428524669
   */
  transferAuthorizationCodeSubmissionDateLong?: number;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 123456
   */
  userId?: string;
  /**
   * @remarks
   * Indicates whether the registrant\\"s mailbox was scraped from WHOIS. When the domain transfer-in is in the authorization (email verification) phase and this field is **false**, it means the registrant\\"s mailbox was not obtained via WHOIS scraping, and manual processing is required.
   * 
   * @example
   * true
   */
  whoisMailStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      email: 'Email',
      expirationDate: 'ExpirationDate',
      expirationDateLong: 'ExpirationDateLong',
      instanceId: 'InstanceId',
      modificationDate: 'ModificationDate',
      modificationDateLong: 'ModificationDateLong',
      needMailCheck: 'NeedMailCheck',
      progressBarType: 'ProgressBarType',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultDate: 'ResultDate',
      resultDateLong: 'ResultDateLong',
      resultMsg: 'ResultMsg',
      simpleTransferInStatus: 'SimpleTransferInStatus',
      status: 'Status',
      submissionDate: 'SubmissionDate',
      submissionDateLong: 'SubmissionDateLong',
      transferAuthorizationCodeSubmissionDate: 'TransferAuthorizationCodeSubmissionDate',
      transferAuthorizationCodeSubmissionDateLong: 'TransferAuthorizationCodeSubmissionDateLong',
      userId: 'UserId',
      whoisMailStatus: 'WhoisMailStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      email: 'string',
      expirationDate: 'string',
      expirationDateLong: 'number',
      instanceId: 'string',
      modificationDate: 'string',
      modificationDateLong: 'number',
      needMailCheck: 'boolean',
      progressBarType: 'number',
      requestId: 'string',
      resultCode: 'string',
      resultDate: 'string',
      resultDateLong: 'number',
      resultMsg: 'string',
      simpleTransferInStatus: 'string',
      status: 'number',
      submissionDate: 'string',
      submissionDateLong: 'number',
      transferAuthorizationCodeSubmissionDate: 'string',
      transferAuthorizationCodeSubmissionDateLong: 'number',
      userId: 'string',
      whoisMailStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

