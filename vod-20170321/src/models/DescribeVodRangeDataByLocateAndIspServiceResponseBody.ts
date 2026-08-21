// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodRangeDataByLocateAndIspServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result in JSON format. From left to right, the fields are: UNIX timestamp, region, ISP, HTTP status code distribution, response duration, bandwidth (unit: bit/s), average response rate, page views, cache hit ratio, and request hit ratio.
   * 
   * @example
   * {"1472659200":{"Tianjin":{"China Telecom":{"http_codes":{"000":0,"200":6,"400":0},"rt":4183,"bandwidth":46639,"avg_speed":7773,"pv":6,"hit_rate":0.93,"request_hit_rate":0.66}}}}
   */
  jsonResult?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C74802AA-C277-5A80-BDF2-072B05F119C7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jsonResult: 'JsonResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonResult: 'string',
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

