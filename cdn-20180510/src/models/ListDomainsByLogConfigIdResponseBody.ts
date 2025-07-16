// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDomainsByLogConfigIdResponseBodyDomains extends $dara.Model {
  domain?: string[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.domain)) {
      $dara.Model.validateArray(this.domain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsByLogConfigIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain names.
   */
  domains?: ListDomainsByLogConfigIdResponseBodyDomains;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9732E117-8A37-49FD-A36F-ABBB87556CA7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: ListDomainsByLogConfigIdResponseBodyDomains,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domains && typeof (this.domains as any).validate === 'function') {
      (this.domains as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

