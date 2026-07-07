// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Good } from "./Good";
import { LogisticsDetail } from "./LogisticsDetail";


export class LogisticsOrderResult extends $dara.Model {
  /**
   * @remarks
   * The data provider.
   * 
   * @example
   * 菜鸟
   */
  dataProvider?: string;
  /**
   * @remarks
   * The display title of the data provider.
   * 
   * @example
   * 菜鸟裹裹
   */
  dataProviderTitle?: string;
  /**
   * @remarks
   * Details of the goods.
   */
  goods?: Good[];
  /**
   * @remarks
   * The logistics company code.
   * 
   * > Valid values:
   * >
   * > - `ZTKY` - China Railway Logistics
   * >
   * > - `POST` - China Post
   * >
   * > - `DBKD` - Deppon Express
   * >
   * > - `JT` - J\\&T Express
   * >
   * > - `QFKD` - Quanfeng Express
   * >
   * > - `EYB` - China Post E-commerce Express
   * >
   * > - `STO` - STO Express
   * >
   * > - `SF` - SF Express
   * >
   * > - `ZTO` - ZTO Express
   * >
   * > - `YTO` - YTO Express
   * >
   * > - `TTKDEX` - Tiantian Express
   * >
   * > - `JDLEx` - JD Express
   * >
   * > - `ETICKET` - e-ticket
   * >
   * > - `HTKY` - Best Express
   * >
   * > - `SHQ` - Huaqiang Logistics
   * >
   * > - `TAOBAO` - Taobao Logistics
   * >
   * > - `YUNDA` - Yunda Express
   * >
   * > - `ZJS` - ZJS Express
   * >
   * > - `FEDEX` - FedEx
   * >
   * > - `EMS` - EMS
   * >
   * > - `POSTB` - China Post Parcel
   * >
   * > - `OTHER` - other
   * >
   * > - `CNDJWL` - Cainiao Heavy Parcel Logistics
   * >
   * > - `TN` - T-neng Logistics
   * >
   * > - `ZMKM` - Cainiao Express
   * 
   * @example
   * SF
   */
  logisticsCompanyCode?: string;
  /**
   * @remarks
   * The name of the logistics company.
   * 
   * @example
   * 顺丰
   */
  logisticsCompanyName?: string;
  /**
   * @remarks
   * A list of logistics details.
   */
  logisticsDetailList?: LogisticsDetail[];
  /**
   * @remarks
   * The tracking number.
   * 
   * > For an e-ticket, the tracking number is a fixed value: \\*
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

