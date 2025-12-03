// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainExtensionsResponseBodyDomainExtensionsDomainExtension extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the additional certificate.
   * 
   * @example
   * de-bp1rp7ta1****
   */
  domainExtensionId?: string;
  /**
   * @remarks
   * The ID of the certificate used by the domain name.
   * 
   * @example
   * 1231579085529123_166f8204689_1714763408_70998****
   */
  serverCertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      domainExtensionId: 'DomainExtensionId',
      serverCertificateId: 'ServerCertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      domainExtensionId: 'string',
      serverCertificateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainExtensionsResponseBodyDomainExtensions extends $dara.Model {
  domainExtension?: DescribeDomainExtensionsResponseBodyDomainExtensionsDomainExtension[];
  static names(): { [key: string]: string } {
    return {
      domainExtension: 'DomainExtension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtension: { 'type': 'array', 'itemType': DescribeDomainExtensionsResponseBodyDomainExtensionsDomainExtension },
    };
  }

  validate() {
    if(Array.isArray(this.domainExtension)) {
      $dara.Model.validateArray(this.domainExtension);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainExtensionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of additional certificates.
   */
  domainExtensions?: DescribeDomainExtensionsResponseBodyDomainExtensions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 48C1B671-C6DB-4DDE-9B30-10557E36CDE0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainExtensions: 'DomainExtensions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainExtensions: DescribeDomainExtensionsResponseBodyDomainExtensions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domainExtensions && typeof (this.domainExtensions as any).validate === 'function') {
      (this.domainExtensions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

