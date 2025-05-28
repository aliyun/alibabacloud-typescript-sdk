// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFundAccountPayRelationResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1501603440974415
   */
  accountId?: string;
  /**
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @example
   * 12332112
   */
  fundAccountId?: string;
  /**
   * @example
   * Success
   */
  resultCode?: string;
  /**
   * @example
   * Successful
   */
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      fundAccountId: 'FundAccountId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      fundAccountId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

