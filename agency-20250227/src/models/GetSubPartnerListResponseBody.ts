// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubPartnerListResponseBodySubPartnerList extends $dara.Model {
  /**
   * @remarks
   * The detailed registered address.
   * 
   * @example
   * xxx Street, No. xxx
   */
  address?: string;
  /**
   * @remarks
   * The agreement status code.
   * 
   * @example
   * ACTIVE_PERIOD
   */
  agreementStatus?: string;
  /**
   * @remarks
   * The description of the agreement status.
   * 
   * @example
   * Effective period
   */
  agreementStatusDesc?: string;
  /**
   * @remarks
   * The city of the registered address.
   * 
   * @example
   * Hangzhou
   */
  city?: string;
  /**
   * @remarks
   * The name of the secondary distributor.
   * 
   * @example
   * xxx Co., Ltd.
   */
  companyName?: string;
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * Zhang San
   */
  contact?: string;
  /**
   * @remarks
   * The district or county of the registered address.
   * 
   * @example
   * Xihu District
   */
  district?: string;
  /**
   * @remarks
   * The time when the secondary distributor first joined.
   * 
   * @example
   * 2000-01-01
   */
  joinTime?: string;
  /**
   * @remarks
   * The name of the primary account of the secondary distributor.
   * 
   * @example
   * Primary account of xxxxxx Co., Ltd.
   */
  masterAccount?: string;
  /**
   * @remarks
   * The UID of the primary account of the secondary distributor.
   * 
   * @example
   * 123456
   */
  masterUid?: string;
  /**
   * @remarks
   * The PID of the secondary distributor.
   * 
   * @example
   * P123456
   */
  pid?: string;
  /**
   * @remarks
   * The province of the registered address.
   * 
   * @example
   * Zhejiang Province
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
   * The message returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of secondary distributors returned per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * The list of secondary distributors.
   */
  subPartnerList?: GetSubPartnerListResponseBodySubPartnerList[];
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries that match the query conditions.
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

