// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePublicWhiteIpsResponseBodyResult extends $dara.Model {
  publicIpWhitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      publicIpWhitelist: 'publicIpWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIpWhitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.publicIpWhitelist)) {
      $dara.Model.validateArray(this.publicIpWhitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicWhiteIpsResponseBody extends $dara.Model {
  /**
   * @example
   * C82758DD-282F-4D48-934F-92170A33****
   */
  requestId?: string;
  result?: UpdatePublicWhiteIpsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdatePublicWhiteIpsResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

