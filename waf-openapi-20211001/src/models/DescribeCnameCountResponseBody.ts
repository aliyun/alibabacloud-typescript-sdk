// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCnameCountResponseBodyCnameCount } from "./DescribeCnameCountResponseBodyCnameCount";


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

