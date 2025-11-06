// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTransferOutInfoResponseBody extends $dara.Model {
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 2018-04-13 19:57:56
   */
  expirationDate?: string;
  /**
   * @example
   * 2018-04-13 19:57:56
   */
  pendingRequestDate?: string;
  /**
   * @example
   * BBEC5A50-DFDF-482E-8343-B4EB0105E055
   */
  requestId?: string;
  /**
   * @example
   * clientRejected
   */
  resultCode?: string;
  /**
   * @example
   * Transfer out rejected
   */
  resultMsg?: string;
  /**
   * @example
   * 8
   */
  status?: number;
  /**
   * @example
   * 2018-04-13 19:57:56
   */
  transferAuthorizationCodeSendDate?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      expirationDate: 'ExpirationDate',
      pendingRequestDate: 'PendingRequestDate',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMsg: 'ResultMsg',
      status: 'Status',
      transferAuthorizationCodeSendDate: 'TransferAuthorizationCodeSendDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      expirationDate: 'string',
      pendingRequestDate: 'string',
      requestId: 'string',
      resultCode: 'string',
      resultMsg: 'string',
      status: 'number',
      transferAuthorizationCodeSendDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

