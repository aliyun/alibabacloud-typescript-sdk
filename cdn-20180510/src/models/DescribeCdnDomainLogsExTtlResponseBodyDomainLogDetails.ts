// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetail } from "./DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetail";


export class DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetails extends $dara.Model {
  domainLogDetail?: DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetail[];
  static names(): { [key: string]: string } {
    return {
      domainLogDetail: 'DomainLogDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetail: { 'type': 'array', 'itemType': DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetail },
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

