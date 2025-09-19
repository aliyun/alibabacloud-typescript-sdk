// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCountNotScannedImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of images that are not scanned.
   * 
   * @example
   * 28
   */
  notScannedCnt?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 24A20733-10A0-4AF6-BE6B-E3322413BB68
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      notScannedCnt: 'NotScannedCnt',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notScannedCnt: 'number',
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

