// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The IP addresses that you want to query. Separate IP addresses with underscores (_), such as Ips=ip1_ip2.
   * 
   * This parameter is required.
   * 
   * @example
   * ip1_ip2
   */
  ips?: string;
  static names(): { [key: string]: string } {
    return {
      ips: 'Ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ips: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

