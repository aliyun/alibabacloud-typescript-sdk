// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubPartnerListResponseBodySubPartnerList extends $dara.Model {
  /**
   * @remarks
   * Detailed address of registration
   * 
   * @example
   * xxx街道xxx号
   */
  address?: string;
  /**
   * @remarks
   * Contract status encoding
   * 
   * @example
   * ACTIVE_PERIOD
   */
  agreementStatus?: string;
  /**
   * @remarks
   * Agreement status description
   * 
   * @example
   * 生效期
   */
  agreementStatusDesc?: string;
  /**
   * @remarks
   * City of registration
   * 
   * @example
   * 杭州市
   */
  city?: string;
  /**
   * @remarks
   * Name of the second-tier distributor
   * 
   * @example
   * xxx有限公司
   */
  companyName?: string;
  /**
   * @remarks
   * Contact name
   * 
   * @example
   * 张三
   */
  contact?: string;
  /**
   * @remarks
   * District or county of registration
   * 
   * @example
   * 西湖区
   */
  district?: string;
  /**
   * @remarks
   * Initial onboarding time
   * 
   * @example
   * 2000-01-01
   */
  joinTime?: string;
  /**
   * @remarks
   * Master account name of the secondary distributor
   * 
   * @example
   * xxxxxx有限公司主账号
   */
  masterAccount?: string;
  /**
   * @remarks
   * UID of the Master account of the second-tier distributor
   * 
   * @example
   * 123456
   */
  masterUid?: string;
  /**
   * @remarks
   * PID of the secondary distributor
   * 
   * @example
   * P123456
   */
  pid?: string;
  /**
   * @remarks
   * Province of registration
   * 
   * @example
   * 浙江省
   */
  province?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      agreementStatus: 'AgreementStatus',
      agreementStatusDesc: 'AgreementStatusDesc',
      city: 'City',
      companyName: 'CompanyName',
      contact: 'Contact',
      district: 'District',
      joinTime: 'JoinTime',
      masterAccount: 'MasterAccount',
      masterUid: 'MasterUid',
      pid: 'Pid',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      agreementStatus: 'string',
      agreementStatusDesc: 'string',
      city: 'string',
      companyName: 'string',
      contact: 'string',
      district: 'string',
      joinTime: 'string',
      masterAccount: 'string',
      masterUid: 'string',
      pid: 'string',
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubPartnerListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Message
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * Number of second-tier distributors returned per page, up to 100
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * List of second-tier distributors
   */
  subPartnerList?: GetSubPartnerListResponseBodySubPartnerList[];
  /**
   * @remarks
   * Indicates whether the invocation succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total amount of data under the current request conditions
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subPartnerList: 'SubPartnerList',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      pageNo: 'string',
      pageSize: 'string',
      requestId: 'string',
      subPartnerList: { 'type': 'array', 'itemType': GetSubPartnerListResponseBodySubPartnerList },
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.subPartnerList)) {
      $dara.Model.validateArray(this.subPartnerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

