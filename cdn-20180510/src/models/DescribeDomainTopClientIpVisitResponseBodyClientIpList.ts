// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainTopClientIpVisitResponseBodyClientIpList extends $dara.Model {
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 256
   */
  acc?: number;
  /**
   * @remarks
   * The client IP address returned. Only IPv4 addressed are supported.
   * 
   * @example
   * 1.1.xxx
   */
  clientIp?: string;
  /**
   * @remarks
   * The ranking of the client IP address returned.
   * 
   * @example
   * 2
   */
  rank?: number;
  /**
   * @remarks
   * The total amount of network traffic consumed. Unit: bytes.
   * 
   * @example
   * 1024
   */
  traffic?: number;
  static names(): { [key: string]: string } {
    return {
      acc: 'Acc',
      clientIp: 'ClientIp',
      rank: 'Rank',
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acc: 'number',
      clientIp: 'string',
      rank: 'number',
      traffic: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

