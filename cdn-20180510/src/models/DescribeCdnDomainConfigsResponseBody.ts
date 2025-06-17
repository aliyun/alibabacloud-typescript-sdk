// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDomainConfigsResponseBodyDomainConfigs } from "./DescribeCdnDomainConfigsResponseBodyDomainConfigs";


export class DescribeCdnDomainConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations of the domain name.
   */
  domainConfigs?: DescribeCdnDomainConfigsResponseBodyDomainConfigs;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C80705BF-0F76-41FA-BAD1-5B59296A4E59
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfigs: 'DomainConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigs: DescribeCdnDomainConfigsResponseBodyDomainConfigs,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domainConfigs && typeof (this.domainConfigs as any).validate === 'function') {
      (this.domainConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

