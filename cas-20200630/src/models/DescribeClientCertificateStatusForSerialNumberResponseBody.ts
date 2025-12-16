// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientCertificateStatusForSerialNumberResponseBodyCertificateStatus extends $dara.Model {
  /**
   * @remarks
   * The date on which the certificate was revoked.
   * 
   * >  This parameter is returned only when the value of the **Status** parameter is **revoked**. The value revoked indicates that the certificate is revoked.
   * 
   * @example
   * 2021-01-01T00:00
   */
  revokeTime?: number;
  /**
   * @remarks
   * The serial number of the certificate.
   * 
   * @example
   * b67e53ebcea9b77d65b0c3236646d715****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * 
   * *   **good**: The certificate is not revoked.
   * *   **revoked**: The certificate is revoked.
   * *   **unknown**: The server cannot determine the status of the certificate.
   * 
   * @example
   * good
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      revokeTime: 'RevokeTime',
      serialNumber: 'SerialNumber',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      revokeTime: 'number',
      serialNumber: 'string',
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

export class DescribeClientCertificateStatusForSerialNumberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The object.
   */
  certificateStatus?: DescribeClientCertificateStatusForSerialNumberResponseBodyCertificateStatus[];
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
      certificateStatus: 'CertificateStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateStatus: { 'type': 'array', 'itemType': DescribeClientCertificateStatusForSerialNumberResponseBodyCertificateStatus },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certificateStatus)) {
      $dara.Model.validateArray(this.certificateStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

