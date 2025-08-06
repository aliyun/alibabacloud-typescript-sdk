// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppLicenseResponseBody extends $dara.Model {
  failedLicenseItemIdList?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedLicenseItemIdList: 'FailedLicenseItemIdList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedLicenseItemIdList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
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

