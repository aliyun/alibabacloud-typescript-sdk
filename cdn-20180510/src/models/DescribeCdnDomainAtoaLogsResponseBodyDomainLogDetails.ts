// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDomainAtoaLogsResponseBodyDomainLogDetailsDomainLogDetail } from "./DescribeCdnDomainAtoaLogsResponseBodyDomainLogDetailsDomainLogDetail";


export class DescribeCdnDomainAtoaLogsResponseBodyDomainLogDetails extends $dara.Model {
  domainLogDetail?: DescribeCdnDomainAtoaLogsResponseBodyDomainLogDetailsDomainLogDetail[];
  static names(): { [key: string]: string } {
    return {
      domainLogDetail: 'DomainLogDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetail: { 'type': 'array', 'itemType': DescribeCdnDomainAtoaLogsResponseBodyDomainLogDetailsDomainLogDetail },
    };
  }

  validate() {
    if(Array.isArray(this.domainLogDetail)) {
      $dara.Model.validateArray(this.domainLogDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

