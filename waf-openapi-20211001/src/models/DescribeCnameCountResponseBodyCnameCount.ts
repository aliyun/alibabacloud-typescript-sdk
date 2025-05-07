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

