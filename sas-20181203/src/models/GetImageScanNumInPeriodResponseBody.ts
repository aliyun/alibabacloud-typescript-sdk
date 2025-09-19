// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageScanNumInPeriodResponseBodyImageScanData extends $dara.Model {
  /**
   * @remarks
   * The number of image scans.
   * 
   * @example
   * 150
   */
  imageScanCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageScanCount: 'ImageScanCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageScanCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageScanNumInPeriodResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  imageScanData?: GetImageScanNumInPeriodResponseBodyImageScanData;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageScanData: 'ImageScanData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageScanData: GetImageScanNumInPeriodResponseBodyImageScanData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.imageScanData && typeof (this.imageScanData as any).validate === 'function') {
      (this.imageScanData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

