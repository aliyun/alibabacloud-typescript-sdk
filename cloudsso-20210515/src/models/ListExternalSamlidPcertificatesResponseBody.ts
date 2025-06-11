// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListExternalSAMLIdPCertificatesResponseBodySAMLIdPCertificates } from "./ListExternalSamlidPcertificatesResponseBodySamlidPcertificates";


export class ListExternalSAMLIdPCertificatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 400979BC-92EC-58B9-B47C-6913BD56A6FD
   */
  requestId?: string;
  /**
   * @remarks
   * The SAML signing certificates.
   */
  SAMLIdPCertificates?: ListExternalSAMLIdPCertificatesResponseBodySAMLIdPCertificates[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SAMLIdPCertificates: 'SAMLIdPCertificates',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SAMLIdPCertificates: { 'type': 'array', 'itemType': ListExternalSAMLIdPCertificatesResponseBodySAMLIdPCertificates },
      totalCounts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.SAMLIdPCertificates)) {
      $dara.Model.validateArray(this.SAMLIdPCertificates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

