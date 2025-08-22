// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainRealTimeDetailDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information returned.
   * 
   * > The value of this parameter is a JSON string. The following table describes the fields in Data.
   * 
   * @example
   * [
   *     {
   *       "time_stp": "2018-06-05T20:00:00Z",
   *       "domain_name": "example.com",
   *       "location": "Guangdong",
   *       "isp": "telecom",
   *       "qps": 10.0
   *     },
   *     {
   *       "time_stp": "2018-06-05T20:00:00Z",
   *       "domain_name": "example.com",
   *       "location": "Jiangsu",
   *       "isp": "unicom",
   *       "qps": 11.1
   *     }
   *   ]
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A603F324-7A05-4FB3-ADF3-2563233D26CC
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
      data: 'string',
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

