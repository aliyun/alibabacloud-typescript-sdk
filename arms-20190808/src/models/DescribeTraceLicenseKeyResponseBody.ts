// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTraceLicenseKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The license key for the application.
   * 
   * @example
   * b590lhguqs@3a75d95f218****
   */
  licenseKey?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 29053944-6FE5-4240-8927-10095ECE****
   */
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

