// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientCertificateStatusForSerialNumberRequest extends $dara.Model {
  /**
   * @remarks
   * Certificate serial number of the client certificate or server certificate to query. Separate multiple serial numbers with commas (,).
   * 
   * 
   * > You can call [ListClientCertificate](https://help.aliyun.com/document_detail/330884.html) to query certificate serial numbers of all client certificates and server certificates.
   * 
   * This parameter is required.
   * 
   * @example
   * b67e53ebcea9b77d65b0c3236646d715****
   */
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

