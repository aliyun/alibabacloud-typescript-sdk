// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCertificateResponseBodyDevelopmentCertInfo extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the certificate.
   * 
   * @example
   * 1470024000000
   */
  exipreTime?: number;
  /**
   * @remarks
   * The certificate status. Valid values:
   * 
   * - **EXPIRED**: The certificate has expired.
   * - **NOT_CONFIGURED**: The certificate is not configured.
   * - **NO_PASSWORD**: The password is not configured.
   * - **OK**: The certificate is normal.
   * - **REVOKED**: The certificate is revoked.
   * 
   * @example
   * EXPIRED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      exipreTime: 'ExipreTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exipreTime: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCertificateResponseBodyProductionCertInfo extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the certificate.
   * 
   * @example
   * 1764561600000
   */
  exipreTime?: number;
  /**
   * @remarks
   * The certificate status. Valid values:
   * 
   * - **EXPIRED**: The certificate has expired.
   * - **NOT_CONFIGURED**: The certificate is not configured.
   * - **NO_PASSWORD**: The password is not configured.
   * - **OK**: The certificate is normal.
   * - **REVOKED**: The certificate is revoked.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      exipreTime: 'ExipreTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exipreTime: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the AppKey represents an Android app:
   * - true
   * - false
   * 
   * @example
   * false
   */
  android?: boolean;
  /**
   * @remarks
   * The certificate information for accessing the development or sandbox environment.
   */
  developmentCertInfo?: CheckCertificateResponseBodyDevelopmentCertInfo;
  /**
   * @remarks
   * Indicates whether the AppKey represents an iOS app:
   * - true
   * - false
   * 
   * @example
   * true
   */
  IOS?: boolean;
  /**
   * @remarks
   * The certificate information for accessing the production environment.
   */
  productionCertInfo?: CheckCertificateResponseBodyProductionCertInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      android: 'Android',
      developmentCertInfo: 'DevelopmentCertInfo',
      IOS: 'IOS',
      productionCertInfo: 'ProductionCertInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      android: 'boolean',
      developmentCertInfo: CheckCertificateResponseBodyDevelopmentCertInfo,
      IOS: 'boolean',
      productionCertInfo: CheckCertificateResponseBodyProductionCertInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.developmentCertInfo && typeof (this.developmentCertInfo as any).validate === 'function') {
      (this.developmentCertInfo as any).validate();
    }
    if(this.productionCertInfo && typeof (this.productionCertInfo as any).validate === 'function') {
      (this.productionCertInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

