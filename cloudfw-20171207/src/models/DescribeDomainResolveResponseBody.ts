// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainResolveResponseBodyResolveResult } from "./DescribeDomainResolveResponseBodyResolveResult";


export class DescribeDomainResolveResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The details about the DNS record of the domain name.
   */
  resolveResult?: DescribeDomainResolveResponseBodyResolveResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resolveResult: 'ResolveResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resolveResult: DescribeDomainResolveResponseBodyResolveResult,
    };
  }

  validate() {
    if(this.resolveResult && typeof (this.resolveResult as any).validate === 'function') {
      (this.resolveResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

