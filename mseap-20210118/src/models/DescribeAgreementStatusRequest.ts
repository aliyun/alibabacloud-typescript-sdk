// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgreementStatusRequest extends $dara.Model {
  /**
   * @example
   * 10aa40008e081ad7b1fb50bffc3a70b1
   */
  agreementCode?: string;
  static names(): { [key: string]: string } {
    return {
      agreementCode: 'AgreementCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

