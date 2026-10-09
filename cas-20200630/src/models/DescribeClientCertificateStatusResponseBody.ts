// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientCertificateStatusResponseBodyCertificateStatus extends $dara.Model {
  /**
   * @remarks
   * The date when the certificate was revoked. The value is a UNIX timestamp in milliseconds.
   * 
   * > This parameter is returned only when **Status** is **revoked**, which indicates that the certificate has been revoked.
   * 
   * @example
   * 1787539908871
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
   * The current status of the certificate. Valid values:
   * 
   * - **good**: The certificate has not been revoked.
   * - **revoked**: The certificate has been revoked.
   * - **unknown**: The server cannot determine the status of the certificate.
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

export class DescribeClientCertificateStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed status information of the certificates.
   */
  certificateStatus?: DescribeClientCertificateStatusResponseBodyCertificateStatus[];
  /**
   * @remarks
   * The ID of the request.
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
      certificateStatus: { 'type': 'array', 'itemType': DescribeClientCertificateStatusResponseBodyCertificateStatus },
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

