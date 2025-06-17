// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetail } from "./DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetail";


export class DescribeCdnDomainLogsResponseBodyDomainLogDetails extends $dara.Model {
  domainLogDetail?: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetail[];
  static names(): { [key: string]: string } {
    return {
      domainLogDetail: 'DomainLogDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetail: { 'type': 'array', 'itemType': DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetail },
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

