// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrivateNetworkWhiteIpsResponseBodyResult extends $dara.Model {
  privateNetworkIpWhiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      privateNetworkIpWhiteList: 'privateNetworkIpWhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateNetworkIpWhiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.privateNetworkIpWhiteList)) {
      $dara.Model.validateArray(this.privateNetworkIpWhiteList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateNetworkWhiteIpsResponseBody extends $dara.Model {
  /**
   * @example
   * 6DEBE5EE-0368-4757-8F82-EF9C3972****
   */
  requestId?: string;
  result?: UpdatePrivateNetworkWhiteIpsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdatePrivateNetworkWhiteIpsResponseBodyResult,
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

