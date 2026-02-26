// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GeneralBill } from "./GeneralBill";


export class GeneralBillPageResult extends $dara.Model {
  generalBills?: GeneralBill[];
  pageNumber?: number;
  pageSize?: number;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      generalBills: 'generalBills',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generalBills: { 'type': 'array', 'itemType': GeneralBill },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.generalBills)) {
      $dara.Model.validateArray(this.generalBills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

