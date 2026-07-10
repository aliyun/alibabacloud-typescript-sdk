// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetaSearchPageListRequest extends $dara.Model {
  /**
   * @remarks
   * The product API. Valid values:
   * - **ID_CARD_2_META**: ID card two-element verification
   * - **ID_PERIOD**: ID card validity period verification
   * - **MOBILE_ONLINE_LENGTH**: mobile number online duration
   * - **MOBILE_ONLINE_STATUS**: mobile number online status
   * - **MOBILE_3_META_SIMPLE**: mobile number three-element verification (simple edition)
   * - **MOBILE_3_META**: mobile number three-element verification (detailed edition)
   * - **MOBILE_2_META**: mobile number two-element verification
   * - **BANK_CARD_N_META**: bank card verification (detailed edition)
   * - **MOBILE_DETECT**: phone number detection 
   * - **VEHICLE_N_META**: vehicle element verification (enhanced edition)
   * - **VEHICLE_PENTA_INFO**: vehicle five-element information recognition
   * - **VEHICLE_LICENSE_INFO**: vehicle information recognition
   * - **VEHICLE_INSURE_DATE**: vehicle insurance date query
   * - **VEHICLE_CHECK**: vehicle element verification.
   * 
   * This parameter is required.
   * 
   * @example
   * ID_CARD_2_META
   */
  api?: string;
  /**
   * @remarks
   * The bank card number.
   * 
   * @example
   * 610*************1181
   */
  bankCard?: string;
  /**
   * @remarks
   * The verification status. Valid values:
   * - **1**: Verification passed.
   * - **2**: Verification failed.
   * - **3**: No record found.
   * 
   * @example
   * 2
   */
  bizCode?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1739926800000
   */
  endDate?: number;
  /**
   * @remarks
   * The ID card number.
   * 
   * @example
   * 522132197411184XXX
   */
  identifyNum?: string;
  /**
   * @remarks
   * The name of the telecommunications service provider. Valid values:
   * - **CMCC**: China Mobile
   * - **CUCC**: China Unicom
   * - **CTCC**: China Telecom.
   * 
   * @example
   * CTCC
   */
  ispName?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 19127612221
   */
  mobile?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B012DB99-6C10-5740-81E0-B3A8C1C1B9C1
   */
  reqId?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1760198400000
   */
  startDate?: number;
  /**
   * @remarks
   * The result code. For more information, see [official documentation](https://www.alibabacloud.com/help/en/id-verification/information-verification/).
   * 
   * @example
   * 205
   */
  subCode?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * 张三
   */
  userName?: string;
  /**
   * @remarks
   * The license plate number.
   * 
   * @example
   * 陕A9****
   */
  vehicleNum?: string;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      bankCard: 'BankCard',
      bizCode: 'BizCode',
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      identifyNum: 'IdentifyNum',
      ispName: 'IspName',
      mobile: 'Mobile',
      pageSize: 'PageSize',
      reqId: 'ReqId',
      startDate: 'StartDate',
      subCode: 'SubCode',
      userName: 'UserName',
      vehicleNum: 'VehicleNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      bankCard: 'string',
      bizCode: 'string',
      currentPage: 'number',
      endDate: 'number',
      identifyNum: 'string',
      ispName: 'string',
      mobile: 'string',
      pageSize: 'number',
      reqId: 'string',
      startDate: 'number',
      subCode: 'string',
      userName: 'string',
      vehicleNum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

