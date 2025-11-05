// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAccountInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Result Code:
   * *   200 OK
   * *   1109 System error
   * *   3030 Sub Account Nickname exceeds maximum length,  maximum length 150 bytes.
   * *   3031 Remark exceeds maximum length,  maximum length 3000 bytes.
   * 
   * @example
   * Message information
   */
  accountNickname?: string;
  /**
   * @remarks
   * Customer manager（limited 50 character）
   * 
   * @example
   * abc
   */
  customerBd?: string;
  /**
   * @remarks
   * success
   * 
   * @example
   * Candidate Value: True/False, which indicates whether the current API call itself is successful. It does not guarantee the success of subsequent business operations.
   */
  remark?: string;
  /**
   * @remarks
   * Request ID, Alibaba Cloud will track errors with this.
   * 
   * This parameter is required.
   * 
   * @example
   * 1133166938931507
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      accountNickname: 'AccountNickname',
      customerBd: 'CustomerBd',
      remark: 'Remark',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNickname: 'string',
      customerBd: 'string',
      remark: 'string',
      uid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

