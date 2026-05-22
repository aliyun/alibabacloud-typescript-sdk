// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPurgeQuotaResponseBody extends $dara.Model {
  quota?: string;
  quota30Day?: string;
  requestId?: string;
  usage?: string;
  usage30Day?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      quota30Day: 'Quota30Day',
      requestId: 'RequestId',
      usage: 'Usage',
      usage30Day: 'Usage30Day',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: 'string',
      quota30Day: 'string',
      requestId: 'string',
      usage: 'string',
      usage30Day: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

