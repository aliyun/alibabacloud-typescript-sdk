// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfos } from "./DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfos";
import { DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfos } from "./DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfos";


export class DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetail extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The total number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  logCount?: number;
  /**
   * @remarks
   * A set of LogInfoDetail data.
   */
  logInfos?: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfos;
  /**
   * @remarks
   * A set of PageInfoDetail data.
   */
  pageInfos?: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfos;
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
      logInfos: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfos,
      pageInfos: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfos,
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

