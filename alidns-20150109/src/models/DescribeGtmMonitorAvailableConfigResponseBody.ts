// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodes } from "./DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodes";


export class DescribeGtmMonitorAvailableConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitored nodes.
   */
  ispCityNodes?: DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodes;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ispCityNodes: 'IspCityNodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCityNodes: DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodes,
      requestId: 'string',
    };
  }

  validate() {
    if(this.ispCityNodes && typeof (this.ispCityNodes as any).validate === 'function') {
      (this.ispCityNodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

