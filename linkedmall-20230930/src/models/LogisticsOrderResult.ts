// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Good } from "./Good";
import { LogisticsDetail } from "./LogisticsDetail";


export class LogisticsOrderResult extends $dara.Model {
  /**
   * @remarks
   * The data source.
   * 
   * @example
   * Cainiao
   */
  dataProvider?: string;
  /**
   * @remarks
   * The data text.
   * 
   * @example
   * Cainiao Guoguo
   */
  dataProviderTitle?: string;
  /**
   * @remarks
   * The product details.
   */
  goods?: Good[];
  /**
   * @remarks
   * The logistics company code.
   * > Valid values:
   * > - ZTKY: China Railway Logistics
   * > - POST: China Post
   * > - DBKD: Deppon Express
   * > - JT: J&T Express
   * > - QFKD: Quanfeng Express
   * > - EYB: China Post E-commerce Express EYB
   * > - STO: STO Express
   * > - SF: SF Express
   * > - ZTO: ZTO Express
   * > - YTO: YTO Express
   * > - TTKDEX: Tiantian Express
   * > - JDLEx: JD Express
   * > - ETICKET: Electronic vouchers
   * > - HTKY: Best Express
   * > - SHQ: Huaqiang Logistics
   * > - TAOBAO: Taobao Logistics
   * > - YUNDA: Yunda Express
   * > - ZJS: ZJS Express
   * > - FEDEX: FedEx
   * > - EMS: EMS
   * > - POSTB: China Post Parcel
   * > - OTHER: Other
   * > - CNDJWL: Cainiao Large Item Logistics
   * > - TN: Teneng
   * > - ZMKM: Cainiao Express
   * 
   * @example
   * SF
   */
  logisticsCompanyCode?: string;
  /**
   * @remarks
   * The logistics company name.
   * 
   * @example
   * SF Express
   */
  logisticsCompanyName?: string;
  /**
   * @remarks
   * The logistics details.
   */
  logisticsDetailList?: LogisticsDetail[];
  /**
   * @remarks
   * The logistics tracking number.
   * > The logistics tracking number for electronic vouchers is a fixed value: *.
   * 
   * @example
   * SF234***2345
   */
  mailNo?: string;
  static names(): { [key: string]: string } {
    return {
      dataProvider: 'dataProvider',
      dataProviderTitle: 'dataProviderTitle',
      goods: 'goods',
      logisticsCompanyCode: 'logisticsCompanyCode',
      logisticsCompanyName: 'logisticsCompanyName',
      logisticsDetailList: 'logisticsDetailList',
      mailNo: 'mailNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataProvider: 'string',
      dataProviderTitle: 'string',
      goods: { 'type': 'array', 'itemType': Good },
      logisticsCompanyCode: 'string',
      logisticsCompanyName: 'string',
      logisticsDetailList: { 'type': 'array', 'itemType': LogisticsDetail },
      mailNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.goods)) {
      $dara.Model.validateArray(this.goods);
    }
    if(Array.isArray(this.logisticsDetailList)) {
      $dara.Model.validateArray(this.logisticsDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

