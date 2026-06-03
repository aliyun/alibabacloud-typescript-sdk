// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDomainSunriseClaimResponseBody extends $dara.Model {
  claimKey?: string;
  requestId?: string;
  result?: number;
  static names(): { [key: string]: string } {
    return {
      claimKey: 'ClaimKey',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claimKey: 'string',
      requestId: 'string',
      result: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

