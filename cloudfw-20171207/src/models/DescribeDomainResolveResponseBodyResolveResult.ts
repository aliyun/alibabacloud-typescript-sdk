// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainResolveResponseBodyResolveResult extends $dara.Model {
  /**
   * @remarks
   * The IP address to which the domain name is resolved. Multiple IP addresses are separated by commas (,).
   * 
   * @example
   * 11.1.X.X,12.1.X.X
   */
  ipAddrs?: string;
  /**
   * @remarks
   * The time when the domain name was resolved. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1579091739
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      ipAddrs: 'IpAddrs',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddrs: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

