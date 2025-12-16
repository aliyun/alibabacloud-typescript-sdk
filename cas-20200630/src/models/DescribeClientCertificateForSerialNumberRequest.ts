// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientCertificateForSerialNumberRequest extends $dara.Model {
  /**
   * @remarks
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

