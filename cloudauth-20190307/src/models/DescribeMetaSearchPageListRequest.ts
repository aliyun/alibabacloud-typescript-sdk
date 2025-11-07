// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetaSearchPageListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ID_CARD_2_META
   */
  api?: string;
  /**
   * @example
   * 610*************1181
   */
  bankCard?: string;
  /**
   * @example
   * 2
   */
  bizCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1739926800000
   */
  endDate?: number;
  /**
   * @example
   * 522132197411184XXX
   */
  identifyNum?: string;
  /**
   * @example
   * CTCC
   */
  ispName?: string;
  /**
   * @example
   * 19127612221
   */
  mobile?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * B012DB99-6C10-5740-81E0-B3A8C1C1B9C1
   */
  reqId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1760198400000
   */
  startDate?: number;
  /**
   * @example
   * 205
   */
  subCode?: string;
  userName?: string;
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

