// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignCertificateCountRequest extends $dara.Model {
  /**
   * @example
   * 5
   */
  certTotalCount?: number;
  /**
   * @example
   * 33285
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      certTotalCount: 'CertTotalCount',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certTotalCount: 'number',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

