// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GeneralBill } from "./GeneralBill";


export class GeneralBillPageResult extends $dara.Model {
  /**
   * @remarks
   * The list of bills.
   */
  generalBills?: GeneralBill[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the API request.
   * 
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @remarks
   * The total count.
   * 
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

