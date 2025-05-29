// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsCertificateDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cert-539xxxx
   */
  certName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

