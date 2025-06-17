// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetails } from "./DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetails";


export class DescribeCdnDomainLogsExTtlResponseBody extends $dara.Model {
  domainLogDetails?: DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetails;
  /**
   * @example
   * 64D28B53-5902-409B-94F6-FD46680144FE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainLogDetails: 'DomainLogDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetails: DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetails,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domainLogDetails && typeof (this.domainLogDetails as any).validate === 'function') {
      (this.domainLogDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

