// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientCertificateRequest extends $dara.Model {
  CSR?: string;
  pkeyType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  validityDays?: number;
  static names(): { [key: string]: string } {
    return {
      CSR: 'CSR',
      pkeyType: 'PkeyType',
      siteId: 'SiteId',
      validityDays: 'ValidityDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CSR: 'string',
      pkeyType: 'string',
      siteId: 'number',
      validityDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

