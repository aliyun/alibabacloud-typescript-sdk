// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWarehouseCertRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the certificate.
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  certIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

