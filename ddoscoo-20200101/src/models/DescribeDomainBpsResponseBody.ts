// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainBpsResponseBodyDomainBps extends $dara.Model {
  inBps?: number;
  index?: number;
  outBps?: number;
  static names(): { [key: string]: string } {
    return {
      inBps: 'InBps',
      index: 'Index',
      outBps: 'OutBps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inBps: 'number',
      index: 'number',
      outBps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsResponseBody extends $dara.Model {
  domainBps?: DescribeDomainBpsResponseBodyDomainBps[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainBps: 'DomainBps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainBps: { 'type': 'array', 'itemType': DescribeDomainBpsResponseBodyDomainBps },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainBps)) {
      $dara.Model.validateArray(this.domainBps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

