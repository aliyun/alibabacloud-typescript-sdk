// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCountScannedImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 3F4236AB-7070-538D-85EB-98EBFE6C****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of scanned images.
   * 
   * @example
   * 11
   */
  scannedCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scannedCount: 'ScannedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scannedCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

