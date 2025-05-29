// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsDomainDetailResponseBodyDomainConfig } from "./DescribeVsDomainDetailResponseBodyDomainConfig";


export class DescribeVsDomainDetailResponseBody extends $dara.Model {
  domainConfig?: DescribeVsDomainDetailResponseBodyDomainConfig;
  /**
   * @example
   * 9BEC5E85-C76B-56EF-A922-860EFDB8B64B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfig: 'DomainConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfig: DescribeVsDomainDetailResponseBodyDomainConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domainConfig && typeof (this.domainConfig as any).validate === 'function') {
      (this.domainConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

