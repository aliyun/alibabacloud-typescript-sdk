// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyImageSignatureResponseBodyIssuer extends $dara.Model {
  /**
   * @remarks
   * The common name (CN) of the issuer.
   * 
   * @example
   * AIDeepSign User Certificate
   */
  commonName?: string;
  /**
   * @remarks
   * The organization name (O) of the issuer.
   * 
   * @example
   * Alibaba Cloud
   */
  organization?: string;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      organization: 'Organization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonName: 'string',
      organization: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyImageSignatureResponseBodyManifestAssertions extends $dara.Model {
  /**
   * @remarks
   * The assertion data, which is detailed metadata in JSON format.
   * 
   * @example
   * {"actions":[{"action":"c2pa.created"}]}
   */
  data?: string;
  /**
   * @remarks
   * The assertion label, such as c2pa.actions or stds.exif.
   * 
   * @example
   * c2pa.actions
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyImageSignatureResponseBodyManifestSignatureInfo extends $dara.Model {
  /**
   * @remarks
   * The signature algorithm, such as `ps256` or `es256`.
   * 
   * @example
   * ps256
   */
  alg?: string;
  /**
   * @remarks
   * The distinguished name (DN) of the signing certificate issuer.
   * 
   * @example
   * CN=AIDeepSign CA,O=Alibaba Cloud
   */
  issuer?: string;
  /**
   * @remarks
   * The signing time in ISO 8601 format.
   * 
   * @example
   * 2026-06-18T10:30:00Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      alg: 'Alg',
      issuer: 'Issuer',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alg: 'string',
      issuer: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyImageSignatureResponseBodyManifest extends $dara.Model {
  /**
   * @remarks
   * The list of assertions, which contains metadata such as the origin and editing history of the image.
   */
  assertions?: VerifyImageSignatureResponseBodyManifestAssertions[];
  /**
   * @remarks
   * The signature details.
   */
  signatureInfo?: VerifyImageSignatureResponseBodyManifestSignatureInfo;
  static names(): { [key: string]: string } {
    return {
      assertions: 'Assertions',
      signatureInfo: 'SignatureInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertions: { 'type': 'array', 'itemType': VerifyImageSignatureResponseBodyManifestAssertions },
      signatureInfo: VerifyImageSignatureResponseBodyManifestSignatureInfo,
    };
  }

  validate() {
    if(Array.isArray(this.assertions)) {
      $dara.Model.validateArray(this.assertions);
    }
    if(this.signatureInfo && typeof (this.signatureInfo as any).validate === 'function') {
      (this.signatureInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyImageSignatureResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code. The value "OK" is returned if the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code. The value `200` is returned if the request is successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The issuer information.
   */
  issuer?: VerifyImageSignatureResponseBodyIssuer;
  /**
   * @remarks
   * Indicates whether the issuer is trusted. A value of true indicates that the issuer certificate is issued by a trusted CA.
   */
  issuerTrusted?: boolean;
  /**
   * @remarks
   * The content credentials manifest information. This parameter is returned only when the image contains a C2PA signature.
   */
  manifest?: VerifyImageSignatureResponseBodyManifest;
  /**
   * @remarks
   * The additional information. The value `success` is returned if the request is successful.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1B2C3D4-E5F6-7890-ABCD-EF1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The signature verification status. Valid values:
   * - Valid: The signature is valid.
   * - Invalid: The signature is invalid or has been tampered with.
   * - Trusted: The signature is valid and trusted.
   * 
   * @example
   * Valid
   */
  verificationState?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      issuer: 'Issuer',
      issuerTrusted: 'IssuerTrusted',
      manifest: 'Manifest',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      verificationState: 'VerificationState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      issuer: VerifyImageSignatureResponseBodyIssuer,
      issuerTrusted: 'boolean',
      manifest: VerifyImageSignatureResponseBodyManifest,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      verificationState: 'string',
    };
  }

  validate() {
    if(this.issuer && typeof (this.issuer as any).validate === 'function') {
      (this.issuer as any).validate();
    }
    if(this.manifest && typeof (this.manifest as any).validate === 'function') {
      (this.manifest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

