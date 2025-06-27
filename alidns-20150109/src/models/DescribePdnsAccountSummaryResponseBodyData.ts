// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsAccountSummaryResponseBodyData extends $dara.Model {
  domainCount?: number;
  httpCount?: number;
  httpsCount?: number;
  subDomainCount?: number;
  threatCount?: number;
  totalCount?: number;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      domainCount: 'DomainCount',
      httpCount: 'HttpCount',
      httpsCount: 'HttpsCount',
      subDomainCount: 'SubDomainCount',
      threatCount: 'ThreatCount',
      totalCount: 'TotalCount',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCount: 'number',
      httpCount: 'number',
      httpsCount: 'number',
      subDomainCount: 'number',
      threatCount: 'number',
      totalCount: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

