// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDRMCertInfoResponseBody extends $dara.Model {
  DRMCertInfo?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DRMCertInfo: 'DRMCertInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DRMCertInfo: 'string',
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

