// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainRealTimeDetailDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned results.
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
   * The ID of the request.
   * 
   * @example
   * 1710298E-8AFA-5F6D-A3E9-47103C52177D
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

