// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainSecurityProfileResponseBodyResult extends $dara.Model {
  globalEnable?: boolean;
  globalMode?: string;
  static names(): { [key: string]: string } {
    return {
      globalEnable: 'GlobalEnable',
      globalMode: 'GlobalMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalEnable: 'boolean',
      globalMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSecurityProfileResponseBody extends $dara.Model {
  requestId?: string;
  result?: DescribeDomainSecurityProfileResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeDomainSecurityProfileResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

