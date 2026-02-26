// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Good } from "./Good";
import { LogisticsDetail } from "./LogisticsDetail";


export class LogisticsOrderResult extends $dara.Model {
  dataProvider?: string;
  dataProviderTitle?: string;
  goods?: Good[];
  /**
   * @example
   * SF
   */
  logisticsCompanyCode?: string;
  logisticsCompanyName?: string;
  logisticsDetailList?: LogisticsDetail[];
  /**
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

