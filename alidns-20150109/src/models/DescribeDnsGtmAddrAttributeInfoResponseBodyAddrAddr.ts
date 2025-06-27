// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddrAttributeInfo } from "./DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddrAttributeInfo";


export class DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddr extends $dara.Model {
  /**
   * @remarks
   * The address in the address pool.
   * 
   * @example
   * 1.1.1.1
   */
  addr?: string;
  /**
   * @remarks
   * The information about the source region of the address.
   */
  attributeInfo?: DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddrAttributeInfo;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      attributeInfo: 'AttributeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: 'string',
      attributeInfo: DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddrAttributeInfo,
    };
  }

  validate() {
    if(this.attributeInfo && typeof (this.attributeInfo as any).validate === 'function') {
      (this.attributeInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

