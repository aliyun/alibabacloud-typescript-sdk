// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDomainAtoaLogsResponseBodyDomainLogDetails } from "./DescribeCdnDomainAtoaLogsResponseBodyDomainLogDetails";


export class DescribeCdnDomainAtoaLogsResponseBody extends $dara.Model {
  domainLogDetails?: DescribeCdnDomainAtoaLogsResponseBodyDomainLogDetails;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainLogDetails: 'DomainLogDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetails: DescribeCdnDomainAtoaLogsResponseBodyDomainLogDetails,
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

