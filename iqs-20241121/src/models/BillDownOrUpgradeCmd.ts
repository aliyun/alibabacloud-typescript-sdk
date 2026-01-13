// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BillDownOrUpgradeCmd extends $dara.Model {
  accountId?: string;
  activeDate?: string;
  codeType?: string;
  operateTypEnum?: string;
  qps?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      activeDate: 'activeDate',
      codeType: 'codeType',
      operateTypEnum: 'operateTypEnum',
      qps: 'qps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      activeDate: 'string',
      codeType: 'string',
      operateTypEnum: 'string',
      qps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

