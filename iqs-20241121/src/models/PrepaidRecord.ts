// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrepaidRecord extends $dara.Model {
  accountId?: string;
  accountName?: string;
  codeType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  remainQuota?: number;
  status?: string;
  totalQuota?: number;
  usedQuota?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      accountName: 'accountName',
      codeType: 'codeType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      remainQuota: 'remainQuota',
      status: 'status',
      totalQuota: 'totalQuota',
      usedQuota: 'usedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      codeType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      remainQuota: 'number',
      status: 'string',
      totalQuota: 'number',
      usedQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

