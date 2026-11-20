// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListXTelephonesResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The reason for binding failure.
   * 
   * @example
   * Binding failed: user ID card blacklisted
   */
  authMsg?: string;
  /**
   * @remarks
   * The binding time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-08-29 17:23:58
   */
  bindTime?: string;
  /**
   * @remarks
   * The purchase time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-08-29 17:23:58
   */
  buyTime?: string;
  /**
   * @remarks
   * The customer number pool key.
   * 
   * @example
   * FC533e6eeb81f4400c87ef3745a21a1a
   */
  customerPoolKey?: string;
  /**
   * @remarks
   * The number pool name.
   * 
   * @example
   * Test number pool
   */
  customerPoolName?: string;
  /**
   * @remarks
   * The release time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-08-29 17:23:58
   */
  releaseTime?: string;
  /**
   * @remarks
   * The SMS activation status. Valid values:
   * - 0: Not activated.
   * - 1: Activated.
   * 
   * @example
   * 0
   */
  smsStatus?: string;
  /**
   * @remarks
   * The X number.
   * 
   * @example
   * 17816876546
   */
  telephone?: string;
  /**
   * @remarks
   * The number status. Valid values:
   * - 0: Idle.
   * - 1: Allocation completed and pending purchase.
   * - 2: Purchase completed and pending verification.
   * - 3: Real-name verification in progress.
   * - 4: Real-name verification succeeded.
   * - 5: Verification failed.
   * - 6: Unbinding in progress.
   * - 7: Unbinding failed.
   * - 8: Released.
   * - 99: Released due to timeout.
   * 
   * @example
   * 0
   */
  telephoneStatus?: string;
  /**
   * @remarks
   * The unbinding time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-08-29 17:23:58
   */
  unbindTime?: string;
  static names(): { [key: string]: string } {
    return {
      authMsg: 'AuthMsg',
      bindTime: 'BindTime',
      buyTime: 'BuyTime',
      customerPoolKey: 'CustomerPoolKey',
      customerPoolName: 'CustomerPoolName',
      releaseTime: 'ReleaseTime',
      smsStatus: 'SmsStatus',
      telephone: 'Telephone',
      telephoneStatus: 'TelephoneStatus',
      unbindTime: 'UnbindTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMsg: 'string',
      bindTime: 'string',
      buyTime: 'string',
      customerPoolKey: 'string',
      customerPoolName: 'string',
      releaseTime: 'string',
      smsStatus: 'string',
      telephone: 'string',
      telephoneStatus: 'string',
      unbindTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListXTelephonesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data list.
   */
  list?: ListXTelephonesResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries that meet the query conditions.
   * 
   * @example
   * 50
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListXTelephonesResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListXTelephonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denied error.
   * 
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code. Valid values:
   * 
   * - 0000: Success.
   * 
   * - Other values: Failure.
   * 
   * @example
   * 0000
   */
  code?: string;
  /**
   * @remarks
   * The data collection.
   */
  data?: ListXTelephonesResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: Success.
   * 
   * - false: Failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: ListXTelephonesResponseBodyData,
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

