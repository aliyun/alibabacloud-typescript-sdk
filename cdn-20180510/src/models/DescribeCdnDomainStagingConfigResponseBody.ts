// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDomainStagingConfigResponseBodyDomainConfigs } from "./DescribeCdnDomainStagingConfigResponseBodyDomainConfigs";


export class DescribeCdnDomainStagingConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain name configurations.
   */
  domainConfigs?: DescribeCdnDomainStagingConfigResponseBodyDomainConfigs[];
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C80705BF-0F76-41FA-BAD1-5B59296A4E59
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfigs: 'DomainConfigs',
      domainName: 'DomainName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigs: { 'type': 'array', 'itemType': DescribeCdnDomainStagingConfigResponseBodyDomainConfigs },
      domainName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainConfigs)) {
      $dara.Model.validateArray(this.domainConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

