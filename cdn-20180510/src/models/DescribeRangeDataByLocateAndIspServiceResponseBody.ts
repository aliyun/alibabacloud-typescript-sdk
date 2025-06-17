// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRangeDataByLocateAndIspServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters in the JSON format. These parameters indicate the following information in sequence: UNIX time, region, ISP, distribution of HTTP status codes, response time, bandwidth (bit/s), average response rate, page views, cache hit ratio, and request hit ratio.
   * 
   * @example
   * {"1472659200":{"Tianjin":{"China Telecom":{"http_codes":{"000":0,"200":6,"400":0},"rt":4183,"bandwidth":46639,"avg_speed":7773,"pv":6,"hit_rate":0.93,"request_hit_rate":0.66}}}}
   */
  jsonResult?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
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

