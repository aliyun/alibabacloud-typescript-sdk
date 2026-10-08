// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTransferOutInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Mailbox to which the transfer password was sent.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * Expiration time of the obtained transfer password.
   * 
   * @example
   * 2018-04-13 19:57:56
   */
  expirationDate?: string;
  /**
   * @remarks
   * Time when the transfer-out request was received from the domain name registry.
   * 
   * @example
   * 2018-04-13 19:57:56
   */
  pendingRequestDate?: string;
  /**
   * @remarks
   * Unique request access token.
   * 
   * @example
   * BBEC5A50-DFDF-482E-8343-B4EB0105E055
   */
  requestId?: string;
  /**
   * @remarks
   * Encoding of the transfer-out failure reason.
   * 
   * @example
   * clientRejected
   */
  resultCode?: string;
  /**
   * @remarks
   * Description of the transfer-out failure reason.
   * 
   * @example
   * Transfer out rejected
   */
  resultMsg?: string;
  /**
   * @remarks
   * Transfer-out status. Valid values:  
   * - **1**: Phone authentication required;  
   * - **2**: Mailbox authentication required;  
   * - **3**: Transfer password already obtained;  
   * - **4**: Transfer-out in progress (transfer request received from the domain name registry);  
   * - **5**: Transfer-out succeeded;  
   * - **8**: Transfer-out failed.
   * 
   * @example
   * 8
   */
  status?: number;
  /**
   * @remarks
   * Time when the transfer password was obtained.
   * 
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

