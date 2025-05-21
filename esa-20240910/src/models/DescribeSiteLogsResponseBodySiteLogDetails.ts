// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSiteLogsResponseBodySiteLogDetailsLogInfos } from "./DescribeSiteLogsResponseBodySiteLogDetailsLogInfos";
import { DescribeSiteLogsResponseBodySiteLogDetailsPageInfos } from "./DescribeSiteLogsResponseBodySiteLogDetailsPageInfos";


export class DescribeSiteLogsResponseBodySiteLogDetails extends $dara.Model {
  /**
   * @example
   * 300
   */
  logCount?: number;
  logInfos?: DescribeSiteLogsResponseBodySiteLogDetailsLogInfos[];
  pageInfos?: DescribeSiteLogsResponseBodySiteLogDetailsPageInfos;
  /**
   * @example
   * 123456***
   */
  siteId?: number;
  /**
   * @example
   * example.com
   */
  siteName?: string;
  static names(): { [key: string]: string } {
    return {
      logCount: 'LogCount',
      logInfos: 'LogInfos',
      pageInfos: 'PageInfos',
      siteId: 'SiteId',
      siteName: 'SiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logCount: 'number',
      logInfos: { 'type': 'array', 'itemType': DescribeSiteLogsResponseBodySiteLogDetailsLogInfos },
      pageInfos: DescribeSiteLogsResponseBodySiteLogDetailsPageInfos,
      siteId: 'number',
      siteName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logInfos)) {
      $dara.Model.validateArray(this.logInfos);
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

