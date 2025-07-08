// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMonthlyBillRentalNewResponseBodyRecords } from "./QueryMonthlyBillRentalNewResponseBodyRecords";


export class QueryMonthlyBillRentalNewResponseBody extends $dara.Model {
  pageNo?: number;
  pageSize?: number;
  records?: QueryMonthlyBillRentalNewResponseBodyRecords[];
  rentalSum?: string;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      records: 'Records',
      rentalSum: 'RentalSum',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': QueryMonthlyBillRentalNewResponseBodyRecords },
      rentalSum: 'string',
      requestId: 'string',
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

