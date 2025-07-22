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

export class CreateFundAccountPayRelationResponseBody extends $dara.Model {
  data?: CreateFundAccountPayRelationResponseBodyData[];
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
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

