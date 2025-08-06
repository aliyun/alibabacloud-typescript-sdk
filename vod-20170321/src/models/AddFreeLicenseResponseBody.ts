// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFreeLicenseResponseBodyLicenseList extends $dara.Model {
  appItemId?: string;
  businessType?: string;
  licenseId?: number;
  licenseItemId?: string;
  sdkType?: string;
  static names(): { [key: string]: string } {
    return {
      appItemId: 'AppItemId',
      businessType: 'BusinessType',
      licenseId: 'LicenseId',
      licenseItemId: 'LicenseItemId',
      sdkType: 'SdkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appItemId: 'string',
      businessType: 'string',
      licenseId: 'number',
      licenseItemId: 'string',
      sdkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFreeLicenseResponseBody extends $dara.Model {
  code?: string;
  httpStatusCode?: number;
  licenseList?: AddFreeLicenseResponseBodyLicenseList[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      licenseList: 'LicenseList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      licenseList: { 'type': 'array', 'itemType': AddFreeLicenseResponseBodyLicenseList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.licenseList)) {
      $dara.Model.validateArray(this.licenseList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

