// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainTopRefererResponseBodyDomainTopReferer extends $dara.Model {
  domain?: string;
  pv?: number;
  referer?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      pv: 'Pv',
      referer: 'Referer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      pv: 'number',
      referer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopRefererResponseBody extends $dara.Model {
  domainTopReferer?: DescribeDomainTopRefererResponseBodyDomainTopReferer[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainTopReferer: 'DomainTopReferer',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainTopReferer: { 'type': 'array', 'itemType': DescribeDomainTopRefererResponseBodyDomainTopReferer },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainTopReferer)) {
      $dara.Model.validateArray(this.domainTopReferer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

