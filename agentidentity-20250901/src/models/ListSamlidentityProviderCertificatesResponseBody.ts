// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSAMLIdentityProviderCertificatesResponseBodyX509Certificates extends $dara.Model {
  certificateId?: string;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      x509Certificate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSAMLIdentityProviderCertificatesResponseBody extends $dara.Model {
  requestId?: string;
  x509Certificates?: ListSAMLIdentityProviderCertificatesResponseBodyX509Certificates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      x509Certificates: 'X509Certificates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      x509Certificates: { 'type': 'array', 'itemType': ListSAMLIdentityProviderCertificatesResponseBodyX509Certificates },
    };
  }

  validate() {
    if(Array.isArray(this.x509Certificates)) {
      $dara.Model.validateArray(this.x509Certificates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

