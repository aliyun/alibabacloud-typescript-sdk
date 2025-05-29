// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsDomainConfigsResponseBodyDomainConfigs } from "./DescribeVsDomainConfigsResponseBodyDomainConfigs";


export class DescribeVsDomainConfigsResponseBody extends $dara.Model {
  domainConfigs?: DescribeVsDomainConfigsResponseBodyDomainConfigs[];
  /**
   * @example
   * D94D0E1E-E71B-562D-8C18-969BB3653FBD
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
      domainConfigs: { 'type': 'array', 'itemType': DescribeVsDomainConfigsResponseBodyDomainConfigs },
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

