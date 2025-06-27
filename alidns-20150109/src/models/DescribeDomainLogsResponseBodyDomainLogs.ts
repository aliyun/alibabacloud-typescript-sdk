// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainLogsResponseBodyDomainLogsDomainLog } from "./DescribeDomainLogsResponseBodyDomainLogsDomainLog";


export class DescribeDomainLogsResponseBodyDomainLogs extends $dara.Model {
  domainLog?: DescribeDomainLogsResponseBodyDomainLogsDomainLog[];
  static names(): { [key: string]: string } {
    return {
      domainLog: 'DomainLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLog: { 'type': 'array', 'itemType': DescribeDomainLogsResponseBodyDomainLogsDomainLog },
    };
  }

  validate() {
    if(Array.isArray(this.domainLog)) {
      $dara.Model.validateArray(this.domainLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

