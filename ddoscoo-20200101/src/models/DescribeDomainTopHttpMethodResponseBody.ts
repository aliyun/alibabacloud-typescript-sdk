// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainTopHttpMethodResponseBodyDomainTopMethod extends $dara.Model {
  domain?: string;
  httpMethod?: string;
  pv?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      httpMethod: 'HttpMethod',
      pv: 'Pv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      httpMethod: 'string',
      pv: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopHttpMethodResponseBody extends $dara.Model {
  domainTopMethod?: DescribeDomainTopHttpMethodResponseBodyDomainTopMethod[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainTopMethod: 'DomainTopMethod',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainTopMethod: { 'type': 'array', 'itemType': DescribeDomainTopHttpMethodResponseBodyDomainTopMethod },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainTopMethod)) {
      $dara.Model.validateArray(this.domainTopMethod);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

