// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentJobCertResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The algorithm of the certificate public key.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 11174100
   */
  certId?: number;
  /**
   * @remarks
   * The instance ID of the certificate.
   * 
   * @example
   * cas-ivauto-2crxzi
   */
  certInstanceId?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * edkog.shop
   */
  certName?: string;
  /**
   * @remarks
   * The type of the certificate order. Valid values:
   * 
   * *   **upload**: uploaded certificate.
   * *   **buy**: purchased certificate.
   * *   **free**: free certificate. This value is available only on the China site (aliyun.com).
   * 
   * @example
   * buy
   */
  certOrderType?: string;
  /**
   * @remarks
   * The type of the certificate.
   * 
   * @example
   * DV
   */
  certType?: string;
  /**
   * @remarks
   * The common name of the certificate.
   * 
   * @example
   * vaultwebhook.vault-webhook.svc
   */
  commonName?: string;
  /**
   * @remarks
   * Indicates whether the certificate is hosted. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isTrustee?: boolean;
  /**
   * @remarks
   * The month in which the certificate is applied for.
   * 
   * @example
   * 12
   */
  month?: number;
  /**
   * @remarks
   * The end time of the validity period of the certificate. The value is a timestamp in seconds.
   * 
   * @example
   * 1683625266108
   */
  notAfterTime?: number;
  /**
   * @remarks
   * The start time of the validity period of the certificate. The value is a timestamp in seconds.
   * 
   * @example
   * 1683625266108
   */
  notBeforeTime?: number;
  /**
   * @remarks
   * The ID of the certificate order.
   * 
   * >  If CertId is returned, this parameter is not returned.
   * 
   * @example
   * 6127067
   */
  orderId?: number;
  /**
   * @remarks
   * The subject alternative name (SAN) extensions of the certificate.
   */
  sans?: string[];
  /**
   * @remarks
   * The status code of the certificate. Valid values:
   * 
   * *   **payed**: paid and pending application
   * *   **checking**: being validated
   * *   **checkedFail**: validation failed
   * *   **revoked**: revoked
   * *   **revokeChecking**: revocation request being validated
   * *   **issued**: issued (excluding hosted certificates that are issued, certificates that are about to expire, expired certificates, and uploaded certificates)
   * *   **trustee**: hosted and issued
   * *   **upload**: uploaded (excluding certificates that are about to expire and expired certificates)
   * *   **willExpired**: about to expire (including certificates issued by using the Certificate Management Service console and uploaded certificates)
   * *   **expired**: expired (including certificates issued by using the Certificate Management Service console and uploaded certificates)
   * *   **validity**: valid (including certificates that are not expired or revoked)
   * *   **refund**: refunded
   * *   **closed**: closed
   * 
   * @example
   * issued
   */
  statusCode?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certId: 'CertId',
      certInstanceId: 'CertInstanceId',
      certName: 'CertName',
      certOrderType: 'CertOrderType',
      certType: 'CertType',
      commonName: 'CommonName',
      isTrustee: 'IsTrustee',
      month: 'Month',
      notAfterTime: 'NotAfterTime',
      notBeforeTime: 'NotBeforeTime',
      orderId: 'OrderId',
      sans: 'Sans',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certId: 'number',
      certInstanceId: 'string',
      certName: 'string',
      certOrderType: 'string',
      certType: 'string',
      commonName: 'string',
      isTrustee: 'boolean',
      month: 'number',
      notAfterTime: 'number',
      notBeforeTime: 'number',
      orderId: 'number',
      sans: { 'type': 'array', 'itemType': 'string' },
      statusCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sans)) {
      $dara.Model.validateArray(this.sans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobCertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListDeploymentJobCertResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDeploymentJobCertResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

