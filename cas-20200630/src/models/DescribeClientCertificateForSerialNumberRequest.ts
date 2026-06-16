// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientCertificateForSerialNumberRequest extends $dara.Model {
  /**
   * @remarks
   * The serial numbers of the client or server certificates. Separate multiple serial numbers with a comma.
   * 
   * > Call [ListClientCertificate](https://help.aliyun.com/document_detail/330884.html) to query the serial numbers of all client and server certificates.
   * 
   * This parameter is required.
   * 
   * @example
   * 084bde9cd233f0ddae33adc438cfbbbd****
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

