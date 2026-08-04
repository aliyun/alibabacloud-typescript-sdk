// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRealNameCertificationRequest extends $dara.Model {
  accountCertifyType?: string;
  corporateLicenseNumber?: string;
  corporateName?: string;
  licenseNumber?: string;
  licenseType?: string;
  name?: string;
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      accountCertifyType: 'AccountCertifyType',
      corporateLicenseNumber: 'CorporateLicenseNumber',
      corporateName: 'CorporateName',
      licenseNumber: 'LicenseNumber',
      licenseType: 'LicenseType',
      name: 'Name',
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCertifyType: 'string',
      corporateLicenseNumber: 'string',
      corporateName: 'string',
      licenseNumber: 'string',
      licenseType: 'string',
      name: 'string',
      pk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

