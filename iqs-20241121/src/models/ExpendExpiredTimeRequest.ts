// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExpendExpiredTimeRequest extends $dara.Model {
  accountId?: string;
  testStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      testStartTime: 'testStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
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

