// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientCertificateStatusForSerialNumberRequest extends $dara.Model {
  /**
   * @remarks
   * The serial number of the client or server certificate to query. To query multiple certificates, separate their serial numbers with a comma.
   * 
   * > You can call the [ListClientCertificate](https://help.aliyun.com/document_detail/330884.html) operation to retrieve the serial numbers of all client and server certificates.
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

