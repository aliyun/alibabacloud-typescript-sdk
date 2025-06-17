// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailLogInfos } from "./DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailLogInfos";
import { DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailPageInfos } from "./DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailPageInfos";


export class DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetail extends $dara.Model {
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 10
   */
  logCount?: number;
  logInfos?: DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailLogInfos;
  pageInfos?: DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailPageInfos;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      logCount: 'LogCount',
      logInfos: 'LogInfos',
      pageInfos: 'PageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      logCount: 'number',
      logInfos: DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailLogInfos,
      pageInfos: DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailPageInfos,
    };
  }

  validate() {
    if(this.logInfos && typeof (this.logInfos as any).validate === 'function') {
      (this.logInfos as any).validate();
    }
    if(this.pageInfos && typeof (this.pageInfos as any).validate === 'function') {
      (this.pageInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

