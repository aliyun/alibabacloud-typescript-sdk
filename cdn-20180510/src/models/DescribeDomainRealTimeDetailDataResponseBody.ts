// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRealTimeDetailDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitoring data of each ISP in each region.
   * 
   * @example
   * [
   *       {
   *             "time_stp": "2018-06-05T20:00:00Z",
   *             "domain_name": "example.com",
   *             "location": "Guangdong",
   *             "isp": "telecom",
   *             "qps": 10
   *       },
   *       {
   *             "time_stp": "2018-06-05T20:00:00Z",
   *             "domain_name": "example.com",
   *             "location": "Jiangsu",
   *             "isp": "unicom",
   *             "qps": 11.1
   *       }
   * ]
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B49E6DDA-F413-422B-B58E-2FA23F286726
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

