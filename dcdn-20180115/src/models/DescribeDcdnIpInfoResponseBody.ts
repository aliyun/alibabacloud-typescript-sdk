// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnIpInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the specified IP address is assigned to an Alibaba Cloud DCDN POP.
   * 
   * *   True
   * *   False
   * 
   * @example
   * True
   */
  dcdnIp?: string;
  /**
   * @remarks
   * The ISP to which the specified IP address belongs.
   * 
   * @example
   * China Telecom
   */
  ISP?: string;
  /**
   * @remarks
   * The name of the Internet service provider (ISP).
   * 
   * @example
   * telecom
   */
  ispEname?: string;
  /**
   * @remarks
   * The Chinese name of the region.
   * 
   * @example
   * >  The maximum number of times that users can call this operation per second is 50.
   */
  region?: string;
  /**
   * @remarks
   * The English name of the region.
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
   * 1B1D0EE7-9559-489D-BC4E-279495EB8FB8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dcdnIp: 'DcdnIp',
      ISP: 'ISP',
      ispEname: 'IspEname',
      region: 'Region',
      regionEname: 'RegionEname',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dcdnIp: 'string',
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

