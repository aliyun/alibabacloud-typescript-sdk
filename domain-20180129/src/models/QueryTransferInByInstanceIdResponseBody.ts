// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTransferInByInstanceIdResponseBody extends $dara.Model {
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 2018-03-28 00:41:42
   */
  expirationDate?: string;
  /**
   * @example
   * 1514428524669
   */
  expirationDateLong?: number;
  /**
   * @example
   * S20181T0WLI85212
   */
  instanceId?: string;
  /**
   * @example
   * 2018-03-28 00:41:42
   */
  modificationDate?: string;
  /**
   * @example
   * 1514428524669
   */
  modificationDateLong?: number;
  /**
   * @example
   * true
   */
  needMailCheck?: boolean;
  /**
   * @example
   * 0
   */
  progressBarType?: number;
  /**
   * @example
   * AF7D4DCE-0776-47F2-A9B2-6FB85A87AA60
   */
  requestId?: string;
  /**
   * @example
   * clientCancelled
   */
  resultCode?: string;
  /**
   * @example
   * 2018-03-28 00:41:42
   */
  resultDate?: string;
  /**
   * @example
   * 1514428524669
   */
  resultDateLong?: number;
  resultMsg?: string;
  /**
   * @example
   * SUCCESS
   */
  simpleTransferInStatus?: string;
  /**
   * @example
   * 11
   */
  status?: number;
  /**
   * @example
   * 2018-03-28 00:41:42
   */
  submissionDate?: string;
  /**
   * @example
   * 1514428524669
   */
  submissionDateLong?: number;
  /**
   * @example
   * 2018-03-28 00:41:42
   */
  transferAuthorizationCodeSubmissionDate?: string;
  /**
   * @example
   * 1514428524669
   */
  transferAuthorizationCodeSubmissionDateLong?: number;
  /**
   * @example
   * 123456
   */
  userId?: string;
  /**
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

