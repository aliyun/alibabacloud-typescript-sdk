// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserLogDeliveryQuotaResponseBody extends $dara.Model {
  businessType?: string;
  freeQuota?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      freeQuota: 'FreeQuota',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      freeQuota: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

