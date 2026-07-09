// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFundAccountPayRelationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * AccountId of the user who pays with the account.
   * 
   * @example
   * 1501603440974415
   */
  accountId?: string;
  /**
   * @remarks
   * Name of the user who pays with the account.
   * 
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @remarks
   * Account ID.
   * 
   * @example
   * 12332112
   */
  fundAccountId?: string;
  /**
   * @remarks
   * Result code.
   * 
   * @example
   * Success
   */
  resultCode?: string;
  /**
   * @remarks
   * Result message.
   * 
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

export class CreateFundAccountPayRelationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Data list.
   */
  data?: CreateFundAccountPayRelationResponseBodyData[];
  /**
   * @remarks
   * Response metadata.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      metadata: 'Metadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': CreateFundAccountPayRelationResponseBodyData },
      metadata: 'any',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

