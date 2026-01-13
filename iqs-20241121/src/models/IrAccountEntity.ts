// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IrAccountEntity extends $dara.Model {
  accountId?: string;
  accountName?: string;
  accountStatus?: string;
  adjustedNormalQps?: number;
  configuration?: string;
  createTime?: string;
  id?: number;
  isDeleted?: number;
  modifiedTime?: string;
  quarkKey?: string;
  quarkOsr?: string;
  quarkUsername?: string;
  searchType?: string;
  testQps?: number;
  testQueryPerDay?: number;
  testStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      accountName: 'accountName',
      accountStatus: 'accountStatus',
      adjustedNormalQps: 'adjustedNormalQps',
      configuration: 'configuration',
      createTime: 'createTime',
      id: 'id',
      isDeleted: 'isDeleted',
      modifiedTime: 'modifiedTime',
      quarkKey: 'quarkKey',
      quarkOsr: 'quarkOsr',
      quarkUsername: 'quarkUsername',
      searchType: 'searchType',
      testQps: 'testQps',
      testQueryPerDay: 'testQueryPerDay',
      testStartTime: 'testStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      accountStatus: 'string',
      adjustedNormalQps: 'number',
      configuration: 'string',
      createTime: 'string',
      id: 'number',
      isDeleted: 'number',
      modifiedTime: 'string',
      quarkKey: 'string',
      quarkOsr: 'string',
      quarkUsername: 'string',
      searchType: 'string',
      testQps: 'number',
      testQueryPerDay: 'number',
      testStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

