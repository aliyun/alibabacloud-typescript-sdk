// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewFreeLicenseResponseBody extends $dara.Model {
  code?: string;
  failedLicenseItemIdList?: string[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      failedLicenseItemIdList: 'FailedLicenseItemIdList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      failedLicenseItemIdList: { 'type': 'array', 'itemType': 'string' },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.failedLicenseItemIdList)) {
      $dara.Model.validateArray(this.failedLicenseItemIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

