// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainsBySourceResponseBodyDomainsList } from "./DescribeDomainsBySourceResponseBodyDomainsList";


export class DescribeDomainsBySourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain names corresponding to each origin server.
   */
  domainsList?: DescribeDomainsBySourceResponseBodyDomainsList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B0F074E5-A1AC-4B32-8EA2-6F450410D1E0
   */
  requestId?: string;
  /**
   * @remarks
   * The origin servers.
   * 
   * @example
   * example.com,aliyundoc.com
   */
  sources?: string;
  static names(): { [key: string]: string } {
    return {
      domainsList: 'DomainsList',
      requestId: 'RequestId',
      sources: 'Sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainsList: DescribeDomainsBySourceResponseBodyDomainsList,
      requestId: 'string',
      sources: 'string',
    };
  }

  validate() {
    if(this.domainsList && typeof (this.domainsList as any).validate === 'function') {
      (this.domainsList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

