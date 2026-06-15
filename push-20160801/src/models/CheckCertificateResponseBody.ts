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
   * The status of the certificate. Valid values:
   * 
   * - **EXPIRED**: The certificate is expired.
   * 
   * - **NOT_CONFIGURED**: The certificate is not configured.
   * 
   * - **NO_PASSWORD**: The password for the certificate is not configured.
   * 
   * - **OK**: The certificate is normal.
   * 
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
   * The status of the certificate. Valid values:
   * 
   * - **EXPIRED**: The certificate is expired.
   * 
   * - **NOT_CONFIGURED**: The certificate is not configured.
   * 
   * - **NO_PASSWORD**: The password for the certificate is not configured.
   * 
   * - **OK**: The certificate is normal.
   * 
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
   * Indicates whether the AppKey belongs to an Android app:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  android?: boolean;
  /**
   * @remarks
   * The information about the certificate for the development or sandbox environment.
   */
  developmentCertInfo?: CheckCertificateResponseBodyDevelopmentCertInfo;
  /**
   * @remarks
   * Indicates whether the AppKey belongs to an iOS app:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  IOS?: boolean;
  /**
   * @remarks
   * The information about the certificate for the production environment.
   */
  productionCertInfo?: CheckCertificateResponseBodyProductionCertInfo;
  /**
   * @remarks
   * The ID of the request.
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

