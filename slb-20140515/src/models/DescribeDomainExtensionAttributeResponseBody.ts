// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainExtensionAttributeResponseBody extends $dara.Model {
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
   * The frontend port of the HTTPS listener that is configured for the SLB instance. Valid values: **1** to **65535**.
   * 
   * @example
   * 443
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the SLB instance.
   * 
   * @example
   * lb-bp1o94dp5i6*****earr9g6d1l
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 48C1B671-C6DB-4DDE-9B30-10557E36CDE0
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the server certificate used by the domain name.
   * 
   * @example
   * 231579085529123_166f82******_1714763408_709981430
   */
  serverCertificateId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      domainExtensionId: 'DomainExtensionId',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
      serverCertificateId: 'ServerCertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      domainExtensionId: 'string',
      listenerPort: 'number',
      loadBalancerId: 'string',
      requestId: 'string',
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

