// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserVipsByDomainResponseBodyVips extends $dara.Model {
  vip?: string[];
  static names(): { [key: string]: string } {
    return {
      vip: 'Vip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vip: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vip)) {
      $dara.Model.validateArray(this.vip);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserVipsByDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 820E7900-5CA9-4AEF-B0DD-20ED5F64BE55
   */
  requestId?: string;
  /**
   * @remarks
   * The list of VIPs.
   */
  vips?: DescribeUserVipsByDomainResponseBodyVips;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      requestId: 'RequestId',
      vips: 'Vips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      requestId: 'string',
      vips: DescribeUserVipsByDomainResponseBodyVips,
    };
  }

  validate() {
    if(this.vips && typeof (this.vips as any).validate === 'function') {
      (this.vips as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

