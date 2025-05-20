// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDomainQuotaResponseBody extends $dara.Model {
  sizeQuota?: number;
  sizeUsed?: number;
  userCountQuota?: number;
  userCountUsed?: number;
  static names(): { [key: string]: string } {
    return {
      sizeQuota: 'size_quota',
      sizeUsed: 'size_used',
      userCountQuota: 'user_count_quota',
      userCountUsed: 'user_count_used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sizeQuota: 'number',
      sizeUsed: 'number',
      userCountQuota: 'number',
      userCountUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

