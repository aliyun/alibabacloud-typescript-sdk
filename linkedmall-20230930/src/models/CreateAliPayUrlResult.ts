// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAliPayUrlResult extends $dara.Model {
  accountId?: string;
  memberId?: string;
  zftWithholdSignUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      memberId: 'memberId',
      zftWithholdSignUrl: 'zftWithholdSignUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      memberId: 'string',
      zftWithholdSignUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

