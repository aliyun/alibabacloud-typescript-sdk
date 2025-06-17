// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainCnameResponseBodyCnameDatasData extends $dara.Model {
  /**
   * @remarks
   * The CNAME assigned to the domain name by Alibaba Cloud CDN.
   * 
   * @example
   * a.com.w.alikunlun.net
   */
  cname?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * a.com
   */
  domain?: string;
  errMsg?: string;
  passed?: string;
  /**
   * @remarks
   * The CNAME detection result. Valid values:
   * 
   * *   0: The DNS can detect the CNAME assigned to the domain name.
   * *   Value other than 0: The DNS cannot detect the CNAME assigned to the domain name.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
      errMsg: 'ErrMsg',
      passed: 'Passed',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
      errMsg: 'string',
      passed: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

