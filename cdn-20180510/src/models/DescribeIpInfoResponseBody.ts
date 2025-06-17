// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the IP address belongs to an Alibaba Cloud CDN POP.
   * *   **True**:Yes.
   * *   **False**:No.
   * 
   * @example
   * True
   */
  cdnIp?: string;
  /**
   * @remarks
   * The name of the ISP in Chinese.
   * 
   * @example
   * 电信
   */
  ISP?: string;
  /**
   * @remarks
   * The name of the ISP.
   * 
   * @example
   * telecom
   */
  ispEname?: string;
  /**
   * @remarks
   * The name of the region in Chinese.
   * 
   * @example
   * 中国-贵州省-贵阳市
   */
  region?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China-Guizhou-guiyang
   */
  regionEname?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 123847FA-9A00-4426-83B8-B4B45D475930
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cdnIp: 'CdnIp',
      ISP: 'ISP',
      ispEname: 'IspEname',
      region: 'Region',
      regionEname: 'RegionEname',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnIp: 'string',
      ISP: 'string',
      ispEname: 'string',
      region: 'string',
      regionEname: 'string',
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

