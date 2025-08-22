// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainCnameResponseBodyCnameDatasData extends $dara.Model {
  /**
   * @remarks
   * The CNAME assigned to the domain name.
   * 
   * @example
   * *.com
   */
  cname?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * .example.com
   */
  domain?: string;
  errMsg?: string;
  passed?: string;
  /**
   * @remarks
   * The configuration status of the CNAME record. If the operation returns 0 for the parameter, the configuration was successful. Otherwise, the configuration failed.
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

export class DescribeDcdnDomainCnameResponseBodyCnameDatas extends $dara.Model {
  data?: DescribeDcdnDomainCnameResponseBodyCnameDatasData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeDcdnDomainCnameResponseBodyCnameDatasData },
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

export class DescribeDcdnDomainCnameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The CNAME information.
   */
  cnameDatas?: DescribeDcdnDomainCnameResponseBodyCnameDatas;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
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
      cnameDatas: DescribeDcdnDomainCnameResponseBodyCnameDatas,
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

