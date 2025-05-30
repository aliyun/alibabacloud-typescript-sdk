// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPeriodBudgetBillRequest extends $dara.Model {
  objectIds?: string;
  objectType?: string;
  period?: string;
  static names(): { [key: string]: string } {
    return {
      objectIds: 'objectIds',
      objectType: 'objectType',
      period: 'period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectIds: 'string',
      objectType: 'string',
      period: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

