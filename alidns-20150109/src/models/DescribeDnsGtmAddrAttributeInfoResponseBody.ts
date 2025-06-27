// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmAddrAttributeInfoResponseBodyAddr } from "./DescribeDnsGtmAddrAttributeInfoResponseBodyAddr";


export class DescribeDnsGtmAddrAttributeInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The address in the address pool.
   */
  addr?: DescribeDnsGtmAddrAttributeInfoResponseBodyAddr;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: DescribeDnsGtmAddrAttributeInfoResponseBodyAddr,
      requestId: 'string',
    };
  }

  validate() {
    if(this.addr && typeof (this.addr as any).validate === 'function') {
      (this.addr as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

