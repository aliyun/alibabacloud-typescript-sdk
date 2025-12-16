// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientCertificateStatusForSerialNumberRequest extends $dara.Model {
  /**
   * @remarks
   * The serial number of the certificate.
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

