// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCnameCountResponseBodyCnameCount extends $dara.Model {
  /**
   * @remarks
   * The number of domain names that are added to WAF in CNAME record mode.
   * 
   * @example
   * 1
   */
  cname?: number;
  /**
   * @remarks
   * The number of domain names that are added to WAF in hybrid cloud reverse proxy mode.
   * 
   * @example
   * 1
   */
  hybridCloudCname?: number;
  /**
   * @remarks
   * The total number of domain names that are added to WAF in CNAME record mode and hybrid cloud reverse proxy mode.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      hybridCloudCname: 'HybridCloudCname',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'number',
      hybridCloudCname: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCnameCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the number of domain names that are added to WAF in CNAME record mode and hybrid cloud reverse proxy mode.
   */
  cnameCount?: DescribeCnameCountResponseBodyCnameCount;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F35F45B0-5D6B-4238-BE02-A62D****E840
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cnameCount: 'CnameCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnameCount: DescribeCnameCountResponseBodyCnameCount,
      requestId: 'string',
    };
  }

  validate() {
    if(this.cnameCount && typeof (this.cnameCount as any).validate === 'function') {
      (this.cnameCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

