// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccountsByLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the cloud account.
   * 
   * @example
   * sas_account_xxx
   */
  accountName?: string;
  /**
   * @remarks
   * Indicates whether the account is added. Valid values: -1: yes -0: no
   * 
   * @example
   * 123xxxxxxx
   */
  imported?: number;
  /**
   * @remarks
   * The code of the log.
   * 
   * @example
   * cloud_siem_waf_xxxxx
   */
  logCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to purchase the threat analysis feature.
   * 
   * @example
   * 123XXXXXXXXX
   */
  mainUserId?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * qcloud_waf
   */
  prodCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account for which the threat analysis feature is enabled.
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
   * The data returned.
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

