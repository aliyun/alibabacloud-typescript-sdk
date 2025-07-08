// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMonthlyBillRentalResponseBodyDataRecords } from "./QueryMonthlyBillRentalResponseBodyDataRecords";


export class QueryMonthlyBillRentalResponseBodyData extends $dara.Model {
  pageNo?: number;
  pageSize?: number;
  records?: QueryMonthlyBillRentalResponseBodyDataRecords[];
  rentalSum?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'pageNo',
      pageSize: 'pageSize',
      records: 'records',
      rentalSum: 'rentalSum',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': QueryMonthlyBillRentalResponseBodyDataRecords },
      rentalSum: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

