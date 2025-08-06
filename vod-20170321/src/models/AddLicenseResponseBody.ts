// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLicenseResponseBodyData extends $dara.Model {
  appItemId?: string;
  businessType?: string;
  itemId?: string;
  licenseId?: number;
  sdkType?: string;
  static names(): { [key: string]: string } {
    return {
      appItemId: 'AppItemId',
      businessType: 'BusinessType',
      itemId: 'ItemId',
      licenseId: 'LicenseId',
      sdkType: 'SdkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appItemId: 'string',
      businessType: 'string',
      itemId: 'string',
      licenseId: 'number',
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

export class AddLicenseResponseBody extends $dara.Model {
  code?: string;
  data?: AddLicenseResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': AddLicenseResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

