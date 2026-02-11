// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTraceLicenseKeyResponseBody extends $dara.Model {
  licenseKey?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      licenseKey: 'LicenseKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licenseKey: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

