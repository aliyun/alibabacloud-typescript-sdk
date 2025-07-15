// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveIpInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Chinese name of the ISP.
   * 
   * @example
   * ChinaTelecom
   */
  ISP?: string;
  /**
   * @remarks
   * The English name of the Internet service provider (ISP).
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
   * China-Guizhou-guiyang
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
      ISP: 'ISP',
      ispEname: 'IspEname',
      region: 'Region',
      regionEname: 'RegionEname',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

