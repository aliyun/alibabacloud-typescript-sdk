// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainTopUserAgentResponseBodyDomainTopUa extends $dara.Model {
  domain?: string;
  pv?: number;
  userAgent?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      pv: 'Pv',
      userAgent: 'UserAgent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      pv: 'number',
      userAgent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopUserAgentResponseBody extends $dara.Model {
  domainTopUa?: DescribeDomainTopUserAgentResponseBodyDomainTopUa[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainTopUa: 'DomainTopUa',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainTopUa: { 'type': 'array', 'itemType': DescribeDomainTopUserAgentResponseBodyDomainTopUa },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainTopUa)) {
      $dara.Model.validateArray(this.domainTopUa);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

