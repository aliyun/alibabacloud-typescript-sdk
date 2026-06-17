// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainResolveResponseBodyResolveResult extends $dara.Model {
  /**
   * @remarks
   * The resolution result of the domain name. Multiple IP addresses are separated by commas (,).
   * 
   * @example
   * 11.1.X.X,12.1.X.X
   */
  ipAddrs?: string;
  /**
   * @remarks
   * The timestamp of the resolution. Unit: seconds.
   * 
   * @example
   * 1579091739
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      ipAddrs: 'IpAddrs',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddrs: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResolveResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the domain name resolution.
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

