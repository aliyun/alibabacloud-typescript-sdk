// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMonthlyBillInfoLeafNewResponseBodyLayeredBillDOListSubjectDetailList extends $dara.Model {
  addCount?: number;
  addUnit?: string;
  billAmount?: string;
  itemId?: string;
  itemName?: string;
  operator?: string;
  packageBill?: string;
  singlePrice?: string;
  subjectItemId?: string;
  subjectName?: string;
  static names(): { [key: string]: string } {
    return {
      addCount: 'AddCount',
      addUnit: 'AddUnit',
      billAmount: 'BillAmount',
      itemId: 'ItemId',
      itemName: 'ItemName',
      operator: 'Operator',
      packageBill: 'PackageBill',
      singlePrice: 'SinglePrice',
      subjectItemId: 'SubjectItemId',
      subjectName: 'SubjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addCount: 'number',
      addUnit: 'string',
      billAmount: 'string',
      itemId: 'string',
      itemName: 'string',
      operator: 'string',
      packageBill: 'string',
      singlePrice: 'string',
      subjectItemId: 'string',
      subjectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

