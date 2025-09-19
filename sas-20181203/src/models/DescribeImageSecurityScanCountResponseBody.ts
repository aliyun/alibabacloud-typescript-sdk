// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageSecurityScanCountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of image baseline risks detected on the current asset.
   * 
   * @example
   * 0
   */
  imageBaselineCount?: number;
  /**
   * @remarks
   * The number of image system vulnerabilities returned on the current page.
   * 
   * @example
   * 0
   */
  imageCveVulCount?: number;
  /**
   * @remarks
   * The number of malicious image samples returned on the current page.
   * 
   * @example
   * 0
   */
  imageMaliciousFileCount?: number;
  /**
   * @remarks
   * The number of image application vulnerabilities returned on the current page.
   * 
   * @example
   * 0
   */
  imageScaVulCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageBaselineCount: 'ImageBaselineCount',
      imageCveVulCount: 'ImageCveVulCount',
      imageMaliciousFileCount: 'ImageMaliciousFileCount',
      imageScaVulCount: 'ImageScaVulCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageBaselineCount: 'number',
      imageCveVulCount: 'number',
      imageMaliciousFileCount: 'number',
      imageScaVulCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSecurityScanCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeImageSecurityScanCountResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C699E4E4-F2F4-58FC-A949-457FFE59****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeImageSecurityScanCountResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

