// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccountsByLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account.
   * 
   * @example
   * sas_account_xxx
   */
  accountName?: string;
  /**
   * @remarks
   * Indicates whether the account has been added. Valid values:
   * -1: The account has been added.
   * -0: The account has not been added.
   * 
   * @example
   * 123xxxxxxx
   */
  imported?: number;
  /**
   * @remarks
   * The log code.
   * 
   * @example
   * cloud_siem_waf_xxxxx
   */
  logCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to purchase Threat Analysis.
   * 
   * @example
   * 123XXXXXXXXX
   */
  mainUserId?: number;
  /**
   * @remarks
   * The code of the product that corresponds to the log.
   * 
   * @example
   * qcloud_waf
   */
  prodCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used for Threat Analysis.
   * 
   * @example
   * 123XXXXXXXX
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      imported: 'Imported',
      logCode: 'LogCode',
      mainUserId: 'MainUserId',
      prodCode: 'ProdCode',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      imported: 'number',
      logCode: 'string',
      mainUserId: 'number',
      prodCode: 'string',
      subUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsByLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value of the request.
   */
  data?: ListAccountsByLogResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAccountsByLogResponseBodyData },
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

