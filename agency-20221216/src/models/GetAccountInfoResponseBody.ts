// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountInfoResponseBodyAccountInfoListAccountInfo extends $dara.Model {
  /**
   * @remarks
   * The name of Sub Account.
   * - Enterprise Customer: Name of Company
   * - T2 Reseller: Name of Partner
   * 
   * @example
   * XXX Technology LTD.
   */
  accountNickname?: string;
  /**
   * @remarks
   * Alibaba Cloud Login name of Distribution Customer.
   * 
   * @example
   * 1234@qq.com
   */
  aliyunId?: string;
  /**
   * @remarks
   * The time that Distribution Customer successfully associated with Distributor.
   * 
   * @example
   * 2021-01-01
   */
  associationSuccessTime?: string;
  /**
   * @remarks
   * Account CID of Distribution Customer.
   * 
   * @example
   * 61479572
   */
  cid?: number;
  /**
   * @remarks
   * Type of customer\\"s account, 0 Individual, 1 Enterprise
   * 
   * @example
   * 1
   */
  customerAccountType?: number;
  /**
   * @remarks
   * Customer\\"s Sales Manager
   * 
   * @example
   * Tommy
   */
  customerBd?: string;
  /**
   * @remarks
   * Whether the customer has completed Enterprise Real-name Authentication, 0 No, 1 Yes
   * 
   * @example
   * 1
   */
  customerEnterpriseCertified?: number;
  /**
   * @remarks
   * When Shutdown Policy is delayStop, this number refer to Shutdown-delay Credit (overdraft limit).
   * 
   * @example
   * 600
   */
  delayAmount?: string;
  /**
   * @remarks
   * There are a value for Shutdown Policy Management towards Sub Account.
   * - 1 immediatelyStop,  immediately shutdown the instance once customer\\"s quota is ran out.
   * - 2 delayStop, delay shutdown the instance until customer\\"s Shutdown-delay Credit is ran out. Please refer to DelayAmount.
   * - 3 noStop, customer\\"s instance status is rely on manual control instead of auto setting.
   * 
   * @example
   * immediatelyStop
   */
  delayStatus?: string;
  /**
   * @remarks
   * The E-mail of Distribution Customer.
   * 
   * @example
   * 1234@qq.com
   */
  email?: string;
  /**
   * @remarks
   * The contact number of Distribution Customer.
   * 
   * @example
   * 13641588680
   */
  mobile?: string;
  /**
   * @remarks
   * Purchase Control, Value Range:
   * - Purchase Forbidden
   * - Normal (Purchase is allowed)
   * 
   * @example
   * Normal
   */
  newBuyStatus?: string;
  /**
   * @remarks
   * The Country Code where the customer\\"s account is registered.
   * 
   * @example
   * CN
   */
  registerCountryCode?: string;
  /**
   * @remarks
   * Description of Distribution Customer.
   * 
   * @example
   * Sub Account
   */
  remark?: string;
  /**
   * @remarks
   * Account Type:
   * - 1 Agency\\"s End User
   * - 2 Reseller\\"s End User
   * - 3 Enterprise
   * - 4 T2 Agency Partner
   * - 5 T2 Reseller Partner
   * - 6 T2 Agency+Reseller Partner
   * 
   * @example
   * 1
   */
  subAccountType?: number;
  /**
   * @remarks
   * Account UID of Distribution Customer.
   * 
   * @example
   * 1415740779475837
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      accountNickname: 'AccountNickname',
      aliyunId: 'AliyunId',
      associationSuccessTime: 'AssociationSuccessTime',
      cid: 'Cid',
      customerAccountType: 'CustomerAccountType',
      customerBd: 'CustomerBd',
      customerEnterpriseCertified: 'CustomerEnterpriseCertified',
      delayAmount: 'DelayAmount',
      delayStatus: 'DelayStatus',
      email: 'Email',
      mobile: 'Mobile',
      newBuyStatus: 'NewBuyStatus',
      registerCountryCode: 'RegisterCountryCode',
      remark: 'Remark',
      subAccountType: 'SubAccountType',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNickname: 'string',
      aliyunId: 'string',
      associationSuccessTime: 'string',
      cid: 'number',
      customerAccountType: 'number',
      customerBd: 'string',
      customerEnterpriseCertified: 'number',
      delayAmount: 'string',
      delayStatus: 'string',
      email: 'string',
      mobile: 'string',
      newBuyStatus: 'string',
      registerCountryCode: 'string',
      remark: 'string',
      subAccountType: 'number',
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

export class GetAccountInfoResponseBodyAccountInfoList extends $dara.Model {
  accountInfo?: GetAccountInfoResponseBodyAccountInfoListAccountInfo[];
  static names(): { [key: string]: string } {
    return {
      accountInfo: 'AccountInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfo: { 'type': 'array', 'itemType': GetAccountInfoResponseBodyAccountInfoListAccountInfo },
    };
  }

  validate() {
    if(Array.isArray(this.accountInfo)) {
      $dara.Model.validateArray(this.accountInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * Pagination, current page.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Pagination, record number on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Pagination, page volume in total.
   * 
   * @example
   * 12
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of Account Information
   */
  accountInfoList?: GetAccountInfoResponseBodyAccountInfoList;
  /**
   * @remarks
   * Result Code - Error Code. Value Range:
   * - 200 OK
   * - 1109 System Error
   * - 3029: Invalid UID
   * - 3062: UID and UserType are both empty.
   * - 3063: UserType value out of range.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Pagination Information
   */
  pageInfo?: GetAccountInfoResponseBodyPageInfo;
  /**
   * @remarks
   * Request id, a unique identifier generated by Alibaba Cloud for the request.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * Candidate Value: True/False, which indicates whether the current API call itself is successful. It does not guarantee the success of subsequent business operations.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountInfoList: 'AccountInfoList',
      code: 'Code',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfoList: GetAccountInfoResponseBodyAccountInfoList,
      code: 'string',
      message: 'string',
      pageInfo: GetAccountInfoResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accountInfoList && typeof (this.accountInfoList as any).validate === 'function') {
      (this.accountInfoList as any).validate();
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

