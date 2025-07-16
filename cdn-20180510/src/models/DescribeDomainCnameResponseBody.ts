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

export class DescribeDomainCnameResponseBodyCnameDatas extends $dara.Model {
  data?: DescribeDomainCnameResponseBodyCnameDatasData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeDomainCnameResponseBodyCnameDatasData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCnameResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the CNAME detection results.
   */
  cnameDatas?: DescribeDomainCnameResponseBodyCnameDatas;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 06D29681-B7CD-4034-A8CC-28AFFA213539
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cnameDatas: 'CnameDatas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnameDatas: DescribeDomainCnameResponseBodyCnameDatas,
      requestId: 'string',
    };
  }

  validate() {
    if(this.cnameDatas && typeof (this.cnameDatas as any).validate === 'function') {
      (this.cnameDatas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

