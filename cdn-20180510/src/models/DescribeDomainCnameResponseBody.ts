// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainCnameResponseBodyCnameDatas } from "./DescribeDomainCnameResponseBodyCnameDatas";


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

