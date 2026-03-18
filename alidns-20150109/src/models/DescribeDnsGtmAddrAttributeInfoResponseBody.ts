// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddrAttributeInfo extends $dara.Model {
  fatherCode?: string;
  groupCode?: string;
  groupName?: string;
  lineCode?: string;
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      fatherCode: 'FatherCode',
      groupCode: 'GroupCode',
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatherCode: 'string',
      groupCode: 'string',
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddr extends $dara.Model {
  addr?: string;
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

export class DescribeDnsGtmAddrAttributeInfoResponseBodyAddr extends $dara.Model {
  addr?: DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddr[];
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: { 'type': 'array', 'itemType': DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddr },
    };
  }

  validate() {
    if(Array.isArray(this.addr)) {
      $dara.Model.validateArray(this.addr);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddrAttributeInfoResponseBody extends $dara.Model {
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

