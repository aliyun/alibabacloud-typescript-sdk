// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMonthlyBillInfoLeafNewResponseBodyLayeredBillDOListSubjectDetailList } from "./QueryMonthlyBillInfoLeafNewResponseBodyLayeredBillDolistSubjectDetailList";


export class QueryMonthlyBillInfoLeafNewResponseBodyLayeredBillDOList extends $dara.Model {
  addCount?: number;
  addUnit?: string;
  billAmount?: string;
  itemId?: string;
  itemName?: string;
  operator?: string;
  packageBill?: string;
  singlePrice?: string;
  subjectDetailList?: QueryMonthlyBillInfoLeafNewResponseBodyLayeredBillDOListSubjectDetailList[];
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
      subjectDetailList: 'SubjectDetailList',
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
      subjectDetailList: { 'type': 'array', 'itemType': QueryMonthlyBillInfoLeafNewResponseBodyLayeredBillDOListSubjectDetailList },
      subjectItemId: 'string',
      subjectName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subjectDetailList)) {
      $dara.Model.validateArray(this.subjectDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

