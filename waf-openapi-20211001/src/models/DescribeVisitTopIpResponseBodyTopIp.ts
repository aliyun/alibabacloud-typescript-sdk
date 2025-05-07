// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVisitTopIpResponseBodyTopIp extends $dara.Model {
  /**
   * @remarks
   * The ordinal number of the area to which the IP address belongs.
   * 
   * @example
   * 310000
   */
  area?: string;
  /**
   * @remarks
   * The total number of requests that are sent from the IP address.
   * 
   * @example
   * 2622
   */
  count?: number;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 1.1.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The ISP.
   * 
   * @example
   * AAA
   */
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      count: 'Count',
      ip: 'Ip',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      count: 'number',
      ip: 'string',
      isp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

