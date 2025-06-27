// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIspFlushCacheRemainQuotaResponseBody extends $dara.Model {
  requestId?: string;
  telecomRemainQuota?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      telecomRemainQuota: 'TelecomRemainQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      telecomRemainQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

